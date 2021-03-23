import React from 'react'
import '../assets/css/Greetings.css'

const Greetings = ({lang, children}) => {
    let greetings= ""

      if (lang === "de") {
        greetings = "Hallo"
    } else if (lang === "en") {
        greetings = "Hello"
    } else if (lang === "es") {
        greetings= "Hola"
    } else if (lang === "fr") {
        greetings = "Bonjour"
    }

    return (
      <div className='Greetings'>
         <h3>{greetings} {children}</h3> 
      </div>
    )
  }

export default Greetings 