import React from 'react'
import './topBrands.css'
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList =[
    {
    id:1,
    time: "28 min",
    title: "Domino's Pizza",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
    },
    {
        id:2,
        time: "34 min",
        title: "Truffles",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
        },
        {
            id:3,
            time: "20 min",
            title: "McDonald's",
            cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
            },
            {
                id:4,
                time: "20 min",
                title: "KFC",
                cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
                },
                {
                    id:5,
                    time: "21 min",
                    title: "FreshMenu",
                    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
                    },
                    {
                        id:6,
                        time: "32 min",
                        title: "Burger King",
                        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png",
                        },

];


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map(( brand, index ) => {
                return <div key={index}>
                    <div className="top-brands-cover">
                        <img 
                        src={brand.cover} 
                        className="top-brands-image " 
                        alt={brand.title} 
                        />
                    </div>
                </div>
            })}
        </Slider>
        
    </div>
  )
}

export default TopBrands