"use strict"

import React from 'react'

export default class Comp extends React.Component {

	render() {

		setTimeout(() => {
			x = y + 4
			alert(x)
		}, 10000)

		return <div><b>This is a component.... Edit Comp.js and save and watch us update!</b></div>
	}
}
