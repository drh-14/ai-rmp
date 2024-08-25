'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import { ThreeDots } from 'react-loader-spinner'
export default function Home() {
  const [messages, setMessages] = useState([
    {
      speaker: 'AI',
      message : `Hi! I'm an AI assistant here to provide you with information about RateMyProfessor reviews for professors at Stony Brook University. How can I assist you today?`
    }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [AIMessage, setAIMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const sendMessage = async () =>{
    setMessages(prevList => [...prevList,{speaker: 'user', message: userMessage}]);
    setMessages(prevList => [...prevList, {speaker: 'AI', message: AIMessage} ] )
    console.log(userMessage);
    setUserMessage('');

  };
  return (
    <main>
      <div className = 'flex flex-col items-center mt-2 gap-2'>
      <Box className = 'overflow-auto' height = {600} sx = {{width: '50%', p: '4', border: '2px solid white', borderRadius: '2%'}}>
        <div className = 'flex flex-col gap-2 mt-4 ml-2 mr-2'>
        {messages.map((msg, index) => 
        msg.speaker === 'AI' ?(
        <div className ='bg-blue-500 p-4 rounded-md max-w-max break-words'>
          {loading && index  != 0 && index === messages.length - 1? <ThreeDots height = '10' width = '30' color = 'white'></ThreeDots>:
           msg.message}
        </div>): 
        (<div className = 'bg-green-500 ml-auto p-4 rounded-md max-w-max break-words'>{msg.message}</div>))}
        </div>
        </Box>
        <div className = 'flex gap-2 w-1/2 mb-4'>
          <input value = {userMessage} onChange = {(e) => setUserMessage(e.target.value)}
          onKeyDown = {(e: React.KeyboardEvent) =>{
            if(e.key === 'Enter'){
              sendMessage();
            }
          }} 
          className = 'p-4 text-black w-full border-2 rounded-md' placeholder = 'Message'></input>
          <Button onClick = {() => sendMessage()} variant = 'contained'>Send</Button>
        </div>
      </div>
    </main>
  );
}
