const db = require("../dbConfig")
const { getString } = require("./func")

const find = async (table) => {
    return await db.select().table(table)
}

const findById = async (table, id) => {
    const data = await db.select().table(table).where('id', id)
    if (data.length === 0) {
        return null
    }
    return data
}

const findByMakeAndCount = async () => {
    //const count = await db(table).count('make as count')
    const makes = await db.raw(`
    SELECT make, count(*) as count
    FROM cars 
    GROUP BY make    
    `);

    return makes.rows
}

const findByModelAndCount = async (make) => {
    const models = await db.raw(`
    SELECT model, count(*) as count
    FROM cars 
    WHERE make = ?
    GROUP BY model    
    `, make);
    return models.rows
}

const getPaginateCars = async (query) => {

    const page = getValueNum(query.page) || 1

    const { make, model, minPrice, maxPrice } = getValuesHook(query)
    let data = await db.select('*')
        .table("cars")
        .where("make", make ? make : null)
        .andWhere("model", model ? model : null)
        .andWhere("price", ">=", minPrice ? minPrice : null)
        .andWhere('price', "<=", maxPrice ? maxPrice : null)


    if (data.length === 0 && !query.make) {
        const arrData = await db.select('*').table('cars').paginate({ perPage: 4, currentPage: page })
        return {
            totalPages: Math.ceil(arrData.pagination.total / arrData.pagination.perPage),
            data: [...arrData.data],
            pagination: arrData.pagination,

        }
    }

    if (data.length === 0 && query.make && query.model && query.minPrice && query.maxPrice) {
        return {
            data: [],
            pagination: data.pagination,
            //totalPages: Math.ceil(data.pagination.total / data.pagination.perPage)
        }
    }

    /*data = [
        cars = { ...data.data },
        pagination = { ...data.pagination, totalPages: Math.ceil(data.pagination.total / data.pagination.perPage) }
    ]*/
    return {
        data: data,
        pagination: data.pagination,
        //totalPages: Math.ceil(data.pagination.total / data.pagination.perPage)
    }
}

const getValuesHook = (query) => {
    return {
        make: getValueStr(query.make),
        model: getValueStr(query.model),
        minPrice: getValueNum(query.minPrice),
        maxPrice: getValueNum(query.maxPrice)
    }
}

const getValueNum = (value) => {
    const str = getValueStr(value)
    const number = parseInt(str)
    return isNaN(number) ? null : number
}

const getValueStr = (value) => {
    const str = getString(value)
    return !str || str.toLocaleLowerCase() === 'all' ? null : str
}


const paginate = async (perPage = 5, currentPage = 1, table) => {
    const pagination = {};
    const limitPerPage = perPage;
    const page = Math.max(currentPage || 1, 1);
    const offset = (page - 1) * perPage;
    return Promise.all([
        await db(table)
            .clone()
            .count('* as count')
            .first(),
        await db(table)
            .limit(limitPerPage)
            .offset(offset)
    ]).then(([total, rows]) => {
        const { count } = total;
        pagination.total = parseInt(count, 10);
        pagination.perPage = perPage;
        pagination.offset = offset;
        pagination.to = offset + rows.length;
        pagination.last_page = Math.ceil(count / perPage);
        pagination.currentPage = page;
        pagination.from = offset;
        pagination.data = rows;
        return pagination.data;
    });
};

module.exports = {
    find,
    findById,
    findByMakeAndCount,
    findByModelAndCount,
    getPaginateCars,
    getValueNum
}