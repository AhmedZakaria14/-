import re

with open("src/data/blog.ts", "r", encoding="utf-8") as f:
    content = f.read()

posts = re.split(r"\{\s*id:\s*[\"\']post-(\d+)[\"\']", content)

for i in range(1, 15):
    idx = i * 2
    if idx < len(posts):
        p_body = posts[idx]
        ar_match = re.search(r"ar:\s*`([^`]*)`", p_body, re.DOTALL)
        if ar_match:
            ar_text = ar_match.group(1)
            lines = [l for l in ar_text.strip().split("\n") if l.strip()]
            print(f"Post {i}: total chars={len(ar_text)}, lines={len(lines)}, first={lines[0][:50]!r}, last={lines[-1][:50]!r}")
        else:
            print(f"Post {i}: ar match failed")
