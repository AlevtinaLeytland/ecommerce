import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import data from "../fake-data/all-products";

function App() {
  const [products, setProducts] = useState(data);
  function filterGoods(filter) {
    setProducts(data.filter((product) => product.category === filter.slice(6)));
  }
  return (
    <div className="App">
      <Header filter={filterGoods} />
      <Main products={products} />
    </div>
  );
}

export default App;
