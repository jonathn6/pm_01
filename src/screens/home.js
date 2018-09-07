import React from 'react';
import '../styles/app.css';

//think of react components as functions
class home extends React.Component {
     
    render() {

            return (  
                
                <div className="App">      
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Property Management</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/loadproperty">View Saved Properties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/enterproperty">Enter New Property</a>
                            </li>
                            </ul>
                        </div>
                    </nav>
              </div>

            );
        }
}
        
export default home