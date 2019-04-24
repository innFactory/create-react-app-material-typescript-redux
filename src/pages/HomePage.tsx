import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import HomeBox from "../components/HomeBox";
import { Todo } from "../model/model";
import { RootState } from "../reducers";

interface Props extends RouteComponentProps<void> {
	todoList: Todo[];
}

function HomePage(props: Props) {
	const classes = useStyles();
	const [boxColor, setBoxColor] = React.useState("red");

	const onButtonClick = () =>
		setBoxColor(boxColor === "red" ? "blue" : "red");

	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				You have {props.todoList.length} TODOs in your list!
			</Typography>
			<div className={classes.centerContainer}>
				<HomeBox size={300} color={boxColor} />
				<Button
					className={classes.button}
					onClick={onButtonClick}
					variant="outlined"
					color="primary"
				>
					Change Color
				</Button>
			</div>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	button: {
		marginTop: 20,
	},
});

function mapStateToProps(state: RootState) {
	return {
		todoList: state.todoList,
	};
}

export default connect(mapStateToProps)(HomePage);
