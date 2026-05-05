import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import SelectionFlow from '@/components/flow/SelectionFlow'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <SelectionFlow />
      </main>
      <Footer />
    </>
  )
}
