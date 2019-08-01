import React from 'react';
import Auxillary from '../../hoc/Auxillary';

class BurgerBuilder extends React.Component {
    render() {
        return(
            <Auxillary>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;