import Cousin from "../Cousin/Cousin";

const Aunty = ({asset}) => {
    return (
        <div> 
            <h2>Aunty</h2>
            <section className="flex">
            <Cousin name={'Mafuga'} asset={asset}></Cousin> 
            <Cousin name={'kanta bai'}></Cousin> 
            </section>
        </div>
    );
};

export default Aunty;