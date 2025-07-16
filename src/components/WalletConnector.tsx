import {
  useAccount as useWagmiAccount,
  useConnect,
  useDisconnect,
} from "wagmi";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConfig as useBigmiConfig } from "@bigmi/react";
import { disconnect } from "wagmi/actions";
import WalletConnectionSection from "./WalletConnectionSection";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletConnector = () => {
  // EVM
  const { connect: ethConnect, connectors: ethConnectors } = useConnect();
  const { isConnected: isEthConnected, address: ethAddress } =
    useWagmiAccount();
  const { disconnect: ethDisconnect } = useDisconnect();

  // SVM
  const {
    publicKey,
    connected: isSolConnected,
    disconnect: solDisconnect,
  } = useWallet();

  // UTXO
  const bigmiConfig = useBigmiConfig();
  const { isConnected: utxoConnected, address: utxoAddress } = useWagmiAccount({
    config: bigmiConfig,
  });
  const { connect: bigmiConnect, connectors: bigmiConnectors } = useConnect({
    config: bigmiConfig,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Multi-Chain Wallet Connector</h1>

      <WalletConnectionSection
        isConnected={isEthConnected}
        address={ethAddress}
        onConnect={() => ethConnect({ connector: ethConnectors[0] })}
        onDisconnect={ethDisconnect}
        connectButtonText="Connect Ethereum Wallet"
        connectedText="EVM Connected"
      />

      <WalletConnectionSection
        isConnected={isSolConnected}
        address={publicKey?.toString()}
        onConnect={() => {}}
        onDisconnect={solDisconnect}
        connectButtonText=""
        connectedText="SVM Connected"
        WalletMultiButton={<WalletMultiButton />}
      />

      <WalletConnectionSection
        isConnected={utxoConnected}
        address={utxoAddress}
        onConnect={() => bigmiConnect({ connector: bigmiConnectors[0] })}
        onDisconnect={() => disconnect(bigmiConfig)}
        connectButtonText="Connect BTC Wallet"
        connectedText="Bigmi Connected"
      />
    </div>
  );
};

export default WalletConnector;
