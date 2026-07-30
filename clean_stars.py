import re

with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace ### ****Text**** with ### Text
# Replace ### ***Text*** with ### Text
# Replace ### **Text** with ### Text
# Basically, any header that has bold/italic markers directly inside it

def clean_headers(match):
    header_level = match.group(1)
    # Remove all asterisks from the header text, and trim spaces
    header_text = match.group(2).replace('*', '').strip()
    return f"{header_level} {header_text}"

# Match lines like "### ****Text****"
# ^(#+)\s+(.*?)$
content = re.sub(r'^(#+)\s+([^\n]+)$', clean_headers, content, flags=re.MULTILINE)

# There might also be things like **bold** which are fine, but ****bold**** is bad.
# Let's clean up multiple asterisks:
# Replace 3 or more asterisks with 2 asterisks (for standard bold) if they wrap text
# Actually, the user specifically mentioned "النجوم *** المشوهة" (distorted *** stars).
content = re.sub(r'\*\*\*(.*?)\*\*\*', r'**\1**', content)
content = re.sub(r'\*\*\*\*(.*?)\*\*\*\*', r'**\1**', content)

# But wait, if they are already cleaned in headers, this will just apply to body text.
# Let's check for any stray *** or ****
# Let's replace any run of 3 or more asterisks with 2 if it's wrapping something, or just remove them.
# Let's write the modified content back.

with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned!")
