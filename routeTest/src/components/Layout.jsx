// Layout.jsx

import React, { Children } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isLoggedIn } from './Login';

function Layout({children}) {
return (
<div>
  {children}
</div>
)
}

export default Layout;
