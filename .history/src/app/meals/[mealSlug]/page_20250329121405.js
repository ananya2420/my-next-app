import { getMeal } from "@/app/lib/meals";
import Image from "next/image";

export default async function MealDetailsPage({ params }) {
  // Await the getMeal function to get the meal details
  const meal = await getMeal(params.mealSlug);

  // Check if meal exists before attempting to modify or access its properties
  if (!meal) {
    return <p>Meal not found!</p>; // Show a fallback message if the meal is not found
  }

  // Check if instructions exist before calling .replace
  if (meal.instructions) {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }

  return (
    <>
      <header>
        <div>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div>
          <h1>{meal.title}</h1>
          <p>
            by
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions || "",
          }}
        ></p>
      </main>
    </>
  );
}
