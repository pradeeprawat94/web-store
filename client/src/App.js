import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import ScrollToTop from './scrollToTop';
import OrderPage from './components/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/payment' element={<OrderPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>

    </div>
  );
}

export default App;
