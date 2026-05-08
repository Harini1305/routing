const Welcome = () => {
  let name = localStorage.getItem("name");

  return (
    <div className="page">
      <h1>WELCOME {name}</h1>

      <h2>React Routing Application</h2>
    </div>
  );
};

export default Welcome;
