const FirstComponent = (abc) => {
  return (
    <div>
      <p>Creating First Component</p>
      <h1>{abc.name}</h1>
      <h2>{abc.courseName}</h2>
      <p>
        {abc.details.name} is {abc.age} years old and has{" "}
        {abc.details.bloodGroup} and lives in {abc.details.address} is{" "}
        {abc.isStudent ? " " : "not"} a student, his subjects are:{" "}
        {/*abc.subjects.join(", ")*/}
      </p>
      <ul>
        {/*mapping array to should be done to use it*/}
        {abc.subjects.map((s) => (
          <li key={s}>{s}</li>
        ))}
        Square of his age is {abc.square(abc.age)}
      </ul>
    </div>
  );
};

export default FirstComponent;
