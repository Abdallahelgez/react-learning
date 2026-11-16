import { useState } from 'react';
import './App.css'


function App() {
  const users = [
    { id: 1, name: "ali", age: 22, jobTitle: "engineer", isActive: true, skills: ["JavaScript", "html", "css", "react"] },
    { id: 2, name: "hossam", age: 25, jobTitle: "engineer", isActive: true, skills: ["animations", "bootstrap", "tailwind", "jinja"] },
    { id: 3, name: "khalid", age: 30, jobTitle: "engineer", isActive: false, skills: ["php", "laravel", "twig", "json"] },
    { id: 4, name: "abdalla ", age: 26, jobTitle: "engineer", isActive: true, skills: ["angiular", "DB", "dot net", "mysql"] },
    { id: 5, name: "ammar", age: 19, jobTitle: "engineer", isActive: false, skills: ["Q&A", "automate", "bash", "linux"] }

  ];
  // function onUserClick(id) {
  //     console.log(`user ${id} is clicked`);
  // }
  // const [count,setCount]= useState(0);
  // function increment(count){
  //    setCount(count +1);

  // }
  const [user, setUser] = useState([...users]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age,setAge] = useState('');
  function update() {
    setUser(
      user.map((u) =>
        u.id === Number(id)
          ? { ...u, name: name || u.name, age: age ? Number(age) : u.age }
          : u
      )
    );
  }

  return (
    <div>
      <input
        type="number"
        placeholder="enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={update}>update</button>
    <div className="users-list">
  {user.map((item) => (
    <div key={item.id} className="card">
      <h3>#{item.id} - {item.name}</h3>
      <p>Age: {item.age}</p>
      <p>Job: {item.jobTitle}</p>
    </div>
  ))}
</div>
  </div>);

}



export default App;
