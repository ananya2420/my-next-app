import Image from "next/image";
import Link from "next/link";

export default function MealItem({ title, slug, image, summery, creator }) {
  return (
    <article className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <header className="relative h-60">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">By {creator}</p>
        </div>
      </header>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{summery}</p>
        <div className="text-right">
          <Link
            href={`/meals/${slug}`}
            className="text-blue-500 font-semibold hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}