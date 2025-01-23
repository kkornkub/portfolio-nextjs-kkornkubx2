import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const englishMealPlan = [
  {
    meal: "Breakfast",
    food: "Spinach and mushroom omelette (2 eggs) + Whole wheat toast (1 slice) + Banana (1 medium)",
    calories: 350,
    protein: "20g",
    carbs: "45g",
    fat: "12g",
  },
  {
    meal: "Morning Snack",
    food: "Unsweetened soy milk (1 cup) + Apple (1 medium)",
    calories: 150,
    protein: "8g",
    carbs: "25g",
    fat: "3g",
  },
  {
    meal: "Lunch",
    food: "Brown rice (1/2 cup) + Grilled chicken breast (150g) + Mixed vegetable stir-fry",
    calories: 450,
    protein: "35g",
    carbs: "50g",
    fat: "10g",
  },
  {
    meal: "Afternoon Snack",
    food: "Greek yogurt (1 cup) + Mixed berries (1/2 cup)",
    calories: 200,
    protein: "20g",
    carbs: "20g",
    fat: "5g",
  },
  {
    meal: "Dinner",
    food: "Grilled salmon (150g) + Quinoa (1/2 cup) + Steamed broccoli",
    calories: 400,
    protein: "35g",
    carbs: "30g",
    fat: "15g",
  },
]

const DietPlan = () => {
  return (
    <section id="diet" className="py-16 animate-slideInFromLeft">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Healthy Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Meal</TableHead>
                <TableHead>Food Items</TableHead>
                <TableHead>Calories</TableHead>
                <TableHead>Protein</TableHead>
                <TableHead>Carbs</TableHead>
                <TableHead>Fat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {englishMealPlan.map((meal) => (
                <TableRow key={meal.meal}>
                  <TableCell className="font-medium">{meal.meal}</TableCell>
                  <TableCell>{meal.food}</TableCell>
                  <TableCell>{meal.calories}</TableCell>
                  <TableCell>{meal.protein}</TableCell>
                  <TableCell>{meal.carbs}</TableCell>
                  <TableCell>{meal.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 space-y-2">
            <p className="font-semibold">Daily Totals:</p>
            <p>Calories: {englishMealPlan.reduce((sum, meal) => sum + meal.calories, 0)} kcal</p>
            <p>Protein: {englishMealPlan.reduce((sum, meal) => sum + Number.parseInt(meal.protein), 0)}g</p>
            <p>Carbohydrates: {englishMealPlan.reduce((sum, meal) => sum + Number.parseInt(meal.carbs), 0)}g</p>
            <p>Fat: {englishMealPlan.reduce((sum, meal) => sum + Number.parseInt(meal.fat), 0)}g</p>
          </div>
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold">Additional Tips:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Drink at least 8 glasses of water daily</li>
              <li>Use olive oil or rice bran oil for cooking</li>
              <li>Avoid fried foods and overly seasoned dishes</li>
              <li>Eat a variety of colorful vegetables</li>
              <li>Adjust portion sizes according to individual needs</li>
              <li>
                Alternative breakfast options:
                <ul className="list-circle list-inside ml-4 space-y-1">
                  <li>Overnight oats with berries and nuts</li>
                  <li>Whole grain toast with avocado and poached egg</li>
                  <li>Greek yogurt parfait with granola and fresh fruit</li>
                  <li>Vegetable and cheese frittata</li>
                </ul>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default DietPlan

