// Test our CLI functionality
import { spawn } from 'child_process';

console.log('=== Testing CLI Commands ===');

// Test 1: Basic CLI help
console.log('\n1. Testing help command...');
const helpProcess = spawn('node', ['bin/cli.js', '--help'], {
  stdio: 'inherit'
});

helpProcess.on('exit', () => {
  console.log('\n2. Testing watch command with test server...');
  
  // Test 2: Watch command
  const watchProcess = spawn('node', ['bin/cli.js', 'watch', 'node test-server.js'], {
    stdio: 'inherit'
  });

  watchProcess.on('exit', (code) => {
    console.log(`\n✅ CLI test completed with code: ${code}`);
  });
});