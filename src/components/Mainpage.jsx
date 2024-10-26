import React from 'react';
import Sidebar from "/src/components/Sidebar";
import Chatbotmain from "/src/components/Chatbotmain.jsx";
import './Mainpage.css'; // Make sure to create this CSS file for styling

function Mainpage() {
  return (
    <div className="mainpage">
      {/* <div className="sidebar">
        <Sidebar />
      </div> */}
      <div className="chatcomponent">
        <Chatbotmain />
      </div>
    </div>
  );
}

export default Mainpage;
