import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const workoutSchedule = [
  {
    day: "Monday",
    focus: "Chest + Shoulders + Triceps",
    exercises: [
      { name: "Bench Press", sets: 3, reps: 12 },
      { name: "Dumbbell Shoulder Press", sets: 3, reps: 12 },
      { name: "Tricep Dips", sets: 3, reps: 15 },
      { name: "Push-ups", sets: 3, reps: 15 },
    ],
  },
  {
    day: "Tuesday",
    focus: "Legs + Glutes",
    exercises: [
      { name: "Squat", sets: 3, reps: 12 },
      { name: "Deadlift", sets: 3, reps: 12 },
      { name: "Lunges", sets: 3, reps: 12 },
      { name: "Glute Bridge", sets: 3, reps: 15 },
    ],
  },
  {
    day: "Wednesday",
    focus: "Rest or Light Cardio",
    exercises: [{ name: "Brisk Walking", duration: "30 minutes" }],
  },
  {
    day: "Thursday",
    focus: "Back + Biceps",
    exercises: [
      { name: "Pull-ups", sets: 3, reps: 10 },
      { name: "Dumbbell Rows", sets: 3, reps: 12 },
      { name: "Barbell Curl", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Friday",
    focus: "HIIT (High-Intensity Interval Training)",
    exercises: [{ name: "Sprint or Circuit Training", duration: "20-30 minutes" }],
  },
  {
    day: "Saturday",
    focus: "Abs + Core",
    exercises: [
      { name: "Plank", sets: 3, duration: "1 minute" },
      { name: "Russian Twists", sets: 3, reps: 20 },
      { name: "Leg Raises", sets: 3, reps: 12 },
    ],
  },
  {
    day: "Sunday",
    focus: "Rest (Active Recovery)",
    exercises: [{ name: "Yoga or Light Walking", duration: "As desired" }],
  },
]

const FitnessSchedule = () => {
  return (
    <section id="fitness" className="py-16 animate-slideInFromRight">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Workout Schedule (4-5 days per week)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {workoutSchedule.map((day) => (
              <Card key={day.day}>
                <CardHeader>
                  <CardTitle>
                    {day.day}: {day.focus}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exercise</TableHead>
                        <TableHead>Sets</TableHead>
                        <TableHead>Reps/Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {day.exercises.map((exercise, index) => (
                        <TableRow key={index}>
                          <TableCell>{exercise.name}</TableCell>
                          <TableCell>{exercise.sets || "-"}</TableCell>
                          <TableCell>{exercise.reps || exercise.duration || "-"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default FitnessSchedule

