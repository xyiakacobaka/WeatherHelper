import React  from "react";
import '../styles/Form.css'

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Город"/>
                <button>Показать погоду</button>
            </form>
        );
    }
}

export default Form;