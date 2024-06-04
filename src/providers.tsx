'use client'

import type { FC, PropsWithChildren } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import config from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type Props = {
  initialState?: State
}

const queryClient = new QueryClient()

const providers: FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default providers
