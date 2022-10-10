import React from 'react';
import Header from '../Components/Common/Header/Header';
import Footer from '../Components/Common/Footer/Footer';
import WithdrawMain from '../Components/Withdraw/WithDrawMain';
import { motion } from 'framer-motion';

const WithdrawPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <WithdrawMain />
      <Footer />
    </motion.div>
  );
};

export default WithdrawPage;
