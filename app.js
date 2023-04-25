import express from 'express';
import {getMembers, addMember, getMemberById} from './app/controllers/memberController.js';


const app = express();

app.get('/members/getMembers', getMembers)
app.post('/members/createMember', addMember)
app.get('/members/getMember', getMemberById)

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API !'); // Répond avec un message
});
