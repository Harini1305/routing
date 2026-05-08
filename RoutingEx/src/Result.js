const Result = () => {
  let student = JSON.parse(localStorage.getItem("student"));

  if (!student) {
    return <h1>No Result Found</h1>;
  }

  return (
    <div className="resultBox">
      <h1>Result Page</h1>

      <h2>Roll No : {student.rollno}</h2>

      <h2>Name : {student.name}</h2>

      <h2>Total : {student.total}</h2>

      <h2>Average : {student.avg}</h2>

      <h2>Grade : {student.grade}</h2>
    </div>
  );
};

export default Result;
