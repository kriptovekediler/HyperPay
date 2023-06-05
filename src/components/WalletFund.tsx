import React, { useState } from 'react'
import { SafeOnRampKit } from '@safe-global/onramp-kit'
import { useSigner } from '@/state/signer'
import { JsonRpcSigner } from '@ethersproject/providers'

const WalletFund = () => {
  const {address ,zeroDevAddress, signer} = useSigner()
  const [currentAddress, setAddress] = useState<string>(localStorage.getItem('safeAddress') || '')


  const fundWallet = async function () {
  }

  return (
    <div>WalletFund</div>
  )
}

export default WalletFund