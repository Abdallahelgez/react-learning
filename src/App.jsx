
import DashboardHeader from "./components/DashboardHeader";
import UserCard from "./components/UserCard";
import './App.css'
function ProfileCard({person}){
    return(<div key={person.name} className="card">
                <h2>{person.name}</h2>
                <p>{person.jobTitle}</p>
                {person.age > 20 ? (
                    <span style={{ color: "green" }}>your age is good</span>
                ) : (
                    <span style={{ color: "red" }}>you are young</span>
                )}
                <div>
                    {person.skills.join(" && ")}
                </div>
            </div>)
}


function App() {
 const Users = [
    {id:1,name:"ali",age:22,jobTitle:"engineer",isActive: true,skills:["JavaScript", "html",  "css", "react"]},
    {id:2,name:"hossam",age:25,jobTitle:"engineer",isActive: true,skills:["animations", "bootstrap",  "tailwind", "jinja"]},
    {id:3,name:"khalid",age:30,jobTitle:"engineer",isActive: false,skills:["php", "laravel",  "twig", "json"]},
    {id:4,name:"abdalla ",age:26,jobTitle:"engineer",isActive: true,skills:["angiular", "DB",  "dot net", "mysql"]},
    {id:5,name:"ammar",age:19,jobTitle:"engineer",isActive: false,skills:["Q&A", "automate",  "bash", "linux"]}
    
];
function onUserClick(id){
    console.log(`user ${id} is clicked`);
}

  return (<div>
        <DashboardHeader title="Hello world"/>
        <div className="grid-div">
            {Users.map((user)=> <UserCard user={user} onUserClick={onUserClick}  />)}
        </div>
    </div>);
    
}



export default App;
