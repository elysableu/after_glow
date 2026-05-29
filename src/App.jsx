import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LiftScreen from './components/layouts/LiftScreen'
import Header from './components/ui/Header'
import LibraryView from './components/library/LibraryView'
import AboutView from './components/about/AboutView'
import RequestView from './components/requests/RequestView'

export default function App() {
  const [ lifted, setLifted ] = useState(false);
 
  return (
    <>
      <BrowserRouter>
        <main>
          <LiftScreen lifted={lifted} onStart={() => setLifted(true)} />
          <Header />
          <div className="routeContent">
            <Routes>
              <Route path="/" element={<LibraryView />} />
              <Route path="/about" element={<AboutView />} />
              <Route path="/request" element={<RequestView />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  )
}
