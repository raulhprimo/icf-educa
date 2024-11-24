interface CourseCardProps {
  color: 'green' | 'orange' | 'blue'
}

const colorVariants = {
  green: 'bg-[#4CAF50]',
  orange: 'bg-[#F5A623]',
  blue: 'bg-[#2196F3]'
}

export function CourseCard({ color }: CourseCardProps) {
  return (
    <div className={`${colorVariants[color]} rounded-lg aspect-video shadow-lg transition-transform hover:scale-105`}>
      {/* Conteúdo do card será adicionado posteriormente */}
    </div>
  )
} 