import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function formatNewLine (text) {
  const match = /_/gi.exec(text)
  if (!match) {
    return (
      <ReactMarkdown
        source={text}
        key={`${text}-${match && match.index}` || text}
      />
    )
  }

  return [
    formatNewLine(text.substring(0, match.index)),
    formatNewLine(text.substring(match.index + 1))
  ]
}
