import { useState } from 'react'
import ChatInput from './ChatInput'
import axios from 'axios'
import initialLayout from '../data/initialLayout.json'

export default function ChatWindow({setLayout}) {

  const [messages, setMessages] = useState([])

  async function handleSend(text) {

  const newMessage = {
    role: 'user',
    content: text
  }

  setMessages((prev) => [...prev, newMessage])

  try {

    const response = await axios.post(
      'http://localhost:3001/api/chat',
      {
        message: text,
        layout: initialLayout
      }
    )
    setLayout(response.data.updatedLayout)
    const assistantMessage = {
      role: 'assistant',
      content: response.data.explanation
    }

    setMessages((prev) => [
      ...prev,
      assistantMessage
    ])

  } catch (error) {

    console.log(error)
  }
}

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
        background: '#f5f5f5'
      }}
    >

      <h2>Chat</h2>

      <div
        style={{
          flex: 1,
          border: '1px solid #ccc',
          marginBottom: '20px',
          padding: '10px',
          overflowY: 'auto',
          background: 'white'
        }}
      >

        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              padding: '10px',
              background:
                msg.role === 'user'
                  ? '#dbeafe'
                  : '#e5e7eb',
              borderRadius: '10px'
            }}
          >
            {msg.content}
          </div>
        ))}

      </div>

      <ChatInput onSend={handleSend} />

    </div>
  )
}