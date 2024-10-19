import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BirthdayWish from './BirthdayWish.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BirthdayWish />
  </StrictMode>,
)
