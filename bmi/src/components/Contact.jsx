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
            <div class="form-group">
                <form onSubmit={this.submitHandler}>
                    <h4>Name</h4>
                    <div>
                        <input class="form-control" type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <br></br>
                    <h4>Email</h4>
                    <div>
                        <input  class="form-control" type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <br>
                    </br>
                    <h4>Query</h4>
                    <div>
                        <input  class="form-control" type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Contact;
