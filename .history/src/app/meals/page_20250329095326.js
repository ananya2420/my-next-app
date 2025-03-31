export default async function MealsPage() {
  let meals = await getMeals(); // Ensure we await this function

  if (!Array.isArray(meals)) {
    meals = []; // ✅ Ensure meals is always an array
  }

  return (
    <>
      <header className="text-center bg-gray-100 py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Delicious meals, created <span className="text-red-500">by you.</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Choose your favorite recipes & cook it yourself. It’s easy and fun.
        </p>
        <p className="mt-4">
          <Link
            href="/meals/share"
            className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200"
          >
            Share your favorite recipes
          </Link>
        </p>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
