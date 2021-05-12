import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import SearchPages from './SearchPages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:search'>
            <div className='app_page'>
              <Sidebar />
              <SearchPages />
            </div>
          </Route>
          <Route path='/'>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
