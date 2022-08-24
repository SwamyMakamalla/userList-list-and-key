import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'swamy',
    role: 'Software Developer',
  },
  {
    uniqNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Raju',
    role: 'Software Developer',
  },
  {
    uniqNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Akhil',
    role: 'Software Developer',
  },
  {
    uniqNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Rajinikanth',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container ">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqNo} />
      ))}
    </ul>
  </div>
)

export default App
