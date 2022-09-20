import * as React from "react";

import HomePage from "@app-pages/HomePage";

import Banner from "@app-components/Banner";
import Cards from "@app-components/Cards";
import Explanation from "@app-components/Explanation";
import TabsXAccordion from "@app-components/TabsXAccordion";

import "./assets/styles/global.css";
import tabsItems from "./data.json";

function App() {
  const cardItems = [
    {
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "READ MORE",
    },
    {
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "READ MORE",
    },
    {
      image: "https://via.placeholder.com/400x300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      buttonText: "READ MORE",
    },
  ];
  return (
    <>
      <HomePage>
        <Banner
          userName={"Developer"}
          subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          desktopBannerUrl={"https://via.placeholder.com/1920x650"}
          mobileBannerUrl={"https://via.placeholder.com/600x600"}
        />
        <Cards
          items={cardItems}
        />
        <TabsXAccordion
          items={tabsItems}
        />
        <Explanation />
      </HomePage>
    </>
  );
}
export default App;
