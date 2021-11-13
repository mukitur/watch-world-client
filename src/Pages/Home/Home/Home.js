import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HomeReview from '../HomeReview/HomeReview';
import Products from '../Products/Products';
import SubscribeUs from './SubscribeUs/SubscribeUs';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <SubscribeUs></SubscribeUs>
            <HomeReview></HomeReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;