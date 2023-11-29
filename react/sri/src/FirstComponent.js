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
  return (
    <div>
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
    </div>
  );
};

export default FirstComponent;
