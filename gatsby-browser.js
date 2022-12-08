import React from 'react';

export const wrapRootElement = ({element}) => {
  return element
};

export const wrapPageElement = ({element}) => {
  return (
    <>
      {element}
    </>
  );
};
