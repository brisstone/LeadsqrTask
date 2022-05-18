import Mock from '../mock'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'jwt_secret_key'
const JWT_VALIDITY = '7 days'

const userList = [
    {
        id: 1,
        role: 'SA',
        name: 'Jason Alexander',
        username: 'jason_alexander',
        email: 'jason@ui-lib.com',
        avatar: '/assets/images/face-6.jpg',
        age: 25,
    },
]




Mock.onPost('/api/auth/login').reply(async (config) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const { email } = JSON.parse(config.data)
        const user = userList.find((u) => u.email === email)

        if (!user) {
            return [400, { message: 'Invalid email or password' }]
        }
        const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: JWT_VALIDITY,
        })

        return [
            200,
            {
                accessToken,
                user: {
                    id: user.id,
                    avatar: user.avatar,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
            },
        ]
    } catch (err) {
        console.error(err)
        return [500, { message: 'Internal server error' }]
    }
})


Mock.onGet('/api/auth/profile').reply((config) => {
    try {
        const { Authorization } = config.headers
        if (!Authorization) {
            return [401, { message: 'Invalid Authorization token' }]
        }

        const accessToken = Authorization.split(' ')[1]
        const { userId } = jwt.verify(accessToken, JWT_SECRET)
        const user = userList.find((u) => u.id === userId)

        if (!user) {
            return [401, { message: 'Invalid authorization token' }]
        }

        return [
            200,
            {
                user: {
                    id: user.id,
                    avatar: user.avatar,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                },
            },
        ]
    } catch (err) {
        console.error(err)
        return [500, { message: 'Internal server error' }]
    }
})


