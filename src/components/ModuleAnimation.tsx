export function ModuleAnimation() {
  return (
    <div>
      {Array.from({ length: 2 }).map(() => (
        <div>
          <div className="bg-zinc-800">
            <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="flex h-10 w-10 rounded-full  items-center justify-center bg-zinc-950 text-xs"></div>

                <div className="flex-1 space-y-2 py-1">
                  <div className="h-5 bg-zinc-950 rounded"></div>

                  <div className="h-3 w-12 bg-zinc-950 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {Array.from({ length: 2 }).map(() => (
            <div className="bg-zinc-900">
              <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div className="animate-pulse flex space-x-2 w-full items-center justify-between">
                  <div className="flex h-5 w-5 rounded-full items-center justify-center bg-zinc-950 text-xs"></div>

                  <div className="h-3 w-3/4 bg-zinc-950 rounded"></div>

                  <div className="h-3 w-1/6 bg-zinc-950 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
