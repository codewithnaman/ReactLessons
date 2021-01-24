# Chapter 01 React Basics

## Introduction
React is a javascript for building user interfaces. React code runs on a browser i.e. client side. We can break any
web page in number of components; like header, footer, main content etc.; these components can be broken into multiple
small components. With React, it is easy to manage and reuse code for components.

### Create React application and File Structure
To create a new React application we will use command `npx create-react-app <application_name>`. Let's understand the
folder structure created from above command.

* package.json - This file contains the React and other dependencies required by application. Also, it contains build and run scripts.
* public - This folder is served by web-server; It just contains the file which we can edit all the scripts file contain by src folder.
* index.html - It contains `<div id="root"></div>` which will mount our root React component.
* src - This contains all the source files for the React project.
* index.js - This file contains the `ReactDOM.render(<App/>,document.getElementById('root'))` which will mount our root react component on the index.html on div with id root.
* App.js - This file is exporting the component App; which we are using to render in index.js.


### Component Basics
To Create a component we will have class like below:
```js
import React, {Component} from "react";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Chapter 01 Basics</h1>
            </div>);
    }
}

export default App;
```
Here we are importing the React and Component class from react library; and our Component class is extending Component. 
The Component class has one method render; which React calls to create and mount the component. This render method needs
to return some HTML from App class which will be rendered by React.renderDOM() method to an HTML div or element. We have
exported this class and imported it in index.js and rendered the component on root div.

We are writing the HTML in js file; this is kind of syntactical sugar on HTML; and generally to write component on these 
file we use the JSX or JS files.

Let's see actually how above code is rendered in background by React. If we see the HTML code is converted like below:
```js
 return React.createElement('div', {className: 'App'},
            React.createElement('h1',null,'Chapter 01 Basics')
        );
```
Behind the scenes React calls the createElement method; which takes the tag to create as first argument, Properties as 
second argument and any number of children as third argument.

Limitation of JSX has class as reserved keyword; so we are using className. So JSX can't use the keyword of JS and we have
other attributes provided by React like for class we have className. The HTML code we are returning from JS file is not 
actually HTML tags; React is converting them behind the scenes and react defines the attributes on these elements.

The other restriction of JSX is that we can't return multiple root tags from render method. i.e. below is not valid
```js
render() {
        return (
            <div className="App">
                <h1>Chapter 01 Basics</h1>
            </div>
        <h2>Welcome</h2>);
    }
```

Till now, we have created component using Class. React provides another way to define the components in functional style
Let's have a look on the functional component.

#### Functional Component
In react we can also define a component like below:
```js
import React from "react";

const person = () => {
    return (
        <div>
            <p><b>Name :</b> Naman Gupta</p>
            <p><b>Age  :</b> 28</p>
        </div>
    );
}

export default person;
```
We are creating a ES6 function and returning from the js file which contains the JSX code syntax. To declare it as React
Component we need to import React. Now we can import in any of our React component and can use as the custom tag; This 
is best practice starting the component with Capital letter; as we small letters are used to define by react for HTML tags.

The components are basic building block of React applications; As they are reusable and configurable. Let's see how to 
make a component configurable in both Class based component and Function based component.

To configure the component we need to provide properties to inject or configure the component property and to take
the data from component we need to configure the listeners on the component. Let's pass the name and age in person
component which had the static data.

To print dynamic content in component we can add the attributes in tag; and then we will render in our component using 
{}. Let's see in below example:
```js
import React from "react";

const person = (props) => {
    return (
        <div>
            <p><b>Name :</b> {props.name}</p>
            <p><b>Age  :</b> {props.age}</p>
        </div>
    );
}

export default person;
```

Whatever we passed from the attribute will be available in props. Let's see how we can use it our root component.
```js
    render() {
        return (
            <div className="App">
                <h1>Chapter 01 Basics</h1>
                <Person name="Naman" age="28"></Person>
                <Person name="Sidarth" age="35"></Person>
            </div>);
    }
```
Now just consider we have some input in the person tag like `<Person name="Naman" age="28">Hobbies: TBD</Person>`. 
To access the component we use `<p>{props.children}</p>` in our component.

In Class based component we need not to pass the props as the function argument; props is available there using this.props.
We can directly access props using this.props in class based component.

#### Component State Management