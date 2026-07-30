with open('src/data/blog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# The text contains literal '\n'. Let's split by '\n'.
parts = text.split('\\n')
new_parts = []

for part in parts:
    # Check if the line is a header (e.g. starts with #, ##, etc. after optional quotes or spaces)
    # Inside JSON, a line could be `"ar": "# Heading` or just `# Heading`
    stripped = part.strip()
    if stripped.startswith('#') or (stripped.startswith('"') and stripped[1:].strip().startswith('#')):
        # It's a header line!
        # Remove all asterisks from this line
        cleaned = part.replace('*', '')
        # Also clean up trailing spaces
        new_parts.append(cleaned)
    else:
        new_parts.append(part)

with open('src/data/blog.ts', 'w', encoding='utf-8') as f:
    f.write('\\n'.join(new_parts))

print("Cleaned 3!")
