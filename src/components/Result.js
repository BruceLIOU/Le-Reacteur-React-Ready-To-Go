const Result = ({ switch1, switch2, switch3 }) => {
  /* console.log(switch1, switch2, switch3); */
  return (
    <>
      <button>{switch1 && switch2 && switch3 ? "Go !" : "No Way !"}</button>
    </>
  );
};

export default Result;
