import {useState, useEffect} from "react"
import {shortenAddress, useEthers, useLookupAddress} from "@usedapp/core"

import styles from "../styles"

const WalletButton = () => {
	const [accountAddress, setAccountAddress] = useState("")

	const {ens} = useLookupAddress()
	const {account, activateBrowserWallet, deactivate} = useEthers()

	const changeWallet = () => {
		if (!account) {
			activateBrowserWallet()
		} else {
			deactivate()
		}
	}

	useEffect(() => {
		if (ens) {
			setAccountAddress(ens)
		} else if (account) {
			setAccountAddress(shortenAddress(account))
		} else {
			setAccountAddress("")
		}
	}, [account, ens, setAccountAddress])

	return (
		<button
			onClick={changeWallet}
			className={styles.walletButton}
		>
			{accountAddress || "Connect Wallet"}
		</button>
	)
}
export default WalletButton