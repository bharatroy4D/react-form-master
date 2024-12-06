import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const asset = 'Dimond';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <div>
                <h1>Grandpa</h1>
                <h2>Net money:{money}</h2>
                <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Aunty asset={asset}></Aunty>
                        <Uncle></Uncle>
                    </section>
                </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;