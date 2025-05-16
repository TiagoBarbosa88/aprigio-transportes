// Script para envio AJAX do formulário e exibição de mensagens de sucesso ou erro

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('orcamentoForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            alert('Formulário enviado com sucesso!');
            form.reset();
          } else {
            alert('Erro ao enviar o formulário. Tente novamente.');
          }
        })
        .catch(() => {
          alert('Erro ao enviar o formulário. Tente novamente.');
        });
    });
  }
});
