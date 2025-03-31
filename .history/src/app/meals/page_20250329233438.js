import Link from "next/link";
//import MealsGrid from "../../../components/meals/meals-grid";
import { getMeals } from "../lib/meals"; // ✅ Import getMeals
import { Suspense } from "react";
import MealsGrid from "../../../components/meals/meals-grid";


async function Meals(){

  const meals = await getMeals();

  return  <MealsGrid meals={meals} />
}
export default function MealsPage() {
 // ✅ Ensure we await this function

 {/* if (!Array.isArray(meals)) {
    meals = []; // ✅ Ensure meals is always an array
  }
*/}
  return (
    <>
      {/* Header Section */}
      <header className="text-center bg-gray-100 py-12 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Delicious meals, created <span className="text-red-500">by you.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Choose your favorite recipes & cook it yourself. It’s easy and fun.
        </p>
        <p className="mt-5">
          <Link
            href="/meals/share"
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-200 inline-block"
          >
            Share your favorite recipes
          </Link>
        </p>
      </header>

      {/* Meals Grid Section */}
      <main className="max-w-6xl mx-auto p-6">
        <Suspense fallback={ <p>Fetching Meals...</p>}>
        <Meals />
        </Suspense>
      </main>
    </>
  );
}
