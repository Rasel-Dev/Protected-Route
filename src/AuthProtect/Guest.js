/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../Services/Auth';

const Guest = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !Auth.isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default Guest;
