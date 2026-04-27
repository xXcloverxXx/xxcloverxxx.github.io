async function getResponse() {
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


async function getProfession() {
  const content = await (await fetch('https://codenameyau.github.io/assets/data/gallery.json')).json();
  const list = document.querySelector('.rightCards');
  list.innerHTML = '';
  let UID = 0;
  for (let item of content.gallery) {

    list.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <small> ${item.title} Факультет технических наук</small><br/>
              <small>Бакалавриат  ${item.title}</small>
              <h5>${UID}${UID}.${UID}${UID}.${UID}${UID} Прикладная механика (Компьютерное проектирование и дизайн)  ${item.title}</h5>
            </div>

            <!-- Навигация по вкладкам -->
            <nav>
              <div class="nav nav-tabs" id="nav-tab-${UID}" role="tablist"> <!-- уникальный id карточки -->
                <button class="nav-link active" id="nav-home-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-home-${UID}" type="button" role="tab" aria-controls="nav-home-${UID}" aria-selected="true">Очная</button>
                <button class="nav-link" id="nav-profile-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-profile-${UID}" type="button" role="tab" aria-controls="nav-profile-${UID}" aria-selected="false">Очно-заочная</button>
                <button class="nav-link" id="nav-contact-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-contact-${UID}" type="button" role="tab" aria-controls="nav-contact-${UID}" aria-selected="false">Заочная</button>
                <button class="nav-link" id="nav-vi-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-vi-${UID}" type="button" role="tab" aria-controls="nav-vi-${UID}" aria-selected="false">ВИ и К</button>
                <button class="nav-link" id="nav-ege-tab-${UID}" data-bs-toggle="tab" data-bs-target="#nav-ege-${UID}" type="button" role="tab" aria-controls="nav-ege-${UID}" aria-selected="false">ЕГЭ баллы</button>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent-${UID}">
              <div class="tab-pane fade show active" id="nav-home-${UID}" role="tabpanel" aria-labelledby="nav-home-tab-${UID}" tabindex="0">
                <p>Количество бюджетных мест: <span class="bold">${UID}${UID}</span></p>
                <p>Количество контрактных мест:  <span class="bold">NN</span></p>
                <p>Стоимость обучения:  <span class="bold">NN</span></p>
                <p>Срок обучения:  <span class="bold">NN</span></p>
              </div>
              <div class="tab-pane fade" id="nav-profile-${UID}" role="tabpanel" aria-labelledby="nav-profile-tab-${UID}" tabindex="0">.. ${item.link}.</div>
              <div class="tab-pane fade" id="nav-contact-${UID}" role="tabpanel" aria-labelledby="nav-contact-tab-${UID}" tabindex="0">..${item.link}.</div>
              <div class="tab-pane fade" id="nav-vi-${UID}" role="tabpanel" aria-labelledby="nav-vi-tab-${UID}" tabindex="0"><p> ${item.link}Обязательные предметы:</p><p>*Русский язык - консультация 20.07 в 13:00, вступительное испытание 21.07 в 8:00</p><p>Математика - консультация 21.07 в 16:00, вступительное испытание 22.07 в 8:00</p><p><br></p><p>Предмет на выбор:</p><p>Физика - консультация 23.07 в 16:30, вступительное испытание 24.07 в 8:00</p><p>Информатика - консультация 23.07 в 18:00, вступительное испытание 24.07 в 14:00</p><p>Химия - консультация 24.07 в 17:15, вступительное испытание 25.07 в 11:00</p></div>
              <div class="tab-pane fade" id="nav-ege-${UID}" role="tabpanel" aria-labelledby="nav-ege-tab-${UID}" tabindex="0">..${item.link}.Егэ</div>
            </div>
          </div>
        </div>

    `;
    UID += 1;
  }
}


getResponse();
getProfession();
