if (window.location.pathname === '/') {
  const nav = document.createElement('div')
  nav.setAttribute('id', 'simple-facebook')

  nav.innerHTML = `
  <div class="home-menu">
    <h1>Simple Facebook</h1>
    <input placeholder="Search" id="simple-facebook-search">
    <a href="https://www.facebook.com/messages">Messages</a>
    <a href="https://www.facebook.com/notifications">Notifications</a>
    <a href="https://www.facebook.com/groups">Groups</a>
    <a href="https://www.facebook.com/events">Events</a>
    <a href="https://www.facebook.com/marketplace">Marketplace</a>
    <a href="https://www.facebook.com/settings">Settings</a>
  </div>
  `

  document.body.appendChild(nav)

  document.getElementById('simple-facebook-search').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      window.location.href = `https://www.facebook.com/search/top/?q=${encodeURI(e.target.value)}`
    }
  })
}
