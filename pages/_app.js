import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import { Layout, Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      
    </Layout>
  )
}

export default MyApp
