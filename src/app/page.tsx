import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import SelectionFlowClient from '@/components/flow/SelectionFlowClient'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-white">
        <SelectionFlowClient />
      </main>
      <Footer />
    </>
  )
}
