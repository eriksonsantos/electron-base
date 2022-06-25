import React from "react";
import ReactDOM  from "react-dom";
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function funcao(){
    alert('mensagem')
}
ReactDOM
    .render(
    <>
        <Button onClick={funcao}>Botao</Button>
        <div>
            <Switch {...label} defaultChecked />
             <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
        </div>
    </>
    ,
    
    
    document.getElementById('electronChat'))