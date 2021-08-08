import React from 'react';
import Auth from '../Services/Auth';

const Dashboard = (props) => (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to Dashboard</p>
        <button
            type="button"
            onClick={() => {
                Auth.logout(() => {
                    props.history.push('/login');
                });
            }}
        >
            Logout
        </button>
    </div>
);

export default Dashboard;
