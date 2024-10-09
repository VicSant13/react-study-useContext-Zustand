import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ReducerExample from './ReducerExample.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <ReducerExample></ReducerExample>
  </StrictMode>,
)
