module.exports = {
    UuidInEachDialect: {
        postgres: 'uuid_generate_v4()',
        mysql: '(UUID())',
    }
};