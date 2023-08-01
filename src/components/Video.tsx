import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { next, useCurrentLesson } from '../store/slices/Player'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        // playing
        controls
        width="100%"
        height="100%"
        onEnded={() => dispatch(next())}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
