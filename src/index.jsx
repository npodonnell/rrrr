"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		ReactDOM.render(<App/>, document.getElementById('mount'))
	})
}

ReactDOM.render(<App/>, document.getElementById('mount'))
