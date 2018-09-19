const dbconnection = require('../db_connection');

const getProposal = id => dbconnection.query({
  text: 'select projects.id, projects.user_id ,projects.camp_end, users.img , users.name as username , projects.abstract, projects.img , projects.name as projectName, (select coalesce(sum(donation.amount), 0) from donation where donation.project_id = $1), projects.fund from projects join users ON users.id = projects.user_id where projects.id = $1',
  values: [id],
});

module.exports = getProposal;
