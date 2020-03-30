import { Paper } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MyLibButton } from '../components';
import { withTheme } from './index.stories';

storiesOf('MyLibButton', module).add('default', () => {
	return withTheme(
		<Paper style={{ width: 750, height: 750, margin: 20 }}>
			<MyLibButton color="#123456" text="test" onClick={() => console.log('ClickTest')} />
		</Paper>
	);
});
