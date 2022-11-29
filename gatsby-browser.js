import React from 'react';
import {ThemeProvider} from 'src/context/theme-context';
import { Helmet } from "react-helmet";

export const wrapRootElement = ({element}) => (
  <ThemeProvider>
    <Helmet>
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" />
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
