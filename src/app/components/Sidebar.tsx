import { User, Leaf, Settings, HelpCircle } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-20 bg-[#212121] flex flex-col items-center py-4 gap-8">
      <div className="p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
        <User size={24} className="text-white" />
      </div>
      <div className="p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
        <Leaf size={24} className="text-white" />
      </div>
      <div className="p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
        <Settings size={24} className="text-white" />
      </div>
      <div className="p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
        <HelpCircle size={24} className="text-white" />
      </div>
    </aside>
  )
} 