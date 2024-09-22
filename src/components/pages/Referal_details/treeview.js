// import React, { useState } from "react";
// import { Button } from "antd"; // Import Ant Design Button component
// import styled from "styled-components";

// const TreeComponent = ({ dataList }) => {
//     const [expandedNodes, setExpandedNodes] = useState([]);

//     const handleLayerClick = (nodeName) => {
//         if (expandedNodes.includes(nodeName)) {
//             setExpandedNodes(expandedNodes.filter((node) => node !== nodeName));
//         } else {
//             setExpandedNodes([...expandedNodes, nodeName]);
//         }
//     };

//     const renderTree = (nodes) => {
//         return (
//             <TreeContainer>
//                 {nodes.map((userData) => (
//                     <TreeNode key={userData.name}>
//                         <TreeNodeHeader>
//                             {userData.layerconfig &&
//                                 userData.layerconfig.length > 0 && (
//                                     <Button
//                                         type="text"
//                                         size="small"
//                                         onClick={() =>
//                                             handleLayerClick(userData.name)
//                                         }
//                                     >
//                                         {expandedNodes.includes(userData.name)
//                                             ? "-"
//                                             : "+"}
//                                     </Button>
//                                 )}
//                             <Image src="/profile.jpg" alt="Vinod Joy" />
//                             <Title>{userData.name}</Title>
//                         </TreeNodeHeader>
//                         <TreeNodeContent>
//                             <Description>{userData.count}</Description>
//                             <Description>{userData.price}</Description>
//                             <Description>{userData.member}</Description>
//                         </TreeNodeContent>
//                         {userData.layerconfig &&
//                             expandedNodes.includes(userData.name) &&
//                             renderTree(userData.layerconfig)}
//                     </TreeNode>
//                 ))}
//             </TreeContainer>
//         );
//     };

//     return <>{renderTree(dataList)}</>;
// };

// const TreeContainer = styled.div`
//     margin-left: 20px; /* Adjust the margin as needed */
// `;

// const TreeNode = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: 1px solid #ccc;
//     margin: 5px;
//     padding: 10px;
// `;

// const TreeNodeHeader = styled.div`
//     display: flex;
//     align-items: center;
// `;

// const Title = styled.h3`
//     font-size: 18px;
//     font-weight: bold;
//     margin-left: 10px; /* Adjust the margin as needed */
// `;

// const TreeNodeContent = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const Description = styled.p`
//     font-size: 16px;
// `;

// const Image = styled.img`
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     margin-right: 10px; /* Adjust the margin as needed */
// `;

// export default TreeComponent;













import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserListItem = styled.li`
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

function IndexedDBExample() {
  const [db, setDb] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    const request = window.indexedDB.open("UserDatabase", 1);

    request.onerror = function(event) {
      console.error("Database error:", event.target.error);
    };

    request.onsuccess = function(event) {
      const db = event.target.result;
      setDb(db);
      fetchUsers(db);
    };

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("age", "age", { unique: false });
    };
  }, []);

  const fetchUsers = (db) => {
    const transaction = db.transaction(["users"], "readonly");
    const objectStore = transaction.objectStore("users");

    const getRequest = objectStore.getAll();

    getRequest.onsuccess = function(event) {
      setUsers(event.target.result);
    };
  };

  const addUser = () => {
    if (!name || !age || isNaN(age)) return;

    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const user = { name, age: parseInt(age) };

    const request = objectStore.add(user);

    request.onsuccess = function(event) {
      fetchUsers(db);
      setName("");
      setAge("");
    };
  };

  const deleteUser = (userId) => {
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const request = objectStore.delete(userId);

    request.onsuccess = function(event) {
      fetchUsers(db);
    };
  };

  const editUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setName(userToEdit.name);
    setAge(userToEdit.age);
    setEditingUserId(userId);
  };

  const updateUser = () => {
    if (!name || !age || isNaN(age)) return;

    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const updatedUser = { id: editingUserId, name, age: parseInt(age) };

    const request = objectStore.put(updatedUser);

    request.onsuccess = function(event) {
      fetchUsers(db);
      setName("");
      setAge("");
      setEditingUserId(null);
    };
  };

  return (
    <Container>
      <h2>{editingUserId ? "Edit User" : "Add User"}</h2>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {editingUserId ? (
        <Button onClick={updateUser}>Update User</Button>
      ) : (
        <Button onClick={addUser}>Add User</Button>
      )}

      <h2>Users</h2>
      <UserList>
        {users.map((user) => (
          <UserListItem key={user.id}>
            Name: {user.name}, Age: {user.age}
            <Button onClick={() => editUser(user.id)}>Edit</Button>
            <Button onClick={() => deleteUser(user.id)}>Delete</Button>
          </UserListItem>
        ))}
      </UserList>
    </Container>
  );
}

export default IndexedDBExample;
