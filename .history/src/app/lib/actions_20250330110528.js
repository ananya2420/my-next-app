'use server';


import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
    
  function isInvalidText(text){
    !text || text.trim()===''


  }

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    if(isInvalidText){
      isInvalidText

    }
    //console.log(meal);
    await saveMeal(meal);
    redirect('/meals');
  }