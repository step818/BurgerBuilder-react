import React from 'react';
import Auxillary from '../../hoc/Auxillary';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends React.Component {
    render() {
        return(
            <Auxillary>
                <Burger />
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;