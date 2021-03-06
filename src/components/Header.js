import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../src/logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Header.module.css';

import Home from '../pages/home/Home';
import Task_1 from '../pages/task_1/Task_1';
import Task_2 from '../pages/task_2/Task_2';
import Task_3 from '../pages/task_3/Task_3';
import Task_4 from '../pages/task_4/Task_4';

export default function Header() {
  return (
    <>
      <Navbar className={styles.navbar}>
        <Navbar.Brand className={styles.navbarBrand} href="/">
          <img src={logo} className={styles.logo} alt="Logo" />
          Homework 1
        </Navbar.Brand>
        <Navbar.Collapse className={styles.navbarPages}>
          <Nav>
            <Nav.Link className={styles.navItem} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/task_1">
              Task_1
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/task_2">
              Task_2
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/task_3">
              Task_3
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/task_4">
              Task_4
            </Nav.Link>
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
