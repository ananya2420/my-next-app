import { getMeal } from "@/app/lib/meals";
import Image from "next/image";

export default function MealDetailsPage({params}){
    
    const meal = getMeal(params.mealSlug);

    meal.instructions=meal.instructions.replace(/\n/);
    
    return <>
    <header>
        <div>
            <Image src={meal.image} alt={meal.title}fill/>
        </div>
        <div>
            <h1>{meal.title}</h1>
            <p>by<a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p>{meal.summary}</p>

        </div>
    </header>

    <main>

        <p dangerouslySetInnerHTML={{
            __html:meal.instructions,

        }}></p>
    </main>
    </>
}