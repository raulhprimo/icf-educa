

export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#212121]">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white" /> {/* Placeholder para o logo */}
        <h1 className="text-white text-2xl font-bold">ICF EDUCA</h1>
      </div>
      <p className="text-white text-lg">
        Formando profissionais para o <span className="font-bold">futuro</span>
      </p>
    </header>
  )
} 