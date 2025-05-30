fetch('i18n.json')
  .then(response => response.json())
  .then(translations => {

    function updateLanguage(language) {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    }

    let currentLanguage = 'en';
    updateLanguage(currentLanguage)

    document.getElementById('spanish').addEventListener('click', () => {
      currentLanguage = 'es';
      updateLanguage(currentLanguage)
    })

    document.getElementById('english').addEventListener('click', () => {
      currentLanguage = 'en';
      updateLanguage(currentLanguage)
    })
    
    
  })
  .catch(error => console.error('Error al cargar las traducciones:', error));


// Email link

const user = "gilgil.joseangel";
const domain = "gmail.com"
const email = user + "@" + domain;
const link = "mailto:" + email;

const emailLink = document.getElementById("email-link")
emailLink.addEventListener('click', (event) => {
  if(!emailLink.href || emailLink.href === "#") event.preventDefault()
  emailLink.href = link  
})