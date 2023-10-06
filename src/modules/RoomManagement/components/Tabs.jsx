import { useState, useCallback, Fragment, useRef, useEffect } from 'react';

import { Box, Tabs, Tab } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      style={{ height: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ height: '100%' }}>
          <Box sx={{ height: '100%' }}>{children}</Box>
        </Box>
      )}
    </div>
  );
}


const UserTabs = ({
  label: currentLabel,
  tabs,
  handleChangeTabs,
  handleClickTabs,
  children,
  tabStyle,
  noContent,
  currentTab
}) => {


  const [value, setValue] = useState(0);
  const [component, setComponent] = useState([]);

 
  useEffect(()=> {
    setValue(currentTab)
  },[currentTab,value])

  useEffect(() => {
    let allowedComponents = tabs?.filter((e) => e?.allowed);
    allowedComponents && setComponent(allowedComponents);
  }, [tabs]);




  return (
    <Fragment>
      <Box sx={{  mb: '14px' }}>
        <Tabs
          aria-label="basic tabs example"
          sx={{
            '& .MuiTab-root ': {
              border: 'none',
              '&::after': {
                opacity: '1',
              },
              '& .MuiSvgIcon-root': {
                display: 'none',
              },
            },
            '& .Mui-selected': {
              background: 'transparent',
              color: '#000',
              '& .MuiSvgIcon-root': {
                color: '#fff !important',
              },
              '& .tab-iconBox': {
                filter: 'unset',
              },
            },
            '& .MuiTabs-indicator ': {
              opacity: '0',
            },
            backgroundColor: "#F1EFEF",
            width: "fit-content",
            borderRadius: '20px'
          }}
          value={value}
          onChange={handleChangeTabs}
        >
          {tabs &&
            tabs.map(
              ({ label, allowedUser, name }, i) =>
              {
              
               return  (
                 
                  <Tab
                    key={i}
                    label={
                      <>
                          <Box
                            sx={{
                             
                              background: label ===  currentLabel ? 'white' : "#F1EFEF",
                              // height: '10px',
                              minWidth: '40%',
                              width: '100%',
                              borderRadius: '10px',
                              fontSize: '12px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              ml: 1,
                              color: 'black',
                              p: 0.5,
                            }}
                          >
                            {label}
                          </Box>
                       
                      </>
                    }
                    sx={{
                      textTransform: 'none',
                    }}
                    onClick={handleClickTabs(name)}
                  />
               
              )
              }  
            )}
        </Tabs>

        <Box
        className="tab-innercontainer"
        sx={{
          border: tabStyle === 'modern' ? '1px solid ' : 'unset',
          borderColor: 'common.border',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          borderTopRightRadius: '15px',
          pt: tabStyle === 'modern' ? '0 ' : '15px',
          height: !noContent ? 'calc(100% - 50px)' : '0px',
          // overflowY: scrollable ? 'scroll' : 'hidden',
          width: '100%',
          // ...sx,
        }}
       
      >
        {component &&
          component?.map(
            ({ Component, label, allowed }, i) =>
              Component && (
                <TabPanel key={i} aria-label={i + 1 + 'Panel'} index={i} value={value ? value : 0}>
                  {Component}
                </TabPanel>
              )
          )}
      </Box>

      </Box>
    </Fragment>
  );
};
export default UserTabs;
