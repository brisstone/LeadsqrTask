import {
    Card,
    Grid,
    Button,
    Checkbox,
    CircularProgress,
    FormControlLabel,
    IconButton,
} from '@mui/material'
import React, { useState } from 'react'
import useAuth from 'app/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { Box, styled, useTheme } from '@mui/system'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Paragraph, Span } from 'app/components/Typography'
import { SearchOutlined } from '@mui/icons-material'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',

}))

const IMG = styled('img')(() => ({
    width: '100%',
}))

const LOGINBODY = {

    xs:{
        padding:'0'
    }

}

const searchBtnStyle = {
    color: '#39CDCC',
    fontFamily: 'Mulish',
    fontSize: '12px',
    marginRight: '10px',
    fontWeight: '600',
    cursor:'pointer'
}

const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '6px',
    left: '25px',
}))

const JwtLogin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: 'jason@ui-lib.com',
        password: 'dummyPass',
    })
    const [message, setMessage] = useState('')
    const { login } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const { palette } = useTheme()
    const textError = palette.error.main
    const textPrimary = palette.primary.main

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            await login(userInfo.email, userInfo.password)
            navigate('/')
        } catch (e) {
            console.log(e)
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <div className='login_page_body' >
            <Box style={{ marginBottom: '50px' }}>
                <img src="/logo.png" />
            </Box>

            <Grid
                container
                style={{ height: '100%' }}
                justify="center"
                alignItems="center"
            >
                <Grid item lg={6} md={6} sm={6} xs={12}>
                 
                    <Box style={{ maxWidth: '600px' }}>
                        <img
                            style={{ maxWidth: '100%' }}
                            src="/pablo-sign-in 1.png"
                            alt=""
                        />
                    </Box>

                  
                </Grid>
                <Grid
                    item
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    justify="center"
                    alignItems="center"
                    style={{ backgroundColor: '' }}
                >
                    <ContentBox
                    className='login_div'
                        
                    >
                        <img src="/Welcome!.png" alt="" />
                     
                        <Box
                            style={{
                                fontFamily: 'Mulish',
                                fontWeight: '200',
                                fontSize: '20px',
                                color: '#545F7D;',
                                marginBottom: '3rem',
                                marginTop: '.8rem',
                            }}
                        >
                            Enter details to login.
                        </Box>
                        <ValidatorForm onSubmit={handleFormSubmit}>
                            <TextValidator
                                sx={{ mb: 3, width: '100%' }}
                                variant="outlined"
                                // size="small"
                                label="Email"
                                onChange={handleChange}
                                type="email"
                                name="email"
                                value={userInfo.email}
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    'this field is required',
                                    'email is not valid',
                                ]}
                                InputProps={{
                                    style: {
                                        color: '#545F7D',

                                        borderRadius: '8px',
                                        paddingRight: '0',
                                        height: '50px',
                                        // width: '400px',
                                    },
                                }}
                            />
                            <TextValidator
                                sx={{ mb: '12px', width: '100%' }}
                                label="Password"
                                variant="outlined"
                                // size="small"
                                onChange={handleChange}
                                name="password"
                                type="password"
                                value={userInfo.password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                InputProps={{
                                    style: {
                                        color: '#545F7D',

                                        borderRadius: '8px',
                                        paddingRight: '0',
                                        height: '50px',

                                        // width: '400px',
                                    },
                                    endAdornment: (
                                        <div style={searchBtnStyle}>SHOW</div>
                                    ),
                                }}
                            />
                            <Box
                                style={{
                                    color: '#39CDCC',
                                    margin: '.5rem 0',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                }}
                                // onClick={() =>
                                //     navigate('/session/forgot-password')
                                // }
                            >
                                FORGOT PASSWORD?
                            </Box>
                            <Box position="relative">
                                <Button
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#39CDCC',
                                        marginTop: '1rem',
                                        height: '50px',
                                    }}
                                    variant="contained"
                                    // color="#39CDCC"
                                    disabled={loading}
                                    type="submit"
                                >
                                    LOG IN
                                </Button>
                                {loading && (
                                    <StyledProgress
                                        size={24}
                                        className="buttonProgress"
                                    />
                                )}
                            </Box>

                            {message && (
                                <Paragraph sx={{ color: textError }}>
                                    {message}
                                </Paragraph>
                            )}
                        </ValidatorForm>
                    </ContentBox>
                </Grid>
            </Grid>
        </div>
    )
}

export default JwtLogin
