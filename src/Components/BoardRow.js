import { Grid, Typography } from '@material-ui/core';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import React from 'react';

export default function BoardRow(props) {
	const borders =
		props.n === 'one'
			? ['edgeOne', 'middleOne', 'edgeTwo']
			: props.n === 'two'
			? ['edgeThree', 'middleTwo', 'edgeFour']
			: props.n === 'three'
			? ['edgeFive', 'middleThree', 'edgeSix']
			: [];

	return (
		<Grid className={`row-${props.n}`} container item xs={12} justify="center">
			{props.r.map((v, i) => (
				<Grid
					container
					className={`${borders[i]}  block`}
					xs={4}
					item
					justify="center"
					key={i}
					onClick={(e) => {
						if (v === 0) {
							props.change(
								props.r
									.slice(0, i)
									.concat(props.current)
									.concat(props.r.slice(i + 1, props.r.length)),
								props.n,
								i
							);
						}
					}}
				>
					<Typography variant="h1">{v === 0 ? '　' : v}</Typography>
				</Grid>
			))}
		</Grid>
	);
}
