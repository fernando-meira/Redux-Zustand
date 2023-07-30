import Player from 'react-player'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/Player'

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        playing
        controls
        width="100%"
        height="100%"
        onEnded={() => dispatch(next())}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
