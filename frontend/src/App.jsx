import { Navbar } from "./Navbar"
import { Usercreate } from "./Usercreate"
import toast, { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import { Userdatalist } from "./Userdatalist";
import { Userdatas } from "./Userdatas";

function App() {


  return (
    <>
      <Navbar />
      
      <Routes>
      <Route path="/create" element={<Usercreate />} />
      <Route path="/userdatalist" element={<Userdatas />} />
      </Routes>

      

      <Toaster />
    </>
  )
}

export default App
