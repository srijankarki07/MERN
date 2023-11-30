/*here abc is an object*/
const FirstComponent = ({
  name,
  courseName,
  age,
  isStudent,
  details,
  subjects,
  square,
}) => {
  //function for click event
  const handleClick = () => {
    console.log("hello,guys");
  };

  return (
    <div id="mycomponent">
      <p>Creating First Component</p>
      <h1>{name}</h1>
      <h2>{courseName}</h2>
      <p>
        {details.name} is {age} years old and has {details.bloodGroup} and lives
        in {details.address} is {isStudent ? " " : "not"} a student, his
        subjects are: {/*props.subjects.join(", ")*/}
      </p>

      <ul>
        {/*mapping array to should be done to use it*/}
        {subjects.map((s) => (
          <li key={s}>{s}</li>
        ))}
        Square of his age is {square(age)}
      </ul>
      {/*handling click events*/}
      <button onClick={handleClick}>Click Events</button>
      <br></br>

      <button
        onClick={(e) => console.log(e)}
        onMouseOver={(e) => console.log(e)}
      >
        Click here!
      </button>
    </div>
  );
};

export default FirstComponent;
