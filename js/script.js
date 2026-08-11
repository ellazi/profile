// Review section
const reviews = document.querySelectorAll('.review');

reviews.forEach((review) => {
  const content = review.querySelector('.review-content');
  const readMore = review.querySelector('.read-more');

  if (content.offsetHeight > 96) {
    readMore.classList.remove('read-more');
    content.classList.add('truncated');
  }

  readMore.addEventListener('click', (event) => {
    if (content.classList.contains('truncated')) {
      readMore.innerText = 'Read less';
      content.classList.remove('truncated');
    } else {
      readMore.innerText = 'Read more';
      content.classList.add('truncated');
    }
  })
})

// Contacts icons
const contactIcons = document.querySelectorAll('nav .contact path');

contactIcons.forEach((icon) => {
  icon.style.fill = '#1A1924';
})

// Navbar changes color when scrolling on portfolio
function darkStyle(h, hr, contacts) {
  h.style.color = '#F2EFEA';
  hr.style.color = '#F2EFEA';
  hr.style.border = '0.1px solid #F2EFEA';
  contacts.forEach((icon) => {
    icon.style.fill = '#DBD56E';
  })
}

function lightStyle(h, hr, contacts) {
  h.style.color = '#1A1924';
  hr.style.color = '#1A1924';
  hr.style.border = '0.1px solid #1A1924';
  contacts.forEach((icon) => {
    icon.style.fill = '#1A1924';
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const h = document.querySelector('nav h4');
    const hr = document.querySelector('nav hr');

    if (entry.isIntersecting) {
      if (id === 'portfolio' || id === 'footer') {
        darkStyle(h, hr, contactIcons);
      }
    } else {
      lightStyle(h, hr, contactIcons);
    }
  })
}, {
  threshold: 0.1
})

const portfolio = document.querySelector('#portfolio');
if (portfolio) observer.observe(portfolio);
