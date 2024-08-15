import React from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ZKCoin App</title>
        <meta name="description" content="ZKCoin application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>&copy; 2024 ZKCoin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
