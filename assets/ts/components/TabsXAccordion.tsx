import * as React from "react";
import {
  FunctionComponent,
  useState
} from "react";
import * as DOMPurify from "dompurify";

import "@app-components/TabsXAccordion.css";
import useViewPortSize from "@app-utils/ViewPortSize";

const TabsXAccordion: FunctionComponent<TabsXAccordionProps> = (props) => {
  const {items} = props;
  const {isMobile} = useViewPortSize();

  const [activeItem, setActiveItem] = useState(0);

  const onItemClick = (itemNumber: number) => () => {
    if (itemNumber === activeItem) {
      setActiveItem(-1);
      return;
    }

    setActiveItem(itemNumber);
  };

  const calculateAccordionHeaderFlexOrder = (key: number) => {
    return ((key + 1) * 2) - 1;
  };

  const calculateAccordionContentFlexOrder = (key: number) => {
    return (key + 1) * 2;
  };

  return (
    <article className="tabs-container">
      {items.map((item, key) => (
        <button
          className={"tab-button " + (key === activeItem && "active")}
          key={key}
          onClick={onItemClick(key)}
          {...(isMobile ? {style: {order: calculateAccordionHeaderFlexOrder(key)}} : {})}
        >
          {item.title}
        </button>
      ))}

      {items.map((item, key) => {
        if (key !== activeItem) {
          return null
        }

        return (
          <section
            className="tab-content"
            key={key}
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.content)}}
            {...(isMobile ? {style: {order: calculateAccordionContentFlexOrder(key)}} : {})}
          />
        );
      })}
    </article>
  );
};

type Item  = {
  title: string;
  content: string;
};

type TabsXAccordionProps = {
  items: Item[];
};

export default TabsXAccordion;