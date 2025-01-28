const ShowTodoList = ({ justkey, data, removeTaskId }) => {
  return (
    <>
      <div className="flex gap-x-4 mt-3" key={justkey}>
        <div className="w-[11.5rem] bg-gray-400 px-3 py-2 rounded-lg">
          {data}
        </div>
        <button
          className="bg-red-500 rounded-lg px-6 py-2"
          onClick={() => removeTaskId(justkey)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default ShowTodoList;
