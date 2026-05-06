import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import SelectionFlowClient from '@/components/flow/SelectionFlowClient'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <SelectionFlowClient />
      </main>
      <Footer />
    </>
  )
}
