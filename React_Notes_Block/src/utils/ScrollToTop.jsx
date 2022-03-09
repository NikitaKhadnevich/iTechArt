import { Button } from '@material-ui/core';
import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <Button onClick={() => scrollToTop()}>Scroll to Up</Button>;
};
export default ScrollToTop;
