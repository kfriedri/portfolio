document.addEventListener('click', function (event) {
  var link = event.target.closest('.carousel-nav');
  if (!link) return;

  var target = document.getElementById(link.getAttribute('href').slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
});

// E-Mail-Adresse erst im Browser zusammensetzen, damit sie nicht im
// HTML-Quelltext steht und von Crawlern/Spam-Bots erfasst werden kann.
document.querySelectorAll('.email-link').forEach(function (link) {
  var user = link.getAttribute('data-user');
  var domain = link.getAttribute('data-domain');
  if (!user || !domain) return;

  var address = user + '@' + domain;
  link.href = 'mailto:' + address;
  link.textContent = address;
});
