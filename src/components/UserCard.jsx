function UserCard({ user, onUserClick, deleteUser }) {
  return (
    <div className='user-card'>
      <h2>{user.name}</h2>

      {user.isActive ? (
        <span className='bedge active'>Active</span>
      ) : (
        <span className='bedge inactive'>inactive</span>
      )}

      <span>{user.age}</span>
      <p>{user.jobTitle}</p>
      {user.skills?.map((skill, index) => (
        <div key={index}>
          <span>{skill}</span>
        </div>
      ))}
      <button onClick={() => deleteUser(user.id)}>delete</button>
      <button onClick={() => onUserClick(user.id)}>show</button>
    </div>
  );
}

export default UserCard;
