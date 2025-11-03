import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/services/")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div
      className="py-5 container-fluid text-center"
      id="services"
      style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", marginTop: "-62px" }}
    >
      <h1
        className="text-white fw-light mb-4 py-1"
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        Services
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
