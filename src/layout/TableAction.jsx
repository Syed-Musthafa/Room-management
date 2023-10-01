import { Grid } from "@mui/material";

 const TableAction = ({ children, sx = {} }) => {
    return (
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          ...sx,
        }}
      >
        {children}
      </Grid>
    );
  };

  export default TableAction