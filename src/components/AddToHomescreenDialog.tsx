// prettier-ignore
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import * as React from 'react';

interface Props {
	open: boolean;
	onClose: () => void;
}

export function AddToHomescreenDialog(props: Props) {
	const { open, onClose } = props;

	const handleClose = () => {
		onClose();
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add to Homescreen</DialogTitle>
			<DialogContent>
				<Typography>1. On IOS open with Safari</Typography>
				<Typography>2. Open Share Dialog</Typography>
				<Typography>3. Click Add To Homescreen</Typography>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
}
