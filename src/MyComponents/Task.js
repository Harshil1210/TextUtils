
import React, { useState } from 'react'

export default function Task() {
    let [Text,setText] = useState(0);
    const IncreaseValue = () =>{
        Text = Text + 1;
        setText(Text);
    }
    const DecreaseValue = () =>{
        debugger;
        if(Text<=0)
        {
            return false;
        }
        Text = Text - 1;
        setText(Text);
    }
 
  return (
    <div class="container ">
      <h1>{Text}</h1>

      <button  type="button " disabled={Text<=0?true:false} class="btn btn-primary" onClick={DecreaseValue}> - </button>
      <button type="button " class="btn btn-primary my-3 mx-3" onClick={IncreaseValue}> + </button>
    </div>
  )
}