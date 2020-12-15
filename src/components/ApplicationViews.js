import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";
import Login from "./fbAuth/Login";
import Register from "./fbAuth/Register";
import { ChristListAddForm } from "./ChristListAddForm";
import { ChristList } from "./ChristList";



export default function ApplicationViews() {
    const { isLoggedIn } = useContext(FirebaseContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <ChristList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/add">
                    {isLoggedIn ? <ChristListAddForm /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};