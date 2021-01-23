import Login from '../views/account/login';
import Signup from '../views/account/signup';
import Index from '../views/dashboard/index';
import Create from '../views/storage_locations/Create';
import Edit from '../views/storage_locations/Edit';
import List from '../views/storage_locations/List';
import NotFound from '../views/commonPage/notfound';


export const accountRoutes = [{
    path: '/login',
    component: Login
}
    , {
    path: '/signup',
    component: Signup
}
    , {
    path: '/notfound',
    component: NotFound
}
]
export const Frame=[{
    path:'/home',
    component:Index
}]


export const dashboardRoutes = [{
    path: '/dashboard',
    component: Index
}]

export const stoage_locationsRoutes = [{
    path: '/storage_locations/Create',
    component: Create,
    isShow:true,
    title:'Create',
  

}, {
    path: '/storage_locations/Edit/:id?',
    component: Edit,
    isShow:true,
    title:'Edit',
    
}, {
    path: '/storage_locations/List',
    component: List,
    isShow:true,
    title:'List'
}]

export const sharedRoutes = []