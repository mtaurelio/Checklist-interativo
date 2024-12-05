// Seleciona todos os checkboxes
const checkboxes = document.querySelectorAll(
  '.checkbox input[type="checkbox"]'
);

// Seleciona o checkbox "Marcar todas as alternativas"
const marcarTodas = document.querySelector('.todas input[type="checkbox"]');

// Adiciona um evento ao checkbox "Marcar todas"
marcarTodas.addEventListener("change", () => {
  // Define o estado de todos os checkboxes com base no checkbox "Marcar todas"
  checkboxes.forEach((checkbox) => {
    checkbox.checked = marcarTodas.checked;
  });
});

// Adiciona um evento aos outros checkboxes para sincronizar o estado
checkboxes.forEach((checkbox) => {
  if (checkbox !== marcarTodas) {
    checkbox.addEventListener("change", () => {
      // Verifica se todos os outros checkboxes estão marcados
      const todosMarcados = Array.from(checkboxes).every(
        (item) => item.checked
      );
      // Atualiza o estado do checkbox "Marcar todas"
      marcarTodas.checked = todosMarcados;
    });
  }
});
