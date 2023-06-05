import React, { ReactNode, useContext, useState,createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import {JsonRpcProvider, JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { ZeroDevSigner, getRPCProviderOwner, getZeroDevSigner } from '@zerodevapp/sdk'
import Web3Modal from 'web3modal'
import { Web3ModalAuth } from '@web3modal/auth-react'

type SignerProviderProps = {
    signer?: JsonRpcSigner
    address?: string
    loading?: boolean
    provider?: JsonRpcProvider
    zeroDevSigner?: ZeroDevSigner
    zeroDevAddress?: string
    connectWallet: () => Promise<void>
    instance?: any
}

const SignerContext = createContext<SignerProviderProps>({} as any)

export const useSigner = () => useContext(SignerContext)

export const SignerProvider = ({children}: {children:ReactNode}) => {
    const [signer, setSigner] = useState<JsonRpcSigner>()
    const [address, setAddress] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [provider, setProvider] = useState<JsonRpcProvider>()
    const [zeroDevSigner, setZeroDevSigner] = useState<ZeroDevSigner>()
    const [zeroDevAddress, setZeroDevAddress] = useState<string>()

    useEffect(() => {
        const web3Modal = new Web3Modal()
        if(web3Modal.cachedProvider) connectWallet()
    }, [])

    const connectWallet = async () => {
        console.log('try');
        setLoading(true)
        try {
            const web3Modal = new Web3Modal({cacheProvider: true})
            const instance = await web3Modal.connect()
            const provider = new Web3Provider(instance)
            const signer = provider.getSigner()
            const signerAddress = await signer.getAddress()

            const projectId = 'b7dbcdfb-a29b-47bf-ab2f-58b0f36f4c65'
            const zeroDevAccount = await getZeroDevSigner({
                projectId,
                owner: getRPCProviderOwner(window.ethereum)
            })

            const zeroDevAccountAddress = await zeroDevAccount.getAddress()

            setZeroDevSigner(zeroDevAccount)
            setZeroDevAddress(zeroDevAccountAddress)
            setSigner(signer)
            setAddress(signerAddress)
            setProvider(provider)
        } catch (error) {
            console.log('error', error);
        }
        setLoading(false)
    }
    const contextValue = {address, signer, loading, provider, zeroDevSigner,zeroDevAddress,connectWallet}

  return<SignerContext.Provider value={contextValue}> {children} </SignerContext.Provider>
}