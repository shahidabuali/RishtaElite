// ── DATA STORE (localStorage) ──────────────────────────────────────────────

const DB = {
  get: (key) => JSON.parse(localStorage.getItem('re_' + key) || 'null'),
  set: (key, val) => localStorage.setItem('re_' + key, JSON.stringify(val)),
  push: (key, item) => {
    const arr = DB.get(key) || [];
    arr.push(item);
    DB.set(key, arr);
    return arr;
  }
};

// Seed demo profiles if none exist
function seedProfiles() {
  if (DB.get('profiles')) return;
  const profiles = [
    { id: 1, name: 'Fatima Malik', age: 26, city: 'Lahore', country: 'Pakistan', sect: 'Sunni', education: 'MBBS', profession: 'Doctor', height: '5\'4"', complexion: 'Fair', maritalStatus: 'Never Married', gender: 'Female', verified: true, bio: 'A dedicated medical professional from Lahore, looking for a serious and educated match. Values family, deen, and ambition equally.', photo: '👩', created: Date.now() - 86400000 * 5 },
    { id: 2, name: 'Ahmed Raza', age: 29, city: 'Karachi', country: 'Pakistan', sect: 'Sunni', education: 'MBA', profession: 'Business', height: '5\'10"', complexion: 'Wheatish', maritalStatus: 'Never Married', gender: 'Male', verified: true, bio: 'Entrepreneur from Karachi running a textile export business. Family-oriented, practising Muslim. Looking for a compatible life partner.', photo: '👨', created: Date.now() - 86400000 * 3 },
    { id: 3, name: 'Zara Sheikh', age: 24, city: 'London', country: 'UK', sect: 'Sunni', education: 'LLB', profession: 'Lawyer', height: '5\'5"', complexion: 'Fair', maritalStatus: 'Never Married', gender: 'Female', verified: false, bio: 'Pakistani-British lawyer based in London. Looking for a well-educated, family-oriented match. Open to UK or Pakistan.', photo: '👩', created: Date.now() - 86400000 * 1 },
    { id: 4, name: 'Usman Ali', age: 31, city: 'Toronto', country: 'Canada', sect: 'Sunni', education: 'Masters', profession: 'Engineer', height: '6\'0"', complexion: 'Wheatish', maritalStatus: 'Never Married', gender: 'Male', verified: true, bio: 'Software engineer living in Canada. Born in Islamabad, settled in Toronto. Practising Muslim, family values are central to life decisions.', photo: '👨', created: Date.now() - 86400000 * 7 },
    { id: 5, name: 'Hina Butt', age: 27, city: 'Islamabad', country: 'Pakistan', sect: 'Sunni', education: 'BBA', profession: 'Finance', height: '5\'3"', complexion: 'Fair', maritalStatus: 'Never Married', gender: 'Female', verified: true, bio: 'Finance professional from Islamabad. Loves reading and cooking. Looking for someone who balances deen and dunya with wisdom.', photo: '👩', created: Date.now() },
    { id: 6, name: 'Bilal Chaudhry', age: 33, city: 'Manchester', country: 'UK', sect: 'Sunni', education: 'ACCA', profession: 'Accountant', height: '5\'9"', complexion: 'Wheatish', maritalStatus: 'Divorced', gender: 'Male', verified: false, bio: 'Settled in Manchester for 8 years. Divorced, no children. Honest and straightforward. Looking for a mature and understanding partner.', photo: '👨', created: Date.now() - 86400000 * 2 }
  ];
  DB.set('profiles', profiles);
}

function seedUsers() {
  if (DB.get('users')) return;
  DB.set('users', [
    { id: 1, name: 'Admin User', email: 'admin@rishtaelite.pk', password: 'admin123', role: 'admin' }
  ]);
}

// ── AUTH ────────────────────────────────────────────────────────────────────

const Auth = {
  current: () => DB.get('currentUser'),
  login: (email, password) => {
    const users = DB.get('users') || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) { DB.set('currentUser', user); return { ok: true, user }; }
    return { ok: false, error: 'Invalid email or password.' };
  },
  register: (data) => {
    const users = DB.get('users') || [];
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'Email already registered.' };
    const user = { id: Date.now(), ...data, role: 'user', created: Date.now() };
    DB.push('users', user);
    DB.set('currentUser', user);
    return { ok: true, user };
  },
  logout: () => { localStorage.removeItem('re_currentUser'); window.location.href = 'index.html'; }
};

// ── NAV ─────────────────────────────────────────────────────────────────────

function initNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // Highlight active link
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  links.forEach(link => {
    if (link.href && link.href.includes(location.pathname.split('/').pop())) {
      link.classList.add('active');
    }
  });

  // Show/hide auth links
  const user = Auth.current();
  const authArea = document.getElementById('nav-auth');
  if (authArea) {
    if (user) {
      authArea.innerHTML = `
        <span style="font-size:0.8rem;color:var(--mauve-light)">Hi, ${user.name.split(' ')[0]}</span>
        ${user.role === 'admin' ? '<a href="admin.html" style="font-size:0.8rem;color:var(--gold)">Admin</a>' : ''}
        <button onclick="Auth.logout()" class="btn-outline" style="padding:0.4rem 1rem;font-size:0.8rem">Logout</button>
      `;
    } else {
      authArea.innerHTML = `
        <a href="login.html" style="font-size:0.875rem;color:var(--mauve-light)">Login</a>
        <a href="register.html" class="nav-cta">Register Free</a>
      `;
    }
  }
}

// ── PROFILES ────────────────────────────────────────────────────────────────

function getProfiles(filters = {}) {
  let profiles = DB.get('profiles') || [];
  if (filters.gender) profiles = profiles.filter(p => p.gender === filters.gender);
  if (filters.country) profiles = profiles.filter(p => p.country === filters.country);
  if (filters.minAge) profiles = profiles.filter(p => p.age >= parseInt(filters.minAge));
  if (filters.maxAge) profiles = profiles.filter(p => p.age <= parseInt(filters.maxAge));
  if (filters.maritalStatus) profiles = profiles.filter(p => p.maritalStatus === filters.maritalStatus);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    profiles = profiles.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.profession.toLowerCase().includes(q)
    );
  }
  return profiles;
}

function renderProfileCard(p) {
  return `
    <div class="profile-card fade-up" onclick="openProfile(${p.id})">
      <div class="profile-card-img">${p.photo}
        ${p.verified ? '<span class="badge badge-verified" style="position:absolute;top:12px;right:12px;z-index:2">✓ Verified</span>' : ''}
      </div>
      <div class="profile-card-body">
        <div class="profile-card-name">${p.name}</div>
        <div class="profile-card-meta">${p.age} yrs • ${p.city}, ${p.country}</div>
        <div class="profile-card-tags">
          <span class="tag">${p.education}</span>
          <span class="tag">${p.profession}</span>
          <span class="tag">${p.maritalStatus}</span>
        </div>
      </div>
      <div class="profile-card-footer">
        <button class="btn-primary" style="flex:1;padding:0.5rem" onclick="event.stopPropagation();sendInterest(${p.id})">Send Interest</button>
        <button class="btn-outline" style="padding:0.5rem 0.75rem" onclick="event.stopPropagation();openProfile(${p.id})">View</button>
      </div>
    </div>
  `;
}

function openProfile(id) {
  const profiles = DB.get('profiles') || [];
  const p = profiles.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('profile-modal');
  if (!modal) return;
  document.getElementById('modal-content').innerHTML = `
    <div style="text-align:center;margin-bottom:1.5rem">
      <div style="font-size:5rem">${p.photo}</div>
      <h3 style="font-family:'Playfair Display',serif;color:var(--gold-pale);margin:0.5rem 0 0.25rem">${p.name}</h3>
      ${p.verified ? '<span class="badge badge-verified">✓ Verified Profile</span>' : ''}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1.25rem">
      ${[['Age',p.age+' years'],['City',p.city+', '+p.country],['Education',p.education],['Profession',p.profession],['Height',p.height],['Marital Status',p.maritalStatus],['Sect',p.sect],['Complexion',p.complexion]].map(([k,v])=>`
        <div style="background:rgba(255,255,255,0.03);border-radius:6px;padding:0.6rem 0.875rem">
          <div style="font-size:0.65rem;color:var(--gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:2px">${k}</div>
          <div style="font-size:0.875rem;color:var(--text-on-dark)">${v}</div>
        </div>`).join('')}
    </div>
    <div style="background:rgba(255,255,255,0.03);border-radius:6px;padding:1rem;margin-bottom:1.25rem">
      <div style="font-size:0.65rem;color:var(--gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">About</div>
      <p style="font-size:0.875rem;line-height:1.7">${p.bio}</p>
    </div>
    <button class="btn-primary" style="width:100%" onclick="sendInterest(${p.id})">Send Interest</button>
  `;
  modal.classList.add('open');
}

function sendInterest(id) {
  const user = Auth.current();
  if (!user) {
    showToast('Please login to send interest', 'error');
    setTimeout(() => window.location.href = 'login.html', 1200);
    return;
  }
  showToast('Interest sent successfully! ✓', 'success');
}

// ── TOAST ───────────────────────────────────────────────────────────────────

function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `alert alert-${type}`;
  t.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:999;min-width:260px;animation:fadeUp 0.3s ease';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ── INIT ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  seedProfiles();
  seedUsers();
  initNav();
});