import { useState, useEffect } from "react";
import "./App.css";
import Product from "./Product";
import Loader from "./Loader";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  const fetchProducts = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    setProducts(data.data);
    setFilterProducts(data.data);
  };

  useEffect(() => {
    fetchProducts("https://api.storerestapi.com/products");
  }, []);

  useEffect(() => {
    if (inputValue === "") {
      setFilterProducts(products);
    }
  }, [inputValue]);

  const handleFind = () => {
    const updatedArray = products.filter((item) => {
      if (item.title.toLowerCase().includes(inputValue.toLowerCase()))
        return item;
    });
    setFilterProducts(updatedArray);
  };
  `https://api.themoviedb.org/3/search/movie?api_key=5c154ee0124acaaa75525eb289958657&language=en-US&query=Dhoom&page=1&include_adult=false`;
  console.log(filteredProducts);
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 justify-center items-center">
        <input
          type="text"
          className="border border-black h-10"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleFind()} className="m-4 bg-blue-300">
          Find
        </button>
      </div>
      {filteredProducts.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex justify-center gap-2 items-center flex-wrap">
          {filteredProducts.map((item) => {
            return (
              <Product
                key={item._id}
                title={item.title}
                category={item.category.name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
