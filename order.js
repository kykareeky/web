document.addEventListener('DOMContentLoaded', function() {
  // Элементы DOM
  const orderForm = document.getElementById('orderForm');
  const selectedTeasContainer = document.getElementById('selected-teas');
  const totalPriceElement = document.getElementById('total-price');
  
  // Выбранные чаи с количеством
  let selectedTeas = [];
  
  // Названия категорий чая
  const categoryNames = {
    black: "Чёрный чай",
    green: "Зелёный чай", 
    oolong: "Улун",
    puer: "Пуэр",
    herbal: "Травяной чай",
    fruit: "Фруктовый чай"
  };
  
  // Функция для отображения выбранных чаев
  function updateSelectedTeasDisplay() {
    selectedTeasContainer.innerHTML = '';
    
    if (selectedTeas.length === 0) {
      const noSelection = document.createElement('p');
      noSelection.textContent = 'Здесь будет ваш выбор';
      noSelection.className = 'no-selection';
      selectedTeasContainer.appendChild(noSelection);
      totalPriceElement.style.display = 'none';
      return;
    }
    
    // Группируем чаи по категориям для красивого отображения
    const teasByCategory = {};
    selectedTeas.forEach(tea => {
      if (!teasByCategory[tea.category]) {
        teasByCategory[tea.category] = [];
      }
      teasByCategory[tea.category].push(tea);
    });
    
    let totalPrice = 0;
    
    // Отображаем выбранные чаи по категориям
    for (const category in teasByCategory) {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'selected-category';
      
      const categoryTitle = document.createElement('strong');
      categoryTitle.textContent = categoryNames[category] + ':';
      categoryDiv.appendChild(categoryTitle);
      
      teasByCategory[category].forEach(tea => {
        const teaDiv = document.createElement('div');
        teaDiv.className = 'selected-tea-item';
        
        // Рассчитываем стоимость за выбранное количество
        const totalItemPrice = tea.price * tea.quantity;
        totalPrice += totalItemPrice;
        
        teaDiv.innerHTML = `
          <div class="selected-tea-info">
            <span>${tea.name} - ${tea.price}₽/100г</span>
            <div class="quantity-controls">
              <button type="button" class="btn-quantity" onclick="changeQuantity('${tea.keyword}', -1)">-</button>
              <span class="quantity-display">${tea.quantity * 100}г</span>
              <button type="button" class="btn-quantity" onclick="changeQuantity('${tea.keyword}', 1)">+</button>
            </div>
            <span class="item-total">${totalItemPrice}₽</span>
          </div>
          <button type="button" class="btn-remove" onclick="removeFromOrder('${tea.keyword}')">×</button>
        `;
        
        categoryDiv.appendChild(teaDiv);
      });
      
      selectedTeasContainer.appendChild(categoryDiv);
    }
    
    // Общая стоимость
    totalPriceElement.innerHTML = `<strong>Общая стоимость: ${totalPrice}₽</strong>`;
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
    selectedTeas.forEach((tea, index) => {
      const keywordInput = document.createElement('input');
      keywordInput.type = 'hidden';
      keywordInput.name = `tea_${index}_keyword`;
      keywordInput.value = tea.keyword;
      orderForm.appendChild(keywordInput);
      
      const quantityInput = document.createElement('input');
      quantityInput.type = 'hidden';
      quantityInput.name = `tea_${index}_quantity`;
      quantityInput.value = tea.quantity;
      orderForm.appendChild(quantityInput);
    });
  }
  
  // Функция для добавления чая в заказ
  window.addToOrder = function(teaKeyword) {
    const tea = teas.find(t => t.keyword === teaKeyword);
    if (!tea) return;
    
    // Проверяем, не выбран ли уже этот чай
    const existingIndex = selectedTeas.findIndex(t => t.keyword === teaKeyword);
    
    if (existingIndex !== -1) {
      // Если чай уже выбран, увеличиваем количество
      selectedTeas[existingIndex].quantity += 1;
    } else {
      // Добавляем новый чай с количеством 1 (100г)
      selectedTeas.push({
        ...tea,
        quantity: 1
      });
      
      // Выделяем карточку
      const teaCard = document.querySelector(`.tea-card[data-dish="${teaKeyword}"]`);
      if (teaCard) {
        teaCard.classList.add('selected');
      }
    }
    
    updateSelectedTeasDisplay();
  };
  
  // Функция для изменения количества
  window.changeQuantity = function(teaKeyword, change) {
    const teaIndex = selectedTeas.findIndex(t => t.keyword === teaKeyword);
    if (teaIndex === -1) return;
    
    const newQuantity = selectedTeas[teaIndex].quantity + change;
    
    // Не позволяем установить количество меньше 1
    if (newQuantity < 1) {
      removeFromOrder(teaKeyword);
      return;
    }
    
    // Ограничиваем максимальное количество (например, 10 = 1000г)
    if (newQuantity > 10) {
      return;
    }
    
    selectedTeas[teaIndex].quantity = newQuantity;
    updateSelectedTeasDisplay();
  };
  
  // Функция для удаления чая из заказ
  window.removeFromOrder = function(teaKeyword) {
    const teaIndex = selectedTeas.findIndex(t => t.keyword === teaKeyword);
    if (teaIndex === -1) return;
    
    // Удаляем чай из заказа
    selectedTeas.splice(teaIndex, 1);
    
    // Снимаем выделение с карточки
    const teaCard = document.querySelector(`.tea-card[data-dish="${teaKeyword}"]`);
    if (teaCard) {
      teaCard.classList.remove('selected');
    }
    
    updateSelectedTeasDisplay();
  };
  
  // Инициализация
  updateSelectedTeasDisplay();
});