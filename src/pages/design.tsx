import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { StyledDiv } from '../components/Card';
import HeaderCard from '../components/HeaderCard';
import SocialLinksCard from '../components/SocialLinksCard';

const Design: NextPage = () => (
  <div>
    <Head>
      <title>Cape Cod World</title>
      <meta name="description" content="A website starts with a design" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>
        <HeaderCard text="Design" typeElm="h1" />
        <StyledDiv>
          <Image src="/undraw_designer_re_5v95.svg" />
        </StyledDiv>
        <SocialLinksCard />
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

export default Design;
