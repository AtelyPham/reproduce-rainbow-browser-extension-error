'use client'

import { useConnect, useDisconnect } from 'wagmi'

const Connect = () => {
  const { connect, connectors, status } = useConnect()
  const { disconnect } = useDisconnect()

  if (status === 'success') {
    return (
      <div>
        <h2 className='text-2xl font-bold'>Connected</h2>
        <button
          onClick={() => disconnect()}
          className='block w-full p-4 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2 className='text-2xl font-bold'>Installed Wallets</h2>
      <div>
        {connectors.map(connector => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className='block w-full p-4 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Connect
