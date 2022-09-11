export default () => ({
  enviornment: process.env.NODE_ENV || 'development',
  database: {
    uri: process.env.DATABASE_URI,
    port: parseInt(process.env.DATABASE_PORT, 10) + '' || '27017',
  },
});
