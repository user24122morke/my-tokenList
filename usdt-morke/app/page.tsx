// pages/index.tsx

import Head from 'next/head'
import Image from 'next/image'
import { AddToMetaMaskButton } from './components/AddToMetamask/AddToMetamask';
// import { useEffect } from 'react'

export default function Home() {
  const addToMetaMask = async () => {
    try {
      const wasAdded = await (window as any).ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x5E6D0CE8585C788e7Ee9C642ba909b26A9De1364',
            symbol: 'USDTM',
            decimals: 18,
            image: 'https://usdtmorke.vercel.app/logo.png',
          },
        },
      });

      if (wasAdded) {
        console.log('Token added');
      } else {
        console.log('Token not added');
      }
    } catch (error) {
      console.log('Error adding token:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>USDT Morke</title>
        <meta name="description" content="Official site of USDT Morke - an independent ERC-20 token." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center p-8">
        <Image src="/logo.png" alt="USDT Morke Logo" width={100} height={100} className="mb-4" />

        <h1 className="text-4xl font-bold mb-4">Welcome to USDT Morke</h1>
        <p className="text-lg max-w-2xl text-center mb-8">
          USDT Morke is a custom ERC-20 token deployed on the Ethereum blockchain. This project is independent and not affiliated with Tether Ltd. The token is swappable on Uniswap.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Token Information</h2>
          <ul className="text-sm">
            <li><strong>Name:</strong> USDT Morke</li>
            <li><strong>Symbol:</strong> USDTM</li>
            <li><strong>Decimals:</strong> 18</li>
            <li><strong>Contract Address:</strong> 0x5E6D0CE8585C788e7Ee9C642ba909b26A9De1364</li>
            <li><strong>Network:</strong> Ethereum Mainnet</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-4 items-center">
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0x5E6D0CE8585C788e7Ee9C642ba909b26A9De1364"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Swap on Uniswap
          </a>

          <AddToMetaMaskButton/>
        </div>

        <div className="mt-10 text-sm text-gray-600 max-w-xl text-center">
          Disclaimer: This token is not associated with Tether Ltd. USDT Morke is a custom ERC-20 token for experimental and community purposes only.
        </div>
      </main>
    </div>
  )
}
