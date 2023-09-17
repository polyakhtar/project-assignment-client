import './App.css';
import CreateProject from './Pages/Project/CreateProject/CreateProject';
import FolderNav from './Pages/Project/FolderNav/FolderNav';
import ProjectNav from './Pages/Project/ProjectNav/ProjectNav';
import RecentProject from './Pages/Project/RecentProject/RecentProject';


function App() {
  return (
    <div className='font-inter' style={{backgroundColor:'#F3F4F6'}}>
     <ProjectNav></ProjectNav>
     <div className='flex'>
     <FolderNav></FolderNav>
     <CreateProject></CreateProject>
     <RecentProject></RecentProject>

     </div>
    </div>
  );
}

export default App;
