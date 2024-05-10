import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Cart from '@/pages/Cart';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import MyOrders from '@/pages/Auth/MyOrders';
import DetailOrder from '@/pages/DetailOrder';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/pedido/:identify',
                component: MyOrders,
                name: 'order.detail',
                props: true,
            },
            {
                path: '/meus-pedidos',
                component: MyOrders,
                name: 'my.orders'
            },
            {
                path: '/loja/:companyUrl',
                component: Products,
                name: 'products',
                props: true
            },
        
            {
                path: '/carrinho',
                component: Cart,
                name: 'cart'
            },
        
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ] 
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [
            {
                path: '/entrar',
                component: Login,
                name: 'login'
            },
        
            {
                path: '/register',
                component: Register,
                name: 'register'
            },
        ]
    }
]

export default routes