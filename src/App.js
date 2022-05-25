import Header from './components/Header'
import Info from './components/Info'
import Translate from './components/Translation'

import Footer from './components/Footer'

import "./styles.css"

export default function App() {
  return (
    <div className="App-Grid">
      < Header />
      < Info />
      < Translate />
      
      < Footer />
    </div>
  )
}
