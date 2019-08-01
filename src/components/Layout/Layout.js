import React from 'react';

import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';

const layout = ( props ) => (
    <Auxillary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;