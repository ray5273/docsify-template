const fs = require('fs');
const path = require('path');

const rootDir = './';
const sidebarPath = path.join(rootDir, '_sidebar.md');

function generateSidebar(dir, prefix = '') {
    let files = fs.readdirSync(dir);

    files = files.filter(file => !file.startsWith('.') && file !== '_sidebar.md' && file !== 'node_modules');

    let sidebarContent = '';
    let hasMarkdown = false;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            const subContent = generateSidebar(filePath, `${prefix}/${file}`);
            if (subContent) {
                sidebarContent += `- ${file}\n${subContent}`;
                hasMarkdown = true;
            }
        } else if (file.endsWith('.md')) {
            const name = file.replace('.md', '');
            sidebarContent += `  - [${name}](${prefix}/${file})\n`;
            hasMarkdown = true;
        }
    });

    // Indent the content if it's not the root directory
    if (prefix !== '') {
        sidebarContent = sidebarContent.split('\n').map(line => line ? '  ' + line : '').join('\n');
    }

    return hasMarkdown ? sidebarContent : '';
}

const sidebarContent = generateSidebar(rootDir);
fs.writeFileSync(sidebarPath, sidebarContent);
console.log('Sidebar generated successfully');