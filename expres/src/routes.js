import { Router } from "express";
import db from "./database/prisma.js";

const router = Router();


router.get('/', (req, res) => {
    console.log("Ta funcionando");
    return res.send("Ta rodando");
})

router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await db.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para obter todos os usuários (GET)
router.get('/users', async (req, res) => {
  try {

    const users = await db.user.findUnique({
      where: {
        id: 1,
      },
    });
    res.status(200).json(users);


  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
