import { YoutubeIcon, InstagramIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#212121] px-8 py-4 mt-auto flex justify-between items-center">
      <p className="text-white">Todos os direitos reservados</p>
      <div className="flex gap-4">
        <YoutubeIcon className="text-white w-6 h-6 cursor-pointer" />
        <InstagramIcon className="text-white w-6 h-6 cursor-pointer" />
      </div>
    </footer>
  )
} 