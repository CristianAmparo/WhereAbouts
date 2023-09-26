import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Content from './content'
import Sample2 from './sample2'

 const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path='/Login'  element={<Login />}/>
                <Route path='/Signup' element={<Signup />}/>
                <Route path='/Content' element={<Content/>} />
            </Routes>
        </BrowserRouter>
    )
 }   

 export default App;
   
  

