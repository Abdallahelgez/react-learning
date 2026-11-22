import UserCard from "./UserCard";
import { useState } from "react";

function DashboardHeader({ users, filter, setFilter, onUserClick, selectedUser, deleteUser, setUsers }) {
    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        isActive: false,
        jobTitle: "",
        age: "",
        skills: ""
    });

    const activeUsers = users?.filter((user) => user.isActive) || [];
    const inactiveUsers = users?.filter((user) => !user.isActive) || [];
    const totalUsers = users || [];

    const filterUsers = filter === "all" ? users : filter === "active" ? activeUsers : inactiveUsers;

    // قائمة المستخدمين المعروضة بناءً على الفلتر والبحث معاً
    const displayedUsers = filterUsers?.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function addUser() {
        if (!formData.id || !formData.name) {
            alert("يرجى إدخال رقم المسلسل والاسم");
            return;
        }
        
        const isExits = users.some((user) => user.id === Number(formData.id));
        if (isExits) {
            alert("هذا المسلسل موجود بالفعل!");
            return;
        }

        const newUser = {
            id: Number(formData.id),
            name: formData.name.trim(),
            isActive: Boolean(formData.isActive),
            jobTitle: formData.jobTitle.trim(),
            age: Number(formData.age) || 0,
            skills: formData.skills
                ? formData.skills.split(",").map((s) => s.trim()).filter(Boolean)
                : []
        };

        setUsers((prevUsers) => [...prevUsers, newUser]);

        // مسح قيم النموذج بعد الإضافة
        setFormData({
            id: "",
            name: "",
            isActive: false,
            jobTitle: "",
            age: "",
            skills: ""
        });
    }

    return (
        <>
            <div className="totals">
                <div className="total">
                    <span className='text'>Total Users</span>
                    <span className='num'>{totalUsers?.length}</span>
                </div>
                <div className="active-total">
                    <span className='text'>Active Users</span>
                    <span className='num'>{activeUsers?.length}</span>
                </div>
                <div className="inactive-total">
                    <span className='text'>Inactive Users</span>
                    <span className='num'>{inactiveUsers?.length}</span>
                </div>
            </div>

            <div>
                <div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search"
                    />
                </div>
                <div>
                    <button style={{ color: "blue", backgroundColor: "#63BFFE" }} onClick={() => setFilter("all")}>All Users</button>
                    <button style={{ color: "#DCF2E2", backgroundColor: "#55B589" }} onClick={() => setFilter("active")}>Active Users</button>
                    <button style={{ color: "#E26A85", backgroundColor: "#FCDDDE" }} onClick={() => setFilter("inactive")}>Inactive Users</button>
                </div>
            </div>

            <div>
                <h3>add user</h3>
                <div>
                    <label htmlFor="id">رقم المسلسل</label>
                    <input
                        type="number"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="ID"
                    />
                </div>
                <div>
                    <label htmlFor="name">الاسم</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label htmlFor="active">الحالة</label>
                    <input
                        type="checkbox"
                        name="isActive"
                        onChange={handleChange}
                        checked={formData.isActive}
                        placeholder="Active"
                    />
                </div>
                <div>
                    <label htmlFor="jobTitle">الوظيفة</label>
                    <input
                        type="text"
                        name="jobTitle"
                        onChange={handleChange}
                        value={formData.jobTitle}
                        placeholder="job"
                    />
                </div>
                <div>
                    <label htmlFor="age">العمر</label>
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                        value={formData.age}
                        placeholder="age"
                    />
                </div>
                <div>
                    <label htmlFor="skills">المهارات</label>
                    <input
                        type="text"
                        name="skills"
                        onChange={handleChange}
                        value={formData.skills}
                        placeholder="skills with , between"
                    />
                </div>

                <button onClick={addUser}>Add</button>
            </div>

            <div>
                {displayedUsers.map((user) => (
                    <UserCard user={user} key={user.id} deleteUser={deleteUser} onUserClick={onUserClick} />
                ))}
            </div>
            {selectedUser && (
                <div>
                    <div>details {selectedUser.name}</div>
                    <div>

                        <UserCard user={selectedUser} />


                    </div>

                </div>
            )}
        </>
    );
}

export default DashboardHeader;
