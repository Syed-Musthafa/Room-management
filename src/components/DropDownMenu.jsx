import { FormControl, InputLabel, Select, MenuItem, Typography, TextField } from '@mui/material';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import { FcExpand } from 'react-icons/fc';


const DropdownMenuNew = ({
  value,
  onChange,
  menuItem = [],
  label,
  sx = {},
  disableUnderline,
  defaultValue,
  isMultiple,
  required = false,
  onClick,
  name,
  ...selectProps
}) => {
  return (
    <FormControl
      variant="standard"
      fullWidth
      sx={{ mb: 0, minWidth: 100, ...sx, borderStyle : "none"}}
      required={required}
      className="customerScrollBar"
    >
      <InputLabel id="demo-simple-select-helper-label" >{label}</InputLabel>
      <Select
        name={name || ''}
        className="customerScrollBar"
        value={value ?? ''}
        onChange={onChange}
        onClick={onClick}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label',  }}
        variant="standard"
        fullWidth
        IconComponent={FcExpand}
        sx={{
          ...sx,
          margin: '0',
          '& .MuiMenu-paper': {
            height: '20px',
          
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: {
                xs: '10vh',
                sm: '20vh',
                overflowY: 'scroll',
              },
              // height: '20vh',
              overflowY: 'scroll',
              '&::-webkit-scrollbar': {
                display: 'block',
                width: '0.4em',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#e7ebf0',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#66acdb',
                borderRadius: '3px',
                height: '5px',
              },
            },
          },
        }}
        {...selectProps}
        defaultValue={defaultValue}
        disableUnderline={disableUnderline}
      >
      
        {menuItem.map(
          ({ id, label }, i) =>
            label !== null && (
              <MenuItem
                id={label?.toString()}
                value={id}
                sx={{
                  m: '10px',
                  fontSize: 'bold',
                }}
              >
                <Typography variant="subtitle2">{label}</Typography>
              </MenuItem>
            )
        )}
      </Select>
    </FormControl>
  );
};
export default DropdownMenuNew;
