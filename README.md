

## Search Title and Brands.
Actually DummyJson doesn't provide  search api that fits requirements (filter title and description fields). As so i decided to implement search on client. I imulate fetch data with search="" and additionally do search on client side


https://github.com/Ovi/DummyJSON/blob/master/src/controllers/product.js

[row 31]
// search products
controller.searchProducts = ({ limit, skip, select, q: searchQuery }) => {
  let [...products] = frozenData.products.filter(p => {
    return (
      p.title.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery)
    );
  });
  const total = products.length;

  if (skip > 0) {
    products = products.slice(skip);
  }

  products = limitArray(products, limit);

  if (select) {
    products = getMultiObjectSubset(products, select);
  }

  const result = { products, total, skip, limit: products.length };

  return result;
};
