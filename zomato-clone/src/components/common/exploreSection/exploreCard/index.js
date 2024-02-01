import { useEffect, useState } from 'react';
import React from 'react'
import './exploreCard.css';

const ExploreCard = ({ restuarant }) => {
    const name = restuarant?.info?.name ?? "";
    const coverImage = restuarant?.info?.image?.url;
    const deliveryTime = restuarant?.order?.deliveryTime;
    const rating = restuarant?.info?.rating?.rating_text;
    const approxPrice = restuarant?.info?.cfo?.text;
    const offers = restuarant?.bulkOffers ?? [];
    const cuisines = restuarant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const bottomContainers = restuarant?.bottomContainers;
    const goldOff = restuarant?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;
    const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

  return (
    
    <div className="explore-card cur-po" >
        <div className="explore-card-cover cur-po">
            <img src={ coverImage } alt={ name } className="explore-card-image" />
            <div className="delivery-time"> { deliveryTime }</div>
            {proOff && <div className="pro-off"> {proOff} </div>}
            {goldOff && <div className="gold-off absolute-center"> { goldOff } </div>}
            {discount && <div className="discount absolute-center"> { discount } </div>}
        </div>
        <div className='res-row'>
        <div className='res-name'>{ name }</div>
        {rating && <div className="res-rating absolute-center">
                { rating } <i className="fi fi-rr-star absolute-center"></i>
            </div>}
        </div>
        <div className="res-row">
            {cuisines.length && (
            <div className='res-cuisine'>
                {cuisines.map((item, index) => {
                    return <span className='res-cuisine-tag'>{ item }{index !== cuisines.length - 1 && ", "}</span>;
                })}
            </div>
            )}
                {approxPrice && <div className="res-price"> { approxPrice } </div>}
        </div>
        {bottomContainers.length > 0 && (
            <div>
        <div className='card-separator'> </div>
        <div className='explore-bottom'> 
            <img 
            src= { bottomContainers[0]?.image?.url }
            style={{height:"18px" }}
            alt= {bottomContainers[0]?.text} 
             />
             <div className='res-bottom-text'> {bottomContainers[0]?.text}</div>
        </div>
        </div>
        )}
    </div>
  );
};

export default ExploreCard