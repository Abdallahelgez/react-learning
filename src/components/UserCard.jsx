 function UserCard({user,onUserClick}) {
  return (
    <div className='user-card' onClick={()=> onUserClick(user.id)} >
    <h2>{user.name}</h2>
    
    {user.isActive ? (<span className='bedge active'>Active</span>):(<span className='bedge inactive'>inactive</span>)}
   
    <span>{user.age}</span>
    <p>{user.jobTitle}</p> 
    {user.skills.map((skill,index)=>(

        <div key={index}>
            <span>{skill}</span>
        </div>

    ) )}
    
    </div>
  )
}

export default UserCard;