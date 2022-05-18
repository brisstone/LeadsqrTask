import React, { Fragment, useState } from 'react'
import { styled, useTheme } from '@mui/system'
import { Box, Button, Card, IconButton, TextField } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import ButtonComp from '../shared/Button/ButtonComp'
import MUITab from 'app/components/Tab/MUITab'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const PlainContentBox = {
    margin: '60px',
    // [theme.breakpoints.down('sm')]: {
    //     margin: '16px',
    // },
}

export default function Users() {

    const params = useParams()

    const tabs = ['All', 'Shipped', 'Processing', 'Completed']
    const [statusFilter, setStatusFilter] = React.useState(0)
    const [startDate, setStartDate] = React.useState(
        new Date('2019-01-01T00:00:00')
    )
    const [finishDate, setFinishDate] = React.useState(
        new Date('2022-01-01T00:00:00')
    )
    const [priceFilter, setPriceFilter] = React.useState([0, 200])
    const [sorting, setSorting] = React.useState(['Orders.createdAt', 'desc'])
    const [user, setuser] = useState()

    const query = {
        timeDimensions: [
            {
                dimension: 'Orders.createdAt',
                dateRange: [startDate, finishDate],
                granularity: 'day',
            },
        ],
        order: {
            [`${sorting[0]}`]: sorting[1],
        },
        dimensions: [
            'Users.id',
            'Orders.id',
            'Orders.size',
            'Users.fullName',
            'Users.city',
            'Orders.price',
            'Orders.status',
            'Orders.createdAt',
        ],
        filters: [
            {
                dimension: 'Orders.status',
                operator: tabs[statusFilter] !== 'All' ? 'equals' : 'set',
                values: [`${tabs[statusFilter].toLowerCase()}`],
            },
            {
                dimension: 'Orders.price',
                operator: 'gt',
                values: [`${priceFilter[0]}`],
            },
            {
                dimension: 'Orders.price',
                operator: 'lt',
                values: [`${priceFilter[1]}`],
            },
        ],
    }

    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
    }

    const pageTitle = {
        fontFamily: 'Work Sans',
        fontDtyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '28px',

        color: '#213F7D',
    }

    const backArrow = {
        fontFamily: 'Work Sans',
        fontDtyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',

        color: '#545F7D',
    }

    const CardRoot = styled(Card)(({ theme }) => ({
        marginBottom: '24px',
        padding: '24px !important',
        border: '1px solid #DFE0EB',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '16px !important',
        },
        height: '100%',
    }))

    const data = [
        {
            key: '1',
            organization: {
                name: 'james Brown',
                id:'1'
            },
        
            username: 'James',
            email:'james@gmail.com',
            gender:'female',
            phonenumber: '08909786955',
            datejoined: '12/12/2021',
            status: 'active',
        },
        {
            key: '2',
            organization: {
                name: 'Histen Brown',
                id:'2'
            },
         
            username: 'Histe',
            email:'histe@gmail.com',
            gender:'female',
            phonenumber: '08909786955',
            datejoined: '12/12/2021',
            status: 'inactive',
        },
        {
            key: '3',
            organization: {
                name: 'Fisher Brown',
                id:'3'
            },
            username: 'Jue',
            email:'FisherBrown@gmail.com',
            gender:'male',
            phonenumber: '08909786955',
            datejoined: '12/12/2021',
            status: 'pending',
        },
    ]




    const getData = async()=>{
        data?.filter(e=> e.key == '1')
  

        console.log(params)
        setuser(data?.filter(e=> e.key == params.id)[0])
    }

    React.useEffect(() => {
        getData()
    
    }, [])
    
    return (
        <div style={{ backgroundColor: '', marginTop: '90px' }}>
            <Fragment>
                <div style={PlainContentBox}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: '10px',
                            borderRadius: 1,
                            cursor: 'pointer',
                        }}
                    >
                        <Link to="/dashboard/default">
                            <Box>
                                <img src="/arrowback.png" />
                            </Box>{' '}
                          
                        </Link>
                        <Link to="/dashboard/default">
                           
                            <Box style={backArrow}>Back to Users</Box>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            columnGap: '10px',
                            borderRadius: 1,
                        }}
                    >
                        <Box style={pageTitle}>User Details</Box>
                        <Box style={rowStyle}>
                            <Box>
                                <ButtonComp
                                    text="Blacklist User"
                                    color="#E4033B"
                                />
                            </Box>
                            <Box>
                                <ButtonComp
                                    text="Activate User"
                                    color="#39CDCC"
                                />
                            </Box>
                        </Box>
                    </Box>
                </div>

                <ContentBox className="analytics">
                    <ContentBox className="analytics">
                        <MUITab user={user} />
                    </ContentBox>
                 
                </ContentBox>
            </Fragment>
        </div>
    )
}
