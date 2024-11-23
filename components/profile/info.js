export function Information({ title, paragraph }) {
  return (
    <div className="flex items-center justify-between p-3 border-t border-black">
      <strong>{title}</strong>
      <span>{paragraph}</span>
    </div>
  )
}
