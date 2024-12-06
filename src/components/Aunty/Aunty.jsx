import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div> 
            <h2>Aunty</h2>
            <section className="flex"> 
            <Cousin name={'Mafuga'} asset={asset}></Cousin> 
            <Cousin name={'kanta bai'}></Cousin> 
            </section>
            <section>
                <p>money:{money}</p>
            </section>
        </div>
    );
};

export default Aunty;