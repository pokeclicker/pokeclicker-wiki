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

module.exports = {
  alert,
};
