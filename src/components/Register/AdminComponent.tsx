import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import StoreData from '../../../StoreData'
import axios from 'axios'

export default function AdminComponent() {
    useEffect(() => {
        axios.get('http://localhost:7000/user/loggeduser', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
            }
        })
        .then((result) =>{
            if (result.data.user){
               StoreData.setIsAdminUser(true);
            }
            else{
                StoreData.setIsAdminUser(false);
            }
        })
        .catch((error) => {
            StoreData.setIsAdminUser(false);
        })
    })
    return StoreData.isAdminUser ? <Outlet /> : <Navigate to="/admin-login" />
}
