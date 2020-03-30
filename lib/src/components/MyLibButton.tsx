import { Button, makeStyles } from '@material-ui/core';
import * as React from 'react';

interface Props {
	color: any;
	onClick: () => void;
	text: string;
}

export function MyLibButton(props: Props) {
	const classes = useStyles();

	const { color, onClick, text } = props;

	return (
		<div className={classes.root}>
			<Button onClick={onClick} style={{ color: color }}>
				{text}
			</Button>
		</div>
	);
}

const useStyles = makeStyles({
	root: {},
});
