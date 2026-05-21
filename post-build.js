import fs from 'fs';
import path from 'path';

const distClientDir = path.resolve('dist/client');
const shellPath = path.join(distClientDir, '_shell.html');
const indexPath = path.join(distClientDir, 'index.html');

console.log('Running post-build script...');

if (fs.existsSync(shellPath)) {
  fs.copyFileSync(shellPath, indexPath);
  console.log('Successfully copied _shell.html to index.html');
} else {
  console.error('Error: _shell.html not found in dist/client');
}

// Generate Netlify redirects file
const redirectsPath = path.join(distClientDir, '_redirects');
fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
console.log('Successfully generated _redirects for Netlify');

// Generate Vercel configuration file
const vercelConfigPath = path.join(distClientDir, 'vercel.json');
const vercelConfig = {
  cleanUrls: true,
  rewrites: [
    { source: '/(.*)', destination: '/index.html' }
  ]
};
fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
console.log('Successfully generated vercel.json for Vercel');
