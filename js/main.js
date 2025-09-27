document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

projectCards.forEach(card => {
  observer.observe(card);
});


const viewWorkBtn = document.querySelector('.btn');
if (viewWorkBtn) {
  viewWorkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
}


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");


document.querySelectorAll(".project-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

