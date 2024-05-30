
const ServiceCart = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" p-6 space-y-5">
                <h2 className=" text-2xl font-bold">{title}</h2>
                <p className="text-xl font-semibold text-[#FF3811] ">Price: ${price}</p>
                
            </div>
        </div>
    );
};

export default ServiceCart;