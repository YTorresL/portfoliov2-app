export default function Subtitles({ children }) {
  return (
    <div className="flex items-center gap-4">
      <h6 className="font-corn flex-shrink-0 text-2xl text-[#445334] leading-tight">
        {children}
      </h6>
      <div className="h-[1px] w-full bg-[#445334]"></div>
    </div>
  )
}
