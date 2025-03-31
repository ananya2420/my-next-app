import { getMeal } from "@/app/lib/meals";
import { notFound } from "next/navigation"; // Use Next.js' built-in notFound
import Image from "next/image";

// Update metadata generation
export async function generateMetadata({ params }) {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    return { 
      title: "Meal Not Found", 
      description: "Sorry, the meal you are looking for doesn't exist." 
    }; // Return a fallback metadata if meal is not found
  }

  return {
    title: meal.title,
    description: meal.description, // Fixed typo here
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.mealSlug);

  // Return 404 if the meal is not found (use Next.js built-in notFound function)
  if (!meal) {
    notFound(); // Trigger a 404 page for meal not found
  }

  // Check if instructions exist before calling .replace
  if (meal.instructions) {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }

  return (
    <>
      <header>
        <div>
          {/* Ensure meal.image exists before passing it to Image */}
          {meal.image && (
            <Image src={meal.image} alt={meal.title} fill />
          )}
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
            __html: meal.instructions || "", // Fallback to empty string if no instructions
          }}
        ></p>
      </main>
    </>
  );
}
