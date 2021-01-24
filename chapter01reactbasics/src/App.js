import React, {Component} from "react";
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Chapter 01 Basics</h1>
                <Person name="Naman" age="28">Hobbies: TBD</Person>
                <Person name="Sidarth" age="35"/>
            </div>);
    }
}

export default App;
