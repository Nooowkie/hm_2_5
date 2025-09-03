import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>
      <p>
        Статус: {user.active ? "✅ Активен" : "❌ Неактивен"}
      </p>
    </div>
  );
};

export default UserCard;
