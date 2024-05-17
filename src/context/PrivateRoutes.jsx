import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const solanaKey = localStorage.getItem('solanakey');
    const connected = localStorage.getItem('connected');

    return (
        <Route
            {...rest}
            element={solanaKey && connected ? <Element /> : <Navigate to="/" />}
        />
    );
};

export default ProtectedRoute;
