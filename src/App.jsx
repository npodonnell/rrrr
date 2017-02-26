"use strict"

import React from 'react'
import Comp from './Comp.jsx'


export default class App extends React.Component {

	render() {
		return <div><i>This is App!</i>
			<Comp/><Comp/>
		</div>
	}
}
