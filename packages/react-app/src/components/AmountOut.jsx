import {formatUnits} from "ethers/lib/utils"
import {useState, useEffect, useRef} from "react"

import {chevronDown} from "../assets"
import styles from "../styles"
import {useOnClickOutside, useAmountsOut} from "../utils"

const AmountOut = ({fromToken, toToken, amountIn, pairContract, currencyValue, onSelect, currencies}) => {
	const [showList, setShowList] = useState(false)
	const [activeCurrency, setActiveCurrency] = useState("Select")
	const ref = useRef()

	const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0

	useEffect(() => {
		if (Object.keys(currencies).includes(currencyValue)) {
			setActiveCurrency(currencies[currencyValue])
		} else {
			setActiveCurrency("Select")
		}
	}, [currencies, currencyValue])

	useOnClickOutside(ref, () => setShowList(false))

	return (
		<div className={styles.amountContainer}>
			<input
				placeholder="0.0"
				type={"number"}
				value={formatUnits(amountOut)}
				disabled
				className={styles.amountInput}
			/>


			<div
				className="relative"
				onClick={() => setShowList(prev => !prev)}
			>
				<button className={styles.currencyButton}>
					{activeCurrency}

					<img
						src={chevronDown}
						alt="chevron down"
						className={`w-4 h-4 object-contain ml-2 ${showList ? "rotate-180" : "rotate-0"}`}
					/>
				</button>


				{showList && (
					<ul ref={ref} className={styles.currencyList}>
						{Object.entries(currencies).map(([token, tokenName], index) => (
							<li
								key={index}
								className={styles.currencyListItem}
								onClick={() => {
									if (typeof onSelect === "function") onSelect(token)

									setActiveCurrency(tokenName)
									setShowList(false)
								}}
							>
								{tokenName}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}
export default AmountOut