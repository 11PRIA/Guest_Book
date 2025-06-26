// Tab switching
const homeTab = document.getElementById('tab-home');
const viewTab = document.getElementById('tab-view');
const homeSection = document.getElementById('home-section');
const viewSection = document.getElementById('view-section');

homeTab.onclick = () => {
  homeTab.classList.add('active');
  viewTab.classList.remove('active');
  homeSection.classList.remove('hidden');
  viewSection.classList.add('hidden');
};

viewTab.onclick = async () => {
  homeTab.classList.remove('active');
  viewTab.classList.add('active');
  homeSection.classList.add('hidden');
  viewSection.classList.remove('hidden');
  await loadGuests();
};

// Form submission
document.getElementById('guest-form').onsubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const { error } = await supabase
    .from('guest_entries')
    .insert([{ name, email, message }]);

  const successDiv = document.getElementById('form-success');
  if (!error) {
    document.getElementById('guest-form').reset();
    successDiv.textContent = 'Thank you for signing the guest book!';
    successDiv.classList.remove('hidden', 'fadeOut');
    successDiv.classList.add('popIn');
    setTimeout(() => {
      successDiv.classList.add('fadeOut');
      setTimeout(() => {
        successDiv.classList.add('hidden');
        successDiv.classList.remove('popIn', 'fadeOut');
      }, 400);
    }, 2000);
  } else {
    successDiv.textContent = 'Error submitting entry.';
    successDiv.classList.remove('hidden', 'fadeOut');
    successDiv.classList.add('popIn');
    setTimeout(() => {
      successDiv.classList.add('fadeOut');
      setTimeout(() => {
        successDiv.classList.add('hidden');
        successDiv.classList.remove('popIn', 'fadeOut');
      }, 400);
    }, 2000);
  }
};

// Load guests
async function loadGuests() {
  const { data, error } = await supabase
    .from('guest_entries')
    .select('name, email, timestamp')
    .order('timestamp', { ascending: false });

  const tbody = document.getElementById('guest-table-body');
  tbody.innerHTML = '';
  if (data) {
    data.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td data-label="Date">${new Date(entry.timestamp).toLocaleString()}</td>
        <td data-label="Name">${entry.name}</td>
        <td data-label="Email">${entry.email}</td>
      `;
      tbody.appendChild(row);
    });
  }
} 