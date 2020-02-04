// prettier-ignore
import { Dialog, DialogActions, DialogTitle, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StyledButton } from 'create-react-app-lib';
import * as React from 'react';

import { useActions } from '../actions';
import * as TodoActions from '../actions/todo';

interface Props {
	open: boolean;
	onClose: () => void;
}

export function TodoDialog(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();
	const [newTodoText, setNewTodoText] = React.useState("");
	const todoActions = useActions(TodoActions);

	const handleClose = () => {
		todoActions.addTodo({
			id: Math.random(),
			completed: false,
			text: newTodoText,
		});
		onClose();

		// reset todo text if user reopens the dialog
		setNewTodoText("");
	};

	const handleChange = (event: any) => {
		setNewTodoText(event.target.value);
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a new TODO</DialogTitle>
			<TextField
				id="multiline-flexible"
				multiline
				value={newTodoText}
				onChange={handleChange}
				className={classes.textField}
			/>
			<DialogActions>
				<StyledButton text="OK" color="#123456" onClick={handleClose}/>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});
