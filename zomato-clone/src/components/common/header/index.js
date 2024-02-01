import React from 'react'
import "./header.css";


const Header = () => {
  return (
    <div className="max-width header">
       <img 
       src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
       alt="Zomato_Logo"
       className="header-logo"
       />
       <div className="header-right">
            <div className="header-location-search-container">
                <div className="location-wrapper"> 
                    <div className = "location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Bangalore</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>
                <div className="header-searchBar">
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input 
                    placeholder='Search for restuarant, cuisine or a dish'
                    className="search-input"
                    />
                </div>
            </div>
            <div className="profile-wrapper">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" 
                alt="Profile"
                className="header-profile-image" 
                />
                <span className="header-username">Ashiq</span>
                <i className="fi fi-rr-angel-small-down absolute-center profile-options-icon"></i>
            </div>
        </div>
    </div>
  )
}

export default Header;