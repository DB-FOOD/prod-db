import React, { useState, useEffect } from "react";
import "./Suppliers.css";

const path = process.env.REACT_APP_BE_PATH;

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch(`${path}/suppliers`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSuppliers(data);
      } catch (error) {
        console.error("Error fetching suppliers:", error);
      }
    };

    fetchSuppliers();
  }, []);

  return (
    <div className="suppliers-container">
      <h1>Suppliers</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.supplier_name}</td>
              <td>{supplier.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Suppliers;
