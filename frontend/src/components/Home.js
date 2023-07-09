import React from "react";
import Header from "./Header";
import Slidder from "./Slidder";
import Products from "./Products/Products";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Nav from "./Nav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Header />
      <Nav />
      {user ? (
        <>
          <Slidder />
          <Products />
          <Cards />
          <Footer />
        </>
      ) : (
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        height:'100vh',
        fontSize:'25px'
      }}
    >
      Please Login to view the page, For login Click on Profile Icon
    </div>
      )}
    </div>
  );
};

export default Home;
