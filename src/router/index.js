import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/home';
import Reject from '@/pages/reject';

Vue.use(Router);

// config router page
const routeList = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/404',
        name: 'reject',
        component: Reject,
    },
    {
        path: '*',
        redirect: '404',
    },
];

// before enter intercept function
const routerBeforeEach = (to, from, next) => {
    next();
};

// after enter intercept function
const routerAfterEach = () => {};

const routerInstance = new Router({
    routes: routeList,
});

routerInstance.beforeEach(routerBeforeEach);
routerInstance.afterEach(routerAfterEach);

export default routerInstance;
