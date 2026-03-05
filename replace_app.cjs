const fs = require('fs');
const path = './App.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/dark:bg-zinc-950/g, 'dark:bg-[#0A0A0A]');
content = content.replace(/dark:bg-zinc-900/g, 'dark:bg-[#141414]');
content = content.replace(/dark:bg-zinc-800/g, 'dark:bg-white/5');
content = content.replace(/dark:border-zinc-800/g, 'dark:border-white/10');
content = content.replace(/dark:border-zinc-700/g, 'dark:border-white/10');
content = content.replace(/dark:text-white/g, 'dark:text-white/90');
content = content.replace(/dark:text-zinc-400/g, 'dark:text-white/60');
content = content.replace(/dark:text-zinc-300/g, 'dark:text-white/60');
content = content.replace(/shadow-sm/g, 'dark:shadow-none shadow-sm');
content = content.replace(/shadow-md/g, 'dark:shadow-none shadow-md');

fs.writeFileSync(path, content);
console.log('Done');
