import React from 'react'
import NavigationBar from "./NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
        <div>
            <NavigationBar />
            {this.props.children}
        </div>
        );
    }
}

export default App;