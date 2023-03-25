import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
      <section>
          <h1>
          Welcome to <a href="<https://nextjs.org>">Next.js!</a>
        </h1>
        <CatCard {...mockCatCardProps.base} />
      </section>
    );
};

export default Home;

Home.getLayout = (page)=>{
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};