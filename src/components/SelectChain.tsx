import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Avatar, Box } from "@mui/material";
import { useChains } from "../hooks/useChains";

interface SelectChainProps {
  selectedChainId?: number;
  onChange: (chainId: number) => void;
}

const SelectChain = ({ selectedChainId = -1, onChange }: SelectChainProps) => {
  const { chains } = useChains();

  return (
    <FormControl fullWidth>
      <Select
        value={selectedChainId}
        onChange={(event) => onChange(event.target.value as number)}
        displayEmpty
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
              overflowY: "auto",
            },
          },
        }}
      >
        <MenuItem disabled value={-1}>
          <span>Select chain</span>
        </MenuItem>
        {chains?.map((chain) => (
          <MenuItem key={chain.id} value={chain.id}>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                src={chain.logoURI}
                alt={chain.name}
                sx={{ width: 24, height: 24 }}
              />
              <span>{chain.name}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectChain;
