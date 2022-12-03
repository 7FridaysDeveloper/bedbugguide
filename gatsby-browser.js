import React from 'react';
import {ThemeProvider} from 'src/context/theme-context';
//import { Helmet } from "react-helmet";

export const wrapRootElement = ({element}) => (
  <ThemeProvider>
    {/*<Helmet>*/}
    {/*  <link rel="preconnect" href="https://fonts.gstatic.com/" />*/}
    {/*  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />*/}
    {/*</Helmet>*/}
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
