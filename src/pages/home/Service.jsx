import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    console.log(services)

    return (
        <div className="my-10">
            <div className="flex-none text-center">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p className="text-base leading-7 text-[#737373]">the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Service;