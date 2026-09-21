import { useState } from "react"
import "./BubbleNote.css"

export default function BubbleNote({ id, icon = "🫧", title = "Ghi chú nhỏ", inline = false, children }) {
  // Bấm × chỉ ẩn tạm: tải lại trang hoặc chuyển tab rồi quay lại là ghi chú hiện lại
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <aside
      data-note-id={id}
      className={`bubble-note${inline ? " bubble-note--inline" : ""}`}
      role="note"
      aria-label={title}
    >
      <span className="bubble-note-icon" aria-hidden="true">{icon}</span>
      <div>
        <p className="bubble-note-title">{title}</p>
        <p className="bubble-note-text">{children}</p>
      </div>
      <button type="button" className="bubble-note-close" onClick={() => setHidden(true)} aria-label="Đóng ghi chú">×</button>
      <span className="bubble-note-dot bubble-note-dot-1" aria-hidden="true" />
      <span className="bubble-note-dot bubble-note-dot-2" aria-hidden="true" />
    </aside>
  )
}
