import vehicle from "../../model/vehicle.js";

export const vehicleQuery = {
  //--------Get single vehicle -----------------
  async getVehicle(_, { vehicleId }) {
    try {
      const vehicles = await vehicle.findById(vehicleId);
      return vehicles;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch vehicle");
    }
  },

 

  //--------Get all makes -----------------
  async getMakes() {
    const vehicleMakes = new Map();
    const vehicles = await vehicle.find();

    vehicles.forEach(({ make, model, location, transmission, fuelType }) => {
      const key = make;
      if (!vehicleMakes.has(key)) {
        vehicleMakes.set(key, {
          make,
          model: [model],
          location: [location],
          transmission: [transmission],
          fuelType: [fuelType],
        });
      } else {
        const existingMake = vehicleMakes.get(key);
        existingMake.model.push(model);
        existingMake.location.push(location);
        existingMake.transmission.push(transmission);
        existingMake.transmission.push(fuelType);
      }
    });

    const makes = Array.from(vehicleMakes.values()).map(({ make, model }) => ({
      make,
      model: [...new Set(model)],
    }));

    const locations = [...new Set(vehicles.map((vehicle) => vehicle.location))];
    const transmissions = [
      ...new Set(vehicles.map((vehicle) => vehicle.transmission)),
    ];
    const fuelType = [...new Set(vehicles.map((vehicle) => vehicle.fuelType))];

    return {
      location: locations,
      makes: makes,
      transmission: transmissions,
      fuelType: fuelType,
    };
  },

  // ---------- Filter Query --------------

  async filterQuery(_, { filter, skip }) {
    try {
      const result = await vehicle.find(filter).skip(skip).limit(7);
      // Ensure that the result is an array
      return Array.isArray(result) ? result : [];
    } catch (error) {
      throw new Error("Internal Server Error");
    }
  },

  // --------- Data for Filter ------------
  async getFilterData(_, args) {
    const vehicles = await vehicle.find({});
    const make = new Set();
    const model = new Set();
    const transmission = new Set();
    const fuelType = new Set();
    const location = new Set();

    vehicles.forEach((item) => {
      make.add(item.make);
      model.add(item.model);
      transmission.add(item.transmission);
      fuelType.add(item.fuelType);
      location.add(item.location);
    });

    return {
      make: [...new Set(make)],
      model: [...new Set(model)],
      transmission: [...new Set(transmission)],
      fuelType: [...new Set(fuelType)],
      location: [...new Set(location)],
    };
  },
};
