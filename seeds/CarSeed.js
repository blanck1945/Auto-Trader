
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          make: 'Jaguar',
          model: 'X-TYPE V6',
          year: 2003,
          fuel_type: 'Petrol',
          kilometers: 65.000,
          description: JSON.stringify([
            "Jaguar X-Type with V6 engine, VERY LOW MILEAGE. Offers welcome - feel free to contact!! Grey, 5+ owners, £650",
            "Vehicule registered: 24/09/2003"
          ]),
          details: JSON.stringify([
            "Alarm",
            "Passenger airbags",
            "Central locking",
            "Power steering",
            "Metallic paint",
            "Leather trim",
            "Cd Player"
          ]),
          options: JSON.stringify([
            "Manual",
            "Saloon",
            "Petrol",
            "5 seats",
            "6 owners",
            "4 doors",
            "2.1L"
          ]),
          price: 650,
          photo_url: '/photos/cars/jaguar-type.jpg'
        },
        {
          id: 2,
          make: 'Fiat',
          model: 'Grande Punto',
          year: 2009,
          fuel_type: 'Petrol',
          kilometers: 84.000,
          description: JSON.stringify([
            "This is a great runner however has some body dents, heaters not working and makes a noise when driving. Not glamorous car hence the price open to reasonable offers. Mottill 2021. There isn't a car manual book or service history unfortunately. Needs a nice wash as I haven't had the time to wash the car due to work commitments. Is a wonderful runner but I now want to sell ASAP in order to buy a bigger car., Recent MOT, Smoke free, Pet free. White, 5+ owners, £720",
            "Vehicule registered: 29/09/2009"
          ]),
          details: JSON.stringify([
            "Blue and Me",
            "Electric Front Windows",
            "Multifuncional Instrument Panel",
            "Radio/Cd Player"
          ]),
          options: JSON.stringify([
            "Manual",
            "1.4L",
            "Saloon",
            "Hatchback",
            "Petrol",
            "5 doors",
            "5 seats",
            "5 owners",
            "ULEZ"
          ]),
          price: 720,
          photo_url: '/photos/cars/fiat-punto.jpg'
        },
        {
          id: 3,
          make: 'Ford',
          model: 'Fiesta',
          year: 2005,
          fuel_type: 'Petrol',
          kilometers: 104.000,
          description: JSON.stringify([
            "This is a great runner however has some body dents, heaters not working and makes a noise when driving. Not glamorous car hence the price open to reasonable offers. Mottill 2021. There isn't a car manual book or service history unfortunately. Needs a nice wash as I haven't had the time to wash the car due to work commitments. Is a wonderful runner but I now want to sell ASAP in order to buy a bigger car., Recent MOT, Smoke free, Pet free. White, 5+ owners, £720",
            "Vehicule registered: 25/06/2005"
          ]),
          details: JSON.stringify([
            "PAS",
            "Trip Computer",
            "ABS",
            "Inmobiliser",
            "Rear Wiper",
            "Driver and passenger airbags",
            "Front head restraints"
          ]),
          options: JSON.stringify([
            "Manual",
            "1.4L",
            "Hatchback",
            "Petrol",
            "5 doors",
            "5 seats",
            "ULEZ"
          ]),
          price: 995,
          photo_url: '/photos/cars/ford-fiesta.jpg'
        },
        {
          id: 4,
          make: 'Ford',
          model: 'Fiesta',
          year: 2011,
          fuel_type: 'Petrol',
          kilometers: 48500,
          description: JSON.stringify([
            "Well maintained all throughout its life from the main dealer, New brakes all round, Had a new MOT - 12 Months till next MOT test, 6 Services from Trust Ford, Mileage 17k below average, You would not find another one maintained at this level! Open 7 days a week, Full HPI clear - report available, All manual books including service book included, 2 Keys, Nationwide warranty, Finance facility and delivery available, Part exchange welcome, Located at Whitechapel, London, Very close to tube station, Viewings by appointment. We can offer One person contact, One price and One hour slot of viewing to minimise contact, please contact us for a personalised video, Viewings by appointment, Fully FCA registered, Reserve the car with 200 pounds, Zuto Car Finance available , Next MOT due 10/08/2021, Last serviced on 26/07/2019 at 47,416 miles, Full dealership history, Good bodywork, Interior - Excellent Condition, Tyre condition New, Black, 2 owners, £4,800",
            "Vehicule registered: 16/02/2011"
          ]),
          details: JSON.stringify([
            "Accessory Power Socket (12V)",
            "Drivers Airbag",
            "Drivers Knee Airbag",
            "Electric Power Assisted Steering (EPAS)",
            "ISOFIX Mounting Brackets for Child Seat (Rear Outer Seats Only)",
            "Immobiliser",
            "Leather Gear Knob",
            "Leather Trimmed 3 - Spoke Steering Wheel",
            "Manual 4 - Way Driver Seat Adjust",
            "Manual Air-Conditioning",
            "Passengers Airbag",
          ]),
          options: JSON.stringify([
            "Manual",
            "1.4L",
            "Hatchback",
            "Petrol",
            "5 doors",
            "5 seats",
            "Full dealership history",
            "2 owners",
            "ULEZ"
          ]),
          price: 3000,
          photo_url: '/photos/cars/ford-fiesta.jpg'
        }
      ])
    }
    )
};
