const getConnections = `
  SELECT * FROM connections 
  WHERE mentor_id = $1 OR mentee_id = $1;
  `;

module.exports = {
  getConnections,
};
