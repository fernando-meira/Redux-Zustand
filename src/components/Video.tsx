import Player from 'react-player'

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        controls
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=Jai8w6K_GnY"
      />
    </div>
  )
}