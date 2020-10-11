

exports.up = function (knex) {
    return knex.schema.createTable('questions', table => {
        table.increments()
        table.text('question').notNullable()
        table.text('answer').notNullable()
        table.timestamp(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('questions')
};
