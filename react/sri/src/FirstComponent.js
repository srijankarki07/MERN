/*here abc is an object*/
import { useState } from "react";
import { MdAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const FirstComponent = ({
  name,
  courseName,
  age,
  isStudent,
  details,
  subjects,
  square,
}) => {
  //boolean state setting example
  const [testBoolean, setBoolean] = useState(isStudent);

  //number state setting example
  const [count, setCount] = useState(age);

  //array state setting example
  const [subs, setSubs] = useState(subjects);

  const [subject, setSubject] = useState(" ");

  //console.log(typeof testBoolean, typeof setBoolean, "check state");

  return (
    <div
      id="mycomponent"
      style={{
        color: testBoolean ? "red" : "green",
      }}
    >
      <p>Creating First Component</p>
      <h1>{name}</h1>
      {testBoolean && <h2>{courseName}</h2>}
      <p>
        {details.name} is {count} years old and has {details.bloodGroup} and
        lives in {details.address} is {testBoolean ? " " : "not"} a student, his
        subjects are: {/*props.subjects.join(", ")*/}
      </p>
      <ul>
        <input
          placeholder="Enter name of subjects"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button
          onClick={(e) => {
            setSubs([subject, ...subs]);
            setSubject("");
          }}
        >
          Add subjects
        </button>
        {/*mapping array to should be done to use it*/}
        {subs.map((s) => (
          <li key={s}>
            {" "}
            {s}{" "}
            <CiEdit
              color={"#368692"}
              onClick={(e) => setSubs(subs.filter((x) => x !== s))}
            />
            <MdAutoDelete
              color={"#870606"}
              onClick={(e) => setSubs(subs.filter((x) => x !== s))}
            />
          </li>
        ))}
        Square of his age is {square(age)}
      </ul>

      <button
        onClick={(e) => setBoolean(!testBoolean)}
        onMouseOver={(e) => console.log(e)}
      >
        Click here!
      </button>
      <br></br>
      <button onClick={(e) => setCount(count < 20 ? count + 1 : count)}>
        +
      </button>
      <button onClick={(e) => setCount(count > 1 ? count - 1 : count)}>
        -
      </button>

      {/*<form>
        <input type="button" />
        <input type="checkbox" />
        <input type="color" />
        <input type="date" />
        <input type="datetime-local" />
        <input type="email" />
        <input type="file" />
        <input type="hidden" />
        <input type="image" />
        <input type="month" />
        <input type="number" />
        <input type="password" />
        <input type="radio" />
        <input type="range" />
        <input type="reset" />
        <input type="search" />
        <input type="submit" />
        <input type="tel" />
        <input type="text" />
        <input type="time" />
        <input type="url" />
        <input type="week" />
        </form>*/}
    </div>
  );
};

export default FirstComponent;
