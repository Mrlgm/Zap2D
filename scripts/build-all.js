#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the root directory
const rootDir = path.resolve(__dirname, '..');

// List of packages in build order
const packages = [
  'core',
  'sprite',
  'container',
  'animation',
  'api',
  'examples'
];

console.log('Building all Zap2D packages...');

// Build each package in order
for (const pkg of packages) {
  const pkgPath = path.join(rootDir, 'packages', pkg);
  
  // Check if package directory exists
  if (!fs.existsSync(pkgPath)) {
    console.warn(`Package ${pkg} not found, skipping...`);
    continue;
  }
  
  // Check if package has a build script
  const pkgJsonPath = path.join(pkgPath, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    console.warn(`Package ${pkg} has no package.json, skipping...`);
    continue;
  }
  
  const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  if (!pkgJson.scripts || !pkgJson.scripts.build) {
    console.warn(`Package ${pkg} has no build script, skipping...`);
    continue;
  }
  
  console.log(`\nBuilding ${pkg}...`);
  
  try {
    // Execute the build command
    execSync('yarn build', { cwd: pkgPath, stdio: 'inherit' });
    console.log(`${pkg} built successfully!`);
  } catch (error) {
    console.error(`Failed to build ${pkg}:`, error.message);
    process.exit(1);
  }
}

console.log('\nAll packages built successfully!');