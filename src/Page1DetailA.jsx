import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DtailAです</h1>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
