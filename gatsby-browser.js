import React from 'react';
import {ThemeProvider} from 'src/context/theme-context';
import { Helmet } from "react-helmet";

export const wrapRootElement = ({element}) => (
  <ThemeProvider>
    <Helmet>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" />
    </Helmet>
    {element}
  </ThemeProvider>
);

export const wrapPageElement = ({element}) => {
  return (
    <>
      {element}
    </>
  );
};
