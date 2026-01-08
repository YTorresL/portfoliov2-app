import { Home } from "../presentation/views/home/Home"
import { AppLayout } from "../presentation/components/AppLayout"
import { Header } from "../presentation/components/Header"
import { Footer } from "../presentation/components/Footer"

export default function Page() {
  return (
    <AppLayout>
      <Header />
      <Home />
      <Footer />
    </AppLayout>
  )
}
