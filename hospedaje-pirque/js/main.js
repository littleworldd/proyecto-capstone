// ====== CONFIGURACIÓN (editar aquí) ======
const WHATSAPP = "56932755654"; // número del hospedaje sin + ni espacios
const CABINS = [ // DATOS DE EJEMPLO: reemplazar por los reales
  {id:"c1", es:"Cabaña Familiar", en:"Family Cabin", pt:"Cabana Familiar", icon:"🏡", cap:6, price:65000},
  {id:"c2", es:"Cabaña para Parejas", en:"Couples Cabin", pt:"Cabana para Casais", icon:"🌿", cap:2, price:48000},
  {id:"c3", es:"Habitación del Jardín", en:"Garden Room", pt:"Quarto do Jardim", icon:"🌻", cap:3, price:38000}
];
const REVIEWS = [ // RESEÑAS DE EJEMPLO: reemplazar por reales
  {n:"Camila R.", cc:"CL", s:5, es:"Un lugar para desconectarse de verdad. Nos sentimos como en casa.", en:"A place to truly disconnect. We felt right at home.", pt:"Um lugar para se desconectar de verdade. Nos sentimos em casa."},
  {n:"Daniel K.", cc:"CA", s:5, es:"La capacitación sobre la cultura chilena fue lo mejor del viaje.", en:"The Chilean culture workshop was the best part of our trip.", pt:"A capacitação sobre a cultura chilena foi o melhor da viagem."},
  {n:"Sofía M.", cc:"AR", s:5, es:"Desayuno rico, calma total y cerca del centro.", en:"Great breakfast, total calm, and close to downtown.", pt:"Café da manhã delicioso, calma total e perto do centro."}
];
// ====== TEXTOS ======
const T = {
es:{nav1:"Alojamientos",nav2:"Experiencia",nav3:"Talleres",nav4:"Reseñas",
 h1:"Descansa en el campo, a minutos del centro",sub:"Un rincón de paz en Pirque donde te atendemos como en casa. Wifi incluido, por si lo necesitas.",
 fin:"Llegada",fout:"Salida",fg:"Huéspedes",check:"Ver alojamientos",incl:"Desayuno incluido. Agrega:",lunch:"Almuerzo",dinner:"Cena",
 cabT:"Elige dónde descansar",cabS:"Todos incluyen desayuno. Almuerzo y cena se agregan con costo adicional.",
 book:"Reservar por WhatsApp",night:"por noche",upto:"Hasta {n} personas",
 expT:"Pensado para tu descanso",
 feats:[["🌳","Naturaleza y calma","Relajación natural, lejos del ruido y cerca de todo."],["📶","Wifi disponible","Desconecta de lo habitual sin quedar incomunicado."],["🥐","Desayuno incluido","Siempre disponible para ti. Almuerzo y cena, con costo adicional."],["🤝","Como en casa","Atendemos tus necesidades con calidez y atención personal."]],
 talT:"Talleres para aprender",talS:"Actividades abiertas a todos los huéspedes.",
 talls:[["Cultura y costumbres de Chile","Capacitación opcional para huéspedes extranjeros."],["Huerta y plantas","Aprende a cultivar y usar plantas de la zona."],["Cocina tradicional","Prepara recetas chilenas junto a nosotros."]],
 nearT:"Todo lo que necesitas cerca",near:["🏦 Bancos","🏧 Cajeros automáticos","🛒 Supermercados","🏥 Cesfam","💊 Farmacias","🍽️ Restaurantes"],
 mapT:"Mapa del recinto",mapS:"Muy pronto podrás recorrer todo el recinto aquí.",
 revT:"Lo que dicen nuestros huéspedes",rvForm:"Deja tu reseña",rvCheck:"Revisa tu reseña",rvCheckS:"Así se verá publicada. Fíjate que todo esté bien escrito.",rvEdit:"Volver a editar",rvPost:"Publicar",rvWait:"Podrás publicar otra reseña en {t}.",rvName:"Tu nombre",rvCountry:"País",rvPick:"Elige un país",rvStars:"Calificación",rvText:"Tu opinión",rvSend:"Revisar reseña",rvThanks:"¡Gracias! Tu reseña ya está publicada.",foot:"Hospedaje Rural Pirque, Región Metropolitana, Chile",wa:"Escríbenos por WhatsApp",maps:"Ver en Google Maps",
 need:"Indica fechas de llegada y salida válidas para reservar.",
 msg:"Hola, quiero reservar en Hospedaje Rural Pirque.\nAlojamiento: {c}\nLlegada: {i}\nSalida: {o}\nHuéspedes: {g}\nAlmuerzo: {l}\nCena: {d}",yes:"Sí",no:"No"},
en:{nav1:"Stays",nav2:"Experience",nav3:"Workshops",nav4:"Reviews",
 h1:"Rest in the countryside, minutes from downtown",sub:"A peaceful corner of Pirque where we treat you like family. Wifi included, in case you need it.",
 fin:"Check-in",fout:"Check-out",fg:"Guests",check:"See stays",incl:"Breakfast included. Add:",lunch:"Lunch",dinner:"Dinner",
 cabT:"Choose where to rest",cabS:"All stays include breakfast. Lunch and dinner are available for an extra fee.",
 book:"Book via WhatsApp",night:"per night",upto:"Up to {n} guests",
 expT:"Designed for your rest",
 feats:[["🌳","Nature and calm","Natural relaxation, away from the noise and close to everything."],["📶","Wifi available","Unplug from your routine without losing touch."],["🥐","Breakfast included","Always ready for you. Lunch and dinner for an extra fee."],["🤝","Feel at home","We care for your needs with warmth and personal attention."]],
 talT:"Workshops to learn",talS:"Activities open to all guests.",
 talls:[["Chilean culture and customs","Optional training for international guests."],["Garden and plants","Learn to grow and use local plants."],["Traditional cooking","Cook Chilean recipes with us."]],
 nearT:"Everything you need nearby",near:["🏦 Banks","🏧 ATMs","🛒 Supermarkets","🏥 Health center","💊 Pharmacies","🍽️ Restaurants"],
 mapT:"Property map",mapS:"Soon you will be able to explore the whole property here.",
 revT:"What our guests say",rvForm:"Leave a review",rvCheck:"Check your review",rvCheckS:"This is how it will look once posted. Make sure everything is written correctly.",rvEdit:"Back to editing",rvPost:"Post",rvWait:"You can post another review in {t}.",rvName:"Your name",rvCountry:"Country",rvPick:"Select a country",rvStars:"Rating",rvText:"Your review",rvSend:"Review and post",rvThanks:"Thank you! Your review has been posted.",foot:"Hospedaje Rural Pirque, Metropolitan Region, Chile",wa:"Message us on WhatsApp",maps:"View on Google Maps",
 need:"Enter valid check-in and check-out dates to book.",
 msg:"Hello, I would like to book at Hospedaje Rural Pirque.\nStay: {c}\nCheck-in: {i}\nCheck-out: {o}\nGuests: {g}\nLunch: {l}\nDinner: {d}",yes:"Yes",no:"No"},
pt:{nav1:"Hospedagens",nav2:"Experiência",nav3:"Oficinas",nav4:"Avaliações",
 h1:"Descanse no campo, a minutos do centro",sub:"Um cantinho de paz em Pirque onde recebemos você como em casa. Wi-Fi incluído, caso precise.",
 fin:"Chegada",fout:"Saída",fg:"Hóspedes",check:"Ver hospedagens",incl:"Café da manhã incluído. Adicione:",lunch:"Almoço",dinner:"Jantar",
 cabT:"Escolha onde descansar",cabS:"Todas incluem café da manhã. Almoço e jantar têm custo adicional.",
 book:"Reservar pelo WhatsApp",night:"por noite",upto:"Até {n} pessoas",
 expT:"Pensado para o seu descanso",
 feats:[["🌳","Natureza e calma","Relaxamento natural, longe do barulho e perto de tudo."],["📶","Wi-Fi disponível","Desconecte da rotina sem ficar sem contato."],["🥐","Café da manhã incluído","Sempre disponível para você. Almoço e jantar com custo adicional."],["🤝","Como em casa","Cuidamos das suas necessidades com carinho e atenção pessoal."]],
 talT:"Oficinas para aprender",talS:"Atividades abertas a todos os hóspedes.",
 talls:[["Cultura e costumes do Chile","Capacitação opcional para hóspedes estrangeiros."],["Horta e plantas","Aprenda a cultivar e usar plantas da região."],["Cozinha tradicional","Prepare receitas chilenas com a gente."]],
 nearT:"Tudo o que você precisa por perto",near:["🏦 Bancos","🏧 Caixas eletrônicos","🛒 Supermercados","🏥 Posto de saúde","💊 Farmácias","🍽️ Restaurantes"],
 mapT:"Mapa do local",mapS:"Em breve você poderá conhecer todo o local por aqui.",
 revT:"O que dizem nossos hóspedes",rvForm:"Deixe sua avaliação",rvCheck:"Revise sua avaliação",rvCheckS:"Assim ela ficará publicada. Confira se está tudo bem escrito.",rvEdit:"Voltar a editar",rvPost:"Publicar",rvWait:"Você poderá publicar outra avaliação em {t}.",rvName:"Seu nome",rvCountry:"País",rvPick:"Escolha um país",rvStars:"Nota",rvText:"Sua opinião",rvSend:"Revisar avaliação",rvThanks:"Obrigado! Sua avaliação foi publicada.",foot:"Hospedaje Rural Pirque, Região Metropolitana, Chile",wa:"Fale conosco pelo WhatsApp",maps:"Ver no Google Maps",
 need:"Informe datas de chegada e saída válidas para reservar.",
 msg:"Olá, quero reservar no Hospedaje Rural Pirque.\nHospedagem: {c}\nChegada: {i}\nSaída: {o}\nHóspedes: {g}\nAlmoço: {l}\nJantar: {d}",yes:"Sim",no:"Não"}
};
// ====== LÓGICA ======
let lang = "es";
const $ = s => document.querySelector(s), money = n => "$" + n.toLocaleString("es-CL");
const CODES = "AF AL DE AD AO AG SA DZ AR AM AU AT AZ BS BH BD BB BE BZ BJ BY BO BA BW BR BN BG BF BI BT CV KH CM CA QA TD CL CN CY CO KM CG CD KP KR CI CR HR CU DK DJ DM EC EG SV AE ER SK SI ES US EE SZ ET RU FJ PH FI FR GA GM GE GH GD GR GT GN GQ GW GY HT HN HU IN ID IQ IR IE IS MH SB IL IT JM JP JO KZ KE KG KI KW LA LS LV LB LR LY LI LT LU MK MG MY MW MV ML MT MA MU MR MX FM MD MC MN ME MZ MM NA NR NP NI NE NG NO NZ OM NL PK PW PA PG PY PE PL PT GB CF CZ DO RW RO WS KN SM VC LC ST SN RS SC SL SG SY SO LK ZA SD SS SE CH SR TH TZ TJ TL TG TO TT TN TM TR TV UA UG UY UZ VU VA VE VN YE ZM ZW PS TW".split(" ");
const flag = cc => `<img class="flag" src="https://flagcdn.com/w80/${cc.toLowerCase()}.png" alt="${cc}" loading="lazy">`;
const esc = s => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const loadRev = () => { try { return JSON.parse(localStorage.getItem("pirque_reviews") || "[]"); } catch(e) { return []; } };
const saveRev = a => { try { localStorage.setItem("pirque_reviews", JSON.stringify(a)); } catch(e) {} };
const revCard = r => `<article class="card rev"><div class="body"><div class="who">${flag(r.cc)}<div><b>${esc(r.n)}</b><div class="stars" aria-label="${r.s}/5">${"★".repeat(r.s)}${"☆".repeat(5-r.s)}</div></div></div><p>${esc(r[lang] || r.t)}</p></div></article>`;
const fill = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k]);

function render(){
  const t = T[lang]; document.documentElement.lang = lang === "es" ? "es-419" : lang;
  $("#langSel").value = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  $("#cabins").innerHTML = CABINS.map(c => `<article class="card"><div class="pic" aria-hidden="true">${c.icon}</div><div class="body"><h3>${c[lang]}</h3><p>${fill(t.upto,{n:c.cap})}</p><p class="price">${money(c.price)} <small>${t.night}</small></p><button class="go" data-id="${c.id}">${t.book}</button></div></article>`).join("");
  $("#feats").innerHTML = t.feats.map(f => `<div class="feat"><span>${f[0]}</span><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("");
  $("#talls").innerHTML = t.talls.map((x, i) => `<article class="card"><div class="pic" aria-hidden="true">${["🇨🇱","🌱","🍲"][i]}</div><div class="body"><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("");
  $("#near").innerHTML = t.near.map(x => `<li>${x}</li>`).join("");
  $("#revs").innerHTML = [...loadRev().reverse(), ...REVIEWS].map(revCard).join("");
  const dn = new Intl.DisplayNames([lang === "es" ? "es-419" : lang], {type:"region"}), cur = $("#rCountry").value;
  $("#rCountry").innerHTML = `<option value="">${t.rvPick}</option>` + CODES.map(c => [c, dn.of(c)]).sort((a, b) => a[1].localeCompare(b[1], lang)).map(x => `<option value="${x[0]}">${x[1]}</option>`).join("");
  $("#rCountry").value = cur;
  tick();
}
function book(id){
  const t = T[lang], i = $("#dIn").value, o = $("#dOut").value;
  if(!i || !o || o <= i){ alert(t.need); $("#dIn").focus(); return; }
  const c = CABINS.find(x => x.id === id);
  const text = fill(t.msg, {c:c[lang], i, o, g:$("#guests").value, l:$("#xl").checked?t.yes:t.no, d:$("#xd").checked?t.yes:t.no});
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
}
$("#langSel").onchange = e => { lang = e.target.value; render(); };
$("#goBtn").onclick = () => $("#cabanas").scrollIntoView();
$("#cabins").onclick = e => { const b = e.target.closest("button[data-id]"); if(b) book(b.dataset.id); };
// ---- Reseñas: espera entre reseñas y confirmación ----
const WAIT = 5 * 60 * 1000; // 5 minutos entre reseñas (editar aquí)
let lastMem = 0, timer = null, thanks = false, pending = null;
const lastT = () => { try { return Math.max(lastMem, +localStorage.getItem("pirque_last") || 0); } catch(e) { return lastMem; } };
const left = () => Math.max(0, lastT() + WAIT - Date.now());
const mmss = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
function tick(){
  const l = left(), t = T[lang];
  $("#rSend").disabled = l > 0;
  if(l > 0) $("#rMsg").textContent = (thanks ? t.rvThanks + " " : "") + fill(t.rvWait, {t:mmss(l)});
  else if(timer){ clearInterval(timer); timer = null; thanks = false; $("#rMsg").textContent = ""; }
}
function startTimer(){ tick(); if(!timer && left() > 0) timer = setInterval(tick, 1000); }
function closeModal(){ $("#modal").hidden = true; document.body.style.overflow = ""; pending = null; }
$("#rform").onsubmit = e => {
  e.preventDefault();
  if(left() > 0){ tick(); return; }
  pending = {n:$("#rName").value.trim(), cc:$("#rCountry").value, s:+e.target.rate.value, t:$("#rText").value.trim()};
  $("#mPrev").innerHTML = revCard(pending);
  $("#modal").hidden = false; document.body.style.overflow = "hidden"; $("#mOk").focus();
};
$("#mEdit").onclick = closeModal;
$("#modal").onclick = e => { if(e.target.id === "modal") closeModal(); };
document.onkeydown = e => { if(e.key === "Escape" && !$("#modal").hidden) closeModal(); };
$("#mOk").onclick = () => {
  if(!pending || left() > 0) return;
  const a = loadRev(); a.push(pending); saveRev(a);
  lastMem = Date.now(); try { localStorage.setItem("pirque_last", lastMem); } catch(e) {}
  closeModal(); $("#rform").reset(); thanks = true; render(); startTimer();
};
$("#waBtn").href = `https://wa.me/${WHATSAPP}`;
const today = new Date().toISOString().slice(0,10); $("#dIn").min = $("#dOut").min = today;
const nl = navigator.language.slice(0,2); lang = nl === "es" ? "es" : nl === "pt" ? "pt" : "en";
render();
startTimer();
