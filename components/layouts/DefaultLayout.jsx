import React, { children } from "react";
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../modules/header/Header'));
const Footer = dynamic(() => import('../modules/Footer/footer'));


const Layout = ({children}) => {
    return (
    <>
    <Header />
    <div className="">
    {children}
    </div>
   
    <Footer/>
    </>
    );
};


Layout.propTypes = {

};


export default Layout;
