import { useState } from "react";
import SelectChain from "./components/SelectChain.tsx";
import WalletConnector from "./components/WalletConnector.tsx";
import TokenList from "./components/TokenList.tsx";

function App() {
  const [selectedChainId, setSelectedChainId] = useState<number | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col rounded-2xl shadow-lg p-4">
      <WalletConnector />
      <div className="mt-2">
        <SelectChain
          selectedChainId={selectedChainId}
          onChange={setSelectedChainId}
        />
        {selectedChainId && <TokenList chainId={selectedChainId} />}
      </div>
    </div>
  );
}

export default App;
