import { Link, useHistory } from "react-router-dom";

export const Page404 = () => {
  const history = useHistory();

  const onClickBack = () => history.push("/");
  return (
    <div>
      <h1>お探しのページが見つかりません</h1>
      <Link to="/">TOPに戻る</Link>
      <br />
      <button onClick={onClickBack}>TOPに戻る</button>
    </div>
  );
};
