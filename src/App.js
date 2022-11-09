import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OrderReview from './Pages/Order/OrderReview';
import Error from './Pages/Shared/Error';
import Cart from './Pages/Shop/Cart/Cart';
// import Shop from './Pages/Shop/Shop/Shop';
const Home = React.lazy(() => import('./Pages/Home/Home'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Welcome...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<OrderReview />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
