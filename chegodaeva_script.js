//1
const products = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 }
];

const taxCoefficient = 1.2;
function calculateAndLogTotal(product) {
  const total = product.price * taxCoefficient;
  console.log(`Total for ${product.name}:`, total);
}
products.forEach(product => calculateAndLogTotal(product));
// Total for Product 1: 12
// Total for Product 2: 24

//2
function hasAccess(user) {
  return user.isAdmin && user.isActive && user.age > 18;
}

if (hasAccess(user)) {
  console.log('Access granted');
}

