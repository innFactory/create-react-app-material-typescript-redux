import { Paper } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StyledButton } from '..';
import { withTheme } from './index.stories';

storiesOf('StyledButton', module)
    .add('a test Button', () => {
        return withTheme(
            <Paper style={{ width: 750, height: 750, margin: 20 }}>
              <StyledButton color="#123456" text="test" onClick={() => console.log('ClickTest')} />
            </Paper>
        )
    });

