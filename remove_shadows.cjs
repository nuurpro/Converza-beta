const fs = require('fs');

function removeShadows(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/dark:shadow-none shadow-sm/g, '');
  content = content.replace(/dark:shadow-none shadow-md/g, '');
  content = content.replace(/shadow-sm/g, '');
  content = content.replace(/shadow-md/g, '');
  content = content.replace(/shadow-lg shadow-yellow-400\/20/g, '');
  content = content.replace(/shadow-lg/g, '');
  content = content.replace(/shadow-xl/g, '');
  content = content.replace(/shadow-2xl/g, '');
  
  // Clean up any double spaces left behind
  content = content.replace(/  +/g, ' ');
  
  fs.writeFileSync(filePath, content);
}

removeShadows('./App.tsx');
removeShadows('./components/DashboardViews.tsx');
removeShadows('./components/Sidebar.tsx');

console.log('Done');
