// Declare Variables
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu-id');
const closeButton = document.getElementById('close');

// Create event listener functions
function showMenu() {
  menu.classList.replace('hide', 'show');
}

function hideMenu() {
  menu.classList.replace('show', 'hide');
}

// Add event listeners to html elements
menuButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

// Create artists array

const artists = [
  {
    name: 'Davido',
    image: './resources/Images/davido.jpeg',
    bio: 'Nigerian-American singer, songwriter and record producer',
    intro: "Nigerian vocalist/producer Davido blends traditional African elements with global mainstream pop for a sound that's equal parts intriguing and infectious.",
  },
  {
    name: 'Wizkid',
    image: './resources/Images/wizkid.jpeg',
    bio: 'Nigerian singer and songwriter',
    intro: "Singer/songwriter Ayodeji Ibrahim Balogun (aka Wizkid) is one of Nigeria's biggest R&B crossover acts, having worked with Drake, Skepta, and Chris Brown, among others.",
  },
  {
    name: 'Arya Starr',
    image: './resources/Images/arya.png',
    bio: 'Nigerian singer',
    intro: 'Ayra describes her sound as Afrosoul, told in an intoxicating voice that evokes a Gen Z queen-in-waiting.',
  },
  {
    name: 'Burna Boy',
    image: './resources/Images/burna.jpg',
    bio: 'Nigerian singer, songwriter and record producer',
    intro: "With his fusion of dancehall, reggae, Afrobeat, and pop, Burna Boy emerged in the early part of the 2010s as one of Nigeria's fastest-rising stars.",
  },
  {
    name: 'Tems',
    image: './resources/Images/tems.jpg',
    bio: 'Nigerian singer, songwriter, and record producer',
    intro: 'Tems is a Nigerian Singer and upcoming producer, single-handedly redefining the Nigerian music scene one musical note at a time. Tems brings an urban sound that is undeniably unique, embodying a fusion of alternative RnB and Neo soul genres.',
  },
  {
    name: 'Joeboy',
    image: './resources/Images/Joeboy.jpg',
    bio: 'Nigerian singer and songwriter',
    intro: "One of today's most exciting African artists, Joeboy has accrued over 1 billion streams while maintaining a non-stop run of smash hit singles since launching his career three years ago.",
  },
];

// Select speakers section of html document
const speakers = document.getElementById('artists');

// Loop through each artist and create a new artist div and append it to the speakers section
artists.forEach((element) => {
  const artist = document.createElement('div');
  artist.className = 'speakers-info';
  artist.innerHTML = `
    <div>
      <img src=${element.image} alt=${element.name}>
    </div>
    <div class="speakers-text">
      <h3>${element.name}</h3>
      <h4>${element.bio}</h4>
      <hr>
      <p>${element.intro}</p>
    </div>
  `;

  speakers.appendChild(artist);
});
