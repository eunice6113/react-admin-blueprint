import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Intent, Spinner, Menu, MenuItem, Navbar, Alignment } from "@blueprintjs/core";
import {TabsExample} from "./example/tabsExample";
import {TreeExample} from "./example/treeExample";

function App() {

    const mySpinner = <Spinner intent={Intent.PRIMARY} />;

    const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");

    return (
        <div className="App">
            <Menu>
                <MenuItem text="Submenu">
                    <MenuItem text="Child one" />
                    <MenuItem text="Child two" />
                    <MenuItem text="Child three" />
                </MenuItem>
            </Menu>


            <Navbar>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>Blueprint</Navbar.Heading>
                    <Navbar.Divider />
                    <Button className="bp3-minimal" icon="home" text="Home" />
                    <Button className="bp3-minimal" icon="document" text="Files" />
                </Navbar.Group>
            </Navbar>


            <TabsExample id='tabs'/>
            
            <TreeExample id='trees'/>

        </div>
    );
}

export default App;
