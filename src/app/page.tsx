import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { CourseGrid } from './components/CourseGrid'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#1A1A1A]">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <CourseGrid />
        <Footer />
      </main>
    </div>
  )
}
