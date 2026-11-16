function DashboardHeader({title,users}) {

    const activeUsers = users?.filter((user)=> user.isActive).length || 0;
    const inactiveUsers = users?.filter((user) => !user.isActive).length || 0;
    const totalUsers = users?.length || 0;
    return (
        <>
        <div className="header">{title}
        </div>
        <div className="totals"> 
            <div className="total">
                <span className='text'>Total Users</span>
                <span className='num'>{users?.length}</span>
            </div>
            <div className="active-total">
                <span className='text'>Active Users</span>
                <span className='num'>{activeUsers}</span>
            </div>
            <div className="inactive-total">
                <span className='text'>Inactive Users</span>
                <span className='num'>{inactiveUsers}</span>
            </div>
        </div>
        <div> <span style="color:blue;background-color:#63BFFE" >All Users</span>
                <span style="color:#DCF2E2;background-color:#55B589;" >All Users</span>
                <span style="color:#E26A85;background-color:#FCDDDE" >All Users</span>
        </div>
    </>
    )
}
export default DashboardHeader;