import React from 'react';
import {ThemeProvider} from 'src/context/theme-context';
import {Helmet} from "react-helmet";

export const wrapRootElement = ({element}) => (
  <ThemeProvider>
    <Helmet>
        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
        />
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
