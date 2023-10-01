import * as iconsList from './../assets/images/index'

import { Box, IconButton, Tooltip } from "@mui/material";

 const IconHolder = ({
    icon,
    sx = {},
    ariaLabel,
    toolTip,
    placement,
    gradient,
    IconType,
    size,
    isLoading,
    onClick,
    disabled,
    component = 'div',
    type,
    arrow,
  }) => {
    let iconName = '';
    if (icon in iconsList) {
      iconName = iconsList[icon];
    }
  
 
  
    return (
   
        <Box
          type={type}
          component={component}
          aria-label={ariaLabel}
          className="icon-holderBox"
          disabled={disabled}
          sx={{
            width: '36px',
            height: '36px',
            minWidth: '35px',
            minHeight: '35px',
            opacity: disabled ? '.2' : '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50px',
            animation: `${isLoading ? 'startRotate' : ''} 0.5s infinite linear`,
            ...sx,
          }}
          onClick={onClick}
        >
          <Box
            alt="icon-valor"
            className="tab-iconBox"
            component="img"
            src={iconName}
            sx={{
              sx,
            }}
          />
        </Box>
    );
  };

  export default IconHolder