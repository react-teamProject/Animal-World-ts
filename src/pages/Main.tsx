import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to={`/write`}>글쓰기</Link>
      <Link to={`/login`}>로그인</Link>
    </>
  );
};

export default Main;
