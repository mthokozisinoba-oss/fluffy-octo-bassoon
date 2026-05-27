import os

def clean_file(filepath):
    try:
        with open(filepath, 'rb') as f:
            content = f.read()
        
        lines = content.splitlines()
        new_lines = []
        changed = False
        for line in lines:
                changed = True
                continue
            new_lines.append(line)
        
        if changed:
            with open(filepath, 'wb') as f:
                f.write(b'\n'.join(new_lines) + b'\n')
            print(f"Cleaned {filepath}")
    except Exception as e:
        print(f"Error cleaning {filepath}: {e}")

root_dir = '/home/team/shared/rich-solutions-ai'
for root, dirs, files in os.walk(root_dir):
    if '.next' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '.css', '.html')):
            clean_file(os.path.join(root, file))
