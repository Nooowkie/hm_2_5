import UserCard from "./UserCard";

const UserList = () => {
  const users = [
    { id: 1, name: "Бектен", age: 26, city: "Кант", active: true },
    { id: 2, name: "Уулжан", age: 18, city: "Бишкек", active: false },
    { id: 3, name: "Жак ", age: 34, city: "Хьюстон", active: true },
    { id: 4, name: "Тор", age: 1518 , city: "Асгард", active: false },
  ];

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
