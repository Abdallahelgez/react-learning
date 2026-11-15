

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
 const lists = [
    {name:"ali",age:22,jobTitle:"engineer",skills:["JavaScript", "html",  "css", "react"]},
    {name:"hossam",age:25,jobTitle:"engineer",skills:["animations", "bootstrap",  "tailwind", "jinja"]},
    {name:"khalid",age:30,jobTitle:"engineer",skills:["php", "laravel",  "twig", "json"]},
    {name:"abdalla ",age:26,jobTitle:"engineer",skills:["angiular", "DB",  "dot net", "mysql"]},
    {name:"ammar",age:19,jobTitle:"engineer",skills:["Q&A", "automate",  "bash", "linux"]}
    
];

  return (<div>
        {lists.map((item,index) => (
            <ProfileCard  person={{ ...item,id : index + 1}} key={item.id}   />
        ))}
    </div>);
    
}



export default App;
