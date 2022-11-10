import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Card from "./components/card";
import Edit from "./components/edit";

function App() {
    return (
        <div className="app">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <Route exact path="/" component={Card}/>
                        <Route path="/edit" component={Edit}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
