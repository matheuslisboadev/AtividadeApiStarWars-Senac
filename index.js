const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8080;
const baseURL = 'https://swapi.dev/api';
app.use(express.static('public')); 

app.get('/personagem/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${baseURL}/people/${id}`);
        const personagem = response.data;
        res.json(personagem);
    } catch (error) {
        console.error('Erro ao obter informações do personagem:', error.message);
        res.status(500).json({ error: 'Erro ao obter informações do personagem.' });
    }
});

app.get('/planeta/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${baseURL}/planets/${id}`);
        const planeta = response.data;
        res.json(planeta);
    } catch (error) {
        console.error('Erro ao obter informações do planeta:', error.message);
        res.status(500).json({ error: 'Erro ao obter informações do planeta.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});
