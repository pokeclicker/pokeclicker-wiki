discordLoginJSON = 'https://discord.pokeclicker.com/json';

let discord = {
  error: ko.observable(''),
  ID: ko.observable(''),
  username: ko.observable(''),
  avatar: ko.observable(''),
};

fetch(discordLoginJSON, {
    credentials: 'include'
  })
  .then((response) => response.json())
  .then((data) => {
    Object.entries(discord).forEach(([key, val]) => {
      val(data[key] || '');
    });
  })
  .catch((e) => console.error('Discord login check error'));

module.exports = {
  discord,
}