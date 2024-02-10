const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let currentAlert = null;

const appendAlert = (message, type) => {
  // Если алерт уже существует, удаляем его
  if (currentAlert) {
    currentAlert.remove();
    currentAlert = null; // Сбрасываем текущий алерт
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  const alertElement = wrapper.firstChild; // Получаем элемент с классом "alert"

  // Добавляем слушателя события на кнопку закрытия
  const closeButton = alertElement.querySelector('.btn-close');
  closeButton.addEventListener('click', () => {
    alertElement.remove(); // Удаляем элемент из DOM при нажатии на кнопку закрытия
    currentAlert = null; // Сбрасываем текущий алерт
  });

  alertPlaceholder.append(alertElement);
  currentAlert = alertElement; // Устанавливаем текущий алерт
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success');
  });
}

