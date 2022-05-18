import React, { FC, useState, MouseEvent, useEffect } from 'react'
import { Col, Row, Space, Tag, Table } from 'antd'
import 'antd/dist/antd.css'
import ApprovalButton from '../Button/ApprovalButton'
import { Link } from 'react-router-dom'
import { Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Grid } from '@mui/material'
import {
    Icon,
    MenuItem,
    Popover,
    Typography,
    IconButton,
    Paper,
    TextField,
} from '@mui/material'
import { Button } from 'antd'
import { Span } from 'app/components/Typography'
import { MatxMenu } from 'app/components'
import { styled, useTheme, Box } from '@mui/system'
import { SearchOutlined } from '@mui/icons-material'
import axios from 'axios'

const data = [
    {
        key: '1',
        organization: {
            name: 'james Brown',
            id: '1',
        },

        username: 'James',
        email: 'james@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'active',
    },
    {
        key: '2',
        organization: {
            name: 'Histen Brown',
            id: '2',
        },

        username: 'Histe',
        email: 'histe@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'inactive',
    },
    {
        key: '3',
        organization: {
            name: 'Fisher Brown',
            id: '3',
        },
        username: 'Jue',
        email: 'FisherBrown@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'pending',
    },
]

const data3 = [
    {
        key: '1',
        organization: {
            name: 'james Brown',
            id: '1',
        },

        username: 'James',
        email: 'james@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'active',
    },
    {
        key: '2',
        organization: {
            name: 'Histen Brown',
            id: '2',
        },

        username: 'Histe',
        email: 'histe@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'inactive',
    },
    {
        key: '3',
        organization: {
            name: 'Fisher Brown',
            id: '3',
        },
        username: 'Jue',
        email: 'FisherBrown@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'pending',
    },
]

const data2 = [
    {
        key: '1',
        organization: {
            name: 'Glory Brown',
            id: '1',
        },

        username: 'Glory',
        email: 'Glory@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'blacklisted',
    },
    {
        key: '2',
        organization: {
            name: 'Madlene Yau',
            id: '2',
        },

        username: 'Madlene',
        email: 'Madlene@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'inactive',
    },
    {
        key: '3',
        organization: {
            name: 'Rita Brown',
            id: '3',
        },
        username: 'Rita',
        email: 'Rita@gmail.com',
        phonenumber: '08909786955',
        datejoined: '12/12/2021',
        status: 'pending',
    },
]

export default function AntdTable() {
    const [dataSource, setDataSource] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)
    const [userData, setuserData] = useState()

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handlePopoverClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

    const rowElement = {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '20px',
    }

    useEffect(() => {
        setuserData(data)
        fetchRecords(1)
    }, [])

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

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    )

    const columns = [
        {
            // title: 'ORGANIZATION',
            title: (
                <div style={rowElement}>
                    <div>ORGANIZATION</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                  
                </div>
            ),
            dataIndex: 'organization',
            key: 'organization',
            render: (rowData) => (
                <Link
                    to={`/dashboard/user/${rowData.id}`}
                    style={{ color: '#545F7D' }}
                >
                    {rowData.name}
                </Link>
            ),
        },
        {
            title: (
                <div style={rowElement}>
                    <div>USERNAME</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                    {/* <button onClick={changeOrder("descent")}>down</button> */}
                </div>
            ),
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: (
                <div style={rowElement}>
                    <div>EMAIL</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                    {/* <button onClick={changeOrder("descent")}>down</button> */}
                </div>
            ),
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: (
                <div style={rowElement}>
                    <div>PHONE NUMBER</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                    {/* <button onClick={changeOrder("descent")}>down</button> */}
                </div>
            ),
            dataIndex: 'phonenumber',
            key: 'phonenumber',
        },
        {
            title: (
                <div style={rowElement}>
                    <div>DATE JOINED</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                    {/* <button onClick={changeOrder("descent")}>down</button> */}
                </div>
            ),
            dataIndex: 'datejoined',
            key: 'datejoined',
        },

        {
            title: (
                <div style={rowElement}>
                    <div>STATUS</div>

                    <div>
                        <MatxMenu
                            menuButton={
                                <UserMenu>
                                    <img src="/filter-results-button.png    " />
                                </UserMenu>
                            }
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: '20px',
                                    border: '1px solid rgba(84, 95, 125, 0.14)',
                                    borderShadow:
                                        '3px 5px 20px rgba(0, 0, 0, 0.04)',
                                    padding: '2rem',
                                }}
                            >
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Organization</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                        InputProps={{
                                            style: {
                                                height: '35px',
                                                borderRadius: '100px',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Username</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="User"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Email</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="email"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Date</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Date"
                                        suffix={<img src="/date.png" />}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Phone Number</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Phone Number"
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ p: 1 }}>
                                        <div>Status</div>
                                    </Box>
                                    <Input
                                        style={{ borderRadius: '10px' }}
                                        size="large"
                                        placeholder="Select"
                                        suffix={<img src="/Vector.png" />}
                                    />
                                </Box>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                border: '1px solid #545F7D',
                                                borderRadius: '8px',
                                                width: '100%',
                                                height: '40px',
                                            }}
                                        >
                                            Reset
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            style={{
                                                backgroundColor: '#39CDCC',
                                                borderRadius: '8px',
                                                height: '40px',
                                                width: '100%',
                                            }}
                                        >
                                            Filter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </MatxMenu>
                    </div>
                    {/* <button onClick={changeOrder("descent")}>down</button> */}
                </div>
            ),
            key: 'status',
            dataIndex: 'status',
            render: (status) => {
                console.log(status)
                if (status === 'inactive') {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '20px',
                            }}
                        >
                            <ApprovalButton
                                text="Inactive"
                                bgColor="#dbe5ff"
                                color="#545F7D"
                            />
                            <MatxMenu
                                menuButton={
                                    <UserMenu>
                                        <img src="/inelip.png" />
                                    </UserMenu>
                                }
                            >
                                <StyledItem>
                                    <Link to="/">
                                        <Icon> View Details </Icon>
                                        <Span> View Details </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Link to="/page-layouts/user-profile">
                                        <Icon> Blacklist User </Icon>
                                        <Span> Blacklist User </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Icon>Activate User </Icon>
                                    <Span> Activate User </Span>
                                </StyledItem>
                            </MatxMenu>
                        </div>
                    )
                } else if (status === 'active') {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '20px',
                            }}
                        >
                            {' '}
                            <ApprovalButton
                                text="Active"
                                bgColor="#f7fff9"
                                color="#39CD62"
                            />
                            <MatxMenu
                                menuButton={
                                    <UserMenu>
                                        <img src="/inelip.png" />
                                    </UserMenu>
                                }
                            >
                                <StyledItem>
                                    <Link to="/">
                                        <Icon> View Details </Icon>
                                        <Span> View Details </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Link to="/page-layouts/user-profile">
                                        <Icon> Blacklist User </Icon>
                                        <Span> Blacklist User </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Icon>Activate User </Icon>
                                    <Span> Activate User </Span>
                                </StyledItem>
                            </MatxMenu>
                        </div>
                    )
                } else if (status === 'blacklisted') {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '20px',
                            }}
                        >
                            <ApprovalButton
                                text="Blacklisted"
                                bgColor="#ffdee6"
                                color="#E4033B;"
                            />
                            <MatxMenu
                                menuButton={
                                    <UserMenu>
                                        <img src="/inelip.png" />
                                    </UserMenu>
                                }
                            >
                                <StyledItem>
                                    <Link to="/">
                                        <Icon> View Details </Icon>
                                        <Span> View Details </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Link to="/page-layouts/user-profile">
                                        <Icon> Blacklist User </Icon>
                                        <Span> Blacklist User </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Icon>Activate User </Icon>
                                    <Span> Activate User </Span>
                                </StyledItem>
                            </MatxMenu>
                        </div>
                    )
                } else if (status === 'pending') {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '20px',
                            }}
                        >
                            <ApprovalButton
                                text="Pending"
                                bgColor="#f2e3b1"
                                color="#E9B200"
                            />
                            <MatxMenu
                                menuButton={
                                    <UserMenu>
                                        <img src="/inelip.png" />
                                    </UserMenu>
                                }
                            >
                                <StyledItem>
                                    <Link to="/">
                                        <Icon> View Details </Icon>
                                        <Span> View Details </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Link to="/page-layouts/user-profile">
                                        <Icon> Blacklist User </Icon>
                                        <Span> Blacklist User </Span>
                                    </Link>
                                </StyledItem>
                                <StyledItem>
                                    <Icon>Activate User </Icon>
                                    <Span> Activate User </Span>
                                </StyledItem>
                            </MatxMenu>
                        </div>
                    )
                }
            },
        },
    ]

    const fetchRecords = (page) => {
        setLoading(true)

        //Actual Data Fetching Process
        axios
            .get(
                `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
            )
            .then((res) => {
                setDataSource(res.data.data)
                setTotalPages(res.data.totalPages)
                ///Fetching a Remote API but not using the data , only utilizing the pagination
                //functionality because the data received aren't coherent
                if (page === 1) {
                    setuserData(data)
                } else if (page === 2) {
                    setuserData(data2)
                } else if (page === 3) {
                    setuserData(data3)
                } else {
                    setuserData(data2)
                }
                setLoading(false)
            })
    }

   

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={userData}
            pagination={{
                pageSize: 10,
                total: totalPages,
                onChange: (page) => {
                    fetchRecords(page)
                },
            }}
            scroll={{ x: 400 }}
            options={{
                actionsColumnIndex: -1,
                // exportButton: true,
                filtering: false,
                search: false,
                padding: 'dense',
                pageSize: 10,
                paddingTop: '-100px',
                color: 'red',
                headerStyle: {
                    fontSize: '13px',
                    backgroundColor: 'white',
                    borderBottomColor: '#ccc',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    marginTop: '-100px',
                },
            }}
        />
    )
}
