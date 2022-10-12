import React from 'react';
import ErrorMain from '../Components/Error/ErrorMain';
import Footer from '../Components/Common/Footer/Footer';
import Header from '../Components/Common/Header/Header';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <ErrorMain />
      <Footer />
    </motion.div>
  );
};

export default ErrorPage;
