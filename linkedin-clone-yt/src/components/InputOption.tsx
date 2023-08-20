// type 'rfce' + ENTER to create a react functional component
import React from 'react'
import '../css/InputOption.css'

interface Props { 
    Icon: any,
    title: string,
    color: string
}

// this is a functional component
function InputOption({Icon, title, color}: Props) {
  return (
    <div className="inputOption">
        <Icon style={{color: color}}/>
        <h4>{title}</h4> {/** title is a prop, h4 is a block element */}
    </div>
  )
}

export default InputOption