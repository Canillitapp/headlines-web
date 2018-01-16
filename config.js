// Solves UNABLE_TO_VERIFY_LEAF_SIGNATURE in node requests
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

module.exports = {
  apiUrl: 'https://api.canillitapp.com',
}
