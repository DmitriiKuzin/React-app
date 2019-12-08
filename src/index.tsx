import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Prop } from './classes/Prop';
import { InputTest } from './test-input';
import { TimerComponent } from './timer-component'
import App from './App';
import { tsPropertySignature } from '@babel/types';
import { Cycles } from './Cycles';







let kist:Array<string>

ReactDOM.render(

    [ <Cycles />],


    document.getElementById('root'));

serviceWorker.register()
