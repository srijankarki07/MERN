/*here abc is an object*/
const FirstComponent = (props) => {
  return (
    <div>
      <p>Creating First Component</p>
      <h1>{props.name}</h1>
      <h2>{props.courseName}</h2>
      <p>
        {props.details.name} is {props.age} years old and has{" "}
        {props.details.bloodGroup} and lives in {props.details.address} is{" "}
        {props.isStudent ? " " : "not"} a student, his subjects are:{" "}
        {/*props.subjects.join(", ")*/}
      </p>
      <ul>
        {/*mapping array to should be done to use it*/}
        {props.subjects.map((s) => (
          <li key={s}>{s}</li>
        ))}
        Square of his age is {props.square(props.age)}
      </ul>
    </div>
  );
};

export default FirstComponent;
