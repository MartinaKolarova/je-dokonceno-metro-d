const vystavbaMetraD = dayjs('2031-1-1');
const dnes = dayjs();
const napis = document.querySelector('div');

if (dnes.isBefore(vystavbaMetraD)) {
  napis.innerHTML += 'Metro D v nedohlednu.';
} else {
  napis.innerHTML +=
    'Výstavba metra D má být tento rok dokončena... Je to tak?';
}
