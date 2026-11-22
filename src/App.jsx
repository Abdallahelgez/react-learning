import { useState } from 'react';
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
 const [filter,setFilter]= useState("all");
 const [search,setSearch]= useState("");
 const [selectedUser,setSelectedUser]=useState(null);
function onUserClick(id) {
      setSelectedUser(users.find((user)=> user.id === id))  
  }
  function deleteUser(id){
    setUsers(prevUsers => prevUsers.filter(((user) => user.id !== id)))


  }
  
  return (
    <div>
      <DashboardHeader  users={users} selectedUser={selectedUser}  filter={filter} setFilter={setFilter} deleteUser={deleteUser}  onUserClick={onUserClick} setUsers={setUsers}/>
    </div>);

}



export default App;
