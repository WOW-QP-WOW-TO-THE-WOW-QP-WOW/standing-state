import katex from 'katex'

export default function KTex({ math, display = false, className = '' }) {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: display,
  })

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      style={display ? { display: 'block' } : {}}
    />
  )
}