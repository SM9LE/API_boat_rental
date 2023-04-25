import Member from '../models/member.js';

export const getMembers = async (req, res) => {
    try {
      const members = await Member.findAll({
        attributes: ['Id_Member', 'Login_Member'] // Spécifier les colonnes à inclure dans la requête
      });
      res.status(200).json(members);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

export const addMember = async (req, res) => {
  try{
    const newMember = await Member.create(req.body);
    res.status(200).json(newMember);
    }
    catch (error){
      res.status(404).json({error : error.message});
    }
};

export const getMemberById = async (req, res) => {
  try {
    const findMember = await Member.findByPk(req.params.id);
    if (findMember) {
      res.json(findMember);
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  export default {getMembers, addMember, getMemberById};
  