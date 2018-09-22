import React from "react";


const Nav = props => (
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <div>
                <h1>Clicky Game</h1>
            </div>
            <div>
                 <h1>{props.result}</h1>
             </div>
            <div>
                <h1>Score:   {props.score} | Top Score: {props.topscore}</h1>
            </div>
        </nav>
    </div>

);

export default Nav;