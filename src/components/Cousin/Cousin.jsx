import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>cousin</h2>
            <p>{name}</p>
            <section className="flex">
            {asset && <Special asset={asset}></Special>}
            {name === 'pankoj' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;