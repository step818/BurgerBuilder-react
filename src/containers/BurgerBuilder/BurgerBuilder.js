import React from 'react';
import Auxillary from '../../hoc/Auxillary';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return(
            <Auxillary>
                <Burger ingredients = {this.state.ingredients} />
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;