import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    let nav = useNavigate();
  return (
    <>
        <div className="container-fluid mt-5 bg-dark text-white">
            <div className="row pt-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <ul style={{listStyle:"none"}}>
                    <li className='mb-3 fs-3 text-danger'>Anime</li>
                    <li className='mb-3'>Our anime OTT platform offers immersive themes tailored to every genre.</li>
                    <li className='mb-3'>Each section transforms visually and emotionally, letting fans dive deep into the unique mood of every story.</li>
                    <li>Explore anime like never before, genre by genre.</li>
                </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <ul  className="mt-2"style={{listStyle:"none"}}>
                    <li className='mb-3 home-ul' onClick={()=>nav('/romanticthemehome')} style={{cursor:'pointer'}}>Home</li>
                    <li className='mb-3 home-ul' onClick={()=>nav('/categories')} style={{cursor:'pointer'}} >Genres</li>
                    <li className='mb-3 home-ul' onClick={()=>nav('/subscription')} style={{cursor:'pointer'}} >Subscription</li>
                    <li className='mb-3 home-ul' onClick={()=>nav('/wishlistpage')} style={{cursor:'pointer'}} >WhishList</li>
                    <li className='home-ul' onClick={()=>nav('/profilepage')} style={{cursor:'pointer'}} >Profile</li>
                </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <ul className='mt-2' style={{listStyle:"none"}}>
                    <li className='mb-3 text-info'>Stay connected with us:</li>
                    <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://www.instagram.com/?hl=en'} style={{cursor:'pointer'}}>
                    <i className="fa-brands fa-instagram me-2" style={{color:"#E1306C"}}></i>Instagram
                    </li>
                    <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://in.linkedin.com/'} style={{cursor:'pointer'}}>
                    <i className="fa-brands fa-linkedin-in me-2" style={{color:"#0077B5"}}></i>LinkedIn
                    </li>
                    <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://www.facebook.com/'} style={{cursor:'pointer'}}>
                    <i className="fa-brands fa-facebook me-2" style={{color:"#1877F2"}}></i>Facebook
                    </li>
                    <li className='mb-3 home-ul' onClick={() => window.location.href = 'https://web.whatsapp.com/'} style={{cursor:'pointer'}}>
                    <i className="fa-brands fa-whatsapp me-2" style={{color:"#25D366"}}></i>WhatsApp
                    </li>
                    <li className='home-ul' onClick={() => window.location.href = 'https://x.com/?lang=en'} style={{cursor:'pointer'}}>
                    <i className="fa-brands fa-x-twitter me-2" style={{color:"#1DA1F2"}}></i>Twitter
                    </li>
                </ul>
                </div>
            </div>  
        </div>
      
    </>
  );
};
export default Footer;