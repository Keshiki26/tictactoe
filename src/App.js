import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import GameBoard from './GameBoard';

class App extends React.Component {
	render() {
		return (
			<Grid
				className="whole"
				container
				justify="center"
				alignItems="flex-start"
			>
				<Grid
					className="main-cont"
					container
					xs={12}
					sm={10}
					md={8}
					item
					direction="column"
					alignItems="center"
					spacing={4}
				>
					<Grid className="heading" container item xs={12} justify="center">
						<Typography variant="h3">Tic Tac Toe</Typography>
					</Grid>
					<Grid className="game-mode" container item xs={12} justify="center">
						Game Mode
					</Grid>
					<GameBoard />
				</Grid>
			</Grid>
		);
	}
}

export default App;
