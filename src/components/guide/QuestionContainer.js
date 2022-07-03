import { Button, IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ButtonChip from '../../common/ButtonChip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    // background: '#f5f5f5',
    transform: 'translateY(-70px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    overflowX:'hidden'
  },
  question:{
    paddingBottom:'.5rem',
    fontSize:'32px',
    color:'rgba(0,0,0,0.6)',
    overflow:'hidden',
    opacity:'1',
    transform:'translateY(0)',
    transition:'transform 1s cubic-bezier(0.22, 1.13, 1, 1),opacity 2s cubic-bezier(0.22, 1.13, 1, 1)',
  },
  motivation:{
    paddingBottom:'.5rem',
    fontSize:'32px',
    color:'rgba(0,0,0,0.6)',
    opacity:'1',
    transform:'translateY(-200%)',
    transition:'transform 2s cubic-bezier(0.22, 1.13, 1, 1),opacity 2s cubic-bezier(0.22, 1.13, 1, 1)',
  },
  questionHidden:{
    paddingBottom:'.5rem',
    fontSize:'32px',
    color:'rgba(0,0,0,0.6)',
    overflow:'hidden',
    opacity:'0',
    transform:'translateY(-100%)',
    transition:'transform 1s cubic-bezier(0.22, 1.13, 1, 1),opacity 1s cubic-bezier(0.22, 1.13, 1, 1)',
  },
  motivationHidden:{
    transform:'translateY(-300%)',
    paddingBottom:'.5rem',
    fontSize:'32px',
    color:'rgba(0,0,0,0.6)',
    opacity:'0',
    transition:'transform 2s cubic-bezier(0.22, 1.13, 1, 1),opacity 1s cubic-bezier(0.22, 1.13, 1, 1)',
  },
  options:{
    width:'min(100% , 700px)',
    display:'flex',
    justifyContent:'center',
    padding:' 2rem 1rem 1rem 1rem',
  },
  backNextButtonsContainer:{
    width:'min(100% , 700px)',
    display:'flex',
    justifyContent:'space-between',
    padding:' 3rem 1rem 1rem 1rem'
  },
  optionsHidden:{
    transform:'translateX(100%)',
    animation:'translateRight 1s',
    fontSize:'32px',
    width:'min(100% , 700px)',
    display:'flex',
    justifyContent:'space-between',
    padding:' 2rem 1rem 1rem 1rem',
    opacity:'0',
    transition:'opacity 1s ease-in-out',
  },
  
}));
export default function QuestionContainer() {
  const classes = useStyles()
  const [activeQuestion,setActiveQuestion]=useState(0)
  const [showQuestion,setShowQuestion]=useState(1)
  const [activeMotivation,setActiveMotivation]=useState(0)
  const nextQuestionAfterDealy=(time=4000)=>{
    setTimeout(()=>{
      setShowQuestion(1);
      setActiveQuestion(prev=>prev+1);
    },time)
  }
  const questions = [
    {
      question: 'Interested in coding?',
      options: [
        {text:'Yes',onClick:()=>{
          setShowQuestion(0);;
          setActiveMotivation(0);
          nextQuestionAfterDealy()
        }},
        {text:'No',onClick:()=>{
         setShowQuestion(0);
          setActiveMotivation(1);
          nextQuestionAfterDealy()
        }},
        
      ]
    },
    {
      question: 'Your current year of study?',
      options: [
        {text:'1st year',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(2);
          nextQuestionAfterDealy()
        }},
        {text:'2st year',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(3);
          nextQuestionAfterDealy()
        }},
        {text:'3st year',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(4);
          nextQuestionAfterDealy()
        }},
        {text:'4st year',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(5);
          nextQuestionAfterDealy()
        }},
      ]
    },
    {
      question: 'Experience with coding?',
      options: [
        {text:'Beginner',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(6);
          nextQuestionAfterDealy()
        }},
        {text:'Experienced',onClick:()=>{
          setShowQuestion(0);
          setActiveMotivation(7);
          nextQuestionAfterDealy()
        }},
      ]
    },
  ]
  const motivationS=[
    "You are a person with good interest.",
    "Don't worry coding is interesting.Just need to spend some quality time.",
    "This is the right time to start coding.",
    "This is the right time to start coding.",
    "Don't worry you can always start coding at any point.",
    "It's never late to start coding.lets get started.",
    "",
    "22It's never late to start coding.lets get started.",
  ]
  return (
    <div className={classes.root}>
      <p className={clsx(showQuestion?classes.question:classes.questionHidden)}>{questions[activeQuestion].question}</p>
      <p className={clsx(showQuestion?classes.options:classes.optionsHidden)}>{questions[activeQuestion].options.map(o=>(
          <ButtonChip key={o.text} onClick={o.onClick} text={o.text}/>
        ))}
      </p>
      <p className={clsx(!showQuestion?classes.motivation:classes.motivationHidden)}>{motivationS[Math.floor(activeMotivation)]}</p>
      <div className={classes.backNextButtonsContainer}>
        <IconButton onClick={()=>setActiveQuestion(prev=>prev-1<0?0:prev-1)}>
          <ArrowBackIcon/>
        </IconButton>
        <IconButton onClick={()=>setActiveQuestion(prev=>prev+1)}>
          <ArrowForwardIcon/>
        </IconButton>
      </div>
    </div>
  )
}
