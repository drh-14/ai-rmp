'use client'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
export default function Home() {
  const [messages, setMessages] = useState([
    {
      speaker: 'AI',
      message : `Hi, I'm a chatbot!`
    }
  ]);
  return (
    <main>
      <div className = 'flex justify-center items-center mt-12'>
      <Box height = {600} sx = {{width: '50%', p: '4', border: '2px solid white', borderRadius: '2%'}}>
        <div className = 'flex flex-col mt-4 ml-2 mr-2'>
        {messages.map(currMessage => 
        <div className = {currMessage.speaker === 'AI'? 'bg-blue-500 p-4 rounded-md inline-block': 
        'bg-green-500 p-4 rounded-md inline-block'}>{currMessage.message}</div>)}
        </div>
        </Box>
      </div>
    </main>
  );
}
