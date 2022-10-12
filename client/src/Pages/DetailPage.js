import React, { useEffect, useState } from 'react';
import DetailMain from '../Components/ItemDetail/DetailMain';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import { motion } from 'framer-motion';

const DetailPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <DetailMain />
      <Footer />
    </motion.div>
  );
};

export default DetailPage;
