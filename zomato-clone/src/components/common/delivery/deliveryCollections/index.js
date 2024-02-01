import React from 'react';
import './deliveryCollections.css';
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"

    },
    {
        id: 2,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"

    },
    {
        id: 3,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"

    },
    {
        id: 4,
        title: "Biriyani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"

    },
    {
        id: 5,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"

    },
    {
        id: 6,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"

    },
    {
        id: 7,
        title: "Sandwich",
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"

    },
    {
        id: 8,
        title: "North Indian",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"

    },
    {
        id: 9,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"

    },
    {
        id: 10,
        title: "Ice Cream",
        cover: "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"

    },
    {
        id: 11,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"

    },
    {
        id: 12,
        title: "Momos",
        cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"

    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
        <div className="max-width">
            <div className="collection-title">Eat What Makes You Happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item, index) => {
                    return <DeliveryItem key={index} item={item} />;
                })}
            </Slider>
        </div>
    </div>
  )
};

export default DeliveryCollections