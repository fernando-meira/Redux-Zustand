import { ChevronDown } from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { Lesson } from './Lesson'
import { useStore } from '../zustand-store'

interface ModuleProps {
  title: string
  moduleIndex: number
  amountOFLessons: number
}

export function Module({ title, amountOFLessons, moduleIndex }: ModuleProps) {
  const { play, lessons, currentModuleIndex, currentLessonIndex } = useStore(
    (state) => {
      const { play, currentModuleIndex, currentLessonIndex, course } = state

      const lessons = course?.modules[moduleIndex].lessons

      return { play, lessons, currentModuleIndex, currentLessonIndex }
    }
  )

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full  items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-sm text-zinc-400">{amountOFLessons} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  isCurrent={isCurrent}
                  duration={lesson.duration}
                  onPlay={() => {
                    play([moduleIndex, lessonIndex])
                  }}
                />
              )
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
