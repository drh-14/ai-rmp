'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
export default function Home() {
  const [messages, setMessages] = useState([
    {
      speaker: 'AI',
      message : `Hi! I'm an AI assistant here to provide you with information about RateMyProfessor reviews for professors at Stony Brook University. How can I assist you today?`
    }
  ]);
  return (
    <main>
      <div className = 'flex flex-col items-center mt-2 gap-2'>
      <Box className = 'overflow-auto' height = {600} sx = {{width: '50%', p: '4', border: '2px solid white', borderRadius: '2%'}}>
        <div className = 'flex flex-col gap-2 mt-4 ml-2 mr-2'>
        {messages.map(currMessage => 
        <div className = {currMessage.speaker === 'AI'?'bg-blue-500 p-4 rounded-md max-w-max break-words': 
        'bg-green-500 ml-auto p-4 rounded-md max-w-max break-words'}>{currMessage.message}</div>)}
        </div>
        </Box>
        <div className = 'flex gap-2 w-1/2 mb-4'>
          <input className = 'p-4 text-black w-full border-2 rounded-md' placeholder = 'Message'></input>
          <Button variant = 'contained'>Send</Button>
        </div>
      </div>
    </main>
  );
}
