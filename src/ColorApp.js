import React, { useState, useContext } from 'react';

const ColorApp = () => {
    const colors = [
        {
            name: 'blue',
            label: 'Blue',
            color: '#78d6f5'
        },
        {
            name: 'green',
            label: 'Green',
            color: '#4df0a6'
        },
        {
            name: 'red',
            label: 'Red',
            color: '#fc805d'
        }
    ];
    const [activeColor, setActiveColor] = useState('blue');

    const setColor = (color) => {
        setActiveColor(color);
        localContext.updateBgColor(color);
    }

    return(
        <>  
        <div style={{'background': activeColor}}>
            <h2>Color App</h2>
            
            <br></br><br></br>
            Active Color - {activeColor}
            <br></br><br></br>
            <span className='tile' style={{'background': activeColor}}>New Box</span>
            <br></br><br></br>
            </div>
        </>
    )
}

export default ColorApp;