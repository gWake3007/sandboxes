const Card = ({ name, email, phone }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <hr />
        <div>
          {email ? <p>Email:{email}</p> : false}
          {phone && <p>Phone:{phone}</p>}
          {/* <p>addres:{street}</p> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;

//!false null undefined не рендереться на реакті. А також не працюють звичайні if else ВИКОРИСТОВУЄМО ТЕРНАРНИКИ!!!
