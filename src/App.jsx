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



// import { CartProvider } from './CartContext';
// import Header from './Header';
// import ProductList from './ProductList';
// import Cart from './Cart';

// export default function App() {
//   return (
//     <CartProvider>
//       <Header /> 
//       <ProductList />
//       <Cart /> 
//     </CartProvider>
//   );
// }


// // import UserFetcher from './UserFetcher1';

// // export default function App() {
// //   return (
// //     <div>
// //       <UserFetcher />
// //     </div>
// //   )
// // }

import { WatchListProvider } from './MovieContext';
import MovieHeader from './MovieHeader';
import MovieList from './MovieWatchList';
import MovieCart from './MovieCart';

export default function App() {
    return (
        <WatchListProvider>
            <MovieHeader />
            <MovieList />
            <MovieCart />
        </WatchListProvider>
    )
  }