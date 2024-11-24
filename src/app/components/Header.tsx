import Image from 'next/image'

export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#212121]">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo_icf.svg"
          alt="Logo ICF Educa"
          width={40}
          height={40}
          className="object-contain"
        />
        <h1 className="text-white text-2xl font-bold">ICF EDUCA</h1>
      </div>
      <p className="text-white text-lg">
        Formando profissionais para o <span className="font-bold">futuro</span>
      </p>
    </header>
  )
} 