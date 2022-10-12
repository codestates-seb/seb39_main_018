import React from 'react';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import ItemsMain from '../Components/Items/ItemsMain';
import { motion } from 'framer-motion';

const MainPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <ItemsMain />
      <Footer />
    </motion.div>
  );
};

export default MainPage;
