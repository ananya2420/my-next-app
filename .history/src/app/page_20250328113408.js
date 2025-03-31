import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import ImageSlideshow from "../../components/images/image.slideshow";

export default function Home() {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
        <div>
       <ImageSlideshow /> 
        </div>
        <section className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Next-level food for next-level Foodies</h1>
          <p className="mt-4 text-lg">Taste and share food from all over the world.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="/community" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200">Join the community</Link>
            <Link href="/meals" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800">Explore meals</Link>
          </div>
        </section>
      </header>

      <main className="py-16 px-6 max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">How it works?</h2>
          <p className="mt-4 text-gray-600">NextLevel Food is a platform for foodies to share their favorite recipes with the world. It is a place to discover new dishes and connect with other food lovers.</p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why NextLevel Food?</h2>
          <p className="mt-4 text-gray-600">NextLevel Food is a platform for foodies to share their favorite recipes with the world. It is a place to discover new dishes and connect with other food lovers.</p>
        </section>
      </main>
    </>
  );
}
