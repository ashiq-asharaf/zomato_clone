import React from 'react'
import "./nightLife.css"
import { Nightlife } from '../../data/nightLife';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import Collection from '../common/collection';

const diningFilters = [
  {
    id: 1,
    icon: <li className="fi fi-rr-settings-sliders absolute-center"></li>,
    title: "Filters",
    
  },
  {
    id: 2,
    title: "Gold",
  },
  {
    id: 3,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Serves Alcohol",
    // icon: <i className="fi fi-rr-apps-sort absolute-center"></i>
  },
  {
    id: 6,
    title: "Open Now",
  },

];

const collectionList = [
  {
    id: 1,
    title: "13 Romantic Dining Places",
    cover: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
    places: "14 places",
  },
  {
    id: 2,
    title: "10 Trending Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
    places: "9 places",
  },
  {
    id: 3,
    title: "10 Places for Bingeworthy Desserts",
    cover: "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043260.png?output-format=webp",
    places: "12 places",
  },
  {
    id: 4,
    title: "16 Places for Vegan Treats",
    cover: "https://b.zmtcdn.com/data/collections/9328351d5015beb55abcf5e5cf1b2b9d_1675080703.jpg?output-format=webp",
    places: "15 places",
  },
  {
    id: 5,
    title: "Trending this week",
    cover: "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
    places: "12 places",
  },
  {
    id: 6,
    title: "21 Newly Opened Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
    places: "14 places",
  },
  
  {
    id: 7,
    title: "11 Picturesque Cafes",
    cover: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
    places: "10 places",
  },
  
  {
    id: 8,
    title: "11 Must-visit Legendary Places",
    cover: "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675078571.jpg",
    places: "11 places",
  },
  {
    id: 9,
    title: "Winners of Zomato Restaurant Awards",
    cover: "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg",
    places: "17 places",
  },
  {
    id: 10,
    title: "22 Finest Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
    places: "22 places",
  } 
  
];

const diningList = Nightlife;

const NightLife = () => {
  return (
    <div>
    <Collection list = { collectionList }/>
    <div className="max-width">
      <Filters filterList={diningFilters} />
    </div>
    <ExploreSection list={diningList} collectionName="Nightlife Restaurants in Lavelle Road" />
  </div>
  )
}

export default NightLife