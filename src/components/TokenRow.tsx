import { TokenAmount } from "@lifi/sdk";
import { formatNumber, formatTokenBalance, formatTokenPrice } from "../utils";
import { Avatar, Skeleton } from "@mui/material";

interface TokenRowProps {
  token: TokenAmount;
  startPosition: number;
  isBalanceLoading: boolean;
}

const TokenRow = ({
  token,
  startPosition,
  isBalanceLoading,
}: TokenRowProps) => {
  const tokenAmount = formatTokenBalance(token.amount, token.decimals);
  const tokenPrice = formatTokenPrice(
    token.amount,
    token.priceUSD,
    token.decimals
  );

  return (
    <div
      className="absolute top-0 left-0 w-full flex items-center gap-3 border-b border-gray-200"
      style={{
        transform: `translateY(${startPosition}px)`,
      }}
    >
      <Avatar
        src={token.logoURI}
        alt={token.symbol}
        sx={{ width: 30, height: 30 }}
      >
        {token.symbol?.[0]}
      </Avatar>
      <div className="flex flex-col items-start flex-grow">
        <span className="text-base font-semibold">{token.symbol}</span>
        <span className="text-sm text-gray-500">{token.name}</span>
      </div>

      <div className="flex flex-col items-end">
        {isBalanceLoading ? (
          <>
            <Skeleton variant="text" width={60} height={20} animation="wave" />
            <Skeleton variant="text" width={80} height={20} animation="wave" />
          </>
        ) : (
          <>
            {tokenAmount ? (
              <span className="text-base font-semibold">
                {formatNumber(tokenAmount, 4)}
              </span>
            ) : null}

            {tokenPrice ? (
              <span className="text-sm text-gray-500">
                ${formatNumber(tokenPrice, 2)}
              </span>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default TokenRow;
