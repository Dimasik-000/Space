let infoContent = {
    "block1": { 
        "text" : "На Землі вазон отримує все необхідне для здорового росту: гравітацію, атмосферу, ґрунт і воду. Сонячне світло або штучне освітлення допомагає рослині фотосинтезувати, а природні мікроорганізми у ґрунті підтримують її здоров'я. Завдяки земному тяжінню вода рівномірно розподіляється в ґрунті, а коріння розвивається у звичному напрямку – вниз.Крім того, на Землі працює природний повітрообмін: рослина поглинає вуглекислий газ і виділяє кисень, взаємодіючи з навколишнім середовищем. Вологість і температура можуть регулюватися природно або штучно, але загалом умови залишаються стабільними та передбачуваними.",
        "image": "img/earth.jpg",
        "namer": "На землі"
    },
    "block2": { 
        "text": "У невагомості космосу вазон стикається з новими викликами. Відсутність гравітації змінює рух води та поживних речовин, що може ускладнювати ріст кореневої системи. Вода не стікає вниз, а утворює краплі, що прилипають до поверхонь, створюючи ризик надмірного зволоження або пересихання. Оскільки немає природної атмосфери, рослинам необхідне штучне середовище: контрольована температура, рівень вуглекислого газу та освітлення, яке замінює сонячне світло. Вчені використовують спеціальні субстрати замість ґрунту та експериментують із методами аеропоніки й гідропоніки для забезпечення вазонів поживними речовинами.",
        "image": "img/space.jpg",
        "namer": "В космосі"
    }
  };
  
  function showInfo(blockId) {
    const info = infoContent[blockId];
    document.getElementById('info-content').innerHTML = info.text;
    document.getElementById('info-name').innerHTML = info.namer;
    document.getElementById('overlayImage').src = info.image;
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
  // -----------------
  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
  
    const message = `Ім'я: ${data.name}\nEmail: ${data.email}\nПовідомлення: ${data.message}`;
  
    const token = '6385195670:AAF6P2tkMP85UTG1-pTcC0TNJ9XX6etENyc';
    const chat_id = '-1002484294255';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    // Додано додаткове логування
    console.log('Тіло запиту:', {
      chat_id: chat_id,
      text: message
    });
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message
      })
    })
      .then(response => {
        console.log('Статус відповіді:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Дані відповіді:', data);
        if (data.ok) {
          alert('Повідомлення успішно відправлено');
        } else {
          alert(`Помилка при відправці: ${data.description}`);
        }
      })
      .catch(error => {
        alert('Сталася помилка');
        console.error('Error:', error);
      });
  });
  // ---------------
  function hideInfo() {
    document.getElementById('overlay').style.display = 'none';
  }
  document.querySelector('a[href="#secont"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about_t1').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.querySelector('a[href="#tree"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about_t2').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.querySelector('a[href="#four"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#form_q').scrollIntoView({
      behavior: 'smooth'
    });
  });
  // -------------