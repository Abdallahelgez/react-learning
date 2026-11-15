import React from 'react';
function ProfileCard(){


return (
    <div>
        {lists.map((person) => (
            <div key={person.name} className="card">
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
            </div>
        ))}
    </div>
);

};
export default ProfileCard;