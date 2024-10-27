// import Sidebar from './components/Sidebar'
import LandingPage from './components/Landingpage'
// import './App.css'
// import Chatbotmain from './components/Chatbotmain'
import Mainpage from './components/Mainpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

function App() {

  const clerkPubKey = process.env.VITE_CLERK_PUBLISHABLE_KEY;
  return (
  <div>
    <Router>
    <Routes>
        {/* Define the paths for each component */}
        <Route path="/" element={< LandingPage/>} />
        <Route path="/Syntax's bot" element={<Mainpage />} />
       
       
      </Routes>
    </Router>
{/* <Sidebar/> */}
{/* <LandingPage/> */}

  </div>
  )
}

export default App
