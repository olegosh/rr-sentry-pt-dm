import { FC } from "react";

const getError = () => {
  throw new Error(`Error# ${Math.floor(Math.random() * 1e9)}`);
};

const PageOne: FC = () => {
  return (
    <div>
      <h6>page content</h6>
      <button type="button" onClick={getError}>
        Raise an error
      </button>
    </div>
  );
};

export default PageOne;
