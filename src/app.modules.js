import loadable from "react-loadable";
import React from 'react';

export const AddUser = loadable({
    loader: () => import('../src/components/addUser/addUser.component'),
    loading: () => <div>Loading...</div>
});

export const UserDetails = loadable({
    loader: () => import('../src/components/userDetails/userDetails.component'),
    loading: () => <div>Loading...</div>
})