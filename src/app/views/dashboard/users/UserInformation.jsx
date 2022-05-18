import React, { Fragment } from 'react'
import { Box, styled, useTheme } from '@mui/system'

import {
    Button,
    Divider,
    Grid,
    IconButton,
    Paper,
    TextField,
} from '@mui/material'
import { SearchOutlined, UploadFile } from '@mui/icons-material'


const ContentBox = styled('div')(({ theme }) => ({
    margin: '0',
    padding: '0',
    paddingLeft: '0px',

    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const btnStyle = {
    backgroundColor: '#369FFF',
    padding: '.5rem .5rem',
    borderRadius: '4px',
    color: '#ffffff',
}

const userNameStyle = {
    fontFamily: 'Work Sans',
    fontDtyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',

    color: '#545F7D',
    textTransform: 'uppercase',
}

const userValueStyle = {
    fontFamily: 'Work Sans',
    fontDtyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '5px',

    color: '#545F7D',
}

const userSection = {
    fontFamily: 'Work Sans',
    fontDtyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '5px',
    paddingTop: '1.5rem',

    color: '#545F7D',
    marginBottom: '2rem',
    marginTop: '2rem',
}

export default function UserInformation({ user }) {
    return (
        <div
            style={{
                backgroundColor: '#FFFFFF',
                paddingBottom: '1.5rem',
                paddingTop: '',
            }}
        >
            <ContentBox
                style={{ backgroundColor: '#FFFFFF', padding: '0rem 1.5rem' }}
                className="analytics"
            >
                <Box style={userSection}>Personal Information</Box>
                <Grid
                    style={{ marginBottom: '2rem', paddingTop: '' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        <Box style={userNameStyle}>FULL NAME</Box>
                        <Box style={userValueStyle}>
                            {user?.organization.name}
                        </Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Phone Number</Box>
                        <Box style={userValueStyle}>{user?.phonenumber}</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Email Address</Box>
                        <Box style={userValueStyle}>{user?.email}</Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Bvn</Box>
                        <Box style={userValueStyle}>07060780922</Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Gender</Box>
                        <Box style={userValueStyle}>{user?.gender}</Box>
                    </Grid>
                </Grid>
                <Grid
                    style={{ marginBottom: '2rem' }}
                    container
                    rowSpacing={4}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={4}>
                        <Box style={userNameStyle}>Marital status</Box>
                        <Box style={userValueStyle}>Single</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={4}>
                        <Box style={userNameStyle}>Children</Box>
                        <Box style={userValueStyle}>None</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={4}>
                        <Box style={userNameStyle}>Type of residence</Box>
                        <Box style={userValueStyle}>Parent’s Apartment</Box>
                    </Grid>
                </Grid>
                <Divider />
                <Box style={userSection}>Education and Employment</Box>

                <Grid
                    style={{ marginBottom: '2rem' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>level of education</Box>
                        <Box style={userValueStyle}>B.Sc</Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>employment status</Box>
                        <Box style={userValueStyle}>Employed</Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>sector of employment</Box>
                        <Box style={userValueStyle}>FinTech</Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>Duration of employment</Box>
                        <Box style={userValueStyle}>2 years</Box>
                    </Grid>
                </Grid>

                <Grid
                    style={{ marginBottom: '2rem' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>office email</Box>
                        <Box style={userValueStyle}>{user?.email}</Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>Monthly income</Box>
                        <Box style={userValueStyle}>
                            ₦200,000.00- ₦400,000.00
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={6}>
                        <Box style={userNameStyle}>loan repayment</Box>
                        <Box style={userValueStyle}>40,000</Box>
                    </Grid>
                </Grid>
                <Divider />

                {/* lllllllllllll */}
                <Box style={userSection}>Socials</Box>
                <Grid
                    style={{ marginBottom: '2rem' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        <Box style={userNameStyle}>Twitter</Box>
                        <Box style={userValueStyle}>@grace_effiom</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Facebook</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Instagram</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                </Grid>

                <Divider />
                <Box style={userSection}>Guarantor</Box>
                <Grid
                    style={{ marginBottom: '2rem' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        <Box style={userNameStyle}>FULL NAME</Box>
                        <Box style={userValueStyle}>Debby Ogana</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Phone Number</Box>
                        <Box style={userValueStyle}>07060780922</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Email Address</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={4}>
                        {' '}
                        <Box style={userNameStyle}>Relationship</Box>
                        <Box style={userValueStyle}>Sister</Box>
                    </Grid>
                </Grid>

                <Divider />
                <Grid
                    style={{ marginBottom: '2rem', marginTop: '25px' }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        <Box style={userNameStyle}>FULL NAME</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Phone Number</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                    <Grid item lg={2.4} md={2.4} sm={2.4} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Email Address</Box>
                        <Box style={userValueStyle}>Grace Effiom</Box>
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={6}>
                        {' '}
                        <Box style={userNameStyle}>Relationship</Box>
                        <Box style={userValueStyle}>Sister</Box>
                    </Grid>
                </Grid>
            </ContentBox>
        </div>
    )
}
