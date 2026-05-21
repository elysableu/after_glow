import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import LibraryView from './components/library/LibraryView'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LibraryView />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}
