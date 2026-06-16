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
    0: "Нет",
    1: "*Русский язык - Консультация: 20 июля 2026 в 15:00; - Вступительное испытание: 21 июля 2026 в 8:00.",
    2: "**Русский язык - Консультация: 21 июля 2026 в 14:00; - Вступительное испытание: 22 июля 2026 в 8:00.",
    3: "Математика - Консультация: 21 июля 2026 в 17:30; - Вступительное испытание: 22 июля 2026 в 14:00.",
    4: "История - Консультация: 22 июля 2026 в 17:00; - Вступительное испытание: 23 июля 2026 в 8:00.",
    5: "Иностранный язык - Консультация: 24 июля 2026 в 16:30; - Вступительное испытание: 25 июля 2026 в 10:00.",
    6: "*Обществознание - Консультация: 20 июля 2026 в 17:00; - Вступительное испытание: 21 июля 2026 в 11:00.",
    7: "География - Консультация: 20 июля 2026 в 18:30; - Вступительное испытание: 23 июля 2026 в 11:00.",
    8: "Информатика - Консультация: 23 июля 2026 в 17:30; - Вступительное испытание: 24 июля 2026 в 14:00.",
    9: "Химия - Консультация: 23 июля 2026 в 16:30; - Вступительное испытание: 24 июля 2026 в 11:00.",
    10: "Физика - Консультация: 22 июля 2026 в 19:00; - Вступительное испытание: 24 июля 2026 в 8:00.",
    11: "Биология - Консультация: 22 июля 2026 в 18:00; - Вступительное испытание: 23 июля 2026 в 14:00.",
    12: "Литература - Консультация: 23 июля 2026 в 18:30; - Вступительное испытание: 25 июля 2026 в 14:00.",
    13: "ВИ творческой направленности",
    14: "<strong>Обязательные предметы:</strong>",
    15: "<strong>Предмет на выбор:</strong>",
    16: "ㅤ",
    17: "*Профильное вступительное испытание<br>- Консультация: 21 августа 2026 в 9:00;<br>- Вступительное испытание: 22 августа 2026 в 8:00",
    18: "**Профильное вступительное испытание<br> - Консультация: 21 августа 2026 в 11:00;<br>- Вступительное испытание: 22 августа 2026 в 11:00",
    19: "**Обществознание - Консультация: 21 июля 2026 в 16:00; - Вступительное испытание: 22 июля 2026 в 11:00.",
    20: "*Профильное вступительное испытание<br> - Консультация: 21 августа 2026 в 15:00;<br>- Вступительное испытание: 22 августа 2026 в 8:00"
  };

//Предметы ЕГЭ
  const textsege = {
    0: "Нет",
    1: "ㅤ",
    2: "ЕГЭ 2",
    3: "ЕГЭ 3",
    4: "ЕГЭ 4",
    5: "ЕГЭ 5",
    6: "ЕГЭ 6",
    7: "ЕГЭ 7",
    8: "ЕГЭ 8",
    9: "ЕГЭ 9",
    10: "ЕГЭ 10",
    11: "Описание 11",
    12: "Описание 12",
    13: "Описание 13",
    14: "Описание 14",
    15: "Описание 15",
    16: "Описание 16",
    17: "Описание 17",
    18: "Описание 18",
    19: "Описание 19",
    20: "Описание 20"
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
    if (kAndViAll != "Нет") {
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
