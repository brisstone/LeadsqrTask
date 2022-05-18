import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import useSettings from 'app/hooks/useSettings'
import { styled, useTheme, Box } from '@mui/system'
import { Span } from '../../../components/Typography'
import { MatxMenu, MatxSearchBox } from 'app/components'

import { themeShadows } from 'app/components/MatxTheme/themeColors'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
    TextField,
} from '@mui/material'
import { topBarHeight } from 'app/utils/constant'
import { SearchOutlined } from '@mui/icons-material'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
}))

const TopbarRoot = styled('div')(({ theme }) => ({
    top: 0,
    zIndex: 96,
    transition: 'all 0.3s ease',
    boxShadow: themeShadows[8],
    height: topBarHeight,
    borderBottom: '1px solid #ccc',
    position: 'fixed',
    width: '100%',
    // border:'2px solid red'
}))

const TopbarContainer = styled(Box)(({ theme }) => ({
    padding: '12px',
    paddingLeft: 16,
    paddingRight: 20,
    height: '100%',
    display: 'flex',
    color: '#213F7D',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    [theme.breakpoints.down('xs')]: {
        paddingLeft: 14,
        paddingRight: 16,
    },
}))

const UserMenu = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 24,
    padding: 4,
    '& span': {
        margin: '0 8px',
    },
}))

const StyledItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    minWidth: 185,
    '& a': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& span': {
        marginRight: '10px',
        color: theme.palette.text.primary,
    },
}))

const IconBox = styled('div')(({ theme }) => ({
    display: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'none !important',
    },
}))

const searchBtnStyle = {
    backgroundColor: '#39CDCC',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',

    color: 'white',
}

const Layout1Topbar = () => {
    const theme = useTheme()
    const { settings, updateSettings } = useSettings()
    const { logout, user } = useAuth()
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings
        let mode
        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
        }
        updateSidebarMode({ mode })
    }

    return (
        <TopbarRoot>
            <TopbarContainer>
                <div className="thumbnal">
                    <StyledIconButton onClick={handleSidebarToggle}>
                        <Icon>menu</Icon>
                    </StyledIconButton>
                </div>

                <Box className="top_nav_re" display="flex">
                    <Box style={{marginTop:'5px'}}>
                        <img src="/logo.png" />
                    </Box>

                    <Box  className="users_tab">
                        <TextField
                            // fullWidth
                            id="standard-bare"
                            variant="outlined"
                            defaultValue="Search for anything"
                            InputProps={{
                                style: {
                                    color: '#E5E5E5',
                                    border: '.1px solid ',
                                    borderRadius: '8px',
                                    paddingRight: '0',
                                    height: '40px',
                                    minWidth: '200px',
                                },
                                endAdornment: (
                                    <div style={searchBtnStyle}>
                                        <IconButton
                                            size="large"
                                            aria-label="add"
                                            sx={{
                                                border: '0px solid #39CDCC',
                                                color: 'white',
                                                height: '40px',
                                            }}
                                            //  color="white"
                                        >
                                            <SearchOutlined />
                                        </IconButton>
                                    </div>
                                ),
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    className="users_tab"
                    display="flex"
                    alignItems="center"
                    columnGap="20px"
                >
                    <Box>
                        <div
                            style={{
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                        >
                            Docs
                        </div>
                    </Box>
                    <Box style={{ cursor: 'pointer' }}>
                        <img src="/notificationbell.png" />
                    </Box>

                    <MatxMenu
                        menuButton={
                            <UserMenu>
                                <Avatar
                                    src="/progile_pics.png"
                                    sx={{ cursor: 'pointer' }}
                                />
                                <Hidden xsDown>
                                    <Span>
                                        <strong>Adedeji</strong>
                                    </Span>
                                </Hidden>
                                <img src="/dropdown.png" />
                            </UserMenu>
                        }
                    >
                        <StyledItem>
                            <Link to="/">
                                <Icon> home </Icon>
                                <Span> Home </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Link to="/page-layouts/user-profile">
                                <Icon> person </Icon>
                                <Span> Profile </Span>
                            </Link>
                        </StyledItem>
                        <StyledItem>
                            <Icon> settings </Icon>
                            <Span> Settings </Span>
                        </StyledItem>
                        <StyledItem onClick={logout}>
                            <Icon> power_settings_new </Icon>
                            <Span> Logout </Span>
                        </StyledItem>
                    </MatxMenu>
                </Box>
            </TopbarContainer>
        </TopbarRoot>
    )
}

export default React.memo(Layout1Topbar)
