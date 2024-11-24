import { CourseCard } from './CourseCard'

export function CourseGrid() {
  return (
    <div className="p-8 grid grid-cols-3 gap-8">
      <CourseCard color="green" />
      <CourseCard color="orange" />
      <CourseCard color="blue" />
      <CourseCard color="blue" />
      <CourseCard color="green" />
      <CourseCard color="orange" />
    </div>
  )
} 