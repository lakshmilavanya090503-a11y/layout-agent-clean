import { useState } from 'react'

import ChatWindow from './components/ChatWindow'
import JsonViewer from './components/JsonViewer'
import WireframePreview from './components/WireframePreview'

import initialLayout from './data/initialLayout.json'

export default function App() {

  const [layout, setLayout] = useState(initialLayout)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        height: '100vh'
      }}
    >

      <div
        style={{
          borderRight: '1px solid #ccc',
          overflow: 'hidden'
        }}
      >
        <ChatWindow setLayout={setLayout} />
      </div>

      <div
        style={{
          padding: '20px',
          overflowY: 'scroll'
        }}
      >

        <WireframePreview layout={layout} />

        <div style={{ marginTop: '20px' }}>
          <JsonViewer layout={layout} />
        </div>

      </div>

    </div>
  )
}