const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta para enviar el correo
app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"CREATECH SYSTEMS" <${process.env.EMAIL}>`,
      to: process.env.DESTINO,
      subject: `Nuevo mensaje: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`
    });

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
