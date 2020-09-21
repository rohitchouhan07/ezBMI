import React from 'react'

function Result(props){

    return(
        <div class="card mx-auto rounded bg-light mb-4">
            <div class="card-body">
            {props.range}
            </div>
        </div>
    );
}

export default Result;