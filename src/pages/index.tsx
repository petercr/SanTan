import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import HeaderCard from '../components/HeaderCard';
import FourLinkCard from '../components/FourLinkCard';
import NavCard from '../components/NavCard';
import styles from '../../styles/Home.module.css';
import HeaderTextCard from '../components/HeaderTextCard';
import ButtonLinkCard from '../components/ButtonLinkCard';
import SocialLinksCard from '../components/SocialLinksCard';

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
        <HeaderCard text="What We Do" typeElm="h3" />
        <FourLinkCard />
        <NavCard />
        <HeaderTextCard />
        <NavCard />
        <ButtonLinkCard />
        <SocialLinksCard />
      </div>
      <Image src="/beach_backdrop.svg" alt="beach drawing" />
    </main>
  </div>
);

export default Home;
