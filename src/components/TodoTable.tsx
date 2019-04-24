// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import * as TodoActions from "../actions/todo";
import { Todo } from "../model/model";

interface Props {
	todoList: Todo[];
	actions: typeof TodoActions;
}

function TodoTable(props: Props) {
	const { todoList, actions } = props;
	const classes = useStyles();

	const onRowClick = (todo: Todo) => {
		if (todo.completed) {
			props.actions.uncompleteTodo(todo.id);
		} else {
			props.actions.completeTodo(todo.id);
		}
	};

	return (
		<Paper className={classes.paper}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="normal">Completed</TableCell>
						<TableCell padding="normal">Text</TableCell>
						<TableCell padding="normal">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todoList.map(n => {
						return (
							<TableRow
								key={n.id}
								hover
								onClick={event => onRowClick(n)}
							>
								<TableCell padding="none">
									<Checkbox checked={n.completed} />
								</TableCell>
								<TableCell padding="none">{n.text}</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() => actions.deleteTodo(n.id)}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
	},
});

export default TodoTable;
