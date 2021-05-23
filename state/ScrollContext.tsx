import React, { createContext, useContext, ReactNode } from 'react';
import HomeSection from '../constants/homeSections';

type Context = {
  scrollToSection: (id: HomeSection) => void;
};

type Props = {
  children: ReactNode;
};

const ScrollContext = createContext<Context>({
  scrollToSection: (id: HomeSection) => {},
});

export const ScrollProvider = (props: Props) => {
  const scrollToSection = (id: HomeSection) => {
    // @todo replace with ref
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
