import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import UserActionPage from "./pages/UserActionPage/UserActionPage";
import UserListPage from "./pages/UserListPage/UserListPage";
import DoctorListPage from "./pages/DoctorListPage/DoctorListPage";
import DoctorActionPage from "./pages/DoctorActionPage/DoctorActionPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage/>
    },
    {
        path: '/user-list',
        exact: false,
        main: () => <UserListPage/>
    },
    {
        path: '/doctor-list',
        exact: false,
        main: () => <DoctorListPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/user/add',
        exact: false,
        main: ({history}) => <UserActionPage history={history}/>
    },
    {
        path: '/doctor/add',
        exact: false,
        main: ({history}) => <DoctorActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '/user/:id/edit',
        exact: false,
        main: ({match, history}) => <UserActionPage match={match} history={history}/>
    },
    {
        path: '/doctor/:id/edit',
        exact: false,
        main: ({match, history}) => <DoctorActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    },
    {
        path: '/sign-in',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;
