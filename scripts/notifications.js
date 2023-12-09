const alert = (message, type = 'primary', timeout = 5e3) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
  wrapper.id = `alert-${Math.random().toString(36).substr(2, 9)}`;
  wrapper.innerText = message;
  wrapper.innerHTML += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
  document.getElementById('toaster').append(wrapper);
  setTimeout(() => {
    // Remove our element after the timeout
    try {
      const alertElement = bootstrap.Alert.getOrCreateInstance(`#${wrapper.id}`);
      alertElement.close();
    } catch(e) {
      console.error('error removing alert', e);
    }
  }, timeout);
}

window.addEventListener("error", (event) => {
  // Handle KO binding errors, usually occur when knockout is trying to use functions that
  // don't exist in the cached javascript, but could also be a genuine error that slipped through
  if (event?.error?.message?.startsWith("Unable to process binding")) {
    alert(
      `There was an error loading the page. Hard Refresh (Ctrl+F5 or Cmd+Shift+R) to clear the cache.
      If this persists please post in #wiki-general on discord.`,
      'danger',
      3600e3
    );
  }
});

module.exports = {
  alert,
};
