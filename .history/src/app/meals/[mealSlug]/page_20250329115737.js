import { getMeal } from "@/app/lib/meals";
import Image from "next/image";

export default function MealDetailsPage({params}){
    
    const meal = getMeal(para);
    
    return <>
    <header>
        <div>
            <Image fill/>
        </div>
        <div>
            <h1>TITLE</h1>
            <p>by<a href={`mailto:${'EMAIL'}`}>NAME</a>
            </p>
            <p>SUMMARY</p>

        </div>
    </header>

    <main>

        <p dangerouslySetInnerHTML={{
            __html:'...',

        }}></p>
    </main>
    </>
}