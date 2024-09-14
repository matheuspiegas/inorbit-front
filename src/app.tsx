import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import { useState } from 'react'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal handleOpen={handleOpen} />
    </Dialog>
  )
}
