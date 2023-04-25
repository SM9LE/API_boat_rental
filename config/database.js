import { Sequelize } from 'sequelize';

const db = new Sequelize('boat_rental', 'ssssss', 'sssssss', {
  host: 'localhost',
  dialect: 'mysql', // le dialecte de la base de données
});

try {
  await db.authenticate();
  console.log('Connexion BDD OK');
} catch (error) {
  console.error('Connexion BDD ERROR:', error);
}

await db.sync({force: true});
console.log("All tables are synchronized");

export default db;