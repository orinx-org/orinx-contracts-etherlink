# Orinx Contracts (Etherlink)

This repository contains the core smart contracts for the Orinx protocol on Etherlink.

## Contracts

- `OrinxAnnouncer.sol`: Handles stealth payment announcements and fee collection.
- `OrinxRegistry.sol`: Manages username to stealth meta-address mappings.

## Setup

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables:
    - Copy `.env.example` to `.env`
    - Set `PRIVATE_KEY`, `ETHERLINK_RPC_URL`, and `ETHERSCAN_API_KEY`.

## Usage

Compile contracts:
```bash
npx hardhat compile
```

Run tests:
```bash
npx hardhat test
```

## Deployment

To deploy to Etherlink:
1.  Ensure `.env` is configured with `PRIVATE_KEY` and `ETHERLINK_RPC_URL`.
2.  Run the deployment script:
    ```bash
    npx hardhat run scripts/deploy.ts --network etherlink
    ```
    This will deploy `OrinxRegistry` and `OrinxAnnouncer` and log their addresses.

## Verification

The project includes a test suite for core functionality.
```bash
npx hardhat test
```
Expected output:
```
  Orinx Protocol
    OrinxRegistry
      ✔ Should register a username
      ✔ Should revert if username is taken
    OrinxAnnouncer
      ✔ Should emit Announcement event
```

MIT
