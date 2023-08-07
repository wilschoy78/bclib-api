export const ProductErrors = {
    Conflict: {
        statusCode: 409,
        message: 'Name already exists',
        error: "Conflict Error"
    },

    NotFound: {
        statusCode: 404,
        message: 'Product not exists',
        error: "NotFound Error"
    },

    Unauthorized: {
        statusCode: 401,
        message: 'Invalid credentials',
        error: "Unauthorized Error"
    },

    ProductNotFound: {
        statusCode: 404,
        message: 'Product not exists',
        error: "NotFound Error"
    },

    ProductInventoryNotFound: {
        statusCode: 404,
        message: 'Product Inventory not exists',
        error: "NotFound Error"
    },

    ProductInventoryConflict: {
        statusCode: 409,
        message: 'Product already exists',
        error: "Conflict Error"
    },
}