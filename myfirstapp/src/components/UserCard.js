const UserCard = (prompt) => {
  return (
    <div class="frame">
      <div>
        <p>Name:{prompt.name}</p>
        <p>Age:{prompt.age}</p>
      </div>
      <div>
        <img class="zurag" src={prompt.ImageUrl} alt="Italian Trulli" />
      </div>
    </div>
  );
};
export default UserCard;
