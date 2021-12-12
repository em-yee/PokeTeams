import React from 'react';


import Navbar from '../Navbar';


function BaseLayout({ children }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}

export default BaseLayout;
