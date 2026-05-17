export default function JsonViewer({ layout }) {
  return (
    <div
      style={{
        maxHeight: '300px',
        overflow: 'auto',
        background: 'black',
        color: 'lime',
        padding: '10px',
        fontSize: '12px'
      }}
    >
      <pre>
        {JSON.stringify(layout, null, 2)}
      </pre>
    </div>
  )
}