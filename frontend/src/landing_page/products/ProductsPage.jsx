import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="/Assets/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
                rightImageURL="/Assets/console.png"
                rightProductName="Console"
                rightProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                rightLearnMore=""
               
            />
            <LeftSection
                imageURL="/Assets/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                rightLearnMore=""
                
            />
            <RightSection
                rightImageURL="/Assets/kiteconnect.svg"
                rightProductName="Kite Connect API"
                rightProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                rightTryDemo=""
                rightLearnMore=""
                googlePlay=""
                appStore=""
            />
            <LeftSection
                imageURL="/Assets/varsity.png"
                productName="Varsity Mobile"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <div className='text-center mt-4 mb-5'>
                <p  className="text-muted" style={{fontSize:"1.25rem", fontWeight:"400"}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none", color:" #387ed1;"}}>Zerodha.tech</a> blog.</p>

            </div>

            <Universe />
        </>
    );
}

export default ProductPage;