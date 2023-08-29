// Styles
import "./App.css";
import { useState } from "react";

//Component
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/users/UserList";
import NewUserForm from "./components/newuser/NewUserForm";


function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([]);

  //delete users

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  // Close modal

  const closeModal = (e) => {
    if (e.target.className === 'overlay') setShowModal(false)
    if (e.key === "Escape") setShowModal(false)
  }

  // Add user

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users :|</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">Create Users</button>
      <Footer />
    </div>
  );
}

export default App;

