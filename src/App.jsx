import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Subscription from './pages/Subscription';
import Payment from './pages/Payment';
import Categories from './pages/Categories';
import WishlistPage from './Wishlist/Wishlistpage';
import FramePage from './Wishlist/FramePage';
import RomanticThemeHome from './components/RomanticThemeHome';
import ThrillerThemeHome from './components/ThrillerThemeHome';
import PageNotFound from './pages/PageNotFound';
import ProfilePage from './components/ProfilePage';
import EditProfile from './components/EditProfile';
import AddProfile from './components/AddProfile';
import History from './components/History';
import AccountSettings from './components/AccountSettings';
import DownloadPage from './components/DownloadPage';
import SignOut from './components/SignOut';
import Player from './pages/Player';
import Plan from './pages/Plan';
import Home from'./components/Home';
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
            <Route path="/Plan" element={<Plan/>}/>
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
