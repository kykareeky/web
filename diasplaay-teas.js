document.addEventListener('DOMContentLoaded', function() {
  const teasContainer = document.getElementById('teas-container');
  
  // Сортируем чаи по алфавиту
  const sortedTeas = [...teas].sort((a, b) => a.name.localeCompare(b.name));
  
  // Группируем чаи по категориям
  const teasByCategory = {};
  sortedTeas.forEach(tea => {
    if (!teasByCategory[tea.category]) {
      teasByCategory[tea.category] = [];
    }
    teasByCategory[tea.category].push(tea);
  });
  
  // Создаем секции для каждой категории
  for (const category in teasByCategory) {
    const categorySection = document.createElement('section');
    categorySection.className = 'tea-category';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = getCategoryName(category);
    categorySection.appendChild(categoryTitle);
    
    const teasGrid = document.createElement('div');
    teasGrid.className = 'teas-grid';
    
    teasByCategory[category].forEach(tea => {
      const teaCard = createTeaCard(tea);
      teasGrid.appendChild(teaCard);
    });
    
    categorySection.appendChild(teasGrid);
    teasContainer.appendChild(categorySection);
  }
  
  function getCategoryName(category) {
    const names = {
      black: "Чёрный чай",
      green: "Зелёный чай",
      oolong: "Улун",
      puer: "Пуэр"
    };
    return names[category] || category;
  }
  
  function createTeaCard(tea) {
    const card = document.createElement('div');
    card.className = 'tea-card';
    card.setAttribute('data-dish', tea.keyword);
    card.setAttribute('data-category', tea.category);
    
    card.innerHTML = `
      <img src="${tea.image}" alt="${tea.name}" onerror="this.src='https://via.placeholder.com/200x200/4a7c59/ffffff?text=Чай'">
      <h4>${tea.name}</h4>
      <p>${tea.count}</p>
      <p class="tea-price">${tea.price}₽</p>
      <button class="btn btn-small" onclick="addToOrder('${tea.keyword}')">Добавить</button>
    `;
    
    return card;
  }
});
