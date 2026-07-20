document.addEventListener('click', function (event) {
  var link = event.target.closest('.carousel-nav');
  if (!link) return;

  var target = document.getElementById(link.getAttribute('href').slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
});
