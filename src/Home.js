import react from 'react'
import './home.css'

export default function() {

  return (
    <div className='container'>
      <nav>
        <h1>#VANLIFE</h1>
        <div className='links'>
        <a>About</a>
        <a>Vans</a>
        </div>
      </nav>
      <main>
        <h2>
        You got the travel plans, we got the travel vans.
        </h2>
        <p>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <button>
        Find your van
        </button>
      </main>
      <footer>
        <p>
        Ⓒ 2022 #VANLIFE
        </p>
      </footer>
    </div>
  )

}