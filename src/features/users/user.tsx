import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { User, fetchUsers, userSelector } from "./userSlice";
// import "./user.css";
function UserPage() {
    const [users, setUsers] = useState<Array<User>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const selectedUsers = useAppSelector(userSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLoading(selectedUsers.loading);
        setError(selectedUsers.error);
        setUsers(selectedUsers.users);
    }, [selectedUsers]);

    function handleFetchUser() {
        dispatch(fetchUsers());
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {users?.map((user) => (
                <li key={user.id}>
                    {user.id} | {user.name} | {user.email}
                </li>
            ))}
            <button className="btn" onClick={handleFetchUser}>Fetch</button>
        </div>
    );
}
export default UserPage;

// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { User, addUser, userSelector } from "./userSlice";
// // import "./user.css";

// function UserPage() {
//     const [users, setUsers] = useState<Array<User>>([]);
//     const [newUserName, setNewUserName] = useState<string>("");
//     const [newUserEmail, setNewUserEmail] = useState<string>("");
//     const selectedUsers = useAppSelector(userSelector);
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         setUsers(selectedUsers);
//         return () => {
//             console.log("component unmounting...");
//         };
//     }, [selectedUsers]);

//     function handleAddUser() {
//         const newUser = {
//             id: (users.length + 1).toString(),
//             name: newUserName,
//             email: newUserEmail,
//         };
//         dispatch(addUser(newUser));
//     }
//     return (
//         <div>
//             {users.map((user) => (
//                 <li key={user.id}>
//                     {user.id} | {user.name} | {user.email}
//                 </li>
//             ))}
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     aria-label="name"
//                     value={newUserName}
//                     onChange={(e) => setNewUserName(e.target.value)}
//                 ></input>
//                 <input
//                     type="text"
//                     placeholder="Email"
//                     aria-label="email"
//                     value={newUserEmail}
//                     onChange={(e) => setNewUserEmail(e.target.value)}
//                 ></input>
//                 <button type="submit" className="btn" onClick={handleAddUser}>
//                     Add
//                 </button>
//             </div>
//         </div>
//     );
// }
// export default UserPage;