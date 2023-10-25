let question = document.querySelectorAll('.faq__item');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', (e) => {
    const current = question[i];

    // Проверьте, если текущий элемент уже имеет класс 'active', то уберите его
    if (current.classList.contains('active')) {
      current.classList.remove('active');
    } else {
      // Удалите класс 'active' у всех элементов
      question.forEach(item => {
        item.classList.remove('active');
      });

      // В противном случае добавьте класс 'active' текущему элементу
      current.classList.add('active');
    }
  });
}