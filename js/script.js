/* ---------- Skills data ---------- */
const LEVELS = ["Fundamentals","Basic","Intermediate"];
const SKILLS = [
  {n:"Networks",d:"TCP/IP, IP addressing, routing, OSI model",l:0,g:"sec"},
  {n:"Linux (Ubuntu)",d:"Terminal, permissions, shell configuration, package management",l:2,g:"sec"},
  {n:"React.js",d:"JavaScript, HTML5, CSS3",l:2,g:"dev"},
  {n:"React Native",d:"Mobile app frontends",l:2,g:"dev"},
  {n:"Python",d:"Programming",l:1,g:"dev"},
  {n:"C",d:"Programming",l:1,g:"dev"},
  {n:"MySQL",d:"Databases",l:1,g:"dev"},
  {n:"Data with Python",d:"Pandas, analysis, visualization, Streamlit",l:-1,g:"ai"},
  {n:"PyTorch",d:"Transfer learning with a pretrained VGG16",l:-1,g:"ai"},
  {n:"Computer vision",d:"Satellite and land-use image classification",l:-1,g:"ai"},
  {n:"Explainable AI",d:"Grad-CAM, SHAP, LIME",l:-1,g:"ai"},
  {n:"Jupyter & Google Colab",d:"Notebooks for experiments",l:-1,g:"ai"},
  {n:"Figma",d:"Mockups and prototypes",l:2,g:"des"},
  {n:"Git & GitHub",d:"Version control",l:2,g:"des"},
  {n:"Jira & GanttProject",d:"Project planning and tracking",l:2,g:"des"}
];
const grid = document.getElementById("skills-grid");
const levelHTML = s => s.l < 0
  ? `<div class="lvl plain"><em>Hands-on</em></div>`
  : `<div class="lvl" role="img" aria-label="Level: ${LEVELS[s.l]}">${[0,1,2,3,4].map(i=>`<i class="${i<=s.l?"on":""}"></i>`).join("")}<em>${LEVELS[s.l]}</em></div>`;
grid.innerHTML = SKILLS.map(s => `
  <div class="skill" data-g="${s.g}">
    <strong>${s.n}</strong><p>${s.d}</p>
    ${levelHTML(s)}
  </div>`).join("");

document.getElementById("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if(!b) return;
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-pressed", t === b));
  grid.querySelectorAll(".skill").forEach(c => c.hidden = b.dataset.f !== "all" && c.dataset.g !== b.dataset.f);
});

/* ---------- Project details ---------- */
document.querySelectorAll(".project button").forEach(btn => {
  btn.addEventListener("click", () => {
    const box = document.getElementById(btn.getAttribute("aria-controls"));
    const open = box.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.textContent = open ? "Hide details" : "Show details";
  });
});

/* ---------- Hero: name decodes from scrambled characters ---------- */
(function(){
  const el = document.getElementById("decode");
  const target = "Ranyme Kellakh";
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const pool = "abcdefghijklmnopqrstuvwxyz0123456789#%&@$*+=?";
  const rnd = () => pool[Math.floor(Math.random()*pool.length)];
  let frame = 0;
  const total = target.length * 3 + 12;
  function render(){
    let out = "";
    for (let i = 0; i < target.length; i++){
      const done = frame > i*3 + 10;
      const ch = target[i];
      out += ch === " " ? " " : done ? ch : `<span class="lock">${rnd()}</span>`;
    }
    el.innerHTML = out;
    if (++frame <= total) setTimeout(render, 40);
    else el.textContent = target;
  }
  render();
})();

/* ---------- Copy email ---------- */
document.getElementById("copy").addEventListener("click", async e => {
  const btn = e.currentTarget;
  try { await navigator.clipboard.writeText("ar.kellakh@ensta.edu.dz"); btn.textContent = "Copied"; }
  catch { btn.textContent = "ar.kellakh@ensta.edu.dz"; }
  setTimeout(() => btn.textContent = "Copy address", 2000);
});

/* ---------- Active nav link + year ---------- */
const links = [...document.querySelectorAll("nav ul a")];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id));
  });
}, {rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section").forEach(s => io.observe(s));
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Theme toggle ---------- */
document.getElementById("theme").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---------- Hero: rotating "right now I'm into" ---------- */
(function(){
  const el = document.getElementById("rot");
  const items = ["explaining AI models (XAI)","satellite images and PyTorch","prototyping in Figma","reusable React components","reading security news","figuring out generative AI","building mobile apps with React Native"];
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0;
  setInterval(() => { i = (i + 1) % items.length; el.textContent = items[i]; }, 2600);
})();

/* ---------- Playground: Caesar cipher ---------- */
(function(){
  const input = document.getElementById("c-in"), range = document.getElementById("c-shift");
  const val = document.getElementById("c-val"), out = document.getElementById("c-out");
  const btn = document.getElementById("c-brute"), list = document.getElementById("c-list");
  const shift = (text, n) => text.replace(/[a-z]/gi, ch => {
    const base = ch <= "Z" ? 65 : 97;
    return String.fromCharCode((ch.charCodeAt(0) - base + n) % 26 + base);
  });
  function update(){
    val.textContent = range.value;
    out.textContent = shift(input.value, +range.value) || " ";
    if (!list.hidden) fillList();
  }
  function fillList(){
    const encrypted = shift(input.value, +range.value);
    list.innerHTML = Array.from({length:25}, (_, k) =>
      `<li><span>${k+1}</span>${shift(encrypted, 26 - (k+1)).replace(/</g,"&lt;")}</li>`).join("");
  }
  btn.addEventListener("click", () => {
    list.hidden = !list.hidden;
    btn.textContent = list.hidden ? "Show all 25 possible shifts" : "Hide the shifts";
    if (!list.hidden) fillList();
  });
  input.addEventListener("input", update);
  range.addEventListener("input", update);
  update();
})();

/* ---------- Mobile menu ---------- */
(function(){
  const btn = document.getElementById("menu");
  const nav = document.getElementById("nav-links");
  function setOpen(open){
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.firstElementChild.textContent = open ? "✕" : "☰";
  }
  btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  matchMedia("(min-width: 861px)").addEventListener("change", e => { if (e.matches) setOpen(false); });
})();

/* ---------- Smooth theme change ---------- */
document.getElementById("theme").addEventListener("click", () => {
  const root = document.documentElement;
  root.classList.add("theme-anim");
  setTimeout(() => root.classList.remove("theme-anim"), 600);
});

/* ---------- Scroll progress, header shadow, back-to-top ---------- */
(function(){
  const bar = document.getElementById("progress");
  const head = document.querySelector("header");
  const top = document.getElementById("totop");
  let ticking = false;
  function onScroll(){
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    head.classList.toggle("scrolled", scrollY > 10);
    top.classList.toggle("show", scrollY > 600);
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
  onScroll();
})();

/* ---------- Reveal elements as they scroll into view ---------- */
(function(){
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const sel = "section .wrap > h2, .intro, .about > *, .skill, .project, .timeline li, .exp, .lang, .interests li, .cipher, .contact";
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const idx = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", Math.min(idx, 8) * 70 + "ms");
      el.classList.add("in");
      io.unobserve(el);
      setTimeout(() => el.style.removeProperty("--d"), 1400);
    });
  }, {threshold:.12, rootMargin:"0px 0px -6% 0px"});
  document.querySelectorAll(sel).forEach(el => { el.classList.add("reveal"); io.observe(el); });
})();

/* ---------- Background: drifting network that reacts to the cursor ---------- */
(function(){
  const cv = document.getElementById("bg");
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mouse = {x:-999, y:-999};
  let w, h, dpr, nodes = [], rgb = "39,72,240";

  function readColor(){
    const c = getComputedStyle(document.documentElement).getPropertyValue("--signal").trim();
    if (/^#[0-9a-f]{6}$/i.test(c)){ const n = parseInt(c.slice(1), 16); rgb = [(n>>16)&255, (n>>8)&255, n&255].join(","); }
  }
  function resize(){
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(24, Math.min(70, Math.round(w * h / 22000)));
    nodes = Array.from({length:count}, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
    }));
  }
  function frame(){
    ctx.clearRect(0, 0, w, h);
    for (const p of nodes){
      if (!reduce){
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    }
    for (let i = 0; i < nodes.length; i++){
      const a = nodes[i];
      ctx.fillStyle = `rgba(${rgb},.45)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, 1.7, 0, 6.2832); ctx.fill();
      for (let k = i + 1; k < nodes.length; k++){
        const b = nodes[k], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130){
          ctx.strokeStyle = `rgba(${rgb},${(1 - d/130) * .22})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 170){
        ctx.strokeStyle = `rgba(${rgb},${(1 - dm/170) * .5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    if (!reduce) requestAnimationFrame(frame);
  }
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, {passive:true});
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); if (reduce) frame(); }, 150); });
  new MutationObserver(() => { readColor(); if (reduce) frame(); }).observe(document.documentElement, {attributes:true, attributeFilter:["data-theme"]});
  readColor(); resize(); frame();
})();
