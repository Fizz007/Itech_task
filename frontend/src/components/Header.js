import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMail,AiOutlineUser } from "react-icons/ai";
import { WiMoonAltWaxingCrescent6 } from "react-icons/wi";
import { GiShoppingCart } from "react-icons/gi";
import { Badge } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const [profile, setProfile] = useState(false)
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  
  function handleUser() {
    if (!user) {
      const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
      };
      signInWithGoogle();
    } else {
      const signUserOut = async () => {
        await signOut(auth);
      };
      signUserOut();
    }
  }

  function openLoginBtn(){
    setProfile(!profile)
  }
  return (
    <div>
      <div className='positionn'>
        <div className="top_layer">
          <div className="phone">
             <span className='top_icon'><FiPhone color='white' size={15}/></span> <span>+22136622</span>
          </div>
          <div className="center">
               <span className='top_icon'><AiOutlineMail color='white' size={15}/></span>   <span>suppoert@elextra.io</span>
          </div>
          <div className="location">
              <span className='top_icon'><CiLocationOn color='white' size={15}/></span>    <span>locations</span>
          </div>
        </div>
      </div>
      

      <div className="pos">
      <header className="headder">
        <div className="headerLeft">
          <div className="logoContainer">
           <span><WiMoonAltWaxingCrescent6 size={35}/></span> Logo
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <span><BiSearch size={25}/></span>
            </div>
            <form action="">
              <input
                type="search"
                // value={text}
                // onChange={changehandler}
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="inputSearch"
              />
            </form>
            <div className="inputCloseSearch">
              {/* <RxCross2 style={{ display: ` ${show}` }} /> */}
            </div>
          </div>
        </div>

        <div className="headerRight">         
           <div className="profileAndCart">
            <div className="profileContainer" onClick={openLoginBtn}>
              <div className="profileIcon">
                <AiOutlineUser size={20}/>
              </div>
              <p >Profile</p>
              
              {profile && (
                <div style={{ display: "block" }}>
                  <div className="profileHoverBtnContainer">
                    <div style={{display: 'flex'}}>
                      <h6>
                      Hello {user ? user.displayName : 'User'}
                      </h6>
                      
                      <img width="30px" src={user?.photoURL} alt="" style={{borderRadius:'50%'}}/>
                      
                    </div>
                    <button className="login_btn" onClick={handleUser}>
                       {user ? 'Signout' : 'Sign In'} {!user && <FcGoogle size={25}/>}
                    </button>
                  </div>
                </div>
              )}
            
            </div>

            <div className="CartContainer" >
              <div className="CartIcon">
                <Badge
                  color="secondary"
                  badgeContent={0}
                >
                  <GiShoppingCart size={28} onClick={()=> navigate('/cart')}/>
                </Badge>
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    </div>
       
        
      
    </div>
  )
}

export default Header
