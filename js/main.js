(() => {
  const refs = {
    header: document.querySelector('.header'),
    forms: document.querySelectorAll('.js-speaker-form'),
  };

  // padding for fixed header
  if (refs.header.classList.contains('is-fixed')) {
    const { height: headerHeight } = refs.header.getBoundingClientRect();
    document.body.style.paddingTop = `${headerHeight}px`;
  }

  // forms submit handler
  refs.forms.forEach(item =>
    item.addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
    })
  );
})();
