"use strict"

import React from 'react'
import Comp from './Comp.jsx'


export default class App extends React.Component {

	render() {
		return <div>This is App.....
			<Comp/><Comp/>
		</div>
	}
}
