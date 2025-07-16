import { ChainId } from "@lifi/sdk";
import { type FC, type PropsWithChildren } from "react";
import { createClient, http } from "viem";
import type { Config, CreateConnectorFn } from "wagmi";
import { createConfig } from "wagmi";
import { BigmiProvider } from "@bigmi/react";
import { phantom } from "@bigmi/client";
import { bitcoin } from "@bigmi/core";

const connectors: CreateConnectorFn[] = [phantom({ chainId: ChainId.BTC })];

const bigmiConfig: Config = createConfig({
  chains: [bitcoin],
  connectors,
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const UTXOBaseProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BigmiProvider config={bigmiConfig} reconnectOnMount={false}>
      {children}
    </BigmiProvider>
  );
};
