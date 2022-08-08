import "./App.css";
import ProductList from "./pages/product-list";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from "./pages/add-product";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}>
            {/* <Route index element={<ProductList />} /> */}
          </Route>
            <Route path="addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
