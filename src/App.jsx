import { Route,Routes } from "react-router-dom"
import TabContainer from "./components/TabContainer"
import ItsMusalem from "./pages/ItsMusalem"
import Skills from "./pages/Skills"
function App() {

   
    return <div className="bg-[#eeeeee] h-screen flex justify-center items-center">
        <div className="border border-[#979797] w-1/2 h-72 overflow-hidden rounded-md p-4 flex">
            <div className="">
                <TabContainer />
            </div>
            <div className=" w-full">
                <Routes>
                    <Route path="/itsMusalem" element={<ItsMusalem/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                </Routes> 
            </div>
            
        </div>
        
    </div>
}

export default App