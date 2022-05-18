import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import Guarantor from './Guarantor/Guarantor.jsx'

import Jobs from './jobs/Jobs'

import Audit from './audit/Audit'
import Respositories from './respositories/Respositories'

import Users from './users/Users'

const Dashboard = Loadable(lazy(() => import('./Dashboard')))

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        element: <Dashboard />,
    },
    {
        path: '/dashboard/user/:id',
        element: <Users />,
    },
    {
        path: '/dashboard/guarantor',
        element: <Guarantor />,
    },

    {
        path: '/dashboard/users',
        element: <Users />,
    },

    {
        path: '/dashboard/jobs',
        element: <Jobs />,
    },
 
    {
        path: '/dashboard/audit',
        element: <Audit />,
    },
    {
        path: '/dashboard/repositories',
        element: <Respositories />,
    },
]

export default dashboardRoutes
