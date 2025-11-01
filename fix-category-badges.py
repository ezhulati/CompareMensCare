#!/usr/bin/env python3
import re

files = [
    'src/pages/testosterone.astro',
    'src/pages/weight-loss.astro',
    'src/pages/mental-health.astro',
    'src/pages/diagnostics.astro'
]

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()

    # Fix 1: Add px-4 to breadcrumb div
    content = re.sub(
        r'(<div class="flex items-center gap-2 text-sm text-slate-600 mb-6)">',
        r'\1 px-4">',
        content
    )

    # Fix 2: Wrap the emerald badge in a px-4 parent div
    # Find the badge div
    pattern = r'(        )<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-700 mb-6">\n(          <svg.*?</svg>\n          .*?\n        </div>)'
    replacement = r'\1<div class="px-4 mb-6">\n\1  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-700">\n\2\n\1</div>'

    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    with open(file_path, 'w') as f:
        f.write(content)

    print(f"Fixed {file_path}")

print("Done!")
