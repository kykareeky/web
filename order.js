document.addEventListener('DOMContentLoaded', function() {
  // Элементы DOM
  const orderSection = document.getElementById('order-section');
  const orderForm = document.getElementById('orderForm');
  const selectedTeasContainer = document.getElementById('selected-teas');
  const totalPriceElement = document.getElementById('total-price');
  
  // Выбранные чаи по категориям
  let selectedTeas = {
    black: null,
    green: null,
    oolong: null,
    puer: null
  };
  
  // Категории чая с русскими названиями
  const categoryNames = {
    black: "Чёрный чай",
    green: "Зелёный чай",
    oolong: "Улун",
    puer: "Пуэр"
  };
  
  // Функция для отображения выбранных чаев
  function updateSelectedTeasDisplay() {
    selectedTeasContainer.innerHTML = '';
    let hasSelection = false;
    let totalPrice = 0;
    
    // Проверяем, есть ли выбранные чаи
    for (const category in selectedTeas) {
      if (selectedTeas[category]) {
        hasSelection = true;
        break;
      }
    }
    
    if (!hasSelection) {
      const noSelection = document.createElement('p');
      noSelection.textContent = 'Ничего не выбрано';
      selectedTeasContainer.appendChild(noSelection);
      totalPriceElement.style.display = 'none';
      return;
    }
    
    // Отображаем выбранные чаи по категориям
    for (const category in selectedTeas) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'selected-category';
      
      const categoryTitle = document.createElement('strong');
      categoryTitle.textContent = categoryNames[category] + ': ';
      
      if (selectedTeas[category]) {
        const tea = selectedTeas[category];
        const teaText = document.createElement('span');
        teaText.textContent = `${tea.name} ${tea.price}₽`;
        
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(teaText);
        totalPrice += tea.price;
      } else {
        const noTeaText = document.createElement('span');
        noTeaText.textContent = 'Чай не выбран';
        
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(noTeaText);
      }
      
      selectedTeasContainer.appendChild(categoryDiv);
    }
    
    // Отображаем общую стоимость
    totalPriceElement.textContent = `Стоимость заказа: ${totalPrice}₽`;
    totalPriceElement.style.display = 'block';
    
    // Обновляем скрытые поля формы
    updateFormHiddenFields();
  }
  
  // Функция для обновления скрытых полей формы
  function updateFormHiddenFields() {
    // Очищаем существующие скрытые поля
    const existingHiddenFields = orderForm.querySelectorAll('input[type="hidden"][name^="tea_"]');
    existingHiddenFields.forEach(field => field.remove());
    
    // Добавляем новые скрытые поля для выбранных чаев
    for (const category in selectedTeas) {
      if (selectedTeas[category]) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `tea_${category}`;
        input.value = selectedTeas[category].keyword;
        orderForm.appendChild(input);
      }
    }
  }
  
  // Функция для добавления/удаления чая в заказ
  window.addToOrder = function(teaKeyword) {
    const tea = teas.find(t => t.keyword === teaKeyword);
    if (!tea) return;
    
    // Снимаем выделение со всех чаев этой категории
    document.querySelectorAll(`.tea-card[data-category="${tea.category}"]`).forEach(card => {
      card.classList.remove('selected');
    });
    
    // Если этот чай уже выбран, снимаем выбор
    if (selectedTeas[tea.category] && selectedTeas[tea.category].keyword === teaKeyword) {
      selectedTeas[tea.category] = null;
    } else {
      // Выбираем этот чай
      selectedTeas[tea.category] = tea;
      // Выделяем карточку
      document.querySelector(`.tea-card[data-dish="${teaKeyword}"]`).classList.add('selected');
    }
    
    updateSelectedTeasDisplay();
  };
  
  // Инициализация
  updateSelectedTeasDisplay();
});
