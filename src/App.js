import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="product-container">
        <Products></Products>
      </div>
      <div className="list-container"></div>
    </div>
  );
}

export default App;
