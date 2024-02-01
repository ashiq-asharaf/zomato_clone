import React from 'react';
import './delivery.css';
import Filters from '../filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../exploreSection';
import { restuarants } from '../../../data/restuarants';

const deliveryFilters = [
    {
      id: 1,
      icon: <li className="fi fi-rr-settings-sliders absolute-center"></li>,
      title: "Filters",
      
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygenic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>
    },
    {
      id: 6,
      title: "Great Offers",
    },

];

const restaurantList = restuarants;

const Delivery = () => {
  return (
    <div>
      <div className= "max-width" >
        <Filters filterList={deliveryFilters}/>
      </div>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection list={ restaurantList } collectionName="Delivery Restuarants in Bangalore" />
    </div>
  )
}

export default Delivery