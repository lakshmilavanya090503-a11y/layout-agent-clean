import { useState } from 'react'

export default function ChatInput({ onSend }) {

  const [text, setText] = useState('')

  function handleSend() {

    if (!text.trim()) return

    onSend(text)

    setText('')
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        position: 'sticky',
        bottom: 0,
        background: '#f5f5f5',
        paddingTop: '10px'
      }}
    >

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
        style={{
          flex: 1,
          padding: '12px',
          fontSize: '16px'
        }}
      />

      <button
        onClick={handleSend}
        style={{
          padding: '12px 20px',
          cursor: 'pointer'
        }}
      >
        Send
      </button>

    </div>
  )
}