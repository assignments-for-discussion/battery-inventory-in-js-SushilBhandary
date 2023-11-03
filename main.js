const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy = 0, exchange = 0, failed = 0, soh = 0;
  for(let i=0; i<presentCapacities.length; i++) {
    soh =  (100 * presentCapacities[i])/120;
    if (soh>80) {
      healthy++;
    } else if (soh<=80 && soh>=63) {
      exchange++;
    } else {
      failed++;
    }
  }
  return {
    healthy,
    exchange,
    failed
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
