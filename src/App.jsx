"use strict"

import React from 'react'
import Comp from './Comp.jsx'

export default class App extends React.Component {

	render() {
		return (
			<div>
				<h1>Demo App!</h1>
				<br/>
				<img src="/static/demo.jpg" />
				<Comp/><br/>
				<Comp/><br/>
			</div>
		)
	}
}
