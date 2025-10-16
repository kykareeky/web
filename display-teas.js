document.addEventListener('DOMContentLoaded', function() {
  const teasContainer = document.getElementById('teas-container');
  
  // Определяем фильтры для каждой категории
  const categoryFilters = {
    black: [
      { name: "Классические", kind: "classic" },
      { name: "Ароматизированные", kind: "flavored" },
      { name: "Купажи", kind: "blended" },
      { name: "Копченые", kind: "smoked" }
    ],
    green: [
      { name: "Китайские", kind: "chinese" },
      { name: "Японские", kind: "japanese" }
    ],
    oolong: [
      { name: "Светлые", kind: "light" },
      { name: "Средние", kind: "medium" },
      { name: "Темные", kind: "dark" }
    ],
    puer: [
      { name: "Шу (готовый)", kind: "ripe" },
      { name: "Шен (сырой)", kind: "raw" },
      { name: "Выдержанный", kind: "aged" }
    ],
    herbal: [
      { name: "Цветочные", kind: "flowers" },
      { name: "Листовые", kind: "leaves" },
      { name: "Африканские", kind: "african" }
    ],
    fruit: [
      { name: "Ягодные", kind: "berries" },
      { name: "Цитрусовые", kind: "citrus" },
      { name: "Тропические", kind: "tropical" },
      { name: "Пряные", kind: "spiced" }
    ]
  };

  // Загружаем данные через API
  loadDishes().then(loadedTeas => {
    // Сортируем чаи по алфавиту
    const sortedTeas = [...loadedTeas].sort((a, b) => a.name.localeCompare(b.name));
    
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
      categorySection.setAttribute('data-category', category);
      
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = getCategoryName(category);
      categorySection.appendChild(categoryTitle);
      
      // Создаем блок фильтров (если есть фильтры для этой категории)
      if (categoryFilters[category]) {
        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'filters-container';
        
        // Кнопка "Все"
        const allButton = document.createElement('button');
        allButton.className = 'filter-btn active';
        allButton.textContent = 'Все';
        allButton.setAttribute('data-kind', 'all');
        allButton.addEventListener('click', function() {
          filterTeas(category, 'all', this);
        });
        filtersContainer.appendChild(allButton);
        
        // Кнопки фильтров
        categoryFilters[category].forEach(filter => {
          const filterButton = document.createElement('button');
          filterButton.className = 'filter-btn';
          filterButton.textContent = filter.name;
          filterButton.setAttribute('data-kind', filter.kind);
          filterButton.addEventListener('click', function() {
            filterTeas(category, filter.kind, this);
          });
          filtersContainer.appendChild(filterButton);
        });
        
        categorySection.appendChild(filtersContainer);
      }
      
      const teasGrid = document.createElement('div');
      teasGrid.className = 'teas-grid';
      teasGrid.id = `teas-grid-${category}`;
      
      teasByCategory[category].forEach(tea => {
        const teaCard = createTeaCard(tea);
        teasGrid.appendChild(teaCard);
      });
      
      categorySection.appendChild(teasGrid);
      teasContainer.appendChild(categorySection);
    }
  }).catch(error => {
    console.error('Ошибка загрузки данных:', error);
    teasContainer.innerHTML = '<p>Ошибка загрузки данных о чаях. Пожалуйста, попробуйте позже.</p>';
  });
  
  function getCategoryName(category) {
    const names = {
      black: "Чёрный чай",
      green: "Зелёный чай",
      oolong: "Улун",
      puer: "Пуэр",
      herbal: "Травяной чай",
      fruit: "Фруктовый чай"
    };
    return names[category] || category;
  }
  
  function createTeaCard(tea) {
    const card = document.createElement('div');
    card.className = 'tea-card';
    card.setAttribute('data-dish', tea.keyword);
    card.setAttribute('data-category', tea.category);
    card.setAttribute('data-kind', tea.kind);
    
    card.innerHTML = `
      <img src="${tea.image}" alt="${tea.name}" onerror="this.src='https://via.placeholder.com/200x200/4a7c59/ffffff?text=Чай'">
      <h4>${tea.name}</h4>
      <p>${tea.count}</p>
      <p class="tea-price">${tea.price}₽</p>
      <button class="btn btn-small" onclick="addToOrder('${tea.keyword}')">Добавить</button>
    `;
    
    return card;
  }

  // Функция фильтрации чаев
  function filterTeas(category, kind, button) {
    // Убираем активный класс со всех кнопок этой категории
    const categorySection = document.querySelector(`.tea-category[data-category="${category}"]`);
    const allButtons = categorySection.querySelectorAll('.filter-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Добавляем активный класс на нажатую кнопку
    button.classList.add('active');
    
    const teasGrid = document.getElementById(`teas-grid-${category}`);
    const teaCards = teasGrid.querySelectorAll('.tea-card');
    
    teaCards.forEach(card => {
      if (kind === 'all') {
        card.style.display = 'block';
      } else {
        if (card.getAttribute('data-kind') === kind) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  }
});

// Функция для загрузки данных через API
async function loadDishes() {
  try {
    // ИСПРАВЛЕНИЕ: Заменяем URL на правильный из условия лабораторной работы
    const response = await fetch('https://edu.std-900.ist.mospolytech.ru/labs/api/dishes');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const dishes = await response.json();
    
    // Заполняем глобальный массив teas для совместимости с существующим кодом
    teas.length = 0; // Очищаем массив
    teas.push(...dishes); // Добавляем данные из API
    
    return dishes;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    throw error;
  }
}

function createTeaCard(tea) {
  const card = document.createElement('div');
  card.className = 'tea-card';
  card.setAttribute('data-dish', tea.keyword);
  card.setAttribute('data-category', tea.category);
  card.setAttribute('data-kind', tea.kind);
  
  card.innerHTML = `
    <img src="${tea.image}" alt="${tea.name}" onerror="this.src='https://via.placeholder.com/200x200/4a7c59/ffffff?text=Чай'">
    <h4>${tea.name}</h4>
    <p>${tea.count}</p>
    <p class="tea-price">${tea.price}₽ / 100г</p>
    <button class="btn btn-small" onclick="addToOrder('${tea.keyword}')">Добавить</button>
  `;
  
  return card;
}