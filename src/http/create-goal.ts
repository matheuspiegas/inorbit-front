type CreqteGoalRequest = {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  desiredWeeklyFrequency,
  title,
}: CreqteGoalRequest) {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ desiredWeeklyFrequency, title }),
  })
}
