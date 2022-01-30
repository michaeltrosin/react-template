import React, { Component } from 'react';

import pepega from '@asset/pepega.jpg';

class App extends Component<any, any> {
    render(): JSX.Element {
        return (
            <div id='app'>
                <img src={pepega} alt='a'/>
            </div>
        );
    }
}

export default App;
