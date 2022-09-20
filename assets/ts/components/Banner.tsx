import * as React from "react";
import {FunctionComponent} from "react";
import useViewPortSize from "@app-utils/ViewPortSize";

import "./Banner.css"

const Banner: FunctionComponent<BannerProps> = (props) => {
  const {desktopBannerUrl, mobileBannerUrl, userName, subHeading} = props;
  const {isMobile} = useViewPortSize();

  return (
    <div className="banner-container">
      {isMobile ? (
        <img className="banner-bg-image mobile" src={mobileBannerUrl} />
      ) : (
        <img className="banner-bg-image desktop" src={desktopBannerUrl} />
      )}
      <div className="banner-text-container">
        <h1 className="banner-heading">
          Hello {userName}!
        </h1>
        <p className="banner-subheading">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

type BannerProps = {
  desktopBannerUrl: string,
  mobileBannerUrl: string,
  userName: string,
  subHeading: string,
};

export default Banner;
