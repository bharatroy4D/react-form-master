import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('gold');

const Grandpa = () => {
    const asset = 'Dimond';
    return (
        <div className="grandpa">
            <div>
                <h1>Grandpa</h1>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Aunty asset={asset}></Aunty>
                        <Uncle></Uncle>
                    </section>
                </AssetContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;