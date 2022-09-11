import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x1331DeAC81eDca39a7F84FE9dad7cB4254f39dAB"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
	  [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/FVCK0LedtO1h1PPggkhuLL6aWYXUmefl",
  },
};