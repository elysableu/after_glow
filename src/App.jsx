import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LiftScreen from './components/layouts/LiftScreen'
import Header from './components/ui/Header'
import LibraryView from './components/library/LibraryView'

export default function App() {
  const [ lifted, setLifted ] = useState(false);
 
  return (
    <>
      <BrowserRouter>
        <main>
          <LiftScreen lifted={lifted} onStart={() => setLifted(true)} />
          <Header />
          <Routes>
            <Route path="/" element={<LibraryView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
