import React from 'react'
import {Outlet,Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Button from '@mui/material/Button';
import NewReport from './NewReport';
function Main() {
  return (
    <div>
    <Button href='/newreport'>Add Report</Button>
    <Dashboard/>
    <Outlet/>
    </div>
  )
}

export default Main