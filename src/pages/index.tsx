import { type NextPage } from 'next';
import Head from 'next/head';

import ChatContainer from '~/components/ChatContainer';
import Navbar from '~/components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex justify-center pt-12">
        <ChatContainer />
      </main>
    </>
  );
};

export default Home;
