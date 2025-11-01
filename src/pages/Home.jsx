import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import RowList from '../components/RowList/RowList'
import Request1 from '../link/request'

export default function Home (){
    return (
        <>
      <Header/>
      <Banner fetchURL={Request1.fetchNetflixOriginal}/>
      <RowList />
      <Footer/>
      </>
    );
}