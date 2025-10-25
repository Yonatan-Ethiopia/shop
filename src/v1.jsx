// ProductCard.jsx
function ProductCard({ name, price }) {
  return (
    <div className="p-4 border rounded">
      <h2>{name}</h2>
      <p>{price} birr</p>
      <button>Add to cart</button>
    </div>
  );
}

// App.jsx
function App() {
  return (
    <div>
      <ProductCard name="T-shirt" price={500} />
      <ProductCard name="Jeans" price={1200} />
    </div>
  );
}
s
