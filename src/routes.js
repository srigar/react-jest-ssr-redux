import React from 'react';
import { AddUser, UserDetails } from './app.modules';

export default [
    {
        path: "/",
        render: () => {
            return <h2>Home Page</h2>
        },
        exact: true
    },
    {
        path: "/add",
        component: AddUser,
        exact: true
    },
    {
        path: "/users",
        component: UserDetails,
        exact: true
    }
];
