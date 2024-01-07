import React from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar";
import "./app.css";
import productsData from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [query, setQuery] = React.useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = productsData.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(productsData, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
