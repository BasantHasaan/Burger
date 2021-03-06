import React, { Component } from 'react';
import Aux from '../../hoc/Aux'; 
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salade: 1,
            cheese: 2,
            meat: 2,
            bacon: 1
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div> Builder </div>
            </Aux>
        );
    }
}
export default BurgerBuilder;