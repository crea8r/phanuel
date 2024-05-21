/* eslint-disable react/prop-types */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JV1TCqpNIgN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { MountainIcon } from '../components/ui';
import {
  ConnectionProvider,
  WalletProvider,
  useAnchorWallet,
  useConnection,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { AnchorProvider, Wallet } from '@coral-xyz/anchor';
import * as web3 from '@solana/web3.js';
import { useMemo } from 'react';
import { setConfig } from '../funcs/config';
import '@solana/wallet-adapter-react-ui/styles.css';

const Display = ({ children }: { children: any }) => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const provider = new AnchorProvider(connection, wallet as Wallet, {});
  setConfig({ provider });
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-800'>
      <header className='bg-white dark:bg-gray-900 shadow-sm'>
        <div className='container mx-auto py-4 px-4 md:px-6 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <a href='/' className='flex gap-2'>
              <MountainIcon className='h-6 w-6 text-gray-600 dark:text-gray-400' />
              <h1 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                Community Bloodline
              </h1>
            </a>
          </div>
          <div className='flex items-center gap-4'>
            <WalletMultiButton />
          </div>
        </div>
      </header>
      {/* <main className='container mx-auto py-8 px-4 md:px-6 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> */}
      <main className='container mx-auto py-8 px-4 md:px-6 flex-1 '>
        {children}
      </main>
    </div>
  );
};

const V0 = (props: any) => {
  const cluster = import.meta.env.VITE_CLUSTER;
  const endpoint = web3.clusterApiUrl(cluster);
  const wallets = useMemo(() => [], []);
  return (
    <div className='flex flex-col h-screen w-full'>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <WalletModalProvider>
            <Display>{props.children}</Display>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default V0;