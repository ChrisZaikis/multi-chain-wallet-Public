import React from "react";
import { Button, IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { formatAddress } from "../utils";

interface WalletConnectionSectionProps {
  isConnected: boolean;
  address: string | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
  connectButtonText: string;
  connectedText: string;
  WalletMultiButton?: React.ReactNode;
}

const WalletConnectionSection: React.FC<WalletConnectionSectionProps> = ({
  isConnected,
  address,
  onConnect,
  onDisconnect,
  connectButtonText,
  connectedText,
  WalletMultiButton,
}) => {
  return (
    <div className="mt-2 w-full">
      {isConnected ? (
        <div className="flex gap-x-4 items-center justify-between">
          <p>
            <span className="font-semibold">{connectedText}: </span>
            {formatAddress(address)}
          </p>
          <IconButton color="primary" onClick={onDisconnect} title="Disconnect">
            <PowerSettingsNewIcon />
          </IconButton>
        </div>
      ) : (
        WalletMultiButton || (
          <Button variant="contained" color="primary" onClick={onConnect}>
            {connectButtonText}
          </Button>
        )
      )}
    </div>
  );
};

export default WalletConnectionSection;
