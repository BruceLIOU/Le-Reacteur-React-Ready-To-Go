const Switch = ({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
}) => {
  return (
    <>
      <div className="btn-group">
        <button
          className={switch1 ? "btn off" : "btn on"}
          onClick={() => setSwitch1(true)}
        >
          ON
        </button>
        <button
          className={switch1 ? "btn on" : "btn off"}
          onClick={() => setSwitch1(false)}
        >
          OFF
        </button>
      </div>
      <div className="btn-group">
        <button
          className={switch2 ? "btn off" : "btn on"}
          onClick={() => setSwitch2(true)}
        >
          ON
        </button>
        <button
          className={switch2 ? "btn on" : "btn off"}
          onClick={() => setSwitch2(false)}
        >
          OFF
        </button>
      </div>
      <div className="btn-group">
        <button
          className={switch3 ? "btn off" : "btn on"}
          onClick={() => setSwitch3(true)}
        >
          ON
        </button>
        <button
          className={switch3 ? "btn on" : "btn off"}
          onClick={() => setSwitch3(false)}
        >
          OFF
        </button>
      </div>
    </>
  );
};

export default Switch;
