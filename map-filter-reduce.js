const CART = [
  {
    "title":"YouTube Ultimate Hooded Sweatshirt",
    "category":"mens_outerwear",
    "price":32.35,
  }, {
    "title":"Grey Heather Fleece Zip Hoodie",
    "category":"mens_outerwear",
    "price":38.85,
  }, {
    "title":"Bella Scoop-Neck Ladies T-Shirt",
    "category":"ladies_tshirts",
    "price":13.10
  }, {
    "title":"MTV Ladies Yellow T-Shirt",
    "category":"ladies_tshirts",
    "price":16.90,
  }, {
    "title":"Ladies Sonoma Hybrid Knit Jacket",
    "category":"ladies_outerwear",
    "price":84.85
  }
];

// 1. Apply discount with .map()
const discount = CART.map(item => {
  item.price = item.price * 0.5
  return item;
});

// 2. Filter by category with .filter()
const men = CART.filter(x => {
  if (x.category === 'mens_outerwear') return true;
});

// 3. Get total amount with reduce();
const total = CART
  .map(x => x.price)
  .reduce((a, b) => a+b)