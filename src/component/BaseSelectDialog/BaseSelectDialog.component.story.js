import React from 'react'

import {storiesOf} from '@storybook/react';
import BaseSelectDialog from './BaseSelectDialog.component';


storiesOf("BaseSelectDialog",module)
    .add("default",()=> (
        <BaseSelectDialog />
    ))