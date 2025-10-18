function sum(a, b) {
  return a + b;
}

// Test simple
if (sum(2, 3) === 5) {
  console.log('✅ Test pasado: suma correcta');
  process.exit(0);
} else {
  console.log('❌ Test fallido: suma incorrecta');
  process.exit(1);
}
