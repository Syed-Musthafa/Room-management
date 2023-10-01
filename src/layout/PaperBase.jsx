import * as React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { useEffect, useState } from 'react';

const PaperBase = ({
  children,
  contentType,
  allowScroll,
  sx,
  footer,
  footerBorder,
}) => {
  const [heightType, setHeightType] = useState({});
  const border = footerBorder;
  useEffect(() => {
    if (contentType === 'allowScroll') {
      setHeightType({ height: 'calc(100% - 56px)' });
    }
    if (contentType === 'fixedPage') {
      setHeightType({ height: { md: '100%', xs: 'auto' } });
    }
    if (contentType === 'fullScroll') {
      setHeightType({ height: 'calc(100% - 56px)' });
    }
    if (contentType === 'normal') {
      setHeightType({ height: 'auto' });
    }

    if (!contentType) {
      setHeightType({ height: { md: '95%', xs: 'auto' } });
    }
  }, [contentType]);

  return (
    <Grid
      className="paperbase-main"
      container
      columnSpacing={2}
      sx={{
        width: '100% !important',
        margin: 0,
        ...heightType,
      }}
    >
      <Grid item md={12} style={{ padding: 0 }} sx={{ height: '100%' }} xs={12}>
        <Paper
          className="paper-scroller"
          sx={{
            boxShadow: 'none',
            borderRadius: '15px',
            padding: { xs: '8px 15px', md: '15px' },
            height: '100%',
            position: { xs: 'relative' },

            // overflowY: 'scroll',
            overflowY: allowScroll ? 'scroll' : 'hidden',
            ...sx,
          }}
        >
          <Box
            className="box-scroller"
            sx={{
              width: '100%',
              height: footer ? 'calc(100% - 80px)' : '100%',
              overflowY: 'scroll',
            }}
          >
            {children}
          </Box>
          {footer && (
            <Box
              sx={{
                height: '80px',
                position: 'absolute',
                bottom: '0',
                width: '100%',
                borderTop: border ? '1px solid' : '',
                borderColor: 'common.border',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {footer}
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PaperBase
