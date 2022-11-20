import { useState } from 'react';
import './App.css';
import ChatArea from './components/Chat/ChatArea';
import ServerChats from './components/sidebar/ServerChats';
import Sidebar from './components/sidebar/Sidebar';
// side nav -> hide on mobile -> hide btn is in chat area
// server nav 
// chat area
// server members is inside chat area
function App() {
  const [isBarOpen , setIsBarOpen] = useState(true);

  const toggleBar = () =>{
    setIsBarOpen(prev => !prev);
  }
  return (
    <main className={isBarOpen ? '' : 'closedBar'}>
      <Sidebar isBarOpen={isBarOpen}/>
      <ServerChats isBarOpen={isBarOpen}/>
      <ChatArea toggleBar={toggleBar} />
    </main>
  );
}

export default App;
