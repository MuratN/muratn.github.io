import React from 'react';

const styles = {
    wrapper: {
        width: '100px',
        margin: '0 auto'
    },
    div: {
        display: 'flex',
        justifyContent: 'center',
        margin: '.5rem'
    }
}

export default () =>
    <div style={styles.wrapper}>
        <div style={styles.div} className="lds-ripple"><div></div><div></div></div>
    </div>;