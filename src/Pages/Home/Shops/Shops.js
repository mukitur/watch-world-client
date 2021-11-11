import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Shops = () => {
    const [shops, setShops] = useState({});
    /* useEffect( ()=>{
        fetch(`http://localhost:8000/shopping/618be20afd592495193531a4`)
    }, []) */
    return (
        <>  
            <Navigation></Navigation>
            <h2>Shop Now Page</h2>
            <Footer></Footer>
        </>
    );
};

export default Shops;