import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

interface Props {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className='body'>
      <Navbar />

      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;