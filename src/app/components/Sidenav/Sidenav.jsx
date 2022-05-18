import React, { Fragment } from 'react'
import Scrollbar from 'react-perfect-scrollbar'
import { navigations } from 'app/navigations'
import { MatxVerticalNav } from 'app/components'
import useSettings from 'app/hooks/useSettings'
import { styled } from '@mui/system'
import { DriveEtaOutlined } from '@material-ui/icons'
import useAuth from 'app/hooks/useAuth'

const StyledScrollBar = styled(Scrollbar)(() => ({
    // paddingLeft: '1rem',
    // paddingRight: '1rem',
    // position: 'relative',
    // overflowY: 'scroll',
    // overflowY: 'visible',
    overflowX: 'auto',
}))

const SideNavMobile = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.54)',
    zIndex: -1,
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
}))

const Sidenav = ({ children }) => {

    const { logout, user } = useAuth()
    const { settings, updateSettings } = useSettings()

    const updateSidebarMode = (sidebarSettings) => {
        let activeLayoutSettingsName = settings.activeLayout + 'Settings'
        let activeLayoutSettings = settings[activeLayoutSettingsName]

        updateSettings({
            ...settings,
            [activeLayoutSettingsName]: {
                ...activeLayoutSettings,
                leftSidebar: {
                    ...activeLayoutSettings.leftSidebar,
                    ...sidebarSettings,
                },
            },
        })
    }

    return (
        <div
            style={{
                overflowX: 'auto',
                overflowX: 'scroll',
                // overflowX: 'visible',
                height:"100vh",
                paddingBottom:'1rem'
            }}
         
        >
         
            <div className='switch_org' style={{display:'flex', flexDirection:'row', columnGap:'5px', padding:'0 1rem', margin:'2rem 0', alignItems:'center',  height: '44px'}}>
                <div>
                    <img src="/briefcase 1.png" />
                </div>{' '}
                <div style={{color:'#213F7D'}}>Switch Organization</div>
                
                <div>
                    <img src='/np_next_2236826_000000 2.png'/>
                </div>
            </div>
            <StyledScrollBar options={{ suppressScrollX: true }}>
                {children}
                <MatxVerticalNav items={navigations} />
            </StyledScrollBar>

            <div onClick={logout} className='switch_org' style={{display:'flex', flexDirection:'row', columnGap:'5px', padding:'0 2rem', margin:'3rem 0', alignItems:'center',  height: '44px', borderTop:'1px solid #ccc'}}>
                <div style={{color:'#213F7D'}}>Logout</div>
            </div>

            <SideNavMobile
                onClick={() => updateSidebarMode({ mode: 'close' })}
            />
        </div>
    )
}

export default Sidenav
