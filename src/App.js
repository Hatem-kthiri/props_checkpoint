import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let Data ={
    FullName :"Hatem kthiri",
    Bio : "Welcome Everyone",
    Profession :"Full Stack Developer",
    src :"https://i.ibb.co/Pt8mQ6g/image.jpg",
    alt :"profile_img"
  }
  return (
    <div className="App" >

       <Profile FullName={Data.FullName} Bio={Data.Bio} Profession={Data.Profession}>
        
        <img src={Data.src} alt={Data.alt} style={{borderRadius:"50%",width:90,height:90}}/>
        
        </Profile>
      
      
    </div>
  );
}

export default App;
