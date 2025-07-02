const moodPlaylists = {
  happy: '37i9dQZF1DXdPec7aLTmlC',
  chill: '37i9dQZF1DX4WYpdgoIcn6',
  sad: '37i9dQZF1DX7qK8ma5wgG1',
  focus: '37i9dQZF1DX3PFzdbtx1Us'
};

const moodButtons = document.querySelectorAll('button');
const playerContainer = document.getElementById('player-container');

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    const playlistId = moodPlaylists[mood];
    const iframe = `
      <iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator" 
        width="100%" height="380" frameborder="0" allowfullscreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    playerContainer.innerHTML = iframe;
  });
});
document.body.setAttribute('data-mood', mood);