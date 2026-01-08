import { MAIN_INFO } from "../config/Profile"

export function MainInfo() {
  return MAIN_INFO.map(({ title, paragraph }, index) => (
    <div
      key={index + title}
      className="flex items-center justify-between p-3 border-t border-black"
    >
      <strong>{title}</strong>
      <span>{paragraph}</span>
    </div>
  ))
}
