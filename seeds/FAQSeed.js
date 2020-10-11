
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          id: 1,
          question: 'How to be safe buying online?',
          answer: "In this days, online selling has become a standar. We constantle make great efforts to better our security and dimish the risk"
        },
        {
          id: 2,
          question: 'Do I have any assurance on my new car?',
          answer: "Yes you have. You can read all the espcificactions in help/documentation/services. Nevertheless we recommend that you choose an assurance that fit your needs"
        },
        {
          id: 3,
          question: 'How many kilometers a normal car can have?',
          answer: "Card usually have in beetween 20.000 and 80.000. We dont accept card that exceed 100.000 KM as a rule."
        }
      ]);
    });
};
