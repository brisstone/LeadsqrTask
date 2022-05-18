import React, { Fragment } from 'react'
import { Box, styled, useTheme } from '@mui/system'

import { Button, Grid, IconButton, Paper, TextField } from '@mui/material'
import { SearchOutlined, UploadFile } from '@mui/icons-material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    marginTop: '0',
    paddingLeft: '10px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const tableStyle = {
    // display: "block",
    transitionDuration: '0.3s',
    height: '92%',
    marginTop: '2rem',
}

const addRobotStlye = {
    // backgroundColor: 'red',
    display:'flex',
    alignItems:'center'
    // height:'50%'
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))
export default function Guarantor() {
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
    return (
        <div style={{ backgroundColor: 'white', marginTop:'90px'}}>
            <Fragment>
        Guarantor
            </Fragment>
        </div>
    )
}
