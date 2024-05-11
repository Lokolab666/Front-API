import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App">
            <StudentList />
        </div>
      </header>
    </div>
  );
}

export default App;
