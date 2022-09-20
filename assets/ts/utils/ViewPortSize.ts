import {
  useEffect,
  useState
} from "react";

const useViewPortSize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', _handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', _handleWindowSizeChange);
    }
  }, []);

  const _handleWindowSizeChange = () => {
    setInnerWidth(window.innerWidth);
  };

  return {
    isMobile: innerWidth <= 768,
  };
};

export default useViewPortSize;