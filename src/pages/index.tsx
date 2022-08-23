import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import HeaderCard from '../components/HeaderCard';
import FourLinkCard from '../components/FourLinkCard';
import NavCard from '../components/NavCard';
import styles from '../../styles/Home.module.css';
import HeaderTextCard from '../components/HeaderTextCard';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Cape Cod World</title>
      <meta name="description" content="A web design and development company" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={styles.mainContent}>
        <Card />
        <NavCard />
        <HeaderCard text="What We Do" />
        <FourLinkCard />
        <HeaderTextCard />
      </div>
      <Image
        src="/beach_backdrop.svg"
        alt="beach drawing"
        layout="fill"
        objectFit="cover"
      />
    </main>
  </div>
);

export default Home;
