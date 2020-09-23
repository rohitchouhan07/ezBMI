import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId : '',
             title : '',
             body: ''
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const {userId, title, body} = this.state;
        return (
            <div class="card mx-auto rounded col-4 bg-light mb-4 p-3">

                <form onSubmit={this.submitHandler}>
                    <h4>Name</h4>
                    <div>
                        <input class="form-control col" type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <br></br>
                    <h4>Email</h4>
                    <div>
                        <input  class="form-control col" type="email" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <br>
                    </br>
                    <h4>Query</h4>
                    <div>
                        <input  class="form-control col" type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <br></br>
                    <button type="button" class="btn btn-primary btn ">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Contact;
