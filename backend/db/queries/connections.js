const getConnections = `
  SELECT * FROM connections 
  WHERE requestor = $1 OR requestee = $1;
  `;

module.exports = {
  getConnections,
};
