
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
import ProfilePage from './Components/ProfilePage';
import EditProfile from './Components/EditProfile';
import AddProfile from './Components/AddProfile';
import History from './Components/History';
import AccountSettings from './Components/AccountSettings';
import DownloadPage from './Components/DownloadPage';
import SignOut from './Components/SignOut';
import Player from './pages/Player';
import Home from'./Components/Home';
import ForgotPassword from './pages/ForgotPassword';
import OtpPage from './pages/Otp';
import ResetPasswordPage from './pages/ResetPassword';




function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/categories"  element ={<Categories />}  />
          <Route path="/payment"  element={<Payment />} />
          <Route path="/romanticthemehome" element={<RomanticThemeHome />} />
          <Route path="/thrillerthemehome" element={<ThrillerThemeHome />} />
          <Route path="/wishlistpage"  element={<WishlistPage />} />
          <Route path="/framepage" element={<FramePage />} />
          <Route path="/framepage/:title" element={<FramePage />} />
          <Route path="player" element={<Player />} />

            <Route path="/profilepage" element={<ProfilePage/>}/>
            <Route path="/editprofile" element={<EditProfile/>}/>
            <Route path="/addprofile" element={<AddProfile/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/accountsettings" element={<AccountSettings/>}/>
            <Route path="/downloadpage" element={<DownloadPage/>}/>
            <Route path="/signout" element={<SignOut/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/otppage" element={<OtpPage/>}/>
            <Route path="/reset-password" element={<ResetPasswordPage/>}/>
            


             
         {/* <Route path="/romanticThemeHome" element={<RomanticThemeHome/>}/>
          <Route path="/thrillerThemeHome" element={<ThrillerThemeHome/>}/> */}



          <Route path='*' element={<PageNotFound/>}/>


        </Routes>
      </Router>
  

  );
}

export default App;


// import React from 'react';
// import './App.scss';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';

// import Login from './pages/Login';
// import Signup from './pages/SignUp';
// import Subscription from './pages/Subscription';
// import Payment from './pages/Payment';
// import Categories from './pages/Categories';
// import WishlistPage from './Wishlist/Wishlistpage';
// import FramePage from './Wishlist/FramePage';
// import RomanticThemeHome from './Components/RomanticThemeHome';
// import ThrillerThemeHome from './Components/ThrillerThemeHome';
// import PageNotFound from './pages/PageNotFound';
// import ProfilePage from './Components/ProfilePage';
// import EditProfile from './Components/EditProfile';
// import AddProfile from './Components/AddProfile';
// import History from './Components/History';
// import AccountSettings from './Components/AccountSettings';
// import DownloadPage from './Components/DownloadPage';
// import SignOut from './Components/SignOut';
// import Player from './pages/Player';

// import PrivateRoute from './Context/ProtectedRoute';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Routes */}
//           <Route
//             path="/subscription"
//             element={
//               <PrivateRoute>
//                 <Subscription />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/payment"
//             element={
//               <PrivateRoute>
//                 <Payment />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/categories"
//             element={
//               <PrivateRoute>
//                 <Categories />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/wishlistpage"
//             element={
//               <PrivateRoute>
//                 <WishlistPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/framepage"
//             element={
//               <PrivateRoute>
//                 <FramePage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/romanticthemehome"
//             element={
//               <PrivateRoute>
//                 <RomanticThemeHome />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/thrillerthemehome"
//             element={
//               <PrivateRoute>
//                 <ThrillerThemeHome />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/profilepage"
//             element={
//               <PrivateRoute>
//                 <ProfilePage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/editprofile"
//             element={
//               <PrivateRoute>
//                 <EditProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/addprofile"
//             element={
//               <PrivateRoute>
//                 <AddProfile />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/history"
//             element={
//               <PrivateRoute>
//                 <History />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/accountsettings"
//             element={
//               <PrivateRoute>
//                 <AccountSettings />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/downloadpage"
//             element={
//               <PrivateRoute>
//                 <DownloadPage />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/signout"
//             element={
//               <PrivateRoute>
//                 <SignOut />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/player"
//             element={
//               <PrivateRoute>
//                 <Player />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
