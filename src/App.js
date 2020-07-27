import React, { Component } from 'react';
import CatComponent from './CatComponent';
// because you’re importing a specific thing by its export name: 
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281#36796281
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
