export function AppLayout({ children }) {
  return (
    <main className="w-[1300px] max-[1440px]:w-[90%] mx-auto border-x border-black">
      {children}
    </main>
  )
}
