alert('Hey babe! I made this for you and i hope this will be different');
const openContent = document.querySelector('.openContent');
const mine = document.getElementById('mine');
const ans1 = '';
var que1 = prompt('Would you like to view the page? YES/NO');
if (que1.toUpperCase() === 'YES') {
  ans1 = alert('Alright babe');
} else {
  mine.style.color = 'red';
  openContent.style.display = 'none';
  mine.textContent = "You've hurt me";
}

openContent.addEventListener('click', () => {
  if (mine.style.display == 'none') {
    mine.style.display = 'block';
    openContent.textContent = 'Hide Me';
  } else {
    mine.style.display = 'none';
    openContent.textContent = 'View Me';
  }
});
