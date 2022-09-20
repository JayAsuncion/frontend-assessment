import * as React from "react";
import {FunctionComponent} from "react";

import "./Cards.css"

const Cards: FunctionComponent<CardsProps> = (props) => {
  const {items} = props;

  return (
    <div className="cards-container">
      {items.map((item, key) => (
          <div key={key} className="card-item-container">
            <img className="card-image" src={item.image} />
            <p className="card-description">
              {item.description}
            </p>
            <button className="card-action-button">
              {item.buttonText}
            </button>
          </div>
      ))}
    </div>
  );
};

type CardItem = {
  image: string;
  description: string;
  buttonText: string,
}

type CardsProps = {
  items: CardItem[];
};

export default Cards;
