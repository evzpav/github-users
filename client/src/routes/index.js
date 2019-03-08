import Users from '../components/Users'
import Details from '../components/Details'

export default [
    {
        path: '/',
        component: Users,

    },
    {path: '/details=:username', component: Details, props: true}

]