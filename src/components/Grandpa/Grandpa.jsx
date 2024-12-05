import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'; 

const Grandpa = () => {
    return (
        <div className="grandpa">
           <div>
           <h1>Grandpa</h1>
            <section className="flex">
            <Dad></Dad>
            <Aunty></Aunty>
            <Uncle></Uncle>
            </section>
            </div> 
        </div>
    );
};

export default Grandpa;