// import TodoApp from './TodoApp';
// import UserFetcher from './UserFetcher';

// export default function App() {
//   return (
//     <div>
//       {/* <TodoApp /> */}
//       <UserFetcher />
//     </div>
//   );
// }

import { CartProvider } from './CartContext';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

export default function App() {
  return (
    <CartProvider>
      <Header /> 
      <ProductList />
      <Cart /> 
    </CartProvider>
  );
}