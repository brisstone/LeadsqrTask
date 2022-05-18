import React from 'react'
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
// import { TabPanel } from '@material-ui/lab';
import PropTypes from 'prop-types'
import './MUITab.scss'
import UserInformation from 'app/views/dashboard/users/UserInformation'

import { Divider } from '@mui/material'
import AppSystem from 'app/views/dashboard/appAndSystem/AppSystem'
import Savings from 'app/views/dashboard/savings/Savings'
import Loans from 'app/views/dashboard/loans/Loans'
import BankDetails from 'app/views/dashboard/bankDetails/BankDetails'

import Documents from 'app/views/dashboard/document/Documents'
import '../../views/dashboard/dashboard.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default function MUITab(props) {
    //   const classes = useStyles();
    const { user, ...other } = props
    const [value, setValue] = React.useState(0)
    console.log(props)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    const pageRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '10px',
    }

    const imgStyle = {
        width: '100px',
        height: '100px',
        marginRight: '20px',
    }
    return (
        <>
            <AppBar position="static">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: '22px',
                        p: 2,
                        m: 2,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        color: '#213F7D',
                        // width:'100%',
                        flexWrap: 'wrap'
                    }}
                >
                    <Box style={pageRowStyle}>
                        <Box style={imgStyle}>
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src="/avatar.png"
                            />{' '}
                        </Box>
                        <Box>
                            <Box>
                                <b>{user?.username}</b>{' '}
                            </Box>
                            <Box>G82982j292</Box>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box style={pageRowStyle}>
                        <Box>
                            <Box>User’s Tier</Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    columnGap: '5px',

                                    bgcolor: 'background.paper',
                                }}
                            >
                                <Box>
                                    <img src="/star1.png" />
                                </Box>
                                <Box>
                                    <img src="/star2.png" />
                                </Box>
                                <Box>
                                    <img src="/star3.png" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box style={pageRowStyle}>
                        <Box>
                            <Box>
                                <b>₦200,000.00</b>{' '}
                            </Box>
                            <Box>9912345678/Providus Bank</Box>
                        </Box>
                    </Box>
                </Box>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#369FFF',
                        },
                    }}
                >
                    <Tab label="General Details" {...a11yProps(0)} />
                    <Tab label="Documents" {...a11yProps(1)} />
                    <Tab label="Bank Details" {...a11yProps(2)} />
                    <Tab label="Loans" {...a11yProps(3)} />
                    <Tab label="Savings" {...a11yProps(4)} />
                    {/* <Tab label="App and System" {...a11yProps(5)} /> */}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} style={{padding: '0 !important'}} >
                <UserInformation  user={user}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Documents />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BankDetails />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Loans />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Savings />
            </TabPanel>
       
        </>
    )
}
