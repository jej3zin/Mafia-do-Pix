import { toast } from './toast.js';
emailjs.init('q4xTX0fJCo6t5OJJx');

const form = document.getElementById('suggestionForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs
    .sendForm('service_xy9onsb', 'template_u784br9', this)
    .then(() => {
      toast('Sugestão enviada direto pro criador 🔥');
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      toast('Deu ruim 😭', err);
    });
});
