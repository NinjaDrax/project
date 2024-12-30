import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Login from './components/Login'
import Register from './components/Register'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    //  <div className='h-screen bg-black'>
    //    {
    //     songsData.length !==0
    //       ? <>
    //         <div className='h-[90%] flex'>
    //           <Sidebar />
    //           <Display />
    //         </div>
    //         <Player />
    //       </>
    //       : ""
    //   }

    //   <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio> 
    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={      <div className='h-screen bg-black'>
       {
        songsData.length !==0
          ? <>
            <div className='h-[90%] flex'>
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
          : ""
      }

      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio> 
    </div>} />
    </Routes>



  )
}

export default App
