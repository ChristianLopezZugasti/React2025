import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster, toast } from 'sonner'


//import { ScrambleWords } from './05-useReducer/reducer/ScrambleWord'
//import { MemoHook } from './06-memos/MemoHook'
//import { MemoCounter } from './06-memos/MemoCounter'
//import  { InstagromApp } from './07-useOptimistic/InstagromApp'
//import { ClientInformation } from './08-use-suspense/ClientInformation'
//import { getUserAction } from './08-use-suspense/api/get-user.action'
//import { TasksApp } from './05-useReducer/TaskApp'
import { ProfesisionalApp } from './09-useContext/ProfesisionalApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
      {/* <TasksApp/> */}
      {/* <ScrambleWords/> */}
      {/* <MemoHook/> */}
      {/* <MemoCounter/> */}
      {/* <InstagromApp /> */ }
{/* 
  El fallback es algo que queremos mostrar en lo que se resuleve el componente  
      <Suspense fallback={
        <div className='bg-gradient flex flex-col'>
          <h1 className='text-2xl'> Cargando </h1>
        </div>
      }> 
        <ClientInformation  getUser={ getUserAction(1000)} />
      </Suspense> 
*/}
  <ProfesisionalApp/>
  </StrictMode>,
)
