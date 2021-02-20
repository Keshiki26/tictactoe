import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import BoardRow from './Components/BoardRow';

const initialRows = {
	rowOne: [0, 0, 0],
	rowTwo: [0, 0, 0],
	rowThree: [0, 0, 0],
};

class GameBoard extends Component {
	state = { ...initialRows, current: 'X', counter: 0 };
	// 0 === blank
	// 1 === X
	// 2 === O
	changeBlock = (r, n, i) => {
		if (n === 'one') {
			this.setState({
				rowOne: r,
				current: this.state.current === 'X' ? 'O' : 'X',
				counter: this.state.counter + 1,
			});
		} else if (n === 'two') {
			this.setState({
				rowTwo: r,
				current: this.state.current === 'X' ? 'O' : 'X',
				counter: this.state.counter + 1,
			});
		} else if (n === 'three') {
			this.setState({
				rowThree: r,
				current: this.state.current === 'X' ? 'O' : 'X',
				counter: this.state.counter + 1,
			});
		}
		this.check(r, n, i);
	};
	check = (r, n, i) => {
		//check the current array:
		if (r.every((c) => c === r[i])) console.log('rowWon');
		//check other rows
		const col =
			n === 'one'
				? [this.state.rowTwo[i], this.state.rowThree[i], r[i]]
				: n === 'two'
				? [this.state.rowOne[i], this.state.rowThree[i], r[i]]
				: n === 'three'
				? [this.state.rowOne[i], this.state.rowTwo[i], r[i]]
				: [];

		if (col.every((c) => c === r[i])) console.log('CWon');
		//check diagonally
		let diag = [];
		if (n !== 'two') {
			if (i === 0) {
				diag =
					n === 'one'
						? [this.state.rowTwo[i + 1], this.state.rowThree[i + 2], r[i]]
						: [this.state.rowTwo[i + 1], this.state.rowOne[i + 2], r[i]];
			} else if (i === 2) {
				diag =
					n === 'one'
						? [this.state.rowTwo[i - 1], this.state.rowThree[i - 2], r[i]]
						: [this.state.rowTwo[i - 1], this.state.rowOne[i - 2], r[i]];
			}
		} else if (n === 'two' && i === 1) {
			diag = [
				this.state.rowOne[i - 1],
				this.state.rowOne[i + 1],
				this.state.rowThree[i - 1],
				this.state.rowThree[i + 1],
				r[i],
			];
		}
		if (diag.length !== 0) {
			if (diag.every((c) => c === r[i])) console.log('diagW');
		}
		// if all blocks selected:
		// if (this.state.counter >= 8) this.reset();
	};
	reset = () => {
		this.setState({ current: this.state.current, ...initialRows });
	};

	render() {
		return (
			<Grid item container xs={12} className="whole-board" justify="center">
				<Grid
					item
					container
					xs={8}
					className="board-cont"
					justify="center"
					alignItems="center"
				>
					<BoardRow
						r={this.state.rowOne}
						n="one"
						change={this.changeBlock}
						current={this.state.current}
					/>
					<BoardRow
						r={this.state.rowTwo}
						n="two"
						change={this.changeBlock}
						current={this.state.current}
					/>
					<BoardRow
						r={this.state.rowThree}
						n="three"
						change={this.changeBlock}
						current={this.state.current}
					/>
				</Grid>
				<button onClick={() => this.reset()}>reset</button>
			</Grid>
		);
	}
}
export default GameBoard;
