import { useState } from "react";

import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  let [rollno, setRollno] = useState("");
  let [name, setName] = useState("");

  let [m1, setM1] = useState("");
  let [m2, setM2] = useState("");
  let [m3, setM3] = useState("");
  let [m4, setM4] = useState("");
  let [m5, setM5] = useState("");

  const nav = useNavigate();

  function calculateResult() {
    let total = Number(m1) + Number(m2) + Number(m3) + Number(m4) + Number(m5);

    let avg = total / 5;

    let grade = "";

    if (avg >= 90) {
      grade = "A";
    } else if (avg >= 75) {
      grade = "B";
    } else if (avg >= 50) {
      grade = "C";
    } else {
      grade = "Fail";
    }

    let student = {
      rollno,
      name,
      total,
      avg,
      grade,
    };

    localStorage.setItem("student", JSON.stringify(student));

    nav("/result");
  }

  return (
    <div className="formBox">
      <h1>Student Result</h1>

      <input
        type="text"
        placeholder="Roll No"
        onChange={(e) => setRollno(e.target.value)}
      />

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 1"
        onChange={(e) => setM1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 2"
        onChange={(e) => setM2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 3"
        onChange={(e) => setM3(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 4"
        onChange={(e) => setM4(e.target.value)}
      />

      <input
        type="number"
        placeholder="Subject 5"
        onChange={(e) => setM5(e.target.value)}
      />

      <button onClick={calculateResult}>Calculate Result</button>
    </div>
  );
};

export default StudentForm;
