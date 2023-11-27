function getCheckedItems(items){
  const values = [];

  for (let i = 0; i < items.length; i++){
    if (items[i].checked){
      values.push(items[i].value);
    }
  };
  
    //Mетод join(), чтобы объединить - элементы массива В строку с пробелами и запятой
  const resultatLanguages = values.join(', ');
  return resultatLanguages;
}


function getCity (citys) {
  const selectedCities = [];

  for (let i = 0; i < citys.length; i++) {
    if (citys[i].selected) {
      selectedCities.push(citys[i].value)
    }
  };

  const resultCity = selectedCities.join(', ');
  return resultCity;
}

document.getElementById('btn').addEventListener('click', () => {

  const formElements = document.forms.mainForm.elements;
  const parentElementDiv = document.getElementById('showResultatForm');

  function showAddAnswer(label, value) {
    let spanElement = document.createElement('span');
    spanElement.innerHTML = `<strong>${label}:</strong> ${value}<br>`;
    parentElementDiv.appendChild(spanElement);
  }

  showResultatForm.style.display = 'flex'
  mainForm.style.display = 'none';
  btn.style.display = 'none';

  showAddAnswer('Full Name User', formElements.name.value);
  showAddAnswer('User Birth', formElements.dateOfBirth.value);
  showAddAnswer('Gender User', formElements.gender.value);

  const citys = getCity(formElements.citys);
  showAddAnswer('City Usera', citys);
  showAddAnswer('Address Usera', formElements.description.value);

  const languages = getCheckedItems(formElements.languages);
  showAddAnswer('Languages use User', languages);
});
