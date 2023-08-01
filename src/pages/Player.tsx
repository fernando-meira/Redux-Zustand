import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

import { useAppSelector } from '../store'
import { Video } from '../components/Video'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { useCurrentLesson } from '../store/slices/Player'

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules)

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = `Assistindo: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center p-10">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between ">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" /> Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg pr-80 border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="absolute top-0 bottom-0 right-0 w-80 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll  scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module) => {
              return (
                <Module
                  key={module.id}
                  title={module.title}
                  moduleIndex={modules.indexOf(module)}
                  amountOFLessons={module.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
