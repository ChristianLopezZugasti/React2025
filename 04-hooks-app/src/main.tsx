import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWords } from './05-useReducer/reducer/ScrambleWord'
//import { TasksApp } from './05-useReducer/TaskApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <TasksApp/> */}
      <ScrambleWords/>
  </StrictMode>,
)
