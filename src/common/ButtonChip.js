import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=>({
    root:{
        padding:'.25rem 1rem',
        borderRadius:'5rem',
        margin:'.5rem',
        border:'#dc43c6 solid 3px',
        color:'#dc43c6',
        fontWeight:'bold',
        outline:'none',
        cursor:'pointer',
        textTransform:'none'

    }
}))
function ButtonChip({onClick,text}) {
    const classes = useStyles()
  return (
    <Button className={classes.root} onClick={onClick}>{text}</Button>
  )
}

export default ButtonChip