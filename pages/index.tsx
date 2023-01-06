import Head from 'next/head';
import { Product, Dependency, WalletSection } from '../components';
import { dependencies, products } from '../config';

export default function Home() {
  const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'stargaze';

  const contractAddress = "something" // insert contract address here

  return (
    <div className="max-w-5xl py-10 mx-6 lg:mx-auto">
      <div className="flex flex-row justify-end mb-24">
        <Head>
          <title>Create Cosmos App</title>
          <meta name="description" content="Generated by create cosmos app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
       
      </div>
      <div className="text-center">
        <h1 className="mb-3 text-3xl font-bold text-transparent animate-pulse sm:text-4xl md:text-8xl bg-gradient-to-r bg-clip-text from-pink-500 via-fuchsia-500 to-rose-500">
          Celestia NFTs
        </h1>
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl md:text-3xl">
          The&nbsp;
          <span className="text-violet-600 ">cNFT Minter</span>
        </h1>
        <h1 className="mb-3 text-md sm:text-lg md:text-xl">
          Simply add your assets link, name, and description, then press "Mint"
        </h1>
      </div>
      <div className="flex justify-center pt-6 text-sm text-center border-t border-black/10 dark:border-white/10">
        <span className="flex flex-row items-center space-x-2">
          <a
          href="https://alexdphan.com/"
          >
            <p>Built by @alexdphan</p>
          </a>
        </span>
      </div>
    </div>
  );
}

// tabs 