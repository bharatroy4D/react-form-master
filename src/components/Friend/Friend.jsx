import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const friend = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>{friend}</p>
        </div>
    );
};

export default Friend;