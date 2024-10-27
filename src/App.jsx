import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp, UserButton, UserProfile } from '@clerk/clerk-react';

import LandingPage from './components/LandingPage';
import Mainpage from './components/Mainpage';

const clerkPubKey = process.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div>
          <UserButton afterSignOutUrl="/" /> {/* Adds user button for sign-out/profile access */}
          
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected Routes */}
            <Route 
              path="/syntax-bot" 
              element={
                <SignedIn>
                  <Mainpage />
                </SignedIn>
              } 
            />

            <Route 
              path="/profile" 
              element={
                <SignedIn>
                  <UserProfile />
                </SignedIn>
              } 
            />

            {/* Redirect to Sign In if accessing protected routes without authentication */}
            <Route 
              path="*" 
              element={
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
