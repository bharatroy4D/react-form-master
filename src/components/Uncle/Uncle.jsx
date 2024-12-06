import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>uncle</h2>
            <section className="flex">
                <Cousin name={'bharat'} asset={asset}></Cousin>
                <Cousin name={'pankoj'} ></Cousin>
            </section>
        </div>
    );
};

export default Uncle;