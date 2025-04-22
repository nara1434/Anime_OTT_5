
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider, useAuth } from './Context/AuthContext'; // Import AuthContext
// import Login from './pages/Login';
// import Signup from './pages/SignUp';
// import Subscription from './pages/Subscription';
// import Payment from './pages/Payment';
// import Categories from './pages/Categories';

// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? element : <Login />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/subscription" element={<ProtectedRoute element={<Subscription />} />} />
//           <Route path="/categories" element={<ProtectedRoute element={<Categories />} />} />
//           <Route path="/payment" element={<ProtectedRoute element={<Payment />} />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './Context/AuthContext'; // Import AuthContext
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';
import Categories from './pages/Categories';
import WishlistPage from './Wishlist/Wishlistpage';
import FramePage from './Wishlist/FramePage';
import RomanticThemeHome from './Components/RomanticThemeHome';
import ThrillerThemeHome from './Components/ThrillerThemeHome';
import PageNotFound from './pages/PageNotFound';
import Player from './pages/Player';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Login />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/categories"  element ={<Categories />}  />
          <Route path="/payment"  element={<Payment />} />
          <Route path="/wishlistpage"  element={<WishlistPage />} />
          <Route path="/framepage" element={<FramePage />} />
          <Route path="/framepage/:title" element={<FramePage />} />
            <Route path="/romanticThemeHome" element={<RomanticThemeHome/>}/>
            <Route path="/thrillerThemeHome" element={<ThrillerThemeHome/>}/>
            <Route path="/player" element={<Player/>}/>
              <Route path='*' element={<PageNotFound/>}/>

        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;