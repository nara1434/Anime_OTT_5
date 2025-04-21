import './App.scss';
//import RomanticThemeHome from './components/RomanticThemeHome';
//import ThrillerThemeHome from './components/ThrillerThemeHome';
import { Routes,Route } from 'react-router-dom';
import RomanticThemeHome from './components/RomanticThemeHome';
import ThrillerThemeHome from './components/ThrillerThemeHome';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
     {/* <RomanticThemeHome/> */}
     {/* <ThrillerThemeHome/> */}
     <Routes>
        <Route path='/' element={<RomanticThemeHome/>}/>
        <Route path='romanticThemeHome' element={<RomanticThemeHome/>}/>
        <Route path='thrillerThemeHome' element={<ThrillerThemeHome/>}/>


        <Route path='*' element={<PageNotFound/>}/>
     </Routes>
    </>
  );
}

export default App;
