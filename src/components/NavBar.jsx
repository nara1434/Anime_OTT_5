// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   createTheme,
//   ThemeProvider,
//   CssBaseline,
//   styled,
//   Switch as MuiSwitch,
// } from "@mui/material";
// import { FaHeart, FaUserCircle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoMdHome } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { RiMovie2Fill } from "react-icons/ri";

// const MaterialUISwitch = styled(MuiSwitch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',
//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(22px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//     width: 32,
//     height: 32,
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },
// }));

// const NavBar = () => {
//   const nav = useNavigate();
//   const location = useLocation();
  
//   // Derive theme directly from URL
//   const isThriller = location.pathname.includes("thriller");

//   // Active state detection
//   const isHomeActive = location.pathname === '/' || location.pathname.includes('home');
//   const isGenreActive = location.pathname.includes('genre') || 
//   location.pathname.includes('romantic') || 
//   location.pathname.includes('thriller');
//   const isSubscriptionActive = location.pathname.includes('subscription');

//   // Switch toggling logic
//   const handleThemeSwitch = (e) => {
//     const checked = e.target.checked;
//     if (checked && !isThriller) {
//       nav("/thrillerThemeHome");
//     } else if (!checked && isThriller) {
//       nav("/romanticThemeHome");
//     }
//   };

//   // Navigation handlers
//   const handleHomeClick = () => nav("/romanticThemeHome");
//   const handleRomanticClick = () => nav("/romanticThemeHome");
//   const handleThrillerClick = () => nav("/thrillerThemeHome");
//   const handleSubscriptionClick = () => nav("/subscription");

//   // Create MUI theme dynamically
//   const theme = createTheme({
//     palette: {
//       mode: isThriller ? "dark" : "light",
//       background: {
//         default: isThriller ? "#000000" : "#FFF5E4",
//       },
//       primary: {
//         main: isThriller ? "#ffffff" : "#d49fa3",
//       },
//       text: {
//         primary: isThriller ? "#ffffff" : "#000000",
//       },
//     },
//   });

//   // Text and icon color based on theme
//   const navTextColor = isThriller ? "#ffffff" : "#000000";
//   const activeColor = "#3b82f6"; // Blue for active state

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <style>{`
//         .nav-link {
//           transition: all 0.2s ease;
//           position: relative;
//         }
//         .nav-link .nav-icon {
//           opacity: 0;
//           transition: opacity 0.2s ease, margin-right 0.2s ease;
//           margin-right: 0;
//         }
//         .nav-link:hover .nav-icon,
//         .nav-link.active .nav-icon {
//           opacity: 1;
//           margin-right: 8px;
//         }
//         .nav-link.active {
//           color: ${activeColor} !important;
//         }
//         .nav-link.active .nav-icon {
//           color: ${activeColor};
//         }
//         .nav-link.active::after {
//           content: '';
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background-color: ${activeColor};
//         }
//       `}</style>
      
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{
//           backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 245, 228, 0.7)',
//           color: navTextColor,
//           backdropFilter: 'blur(10px)',
//           WebkitBackdropFilter: 'blur(10px)',
//           boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//           borderBottom: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <div className="container-fluid mx-3">
//           <span
//             className="navbar-brand"
//             onClick={handleRomanticClick}
//             style={{ 
//               cursor: "pointer",
//               fontWeight: 'bold',
//               fontSize: '1.5rem',
//               background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               textFillColor: 'transparent',
//             }}
//           >
//             Anime OTT
//           </span>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ color: navTextColor }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <ul className="navbar-nav ms-auto mb-2 gap-3">
//               <li className="nav-item">
//                 <span 
//                   className={`nav-link ${isHomeActive ? 'active' : ''}`} 
//                   onClick={handleHomeClick}
//                   style={{ 
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: navTextColor
//                   }}
//                 >
//                   <IoMdHome className="nav-icon mb-1" style={{ color: navTextColor }} />
//                   <span>Home</span>
//                 </span>
//               </li>
              
//               <li className="nav-item dropdown">
//                 <span
//                   className={`nav-link dropdown-toggle ${isGenreActive ? 'active' : ''}`}     
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   style={{ 
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: navTextColor
//                   }}
//                 >
//                   <RiMovie2Fill  className="nav-icon mb-1" style={{ color: navTextColor }} />
//                   <span>Movies</span>
//                   <IoIosArrowDown size={20} className="ms-1" style={{ color: navTextColor }} />
//                 </span>
//                 <ul className="dropdown-menu" style={{
//                   backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
//                   backdropFilter: 'blur(10px)',
//                   WebkitBackdropFilter: 'blur(10px)',
//                   border: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
//                 }}>
//                   <li>
//                     <span 
//                       className="dropdown-item d-flex align-items-center" 
//                       onClick={handleRomanticClick}
//                       style={{ color: isThriller ? "#fff" : "#000" }}
//                     >
//                       Romantic
//                     </span>
//                   </li>
//                   <li>
//                     <span 
//                       className="dropdown-item d-flex align-items-center" 
//                       onClick={handleThrillerClick}
//                       style={{ color: isThriller ? "#fff" : "#000" }}
//                     >
//                       Thriller
//                     </span>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <span 
//                   className={`nav-link ${isGenreActive ? 'active' : ''}`} 
//                   // onClick={handleHomeClick}
//                   style={{ 
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: navTextColor
//                   }}
//                 >
//                   <TbGridDots  className="nav-icon mb-1" style={{ color: navTextColor }} />
//                   <span onClick={()=>nav('/categories')}>Genres</span>
//                 </span>
//               </li>
//               <li className="nav-item">
//                 <span 
//                   className={`nav-link ${isSubscriptionActive ? 'active' : ''}`}
//                   onClick={handleSubscriptionClick}
//                   style={{ 
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     color: navTextColor
//                   }}
//                 >
//                   <MdOutlineSubscriptions className="nav-icon mb-1" style={{ color: navTextColor }} />
//                   <span onClick={()=>nav('/subscription')}>Subscription</span>
//                 </span>
//               </li>
//             </ul>
            
//             <ul className="navbar-nav ms-auto mb-2 gap-3">
//               <li className="nav-item">
//                 <span className="nav-link" onClick={()=>nav('/wishlistpage')} style={{ color: navTextColor }}>
//                   <FaHeart size={25} style={{ color: navTextColor }} />
//                 </span>
//               </li>
//               <li className="nav-item">
//                 <span className="nav-link" onClick={()=>nav('/')} style={{ color: navTextColor }}>
//                   <FaUserCircle size={25} style={{ color: navTextColor }} />
//                 </span>
//               </li>
//             </ul>
            
//             <div className="d-flex align-items-center">
//               <MaterialUISwitch
//                 checked={isThriller}
//                 onChange={handleThemeSwitch}
//                 title="Toggle theme"
//               />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </ThemeProvider>
//   );
// };

// export default NavBar;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import {
//   createTheme,
//   ThemeProvider,
//   CssBaseline,
//   styled,
//   Switch as MuiSwitch,
// } from "@mui/material";
// import { FaHeart, FaUserCircle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoMdHome } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
// import { MdOutlineSubscriptions } from "react-icons/md";
// import { RiMovie2Fill } from "react-icons/ri";

// const MaterialUISwitch = styled(MuiSwitch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',
//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(22px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//     width: 32,
//     height: 32,
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },
// }));

// const NavBar = () => {
//   const nav = useNavigate();
//   const isThriller = window.location.pathname.includes("thriller");

//   const handleThemeSwitch = (e) => {
//     const checked = e.target.checked;
//     if (checked && !isThriller) {
//       nav("/thrillerThemeHome");
//     } else if (!checked && isThriller) {
//       nav("/romanticThemeHome");
//     }
//   };

//   const theme = createTheme({
//     palette: {
//       mode: isThriller ? "dark" : "light",
//       background: {
//         default: isThriller ? "#000000" : "#FFF5E4",
//       },
//       primary: {
//         main: isThriller ? "#ffffff" : "#d49fa3",
//       },
//       text: {
//         primary: isThriller ? "#ffffff" : "#000000",
//       },
//     },
//   });

//   const navTextColor = isThriller ? "#ffffff" : "#000000";
//   const [activeLinks, setActiveLinks] = useState("Home");
//   const navTextColors = "blue";
//   const handleActive = (label) => {
//     setActiveLinks(label);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <style>{`
//         .nav-link {
//           transition: all 0.3s ease;
//           position: relative;
//           display: flex;
//           align-items: center;
//           cursor: pointer;
//           padding: 0.5rem 1rem;
//         }
//         .nav-icon {
//           opacity: 0;
//           transform: translateX(-10px);
//           transition: all 0.3s ease;
//           margin-right: 0;
//           font-size: 1.2rem;
//         }
//         .nav-link:hover .nav-icon {
//           opacity: 1;
//           transform: translateX(0);
//           margin-right: 8px;
//         }
//         .dropdown-toggle .nav-icon {
//           margin-right: 8px;
//         }
//         .dropdown-toggle:hover .nav-icon {
//           opacity: 1;
//           transform: translateX(0);
//         }
//         .nav-link:hover {
//           background-color: ${isThriller ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
//           border-radius: 4px;
//         }
//         .nav-link.active {
//           color: blue !important;
//       `}</style>
      
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{
//           backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 245, 228, 0.7)',
//           color: navTextColor,
//           backdropFilter: 'blur(10px)',
//           WebkitBackdropFilter: 'blur(10px)',
//           borderBottom: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
//           padding: '0.5rem 1rem',
//         }}
//       >
//         <div className="container-fluid">
//           <span
//             className="navbar-brand"
//             onClick={() => nav("/romanticThemeHome")}
//             style={{ 
//               cursor: "pointer",
//               fontWeight: 'bold',
//               fontSize: '1.5rem',
//               background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               marginRight: '2rem',
//             }}
//           >
//             Anime OTT
//           </span>
          
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ color: navTextColor }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarContent">
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <span 
//                   className={`nav-link ${activeLinks === "Home" ? "active" : ""}`}
//                   onClick={() => {
//                     nav("/romanticThemeHome"); // Navigate
//                     handleActive("Home"); // Update active link
//                   }}
//                   style={{ color: navTextColor }}
                
                 
//                 >
//                   <IoMdHome className="nav-icon" />
//                   <span>Home</span>
//                 </span>
//               </li>
              
//               <li className="nav-item dropdown">
//                 <span
//                   className="nav-link dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                   style={{ color: navTextColor }}
//                 >
//                   <RiMovie2Fill className="nav-icon" />
//                   <span
                  
//                   >Movies</span>
//                   <IoIosArrowDown className="ms-1" />
//                 </span>
//                 <ul className="dropdown-menu" style={{
//                   backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
//                   border: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
//                 }}>
//                   <li>
//                     <span 
//                       className="dropdown-item"
//                       onClick={() => nav("/romanticThemeHome")}
//                       style={{ color: isThriller ? "#ffffff" : "#000000" }}
//                     >
//                       Romantic
//                     </span>
//                   </li>
//                   <li>
//                     <span 
//                       className="dropdown-item"
//                       onClick={() => nav("/thrillerThemeHome")}
//                       style={{ color: isThriller ? "#ffffff" : "#000000" }}
//                     >
//                       Thriller
//                     </span>
//                   </li>
//                 </ul>
//               </li>
              
//               <li className="nav-item">
//                 <span 
//                   className={`nav-link ${activeLinks === "Genres" ? "active" : ""}`}
//                   onClick={() => {handleActive("Genres");setTimeout(() => nav("/categories"), 0);}}

//                   style={{ color: activeLinks === "Genres" ? navTextColors : "" }}
//                 >
//                   <TbGridDots className="nav-icon" />
//                   Genres
//                 </span>
//               </li>
              
//               <li className="nav-item">
//                 <span 
//                   className="nav-link"
//                   onClick={() => nav("/subscription")}
//                   style={{ color: navTextColor }}
//                 >
//                   <MdOutlineSubscriptions className="nav-icon" />
//                   <span>Subscription</span>
//                 </span>
//               </li>
//             </ul>

//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <span 
//                   className="nav-link"
//                   onClick={() => nav("/wishlistpage")}
//                   style={{ color: navTextColor }}
//                 >
//                   <FaHeart size={20} />
//                 </span>
//               </li>
//               <li className="nav-item">
//                 <span 
//                   className="nav-link"
//                   onClick={() => nav("/profilepage")}
//                   style={{ color: navTextColor }}
//                 >
//                   <FaUserCircle size={20} />
//                 </span>
//               </li>
//               <li className="nav-item d-flex align-items-center ms-2">
//                 <MaterialUISwitch
//                   checked={isThriller}
//                   onChange={handleThemeSwitch}
//                   title="Toggle theme"
//                 />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </ThemeProvider>
//   );
// };

// export default NavBar;


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  styled,
  Switch as MuiSwitch,
} from "@mui/material";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

const MaterialUISwitch = styled(MuiSwitch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const NavBar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const isThriller = window.location.pathname.includes("thriller");

  const handleThemeSwitch = (e) => {
    const checked = e.target.checked;
    if (checked && !isThriller) {
      nav("/thrillerThemeHome");
    } else if (!checked && isThriller) {
      nav("/romanticThemeHome");
    }
  };

  const theme = createTheme({
    palette: {
      mode: isThriller ? "dark" : "light",
      background: {
        default: isThriller ? "#000000" : "#FFF5E4",
      },
      primary: {
        main: isThriller ? "#ffffff" : "#d49fa3",
      },
      text: {
        primary: isThriller ? "#ffffff" : "#000000",
      },
    },
  });

  const navTextColor = isThriller ? "#ffffff" : "#000000";
  const activeTextColor = "#f06292";

  // Check if current path is active
  const isActive = (path) => {
    if (path === "/home") return location.pathname === "/home";
    if (path === "/romanticThemeHome" || path === "/thrillerThemeHome") {
      return location.pathname.includes("ThemeHome");
    }
    return location.pathname === path;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.5rem 1rem;
        }
        // .nav-link.active {
        //   background-color: ${isThriller ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        //   border-radius: 4px;
        //   color: ${activeTextColor} !important;
        // }
        .nav-link.active {
            background-color: ${isThriller ? 'rgba(240, 98, 146, 0.1)' : 'rgba(240, 98, 146, 0.1)'};
            border-radius: 4px;
            color: ${activeTextColor} !important;
          }
        .nav-icon {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          margin-right: 0;
          font-size: 1.2rem;
        }
        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon {
          opacity: 1;
          transform: translateX(0);
          margin-right: 8px;
        }
        .dropdown-toggle .nav-icon {
          margin-right: 8px;
        }
        .dropdown-toggle:hover .nav-icon {
          opacity: 1;
          transform: translateX(0);
        }
        .nav-link:hover {
          background-color: ${isThriller ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          border-radius: 4px;
        }
      `}</style>

      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 245, 228, 0.7)',
          color: navTextColor,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          padding: '0.5rem 1rem',
        }}
      >
        <div className="container-fluid">
          <span
            className="navbar-brand"
            onClick={() => nav("/romanticThemeHome")}
            style={{ 
              cursor: "pointer",
              fontWeight: 'bold',
              fontSize: '1.5rem',
              background: 'linear-gradient(45deg, #FFB6C1 30%, #000000 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '2rem',
            }}
          >
            Anime OTT
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: navTextColor }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span
                  className={`nav-link ${isActive("/home") ? "active" : ""}`}
                  onClick={() => nav("/home")}
                  style={{ color: isActive("/home") ? activeTextColor : navTextColor }}
                >
                  <IoMdHome className="nav-icon" />
                  <span>Home</span>
                </span>
              </li>

              <li className="nav-item dropdown ms-2">
                <span
                  className={`nav-link dropdown-toggle ${isActive("/romanticThemeHome") || isActive("/thrillerThemeHome") ? "active" : ""}`}
                  data-bs-toggle="dropdown"
                  style={{ 
                    color: (isActive("/romanticThemeHome") || isActive("/thrillerThemeHome")) 
                      ? activeTextColor 
                      : navTextColor 
                  }}
                >
                  <RiMovie2Fill className="nav-icon" />
                  <span>Movies</span>
                  <IoIosArrowDown className="ms-1" />
                </span>
                <ul className="dropdown-menu" style={{
                  backgroundColor: isThriller ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                  border: isThriller ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                }}>
                  <li>
                    <span
                      className={`dropdown-item `}
                      onClick={() => nav("/romanticThemeHome")}
                      style={{ color: isThriller ? "#ffffff" : "#000000" }}
                    >
                      Romantic
                    </span>
                  </li>
                  <li>
                    <span
                      className={`dropdown-item`}
                      onClick={() => nav("/thrillerThemeHome")}
                      style={{ color: isThriller ? "#ffffff" : "#000000" }}
                    >
                      Thriller
                    </span>
                  </li>
                </ul>
              </li>

              <li className="nav-item  ms-2">
                <span
                  className={`nav-link ${isActive("/categories") ? "active" : ""}`}
                  onClick={() => nav("/categories")}
                  style={{ color: isActive("/categories") ? activeTextColor : navTextColor }}
                >
                  <TbGridDots className="nav-icon" />
                  <span>Genres</span>
                </span>
              </li>

              <li className="nav-item  ms-2">
                <span
                  className={`nav-link ${isActive("/subscription") ? "active" : ""}`}
                  onClick={() => nav("/subscription")}
                  style={{ color: isActive("/subscription") ? activeTextColor : navTextColor }}
                >
                  <MdOutlineSubscriptions className="nav-icon" />
                  <span>Subscription</span>
                </span>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto  ms-2">
              <li className="nav-item">
                <span
                  className={`nav-link ${isActive("/wishlistpage") ? "active" : ""}`}
                  onClick={() => nav("/wishlistpage")}
                  style={{ color: navTextColor }}
                >
                  <FaHeart size={20} />
                </span>
              </li>
              <li className="nav-item  ms-2">
                <span
                  className={`nav-link ${isActive("/profilepage") ? "active" : ""}`}
                  onClick={() => nav("/profilepage")}
                  style={{ color: navTextColor }}
                >
                  <FaUserCircle size={20} />
                </span>
              </li>
            </ul>
          </div>
          <MaterialUISwitch
            onChange={handleThemeSwitch}
            checked={isThriller}
          />
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default NavBar;

