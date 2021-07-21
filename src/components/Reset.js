const Reset = ({
  switch1,
  switch2,
  switch3,
  setSwitch1,
  setSwitch2,
  setSwitch3,
}) => {
  return (
    <div
      className="reset"
      onClick={() => {
        setSwitch1(false);
        setSwitch2(false);
        setSwitch3(false);
      }}
    >
      <button className="btn reset">Reset</button>
    </div>
  );
};

export default Reset;
