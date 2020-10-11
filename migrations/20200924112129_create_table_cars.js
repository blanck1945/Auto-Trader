
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments()
        table.string('make').notNullable()
        table.string('model').notNullable()
        table.integer('year').notNullable()
        table.string('fuel_type').notNullable()
        table.integer('kilometers').notNullable()
        table.jsonb('description').notNullable()
        table.jsonb('details').nullable()
        table.jsonb('options').nullable()
        table.integer('price').notNullable()
        table.string('photo_url').nullable()
        table.timestamp(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
