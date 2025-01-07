import React from 'react';
import About from '../About/About';
import ProductSection from '../ProductSection/ProductSection';
import Slider from '../Slider/Slider';
import CategorySection from '../CategorySection/CategorySection';
import Service from '../Service/Service';
import { Helmet } from 'react-helmet';
import CardReview from '../CardReview/CardRevies';
import Offer from '../Offer';

const Home = () => {
    return (
       <>
       <div>
       <Helmet>
      <title>Home || Sports</title>
      <meta name="description" content="Helmet application" />
      </Helmet>
      <Slider></Slider>
       <div className='space-y-5'>
            <ProductSection></ProductSection>
            <CategorySection></CategorySection>
            <Service></Service>
            <Offer></Offer>
            <About></About> 
            <CardReview></CardReview>
        </div>
       </div>
       </>
    );
};

export default Home;