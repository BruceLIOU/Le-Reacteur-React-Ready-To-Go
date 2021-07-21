const Switch = ({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
}) => {
  const handleClickOn1 = () => {
    let newSwitch1 = switch1;
    if (newSwitch1 === false) {
      newSwitch1 = true;
    } else {
      newSwitch1 = false;
    }

    setSwitch1(newSwitch1);
  };

  const handleClickOn2 = () => {
    let newSwitch2 = switch2;
    if (newSwitch2 === false) {
      newSwitch2 = true;
    } else {
      newSwitch2 = false;
    }
    setSwitch2(newSwitch2);
  };

  const handleClickOn3 = () => {
    let newSwitch3 = switch3;
    if (newSwitch3 === false) {
      newSwitch3 = true;
    } else {
      newSwitch3 = false;
    }
    setSwitch3(newSwitch3);
  };

  return (
    <>
      <div className="btn-group">
        <button
          className={switch1 ? "btn on" : "btn off"}
          onClick={handleClickOn1}
        >
          ON
        </button>
        <button
          className={switch1 ? "btn on" : "btn off"}
          onClick={handleClickOn1}
        >
          OFF
        </button>
      </div>
      <div className="btn-group">
        <button
          className={switch2 ? "btn on" : "btn off"}
          onClick={handleClickOn2}
        >
          ON
        </button>
        <button
          className={switch2 ? "btn on" : "btn off"}
          onClick={handleClickOn2}
        >
          OFF
        </button>
      </div>
      <div className="btn-group">
        <button
          className={switch3 ? "btn on" : "btn off"}
          onClick={handleClickOn3}
        >
          ON
        </button>
        <button
          className={switch3 ? "btn on" : "btn off"}
          onClick={handleClickOn3}
        >
          OFF
        </button>
      </div>
    </>
  );
};

export default Switch;
