import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage'
import Test from './page/Test'



function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/alo' element={<Test/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App