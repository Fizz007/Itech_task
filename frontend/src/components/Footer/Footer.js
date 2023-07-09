import React from 'react'
import {downloadImg} from '../../data'
import '../Footer/Footer.css'
import { FaFacebook,FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer'>
    <div className='container1'>
        <div className='downloadContainer'>
            <h2>Shop Non-Stop</h2>
            <p>
                Trusted by more than 1 Crore Indians <br />
                Cash on Delivery | Free Delivery
            </p>

            <div className='downloadImg'>
               {downloadImg.map((item,i)=> {
                return <img src={item.img} alt="" key={i} />
               })}
            </div>
        </div>

        <div className="containerLink">
            <span>Careers</span>
            <span>Become a supplier</span>
            <span>Hall of Fame</span>
            <span>Sitemap</span>
        </div>

        <div className="containerLink">
            <span>Legal and Polices</span>
            <span>Meesho Tech Blogs</span>
            <span>Notice and Returns</span>
        </div>

        <div className='socialLink'>
            <h2>React out to us</h2>
            <div className='imgContainer'>
               <FaFacebook size={20} color='blue'/>
               <FaInstagram size={20} color='orange'/>
               <FaTwitter size={20} color='#1DA1F2'/>
               <FaYoutube size={20} color='red'/>
               <FaLinkedinIn size={20} color='#0e76a8'/>
                
            </div>
            
        </div>

        <div className='contactUs'>
            <h2>Contact Us</h2>
            <div>
            Fashnear Technologies Private Limited, 
            CIN: U74900KA2015PTC082263
            06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India 
            
            </div>
        </div>
    </div>

   
</div>
  )
}

export default Footer
