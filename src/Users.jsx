import User from "./User";

const Users = ({ users }) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <User
                        ime={user.ime}
                        prezime={user.prezime}
                        dob={user.dob}
                    />
                )
            })}
        </div>
    );
};

export default Users;
