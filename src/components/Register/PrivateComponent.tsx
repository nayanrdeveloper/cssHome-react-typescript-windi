import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import StoreData from '../../../StoreData'

export default function PrivateComponent() {
    
  return StoreData.getLoginUser ? <Outlet /> : <Navigate to="/login" />
}
