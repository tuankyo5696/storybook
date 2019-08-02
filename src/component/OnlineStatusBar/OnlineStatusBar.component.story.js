import React from 'react'

import {storiesOf} from '@storybook/react'
import OnlineStatusBar from './OnlineStatusBar.component'

storiesOf("OnlineStatusBar",module)
    .add("connect",()=> (
        <div>
            <OnlineStatusBar connect = {true} />
        </div>
    ))
    .add("disconnect",() => (
        <div>
            <OnlineStatusBar connect = {false}/>
        </div>
    ))