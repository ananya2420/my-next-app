export default function ShareMealPage(){
   
    //console.log('Meals page');
   
    return( 
    <>
    <header>
        <h1>Share your <span>favourite meals</span></h1>
        <p>Or any other field you need sharing!</p>
    </header>

    <main>
        <form>
            <div>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type='text' id='name' name='name' 
                </p>
            </div>
        </form>

    </main>
    </>
    )
}