export default function WireframePreview({ layout }) {

  const rootId = layout.rootNodes[0]

  const artboard = layout.nodes[rootId]

  return (
    <div>

      <h2>Preview</h2>

      <div
        style={{
          position: 'relative',
          width: '300px',
aspectRatio: `${artboard.width} / ${artboard.height}`,
          border: '2px solid black',
          background: '#fff',
          overflow: 'hidden'
        }}
      >

        {artboard.children.map((id) => {

          const node = layout.nodes[id]

          return (
            <div
              key={id}
              style={{
                position: 'absolute',

                left: `${node.nx * 100}%`,
                top: `${node.ny * 100}%`,

                width: `${node.nw * 100}%`,
                height: `${node.nh * 100}%`,

                background:
                  node.type === 'text'
                    ? '#fde68a'
                    : node.type === 'image'
                    ? '#93c5fd'
                    : '#fca5a5',

                border: '1px solid black',

                fontSize:
  node.style?.visual?.fontSize
    ? `${node.style.visual.fontSize / 4}px`
    : '8px',

                overflow: 'hidden'
              }}
            >
              {node.data?.content || node.name}
            </div>
          )
        })}

      </div>
    </div>
  )
}