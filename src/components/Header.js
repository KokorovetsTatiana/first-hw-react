import React, { Component } from "react";
import {
    Navbar,
    Nav
} from "react-bootstrap";
import logo from "../../src/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Task_1 from "../pages/Task_1";
import Task_2 from "../pages/Task_2";
import Task_3 from "../pages/Task_3";
import Task_4 from "../pages/Task_4";

export default function Header() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                className="logo"
                                alt="Logo"
                            />Homework 1
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="navItem" href="/">Home</Nav.Link>
                                <Nav.Link className="navItem" href="/task_1">Task_1</Nav.Link>
                                <Nav.Link className="navItem" href="/task_2">Task_2</Nav.Link>
                                <Nav.Link className="navItem" href="/task_3">Task_3</Nav.Link>
                                <Nav.Link className="navItem" href="/task_4">Task_4</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/task_1" component={Task_1} />
                        <Route exact path="/task_2" component={Task_2} />
                        <Route exact path="/task_3" component={Task_3} />
                        <Route exact path="/task_4" component={Task_4} />
                    </Switch>
                </Router>

                </>
        );
    }
