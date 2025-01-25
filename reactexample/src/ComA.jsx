import { useContext } from "react";
import { HeyContext } from "./App";

//export default ComA;

const ComA = () => {
    const { hey } = useContext(HeyContext);
    return <>
    {hey}
    </>
};
export default ComA;