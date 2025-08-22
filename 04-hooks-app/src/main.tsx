import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ScrambleWords } from './05-useReducer/reducer/ScrambleWord'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'
import  { InstagromApp } from './07-useOptimistic/InstagromApp'
//import { TasksApp } from './05-useReducer/TaskApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <TasksApp/> */}
      {/* <ScrambleWords/> */}
      {/* <MemoHook/> */}
      {/* <MemoCounter/> */}
      <InstagromApp />
  </StrictMode>,
)
