const fs = require('fs');
const path = './App.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/dark:hover:text-white/g, 'dark:hover:text-white/90');
content = content.replace(/dark:bg-zinc-700/g, 'dark:bg-white/10');
content = content.replace(/dark:hover:bg-zinc-700/g, 'dark:hover:bg-white/10');

fs.writeFileSync(path, content);
console.log('Done');
