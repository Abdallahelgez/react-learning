import { useState,useEffect} from 'react';
import DashboardHeader from './components/DashboardHeader';
import './App.css'


 function App() {
  // const users = [
  //   { id: 1, name: "ali", age: 22, jobTitle: "engineer", isActive: true, skills: ["JavaScript", "html", "css", "react"] },
  //   { id: 2, name: "hossam", age: 25, jobTitle: "engineer", isActive: true, skills: ["animations", "bootstrap", "tailwind", "jinja"] },
  //   { id: 3, name: "khalid", age: 30, jobTitle: "engineer", isActive: false, skills: ["php", "laravel", "twig", "json"] },
  //   { id: 4, name: "abdalla ", age: 26, jobTitle: "engineer", isActive: true, skills: ["angiular", "DB", "dot net", "mysql"] },
  //   { id: 5, name: "ammar", age: 19, jobTitle: "engineer", isActive: false, skills: ["Q&A", "automate", "bash", "linux"] }

  // ];
 const [users,setUsers] = useState([
    { id: 1, name: "ali", age: 22, jobTitle: "engineer", isActive: true, skills: ["JavaScript", "html", "css", "react"] },
    { id: 2, name: "hossam", age: 25, jobTitle: "engineer", isActive: true, skills: ["animations", "bootstrap", "tailwind", "jinja"] },
    { id: 3, name: "khalid", age: 30, jobTitle: "engineer", isActive: false, skills: ["php", "laravel", "twig", "json"] },
    { id: 4, name: "abdalla ", age: 26, jobTitle: "engineer", isActive: true, skills: ["angiular", "DB", "dot net", "mysql"] },
    { id: 5, name: "ammar", age: 19, jobTitle: "engineer", isActive: false, skills: ["Q&A", "automate", "bash", "linux"] }

  ]);
//  const [filter,setFilter]= useState("all");
//  const [search,setSearch]= useState("");
//  const [selectedUser,setSelectedUser]=useState(null);
// function onUserClick(id) {
//       setSelectedUser(users.find((user)=> user.id === id))  
//   }
//   function deleteUser(id){
//     setUsers(prevUsers => prevUsers.filter(((user) => user.id !== id)))


//   } 


const [counter,setCounter]=useState(0);
const [usersApi,setUsersApi] = useState([]);
const controller = new AbortController();

let [isPlay,setIsPlay]  = useState(false);

      useEffect(() => {
        
          if (!isPlay) {
            return;
          }



      const intervalId = setInterval(() => {
        /* start */
        
          setCounter((prev)=> {
          return prev + 1;
          })
      

      
        
      }, 1000); 
        return () => clearInterval(intervalId);

  
      },[isPlay]);
    async function fetchdata(){
      const res= await fetch("https://jsonplaceholder.typicode.com/users",
        {signal: controller.signal}
      );
      


    }
     fetchdata()



  return (
    <div>
      <h1>totals {users.length}</h1>

      <h2>{counter}</h2>
      <button disabled={!isPlay} onClick={()=>{setIsPlay(0),setCounter(0)}}>reset</button>
      <button disabled={!isPlay} onClick={()=>{setIsPlay(false)}}>pause</button>
      <button disabled={isPlay} onClick={()=>{setIsPlay(true)}}>play</button>
      
      
      
      
      {/* <DashboardHeader  users={users} selectedUser={selectedUser}  filter={filter} setFilter={setFilter} deleteUser={deleteUser}  onUserClick={onUserClick} setUsers={setUsers}/> */}
    </div>);

}



export default App;
