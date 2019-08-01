import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button.component';


const clickMe = () => {
  alert("Thanks for clicking me!");
}


storiesOf('Button', module)
  .add('default', () => <Button clicked = {clickMe} />);