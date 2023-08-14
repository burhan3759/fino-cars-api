
/**
 * TODO:
 * 1. Rest API
 * 2. Method - GET
 * 3. Basic query params, by default query params is optional fields
 *    a. carType=sport|electric|2wheels
*/


const dummyCarsData: Array<I_Cars> = [
  {
    type: "sport",
    parts: [
      {
        name: "defuser"
      },
      {
        name: "hood"
      },
      {
        name: "tyre"
      },
    ]
  },
  {
    type: "2wheels",
    parts: [
      {
        name: "hood"
      },
      {
        name: "tyre"
      },
    ]
  },
  {
    type: "electric",
    parts: [
      {
        name: "electric motor"
      },
      {
        name: "charge port"
      },
      {
        name: "tyre"
      },
      {
        name: "hood"
      },
    ]
  },
]

type I_Car_Type = 'sport' | 'electric' | '2wheels'

interface I_Cars {
  type: I_Car_Type,
  parts: Array<{
    name: string
  }>
}

// assume this is an express application, we will get the req and res
// for simplicity, I directly create a function that will only accept one params
// e.g of express code
// app.get('/cars', carController.getCars)


// Controller
const getCars = (carType: I_Car_Type): Array<I_Cars> => {

  const result = filterCarsByType(carType)

  return result
}

// Model
const filterCarsByType = (carType: I_Car_Type) => {
  // do some filter processing

  return dummyCarsData.filter((cars: I_Cars) => cars.type === carType)
}