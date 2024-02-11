export const typeDefs = `#graphql
  # ----------------types-------------------
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
    make: String!,
    model: String!,
    year: String!,
    transmission: String!,
    engine: String!,
    fuelType: String!,
    price: String!,
    condition: String!,
    location: String!,
    regYearMonth: String!,
    chassis: String!,
    color: String!,
    doors: String!,
    driveType: String!,
    engineCapacity: String!,
    engineCode: String!,
    gradeClass: String!,
    interiorColor: String!,
    mileAge: String!,
    port: String!,
    saleLocation: String!,
    seats: String!,
    steering: String!,
    StandardFeatures:StandardFeatures
    images:[String]!
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

  type ReturnFilter {
    make:[String!]
    model:[String!]
    transmission:[String!]
    fuelType:[String!]
    location:[String!]
  }

  type Token{
    token:String!
  }

  type User{
    username:String!
    email:String!
    phone:String!
    profileImage:String
  }

  # ----------------inputs-------------------
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

  input RegisterUser {
    username: String!
    password: String!
    email: String!
    phone:String!
  }

  input LoginUser {
    email:String!
    password:String!
  }

  type Query {
    getVehicle(vehicleId:ID!):Vehicle!
    getFilterData:ReturnFilter!
    getMakes:MakesObj
    filterQuery(filter:FilterInput, skip:Int!):[Vehicle]!
    getUser:User!
  }

  type Mutation {
    registerUser(registeruser: RegisterUser!): String!
    loginUser(loginuser:LoginUser!):Token!
  }
`;
