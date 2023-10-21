import { useDispatch } from "react-redux";

function Click() {
  const dispatch = useDispatch();

  const handleInc = function () {
    dispatch({ type: "INCREMENT" });
  };

  const handleInc5 = function () {
    dispatch({ type: "INCREMENT", payload: 5 });
  };

  return (
    <div>
      <button onClick={handleInc}>+1</button>
      <button onClick={handleInc5}>+5</button>
    </div>
  );
}

export default Click;
