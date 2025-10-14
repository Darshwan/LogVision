// Simple test server to demonstrate CLI functionality
console.log('🚀 Test server starting...');

let count = 0;

setInterval(() => {
  count++;
  console.log(`📊 Request #${count} processed`);
  
  if (count % 3 === 0) {
    console.warn(`⚠️  High load detected: ${count} requests`);
  }
  
  if (count % 5 === 0) {
    console.error(`❌ Error processing request #${count}`);
  }
  
  if (count >= 15) {
    console.log('✅ Test completed successfully!');
    process.exit(0);
  }
}, 500);