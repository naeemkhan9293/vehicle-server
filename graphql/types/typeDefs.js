export const typeDefs = `#graphql

  type StandardFeatures {
    POWERSTEERING: Boolean
    POWERWINDOW: Boolean
    POWERMIRROR: Boolean
    WINKERMIRROR: Boolean
    POWERSEAT: Boolean
    LEATHERSEAT: Boolean
    AC: Boolean
    ABS: Boolean
    AIRBAG: Boolean
    SIDEAIRBAG: Boolean
    DUALAIRBAGS: Boolean
    NAVIGATION: Boolean
    BACKCAMERA: Boolean
    TV: Boolean
    CD: Boolean
    DVD: Boolean
    MD: Boolean
    CASSETTE: Boolean
    ALLOYWHEEL: Boolean
    KEYLESSENTRY: Boolean
    SMARTKEY: Boolean
    PUSHSTART: Boolean
    SUNROOF: Boolean
    MOONROOF: Boolean
    FULLFLATSEAT: Boolean
    THIRDROWSEAT: Boolean
    WALKTHROUGH: Boolean
    SIXSEATS: Boolean
    SEVENSEATS: Boolean
    EIGHTSEATS: Boolean
    NINESEATS: Boolean
    TENSEATS: Boolean
    FOGLAMP: Boolean
    REARSPOILER: Boolean
    WOODPANEL: Boolean
    ROOFRAIL: Boolean
    SIDESTEP: Boolean
    GRILLGUARD: Boolean
    REARENTERTAINMENT: Boolean
    CRUISECONTROL: Boolean
    BRAKERADAR: Boolean
    SOFASEATS: Boolean
    CLIMATECONTROL: Boolean
  }

  type Vehicle {
    id: ID!
    make: String!
    model: String!
    year: Int!
    transmission: String!
    engine: String!
    fuelType: String!
    price: Float!
    condition: String!
    location: String!
    Chassis: String!
    Mileage: String!
    Model: String!
    Steering: String!
    EngineCapacity: String!
    EngineCode: String!
    DriveType: String!
    Color: String!
    Transmission: String!
    InteriorColor: String!
    RegYearMonth: String!
    FuelType: String!
    Port: String!
    Seats: String!
    SaleLocation: String!
    Doors: String!
    GradeClass: String!
    StandardFeatures: StandardFeatures
    images:[String]!
  }

  input StandardFeaturesInput {
    POWERSTEERING: Boolean
    POWERWINDOW: Boolean
    POWERMIRROR: Boolean
    WINKERMIRROR: Boolean
    POWERSEAT: Boolean
    LEATHERSEAT: Boolean
    AC: Boolean
    ABS: Boolean
    AIRBAG: Boolean
    SIDEAIRBAG: Boolean
    DUALAIRBAGS: Boolean
    NAVIGATION: Boolean
    BACKCAMERA: Boolean
    TV: Boolean
    CD: Boolean
    DVD: Boolean
    MD: Boolean
    CASSETTE: Boolean
    ALLOYWHEEL: Boolean
    KEYLESSENTRY: Boolean
    SMARTKEY: Boolean
    PUSHSTART: Boolean
    SUNROOF: Boolean
    MOONROOF: Boolean
    FULLFLATSEAT: Boolean
    THIRDROWSEAT: Boolean
    WALKTHROUGH: Boolean
    SIXSEATS: Boolean
    SEVENSEATS: Boolean
    EIGHTSEATS: Boolean
    NINESEATS: Boolean
    TENSEATS: Boolean
    FOGLAMP: Boolean
    REARSPOILER: Boolean
    WOODPANEL: Boolean
    ROOFRAIL: Boolean
    SIDESTEP: Boolean
    GRILLGUARD: Boolean
    REARENTERTAINMENT: Boolean
    CRUISECONTROL: Boolean
    BRAKERADAR: Boolean
    SOFASEATS: Boolean
    CLIMATECONTROL: Boolean
  }


  type Makes {
    make:String!
    model:[String!]
  }

  type MakesObj{
    location:[String!]
    transmission:[String!]
    fuelType:[String!]
    makes:[Makes]!
  }

  input FilterInput {
    make: String
    model: String
    year: Int
    transmission: String
    engine: String
    Steering: String
    fuelType: String
    price: Float
    location: String
  }
  
  type ReturnFilter {
    make:[String!]
    model:[String!]
    transmission:[String!]
    fuelType:[String!]
    location:[String!]
  }

  type Query {
    getVehicles:[Vehicle]!
    getVehicle(vehicleId:ID!):Vehicle!
    getFilterData:ReturnFilter!
    getMakes:MakesObj
    filterQuery(filter:FilterInput, skip:Int!):[Vehicle]!
  }
  
`;
