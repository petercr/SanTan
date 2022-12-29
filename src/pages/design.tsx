import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import { StyledDiv } from '../components/Card';
import HeaderCard from '../components/HeaderCard';
import SocialLinksCard from '../components/SocialLinksCard';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
  margin-top: 5vh;
`;

const Design: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Cape Cod World</title>
      <meta name="description" content="A website starts with a design" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <StyledPage>
        <HeaderCard text="Design" typeElm="h1" />
        <StyledDiv>
          <Image
            src="/undraw_designer_re_5v95.svg"
            layout="fixed"
            height={100}
            width={100}
          />
          <p>
            Ullamcorper sagittis neque diam magna. Viverra augue nibh
            pellentesque neque fames nunc tortor vivamus venenatis. Dui
            facilisis diam nibh viverra in nunc, in tellus pellentesque. Aliquam
            placerat eget ut felis eu tempus. Commodo, tristique consectetur
            egestas duis risus orci lorem magna. Imperdiet cras eu pretium
            volutpat duis fermentum lorem. Aliquet semper pellentesque tincidunt
            at. Ultricies fringilla risus pellentesque neque diam id. Risus
            volutpat duis malesuada sit. Vel mauris, hendrerit tellus mollis mi
            nunc.
          </p>
        </StyledDiv>
        <SocialLinksCard />
      </StyledPage>
      <Image
        src="/beach_backdrop.svg"
        alt="beach drawing"
        layout="fill"
        objectFit="cover"
      />
    </main>
  </div>
);

export default Design;
