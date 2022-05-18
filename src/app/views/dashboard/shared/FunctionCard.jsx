import styled from '@emotion/styled'
import { Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../dashboard.scss'

const CardRoot = styled(Card)(({ theme }) => ({
    marginBottom: '24px',
    padding: '24px !important',
    border: '1px solid #DFE0EB',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '16px !important',
    },
    height: '100%',
}))

const CardColumn = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirectiom: 'row',
    columnGap: '40px',
    alignItems: 'center',
    justifyContent: 'space-between',

}))

const CardRow = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirectiom: 'row',
    rowGap: '50px',

}))

export default function FunctionCard({ name, count, iconUrl }) {
    return (
        <div>
            <CardRoot>
                <Box className="">
                    <img src={`${iconUrl}`} className="funct_icon" />
                </Box>
                <Box className="funct_name">{name}</Box>
                <Box className="funct_count">{count}</Box>
            
            </CardRoot>
        </div>
    )
}
