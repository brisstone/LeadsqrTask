export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'home 1.png',
    },
    {
        name: 'Users',
        path: '/dashboard/user/2',
        icon: 'user-friends 1.png',
    },
    {
        name: 'Guarantors',
        path: '/dashboard/guarantor',
        icon: 'users 1 (1).png',
    },
    {
        name: 'Loans',
        path: '/dashboard/triggers',
        icon: 'sack 1.png',
    },
    {
        name: 'Decision Models',
        path: '/dashboard/schedules',
        icon: 'handshake-regular 1.png',
    },
    {
        name: 'Savings',
        path: '/dashboard/queues',
        icon: 'piggy-bank 1.png',
    },
    {
        name: 'Loan Requests',
        path: '/dashboard/loan-request',
        icon: 'Group 104.png',
    },

    {
        name: 'Session/Auth',
        icon: 'security',
        children: [
            {
                name: 'Sign in',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Sign up',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },

  

]
