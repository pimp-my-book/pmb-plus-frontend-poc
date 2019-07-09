export default ({children}) => (
    <main>
        {children}
        <style jsx global>
        {`

@import url('https://fonts.googleapis.com/css?family=Kanit|Rubik+Mono+One&display=swap');

       h1,h2,h3{
        font-family: 'Rubik Mono One', sans-serif;
       }

       p { 
        font-family: 'Kanit', sans-serif;
       }

        body {
            margin: 0;
        }
        
        `}
        </style>
    </main>
)