async function getallFaq() {
  const content = await (await fetch('https://xxcloverxxx.github.io/info.json')).json();
  const list = document.querySelector('.lestCards');
  list.innerHTML = '';
  let UID = 0;
  for (let item of content.allFaq) {

    list.innerHTML += `
    <div class="card">
      <div class="card-header">
        <h2 class="mb-0">
          <button class="btn btn-link w-100 text-start" data-bs-toggle="collapse" data-bs-target="#collapse-${UID}" style="text-decoration:none;">
           ${item.title}
          </button>
        </h2>
      </div>
      <div id="collapse-${UID}" class="collapse">
        <div class="card-body position-relative">
          <button class="copy-btn" onclick="copyContent(this)"><i class="fa fa-copy"></i></button>
         <div class="content">${item.text}</div>
      </div>
    </div>

    `;
    UID += 1;
  }
}


async function getSpecialties() {
  const content = await (await fetch('https://xxcloverxxx.github.io/specialties.json')).json();
  const list = document.querySelector('.rightCards');
  list.innerHTML = '';

//Вступительные испытания и консультации ВИ и К
  const textskAndVi = {
    0: "Описание 0",
    1: "Описание 1",
    2: "Описание 2",
    3: "Описание 3",
    4: "Описание 4",
    5: "Описание 5",
    6: "Описание 6",
    7: "Описание 7",
    8: "Описание 8",
    9: "Описание 9",
    10: "Описание 10",
    11: "Описание 11"
  };

//Предметы ЕГЭ
  const textsege = {
    0: "ЕГЭ 0",
    1: "ЕГЭ 1",
    2: "ЕГЭ 2",
    3: "ЕГЭ 3",
    4: "ЕГЭ 4",
    5: "ЕГЭ 5",
    6: "ЕГЭ 6",
    7: "ЕГЭ 7",
    8: "ЕГЭ 8",
    9: "ЕГЭ 9",
    10: "ЕГЭ 10",
    11: "Нет"
  };

//Уникальный индификатор для карточек
  let UID = 0;

  //цикл начало
  for (let item of content.allSpecialty) {

//Вступительные испытания и консультации ВИ и К
    let kAndViText = '';
    let kAndViAll = ''; //Создание или нет вкладки
    if (item.kAndVi) {
      item.kAndVi.forEach(id => {
        kAndViText += `<p>${textskAndVi[id] ?? 'Нет данных'}</p>`;
        kAndViAll += textskAndVi[id];
      });
    }

//Предметы ЕГЭ
    let egeText = '';
    let egeAll = '';//Создание или нет вкладки
    if (item.ege) {
      item.ege.forEach(id => {
        egeText += `<p>${textsege[id] ?? 'Нет данных'}</p>`;
        egeAll += textsege[id];
      });
    }

//Вкладка Очная форма
    let oFormButton = '';
    let oFormTab = '';
    if (item.oForm == 1) {
        oFormButton += `<button class="nav-link active" id="nav-home-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-home-${UID}" type="button" role="tab" aria-controls="nav-home-${UID}" aria-selected="true">Очная</button>`;

        oFormTab += `
              <div class="tab-pane fade show active" id="nav-home-${UID}" role="tabpanel" aria-labelledby="nav-home-tab-${UID}" tabindex="0">
                <p>Количество бюджетных мест: <span class="bold">${item.oBudget}</span></p>
                <p>Количество контрактных мест:  <span class="bold">${item.oContract}</span></p>
                <p>Стоимость обучения за один учебный год:  <span class="bold">${item.oPrice}₽</span></p>
                <p>Срок обучения:  <span class="bold">${item.oYear}</span></p>
              </div>
        `;
    } else {
        oFormButton += `<button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Очная</button>`;

        oFormTab += `
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        `;
    }

//Вкладка Очно-заочная форма
    let ozFormButton = '';
    let ozFormTab = '';
    if (item.ozForm == 1) {
        ozFormButton += `<button class="nav-link" id="nav-profile-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-profile-${UID}" type="button" role="tab" aria-controls="nav-profile-${UID}" aria-selected="false">Очно-заочная</button>`;

        ozFormTab += `
              <div class="tab-pane fade" id="nav-profile-${UID}" role="tabpanel" aria-labelledby="nav-profile-tab-${UID}" tabindex="0">
                <p>Количество бюджетных мест: <span class="bold">${item.ozBudget}</span></p>
                <p>Количество контрактных мест:  <span class="bold">${item.ozContract}</span></p>
                <p>Стоимость обучения за один учебный год:  <span class="bold">${item.ozPrice}₽</span></p>
                <p>Срок обучения:  <span class="bold">${item.ozYear}</span></p>
              </div>
        `;
    } else {
        ozFormButton += `<button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Очно-заочная</button>`;

        ozFormTab += `
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        `;
    }

//Вкладка Заочная форма
    let zFormButton = '';
    let zFormTab = '';
    if (item.zForm == 1) {
        zFormButton += `<button class="nav-link" id="nav-contact-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-contact-${UID}" type="button" role="tab" aria-controls="nav-contact-${UID}" aria-selected="false">Заочная</button>`;

        zFormTab += `
              <div class="tab-pane fade" id="nav-contact-${UID}" role="tabpanel" aria-labelledby="nav-contact-tab-${UID}" tabindex="0">
                <p>Количество бюджетных мест: <span class="bold">${item.zBudget}</span></p>
                <p>Количество контрактных мест:  <span class="bold">${item.zContract}</span></p>
                <p>Стоимость обучения за один учебный год:  <span class="bold">${item.zPrice}₽</span></p>
                <p>Срок обучения:  <span class="bold">${item.zYear}</span></p>
              </div>
        `;
    } else {
        zFormButton += `<button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Заочная</button>`;

        zFormTab += `
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        `;
    }


//Вкладка ВИ и К
    let kAndViButton = '';
    let kAndViTab = '';
    if (kAndViAll != "Описание 11") {
        kAndViButton += `<button class="nav-link" id="nav-vi-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-vi-${UID}" type="button" role="tab" aria-controls="nav-vi-${UID}" aria-selected="false">ВИ и К</button>`;

        kAndViTab += `
              <div class="tab-pane fade" id="nav-vi-${UID}" role="tabpanel" aria-labelledby="nav-vi-tab-${UID}" tabindex="0">
                ${kAndViText}
                
              </div>
        `;
    } else {
        kAndViButton += `<button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>ВИ и К</button>`;

        kAndViTab += `
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        `;
    }


//Вкладка ЕГЭ
    let egeButton = '';
    let egeTab = '';
    if (egeAll != "Нет") {
        egeButton += `<button class="nav-link" id="nav-ege-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-ege-${UID}" type="button" role="tab" aria-controls="nav-ege-${UID}" aria-selected="false">ЕГЭ</button>`;

        egeTab += `
              <div class="tab-pane fade" id="nav-ege-${UID}" role="tabpanel" aria-labelledby="nav-ege-tab-${UID}" tabindex="0">
                ${egeText}
              </div>
        `;
    } else {
        egeButton += `<button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>ЕГЭ</button>`;

        egeTab += `
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
        `;
    }

    
//Основной HTML
    list.innerHTML += `
        <div class="col-md-4 custom-col">
          <div class="card">
            <div class="card-body">
              <small>${item.faculty}</small><br/>
              <small>${item.level}</small>
              <h5>${item.specialty}</h5>
            </div>

            <!-- Навигация по вкладкам -->
            <nav>
              <div class="nav nav-tabs" id="nav-tab-${UID}" role="tablist"> <!-- уникальный id карточки -->
                ${oFormButton}
                ${ozFormButton}
                ${zFormButton}
                ${kAndViButton}
                ${egeButton}
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent-${UID}">
              ${oFormTab}
              ${ozFormTab}
              ${zFormTab}
              ${kAndViTab}
              ${egeTab}
            </div>
          </div>
        </div>

    `;

//Уникальный индификатор для карточек
    UID += 1;
  }
}


getallFaq();
getSpecialties();
