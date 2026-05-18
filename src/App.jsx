import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LibraryView from './components/library/LibraryView'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryView />} />
      </Routes>
    </BrowserRouter>
  )
}
