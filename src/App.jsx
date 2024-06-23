
import './App.css'
import Hero from './components/Hero'
import Hightlights from './components/Hightlights'
import Navbar from './components/Navbar'
import Model from './components/Model'
const App=()=> {
  return (
   <main className='bg-black'>
<Navbar/> 
<Hero/>
<Hightlights/>
<Model/>
   </main>
  )
}

export default App
