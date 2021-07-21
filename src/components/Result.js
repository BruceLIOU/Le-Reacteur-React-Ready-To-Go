const Result = ({ switch1, switch2, switch3 }) => {
  /* console.log(switch1, switch2, switch3); */
  return (
    <>
      <button className={!switch1 && !switch2 && !switch3 ? "no-way" : "go"}>
        {!switch1 && !switch2 && !switch3 ? "No Way !" : "Go !"}
      </button>
    </>
  );
};

export default Result;
