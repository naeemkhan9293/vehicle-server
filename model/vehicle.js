import { model, Schema } from "mongoose";

const vehicleSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  transmission: String,
  engine: String,
  fuelType: String,
  price: Number,
  condition: String,
  location: String,
  Chassis: String,
  Mileage: String,
  Steering: String,
  EngineCapacity: String,
  EngineCode: String,
  DriveType: String,
  Color: String,
  InteriorColor: String,
  Port: String,
  Seats: String,
  SaleLocation: String,
  Doors: String,
  GradeClass: String,

  StandardFeatures: {
    POWERSTEERING: Boolean,
    POWERWINDOW: Boolean,
    POWERMIRROR: Boolean,
    WINKERMIRROR: Boolean,
    POWERSEAT: Boolean,
    LEATHERSEAT: Boolean,
    AC: Boolean,
    ABS: Boolean,
    AIRBAG: Boolean,
    SIDEAIRBAG: Boolean,
    DUALAIRBAGS: Boolean,
    NAVIGATION: Boolean,
    BACKCAMERA: Boolean,
    TV: Boolean,
    CD: Boolean,
    DVD: Boolean,
    MD: Boolean,
    CASSETTE: Boolean,
    ALLOYWHEEL: Boolean,
    KEYLESSENTRY: Boolean,
    SMARTKEY: Boolean,
    PUSHSTART: Boolean,
    SUNROOF: Boolean,
    MOONROOF: Boolean,
    FULLFLATSEAT: Boolean,
    THIRDROWSEAT: Boolean,
    WALKTHROUGH: Boolean,
    SIXSEATS: Boolean,
    SEVENSEATS: Boolean,
    EIGHTSEATS: Boolean,
    NINESEATS: Boolean,
    TENSEATS: Boolean,
    FOGLAMP: Boolean,
    REARSPOILER: Boolean,
    WOODPANEL: Boolean,
    ROOFRAIL: Boolean,
    SIDESTEP: Boolean,
    GRILLGUARD: Boolean,
    REARENTERTAINMENT: Boolean,
    CRUISECONTROL: Boolean,
    BRAKERADAR: Boolean,
    SOFASEATS: Boolean,
    CLIMATECONTROL: Boolean,
  },
  images: Array,
});

export default model("Vehicle", vehicleSchema);