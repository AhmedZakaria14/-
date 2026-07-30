import re

with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any sequence of 3 or 4 stars with 2 stars.
content = re.sub(r'\*\*\*\*', '**', content)
content = re.sub(r'\*\*\*', '**', content)

# Remove stars directly following a header hash and space
# Example: "### **Heading** " -> "### Heading"
# Also remove trailing stars before \n or the end of a header
def clean_header(match):
    prefix = match.group(1) # e.g. "### "
    text = match.group(2)   # e.g. "**Heading**"
    
    # Remove any leading or trailing '*' from the text
    cleaned = text.strip('* ')
    return prefix + cleaned

# Since the text contains literal backslash-n (\n), we need to split by '\\n' or use regex that doesn't cross '\\n'
content = re.sub(r'(#+\s+)(.*?(?=\\n|"))', clean_header, content)

with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned!")
