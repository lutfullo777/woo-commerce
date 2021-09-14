import React from 'react'

const Ellipse = ({ n, color }) => {
    let components = [];
    for (let i = 0; i < n; i++) {
        components.push(<li key={i}><div style={{ width: '8.25px', height: '8.25px', backgroundColor: color, borderRadius: '50%' }}></div></li>)
    }
    return components
}

export default Ellipse
