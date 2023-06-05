import { useSigner } from '@/state/signer'
import AddressAvatar from './AddressAvatar'

const ConnectWallet = () => {
    const {address, connectWallet, loading} = useSigner()
console.log(loading);
    
    if(address) return <AddressAvatar address={address}/>
  return (
            <button
                className="button-connect"
                onClick={connectWallet}
                disabled={loading}
            >
                {loading ? "busy" : "Connect Wallet"}
            </button>
  )
}

export default ConnectWallet