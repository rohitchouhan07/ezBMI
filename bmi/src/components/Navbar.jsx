import React from 'react';

function Navbar (){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ez BMI</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" href="#">Calculator <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#">BMI</a>
            <a class="nav-link" href="#">About</a>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;