import React from 'react'
import Header from '../../Components/Header/Header'
import Rowlist from "./../../Components/Row/Rowlist"
import Banner from '../../Components/Banner/Banner'
import  Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Rowlist/>
      <Footer />
    </div>
  );
}

export default Home
