import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/common/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <div>
       <Header />
       <TabOptions activeTab = {activeTab} setActiveTab={setActiveTab}/>
       {/* Different sccreens */}
       {getCorrectScreen(activeTab)}
       <Footer />

    </div>
  )
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Nightlife":
        return <NightLife />;
        default:
            return <Delivery />;

    }
}

export default HomePage