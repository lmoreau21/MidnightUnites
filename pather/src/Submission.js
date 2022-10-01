import React, {Component} from 'react';


class Submission extends Component {
    render() {
        return(
            <>
                <h1> Upload degree audit here!</h1>
                <input type="file" name="file"></input>
                <a href="/Audit" ><u>SUBMIT</u></a>
            </>
        )
    }
}

export default Submission