import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: "0.8.28",
    networks: {
        etherlink: {
            url: process.env.ETHERLINK_RPC_URL || "https://node.ghostnet.etherlink.com",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
        hardhat: {
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
        customChains: [
            {
                network: "etherlink",
                chainId: 128123,
                urls: {
                    apiURL: "https://shadownet.explorer.etherlink.com/api",
                    browserURL: "https://shadownet.explorer.etherlink.com"
                }
            }
        ]
    }
};

export default config;
