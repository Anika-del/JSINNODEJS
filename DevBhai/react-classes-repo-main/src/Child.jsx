function Child({ callingParentFunction }) {
  let childValue = " this is from child dta";
  return (
    <>
      <div onClick={() => callingParentFunction(childValue)}>childButton</div>
    </>
  );
}

export default Child;
