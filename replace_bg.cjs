const fs = require('fs');
const files = [
  './components/DashboardViews.tsx',
  './components/Sidebar.tsx',
  './App.tsx',
  './components/BillingModal.tsx',
  './components/MobileComponents.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Only replace bg-yellow-400 if it's not already followed by dark:bg-yellow-500
  content = content.replace(/bg-yellow-400(?! dark:bg-yellow-500)(?! hover:bg-yellow-500)/g, 'bg-yellow-400 dark:bg-yellow-500');
  fs.writeFileSync(file, content);
});
