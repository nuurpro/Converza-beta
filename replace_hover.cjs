const fs = require('fs');
const files = [
  './components/BillingModal.tsx',
  './components/DashboardViews.tsx',
  './App.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/bg-yellow-400 hover:bg-yellow-300/g, 'bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600');
  content = content.replace(/bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300/g, 'bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600');
  fs.writeFileSync(file, content);
});
