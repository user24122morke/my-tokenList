// components/AddToMetaMaskButton.tsx
"use client";
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any }) => Promise<any>;
    };
  }
}

export const AddToMetaMaskButton = () => {
  const addToMetaMask = async () => {
    try {
      await window.ethereum?.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x5E6D0CE8585C788e7Ee9C642ba909b26A9De1364',
            symbol: 'USDT',
            decimals: 18,
            image: 'https://yourdomain.com/logo.png', // schimbă dacă ai alt URL
          },
        },
      });
    } catch (error) {
      console.error('Failed to add token to MetaMask:', error);
    }
  };

  return (
    <button
      onClick={addToMetaMask}
      className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
    >
      Add to MetaMask
    </button>
  );
};
