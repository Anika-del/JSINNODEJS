// const ComA = (pros) => {
//   return <>comA {pros.children}</>;
// };

import ComB from "./ComB";

// export default ComA;

const ComA = () => {
  return (
    <>
      <ComB />
    </>
  );
};

export default ComA;
