import { makeStyles } from '@material-ui/core';
import React from 'react'
import Header from '../../common/Header';
import QuestionContainer from './QuestionContainer';
import './styles.css';

const useStyles = makeStyles(() => ({
  root: {
    background: '#f5f5f5',
    letterSpacing: 'px',
    wordSpacing: '3px',
    color:'white',
    height:'300px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'0',
    flexDirection:'column',
  },
  topSkewedDiv:{
    transform: 'translateY(-70px) skewY(-4deg)',
    height:'150px',
    background:'white'
  }
}));
export default function GuideHome() {
  const classes = useStyles()
  return (
    <>
      {/* <Header/> */}
      <div className={classes.root} >
        <p className='colorFullText heading translateY50'>New To Programming ?</p>
        <p className='colorFullTextPink translateY50'>Here is what you need to konw before starting Programming.</p>
      </div>
      <div className={classes.topSkewedDiv}></div>
      <QuestionContainer/>
    </>
  )
}
