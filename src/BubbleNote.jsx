import { useState } from "react"
import "./BubbleNote.css"

const STORAGE_KEY = "dismissed-notes"

const readDismissed = () => {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    return Array.isArray(value) ? value : []
  } catch {
    return []
  }
}

export default function BubbleNote({ id, icon = "🫧", title = "Ghi chú nhỏ", inline = false, children }) {
  const [hidden, setHidden] = useState(() => readDismissed().includes(id))

  if (hidden) return null

  const close = () => {
    setHidden(true)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...readDismissed(), id]))
    } catch {
      /* ignore storage errors */
    }
  }

  return (
    <aside className={`bubble-note${inline ? " bubble-note--inline" : ""}`} role="note" aria-label={title}>
      <span className="bubble-note-icon" aria-hidden="true">{icon}</span>
      <div>
        <p className="bubble-note-title">{title}</p>
        <p className="bubble-note-text">{children}</p>
      </div>
      <button type="button" className="bubble-note-close" onClick={close} aria-label="Đóng ghi chú">×</button>
      <span className="bubble-note-dot bubble-note-dot-1" aria-hidden="true" />
      <span className="bubble-note-dot bubble-note-dot-2" aria-hidden="true" />
    </aside>
  )
}
