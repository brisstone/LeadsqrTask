import React, { Fragment } from 'react'

import { Grid, Card, Paper } from '@mui/material'

import { Box, styled, useTheme } from '@mui/system'

import FunctionCard from './shared/FunctionCard'
import Robot from './Guarantor/Guarantor'

import AntdTable from './shared/Table/AntdTable'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    // backgroundColor:'red',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

const pageTitleStyle = {
    marginBottom: '2.5rem',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    color: '#213F7D',
}

const cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    height: '92%',
}

const Analytics = () => {
    const { palette } = useTheme()

    return (
        <div style={{ backgroundColor: '', marginTop: '90px' }}>
            <Fragment>
                <ContentBox className="analytics">
                    <Box style={pageTitleStyle}>
                        <div>Users</div>
                    </Box>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={6} md={3}>
                            <FunctionCard
                                name="USERS"
                                count="2,453"
                                iconUrl="/userss.png"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FunctionCard
                                name="Active Users"
                                count="2,453"
                                iconUrl="/icon.png"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FunctionCard
                                name="Users with Loans"
                                count="12,453"
                                iconUrl="/db.png"
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FunctionCard
                                name="Users with Savings"
                                count="102,453"
                                iconUrl="/save.png"
                            />
                        </Grid>
                    </Grid>
                    <Grid>
                        <AntdTable />
                    </Grid>
                    <Grid></Grid>
                </ContentBox>
            </Fragment>
        </div>
    )
}

export default Analytics
