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
                    <input type='text' id='name' name='name' required />

                </p>

                <p>
                    <label htmlFor="email">Your email</label>
                    <input type='email' id='email' name='email' required />
                    
                </p>

                <p>
                    <label htmlFor="title">Your title</label>
                    <input type='title' id='title' name='title' required />
                    
                </p>

                <p>
                    <label htmlFor="summary">Your Summary</label>
                    <input type='summary' id='sumary' name='summary' required />
                    
                </p>

                <p>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea id='instructions' name='instructons' rows='10' required></textarea>
                </p>

                <p><button>Share meal</button></p>




            </div>
        </form>

    </main>
    </>
    )
}