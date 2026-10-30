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
es:{nav1:"Alojamientos",nav2:"Experiencia",nav3:"Talleres",nav4:"Reseñas",nav5:"Cerca de ti",
 h1:"Descansa en el campo, a minutos del centro",sub:"Un rincón de paz en Pirque donde te atendemos como en casa. Wifi incluido, por si lo necesitas.",
 fin:"Llegada",fout:"Salida",fg:"Huéspedes",check:"Ver alojamientos",incl:"Desayuno incluido. Agrega:",lunch:"Almuerzo",dinner:"Cena",
 cabT:"Elige dónde descansar",cabS:"Todos incluyen desayuno. Almuerzo y cena se agregan con costo adicional.",
 book:"Reservar por WhatsApp",night:"por noche",upto:"Hasta {n} personas",
 expT:"Pensado para tu descanso",
 feats:[["nature","Naturaleza y calma","Relajación natural, lejos del ruido y cerca de todo."],["wifi","Wifi disponible","Desconecta de lo habitual sin quedar incomunicado."],["breakfast","Desayuno incluido","Siempre disponible para ti. Almuerzo y cena, con costo adicional."],["home","Como en casa","Atendemos tus necesidades con calidez y atención personal."]],
 talT:"Talleres para aprender",talS:"Actividades abiertas a todos los huéspedes.",
 talls:[["Cultura y costumbres de Chile","Capacitación opcional para huéspedes extranjeros."],["Huerta y plantas","Aprende a cultivar y usar plantas de la zona."],["Cocina tradicional","Prepara recetas chilenas junto a nosotros."]],
 nearT:"Todo lo que necesitas cerca",near:["Bancos","Cajeros automáticos","Supermercados","Cesfam","Farmacias","Restaurantes"],
 mapT:"Dónde encontrarnos",mapS:"Estamos en Pirque, Región Metropolitana. Así llegas a Hospedaje Rural Pirque.",
 revT:"Lo que dicen nuestros huéspedes",rvForm:"Deja tu reseña",rvCheck:"Revisa tu reseña",rvCheckS:"Así se verá publicada. Fíjate que todo esté bien escrito.",rvEdit:"Volver a editar",rvPost:"Publicar",rvWait:"Podrás publicar otra reseña en {t}.",rvName:"Tu nombre",rvCountry:"País",rvPick:"Elige un país",rvStars:"Calificación",rvText:"Tu opinión",rvSend:"Revisar reseña",rvThanks:"¡Gracias! Tu reseña ya está publicada.",foot:"Hospedaje Rural Pirque, Región Metropolitana, Chile",wa:"Escríbenos por WhatsApp",maps:"Ver en Google Maps",
 need:"Indica fechas de llegada y salida válidas para reservar.",
 msg:"Hola, quiero reservar en Hospedaje Rural Pirque.\nAlojamiento: {c}\nLlegada: {i}\nSalida: {o}\nHuéspedes: {g}\nAlmuerzo: {l}\nCena: {d}",yes:"Sí",no:"No",photo:"Foto",chT:"Hospedaje Rural Pirque",chSub:"Te respondemos por WhatsApp",chHi:"¡Hola! 👋 ¿Tienes alguna duda? Escríbela aquí y te responderemos por WhatsApp.",chPh:"Escribe tu duda…",chSend:"Enviar",chOpen:"Abrir chat de WhatsApp",chClose:"Cerrar",navBook:"Reservar"},
en:{nav1:"Stays",nav2:"Experience",nav3:"Workshops",nav4:"Reviews",nav5:"Nearby",
 h1:"Rest in the countryside, minutes from downtown",sub:"A peaceful corner of Pirque where we treat you like family. Wifi included, in case you need it.",
 fin:"Check-in",fout:"Check-out",fg:"Guests",check:"See stays",incl:"Breakfast included. Add:",lunch:"Lunch",dinner:"Dinner",
 cabT:"Choose where to rest",cabS:"All stays include breakfast. Lunch and dinner are available for an extra fee.",
 book:"Book via WhatsApp",night:"per night",upto:"Up to {n} guests",
 expT:"Designed for your rest",
 feats:[["nature","Nature and calm","Natural relaxation, away from the noise and close to everything."],["wifi","Wifi available","Unplug from your routine without losing touch."],["breakfast","Breakfast included","Always ready for you. Lunch and dinner for an extra fee."],["home","Feel at home","We care for your needs with warmth and personal attention."]],
 talT:"Workshops to learn",talS:"Activities open to all guests.",
 talls:[["Chilean culture and customs","Optional training for international guests."],["Garden and plants","Learn to grow and use local plants."],["Traditional cooking","Cook Chilean recipes with us."]],
 nearT:"Everything you need nearby",near:["Banks","ATMs","Supermarkets","Health center","Pharmacies","Restaurants"],
 mapT:"Where to find us",mapS:"We are in Pirque, Metropolitan Region. This is how to reach Hospedaje Rural Pirque.",
 revT:"What our guests say",rvForm:"Leave a review",rvCheck:"Check your review",rvCheckS:"This is how it will look once posted. Make sure everything is written correctly.",rvEdit:"Back to editing",rvPost:"Post",rvWait:"You can post another review in {t}.",rvName:"Your name",rvCountry:"Country",rvPick:"Select a country",rvStars:"Rating",rvText:"Your review",rvSend:"Review and post",rvThanks:"Thank you! Your review has been posted.",foot:"Hospedaje Rural Pirque, Metropolitan Region, Chile",wa:"Message us on WhatsApp",maps:"View on Google Maps",
 need:"Enter valid check-in and check-out dates to book.",
 msg:"Hello, I would like to book at Hospedaje Rural Pirque.\nStay: {c}\nCheck-in: {i}\nCheck-out: {o}\nGuests: {g}\nLunch: {l}\nDinner: {d}",yes:"Yes",no:"No",photo:"Photo",chT:"Hospedaje Rural Pirque",chSub:"We reply on WhatsApp",chHi:"Hi! 👋 Do you have any questions? Write them here and we will reply on WhatsApp.",chPh:"Type your question…",chSend:"Send",chOpen:"Open WhatsApp chat",chClose:"Close",navBook:"Book now"},
pt:{nav1:"Hospedagens",nav2:"Experiência",nav3:"Oficinas",nav4:"Avaliações",nav5:"Por perto",
 h1:"Descanse no campo, a minutos do centro",sub:"Um cantinho de paz em Pirque onde recebemos você como em casa. Wi-Fi incluído, caso precise.",
 fin:"Chegada",fout:"Saída",fg:"Hóspedes",check:"Ver hospedagens",incl:"Café da manhã incluído. Adicione:",lunch:"Almoço",dinner:"Jantar",
 cabT:"Escolha onde descansar",cabS:"Todas incluem café da manhã. Almoço e jantar têm custo adicional.",
 book:"Reservar pelo WhatsApp",night:"por noite",upto:"Até {n} pessoas",
 expT:"Pensado para o seu descanso",
 feats:[["nature","Natureza e calma","Relaxamento natural, longe do barulho e perto de tudo."],["wifi","Wi-Fi disponível","Desconecte da rotina sem ficar sem contato."],["breakfast","Café da manhã incluído","Sempre disponível para você. Almoço e jantar com custo adicional."],["home","Como em casa","Cuidamos das suas necessidades com carinho e atenção pessoal."]],
 talT:"Oficinas para aprender",talS:"Atividades abertas a todos os hóspedes.",
 talls:[["Cultura e costumes do Chile","Capacitação opcional para hóspedes estrangeiros."],["Horta e plantas","Aprenda a cultivar e usar plantas da região."],["Cozinha tradicional","Prepare receitas chilenas com a gente."]],
 nearT:"Tudo o que você precisa por perto",near:["Bancos","Caixas eletrônicos","Supermercados","Posto de saúde","Farmácias","Restaurantes"],
 mapT:"Onde nos encontrar",mapS:"Estamos em Pirque, Região Metropolitana. Veja como chegar ao Hospedaje Rural Pirque.",
 revT:"O que dizem nossos hóspedes",rvForm:"Deixe sua avaliação",rvCheck:"Revise sua avaliação",rvCheckS:"Assim ela ficará publicada. Confira se está tudo bem escrito.",rvEdit:"Voltar a editar",rvPost:"Publicar",rvWait:"Você poderá publicar outra avaliação em {t}.",rvName:"Seu nome",rvCountry:"País",rvPick:"Escolha um país",rvStars:"Nota",rvText:"Sua opinião",rvSend:"Revisar avaliação",rvThanks:"Obrigado! Sua avaliação foi publicada.",foot:"Hospedaje Rural Pirque, Região Metropolitana, Chile",wa:"Fale conosco pelo WhatsApp",maps:"Ver no Google Maps",
 need:"Informe datas de chegada e saída válidas para reservar.",
 msg:"Olá, quero reservar no Hospedaje Rural Pirque.\nHospedagem: {c}\nChegada: {i}\nSaída: {o}\nHóspedes: {g}\nAlmoço: {l}\nJantar: {d}",yes:"Sim",no:"Não",photo:"Foto",chT:"Hospedaje Rural Pirque",chSub:"Respondemos pelo WhatsApp",chHi:"Olá! 👋 Tem alguma dúvida? Escreva aqui e responderemos pelo WhatsApp.",chPh:"Escreva sua dúvida…",chSend:"Enviar",chOpen:"Abrir chat do WhatsApp",chClose:"Fechar",navBook:"Reservar"}
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
// ====== ILUSTRACIONES de "Pensado para tu descanso" ======
const rays = [0,45,90,135,180,225,270,315].map(a => `<line x1="122" y1="8" x2="122" y2="13" transform="rotate(${a} 122 30)"/>`).join("");
const FV = {
nature:`<svg viewBox="0 0 160 110" preserveAspectRatio="xMidYMid slice" focusable="false"><g class="fv-cloud"><ellipse class="c-wh" cx="34" cy="22" rx="15" ry="5"/><ellipse class="c-wh" cx="45" cy="17" rx="9" ry="5"/></g><circle class="c-mu" cx="122" cy="30" r="11"/><g class="fv-rays s-mu" stroke-width="2.4" stroke-linecap="round">${rays}</g><path class="c-ta" d="M0 84 Q40 54 82 76 T160 70 V110 H0Z"/><g class="fv-tree"><rect class="c-in" x="38" y="58" width="4" height="28"/><ellipse class="c-ol" cx="40" cy="47" rx="15" ry="20"/></g><g class="fv-tree d2"><rect class="c-in" x="71" y="70" width="2.5" height="14"/><ellipse class="c-ru" cx="72" cy="66" rx="8" ry="10"/></g><g class="fv-tree d3"><rect class="c-in" x="104" y="66" width="3" height="18"/><ellipse class="c-mu" cx="105.5" cy="60" rx="10" ry="13"/></g><path class="c-ol" d="M0 94 Q50 70 100 90 T160 86 V110 H0Z"/><path class="s-in" fill="none" stroke-width="1.6" stroke-linecap="round" d="M84 30 q3 -4 6 0 q3 -4 6 0"/></svg>`,
wifi:`<svg viewBox="0 0 160 110" preserveAspectRatio="xMidYMid slice" focusable="false"><circle class="c-mu" cx="136" cy="22" r="9" opacity=".6"/><path class="c-ta" d="M0 92 Q60 78 120 90 T160 88 V110 H0Z"/><g fill="none" stroke-linecap="round" stroke-width="5"><path class="fv-arc a3 s-ta" d="M44.8 36.4 A46 46 0 0 1 115.2 36.4"/><path class="fv-arc a2 s-mu" d="M55.5 45.4 A32 32 0 0 1 104.5 45.4"/><path class="fv-arc a1 s-ru" d="M66.2 54.4 A18 18 0 0 1 93.8 54.4"/></g><g class="fv-leaf"><path class="c-ol" d="M80 95 C68 88 68 74 80 66 C92 74 92 88 80 95Z"/><path class="s-pa" fill="none" stroke-width="1.6" stroke-linecap="round" d="M80 92 V75"/></g></svg>`,
breakfast:`<svg viewBox="0 0 160 110" preserveAspectRatio="xMidYMid slice" focusable="false"><circle class="c-mu" cx="28" cy="26" r="20" opacity=".25"/><circle class="c-mu" cx="28" cy="26" r="12"/><rect class="c-ta" x="0" y="91" width="160" height="20"/><ellipse class="c-pa" cx="62" cy="89" rx="36" ry="7"/><ellipse class="s-sa" fill="none" stroke-width="1.5" cx="62" cy="89" rx="27" ry="4.5"/><path class="c-mu" d="M38 85 Q44 62 62 62 Q80 62 86 85 Q79 80 73 83 Q69 72 62 72 Q55 72 51 83 Q45 80 38 85Z"/><path class="s-ru" fill="none" stroke-width="1.5" stroke-linecap="round" opacity=".55" d="M50 66 q2 6 -1 12 M62 63 v14 M74 66 q-2 6 1 12"/><ellipse class="c-sa" cx="111" cy="91" rx="20" ry="4"/><path class="s-ru" fill="none" stroke-width="3.5" stroke-linecap="round" d="M126 70 a6 6 0 0 1 0 12"/><path class="c-ru" d="M96 66 h30 v10 a15 15 0 0 1 -30 0z"/><ellipse class="c-in" cx="111" cy="66" rx="15" ry="3" opacity=".85"/><g fill="none" stroke-width="2.4" stroke-linecap="round" class="s-ta"><path class="fv-steam" d="M104 60 q-5 -7 0 -14 t0 -14"/><path class="fv-steam s2" d="M111 60 q-5 -7 0 -14 t0 -14"/><path class="fv-steam s3" d="M118 60 q-5 -7 0 -14 t0 -14"/></g></svg>`,
home:`<svg viewBox="0 0 160 110" preserveAspectRatio="xMidYMid slice" focusable="false"><path class="c-ta" d="M0 92 Q80 80 160 92 V110 H0Z"/><rect class="c-in" x="101" y="26" width="8" height="20"/><g class="fv-smoke"><circle class="c-sa" cx="105" cy="21" r="3.5"/><circle class="c-sa" cx="108" cy="14" r="4.5"/><circle class="c-sa" cx="104" cy="6" r="5"/></g><rect class="c-pa s-sa" stroke-width="1.5" x="48" y="52" width="64" height="40" rx="2"/><polygon class="c-ru" points="38,56 80,24 122,56"/><path class="c-pa fv-heart" d="M80 50 C71 44 73 36 79 38 C80 38.6 80 39.5 80 40 C80 39.5 80 38.6 81 38 C87 36 89 44 80 50Z"/><rect class="c-mu fv-glow" x="54" y="66" width="14" height="14" rx="2"/><rect class="c-mu fv-glow" x="92" y="66" width="14" height="14" rx="2"/><path class="s-ru" fill="none" stroke-width="1.5" d="M61 66 v14 M54 73 h14 M99 66 v14 M92 73 h14"/><path class="c-in" d="M74 92 V75 a6 6 0 0 1 12 0 V92Z"/><circle class="c-mu" cx="83" cy="84" r="1.2"/><ellipse class="c-ol" cx="42" cy="91" rx="9" ry="6"/><ellipse class="c-ol" cx="118" cy="91" rx="9" ry="6"/><circle class="c-ru" cx="40" cy="87" r="2"/><circle class="c-mu" cx="120" cy="87" r="2"/></svg>`
};

// ====== LO MÁS CERCANO (datos de Google Maps; distancias aprox. en línea recta) ======
const DAYS = {
 es:{mf:"Lun–Vie",ms:"Lun–Sáb",mt:"Lun–Jue",fs:"Vie–Sáb",ss:"Sáb–Dom",su:"Dom",all:"Todos los días"},
 en:{mf:"Mon–Fri",ms:"Mon–Sat",mt:"Mon–Thu",fs:"Fri–Sat",ss:"Sat–Sun",su:"Sun",all:"Every day"},
 pt:{mf:"Seg–Sex",ms:"Seg–Sáb",mt:"Seg–Qui",fs:"Sex–Sáb",ss:"Sáb–Dom",su:"Dom",all:"Todos os dias"}
};
const NU = {
 es:{hint:"Pasa el mouse o toca una opción para ver lo más cercano al hospedaje.",foot:"Distancias aproximadas, en línea recta desde el hospedaje.",map:"Ver en Google Maps",pp:"por persona, aprox."},
 en:{hint:"Hover or tap an option to see what is closest to the lodge.",foot:"Approximate distances, in a straight line from the lodge.",map:"View on Google Maps",pp:"per person, approx."},
 pt:{hint:"Passe o mouse ou toque numa opção para ver o mais próximo da hospedagem.",foot:"Distâncias aproximadas, em linha reta desde a hospedagem.",map:"Ver no Google Maps",pp:"por pessoa, aprox."}
};
const IC = {
 bank:'<path d="M3 10l9-6 9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8"/><path d="M3 20h18"/>',
 atm:'<rect x="4" y="3" width="16" height="18" rx="2"/><rect x="7" y="6" width="10" height="5" rx="1"/><path d="M8 15h8M8 18h4"/>',
 market:'<circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/><path d="M3 4h2.5l2 11h10l2-8H7"/>',
 health:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
 pharm:'<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M9.5 9.5l5 5"/>',
 food:'<path d="M7 3v8M4.5 3v5a2.5 2.5 0 005 0V3M7 11v10"/><path d="M17 21V3c-2.5 1.5-3.5 4.5-3.5 8h3.5"/>'
};
const PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const NEAR = [ // el orden coincide con T[lang].near
 {k:"bank", map:1, pl:[
  {n:"BancoEstado · Sucursal Pirque", t:"BancoEstado", a:"Ramón Subercaseaux 230, local 1", km:0.6, ll:[-33.6342816,-70.5706375], u:"https://maps.google.com/maps?cid=12033862643633572125", h:[["mf","9:00–14:00"]]}
 ]},
 {k:"atm", map:1, pl:[
  {n:"BancoEstado · Cajero", t:"BancoEstado", a:"Ramón Subercaseaux 230, local 1", km:0.6, ll:[-33.6342816,-70.5706375], u:"https://maps.google.com/maps?cid=12033862643633572125", h:[["mf","9:00–14:00"]],
   d:{es:"Cajero dentro de la sucursal: solo funciona en horario de banco.",en:"ATM inside the branch: only available during bank hours.",pt:"Caixa eletrônico dentro da agência: só funciona no horário bancário."}},
  {n:"Shell · Cajero 24 horas", t:"Shell 24 h", a:"Av. Concha y Toro 02464", km:0.8, ll:[-33.6340692,-70.5735015], u:"https://maps.google.com/maps?cid=18147692821454598917", h:[["all","24 h"]],
   d:{es:"Cajero en la estación de servicio, disponible a toda hora.",en:"ATM at the service station, available around the clock.",pt:"Caixa eletrônico no posto de gasolina, disponível a qualquer hora."}}
 ]},
 {k:"market", map:1, pl:[
  {n:"Unimarc Pirque", t:"Unimarc", a:"Ramón Subercaseaux 230", km:0.6, ll:[-33.634158,-70.5708205], u:"https://maps.google.com/maps?cid=1960373981756143229", h:[["ms","8:30–21:00"],["su","9:00–21:00"]]}
 ]},
 {k:"health", map:1, pl:[
  {n:"Cesfam Pirque", t:"Cesfam", a:"Av. Virginia Subercaseaux 385", km:0.9, ll:[-33.6373521,-70.5760747], u:"https://maps.google.com/maps?cid=3195791751939405841",
   s:{es:"Centro de Salud Familiar Dr. José Manuel Balmaceda",en:"Family Health Center Dr. José Manuel Balmaceda",pt:"Centro de Saúde da Família Dr. José Manuel Balmaceda"},
   d:{es:"Centro de salud público de la comuna.",en:"The town's public health center.",pt:"Centro de saúde público da comuna."}}
 ]},
 {k:"pharm", map:1, pl:[
  {n:"Farmacias Salcobrand", t:"Salcobrand", a:"Av. Virginia Subercaseaux 447, local 2", km:0.9, ll:[-33.6377714,-70.5769778], u:"https://maps.google.com/maps?cid=1171692420598520001", h:[["ms","9:00–20:30"],["su","9:00–20:00"]]}
 ]},
 {k:"food", map:1, pl:[
  {n:"Paita · Restaurante peruano", t:"Paita", a:"Av. Concha y Toro 02310", km:0.9, ll:[-33.6332675,-70.5737002], u:"https://maps.google.com/maps?cid=17285374707868006070", p:"$15.000 – $40.000", h:[["mt","12:30–23:00"],["fs","12:30–00:00"],["su","12:30–18:00"]],
   d:{es:"Cocina peruana con ceviches, lomo saltado, ají de gallina y pisco sour. Ambiente tranquilo, ideal para familias y grupos. Acepta reservas.",en:"Peruvian cuisine with ceviches, lomo saltado, ají de gallina and pisco sours. Quiet setting, great for families and groups. Takes reservations.",pt:"Cozinha peruana com ceviches, lomo saltado, ají de gallina e pisco sour. Ambiente tranquilo, ótimo para famílias e grupos. Aceita reservas."}},
  {n:"Restaurant Huset", t:"Huset", a:"Ramón Subercaseaux 1651", km:1.4, ll:[-33.6295943,-70.5567412], u:"https://maps.google.com/maps?cid=15211397803941597701", p:"$20.000 – $35.000", h:[["ss","12:00–17:30"]],
   d:{es:"Cocina chilena en un entorno natural, con platos orgánicos y muchas opciones vegetarianas. Chimenea, terraza en azotea, café y cócteles. Se recomienda reservar.",en:"Chilean cooking in a natural setting, with organic dishes and plenty of vegetarian options. Fireplace, rooftop seating, coffee and cocktails. Booking recommended.",pt:"Cozinha chilena em meio à natureza, com pratos orgânicos e muitas opções vegetarianas. Lareira, terraço, café e coquetéis. Recomenda-se reservar."}},
  {n:"Lo Pirque Restaurant", t:"Lo Pirque", a:"Casas de San Vicente, lote 4", km:6.1, ll:[-33.662007,-70.627171], u:"https://maps.google.com/maps?cid=14200780179635243200", p:"$45.000 – $50.000", h:[["ss","13:00–18:00"]],
   d:{es:"Parrillada chilena al aire libre con show ecuestre en vivo, pensada para ir en familia y conocer el campo. Reserva obligatoria en su sitio web.",en:"Outdoor Chilean barbecue with a live horse show, made for families wanting a taste of the countryside. Booking required on their website.",pt:"Churrasco chileno ao ar livre com show equestre ao vivo, pensado para famílias que querem conhecer o campo. Reserva obrigatória pelo site."}}
 ]}
];
function renderNear(){
  const t = T[lang], u = NU[lang], loc = lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-CL";
  $("#nearHint").textContent = u.hint;
  $("#near").innerHTML = NEAR.map((c, i) => {
    const label = t.near[i];
    const tabs = c.pl.length > 1 ? `<div class="ptabs" role="tablist">${c.pl.map((p, j) => `<button type="button" class="ptab${j ? "" : " on"}" data-j="${j}">${esc(p.t)}</button>`).join("")}</div>` : "";
    const rows = c.pl.map((p, j) => `<div class="pl${j ? "" : " on"}" data-j="${j}">
      <div class="pn"><b>${esc(p.n)}</b><span class="pkm">${PIN}${p.km.toLocaleString(loc,{minimumFractionDigits:1})} km</span></div>
      ${p.s ? `<small class="ps">${p.s[lang]}</small>` : ""}
      <small class="pa">${esc(p.a)}</small>
      ${p.h ? `<p class="ph">${p.h.map(x => `<span>${DAYS[lang][x[0]]} <b>${x[1]}</b></span>`).join("")}</p>` : ""}
      ${p.d ? `<p class="pd">${p.d[lang]}</p>` : ""}
      ${p.p ? `<p class="pp">${p.p} <em>${u.pp}</em></p>` : ""}
      <a class="plink" href="${p.u}" target="_blank" rel="noopener">${u.map} →</a></div>`).join("");
    return `<li class="nc" data-i="${i}"><button type="button" class="chip" aria-expanded="false" aria-controls="np-${c.k}"><svg viewBox="0 0 24 24" aria-hidden="true">${IC[c.k === "food" ? "food" : c.k === "market" ? "market" : c.k === "health" ? "health" : c.k]}</svg><span>${label}</span></button>
      <div class="pop" id="np-${c.k}" role="group" aria-label="${label}">
        ${c.map ? `<div class="pmap"><iframe title="${label}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>` : ""}
        ${tabs}<div class="pdw">${rows}</div><p class="pfoot">${u.foot}</p>
      </div></li>`;
  }).join("");
  document.querySelectorAll("#near .nc").forEach(li => {
    li.onmouseenter = () => { if(!hoverOK.matches) return; clearTimeout(li._t); if(!li.classList.contains("open")){ const keep = ndim.classList.contains("on"); nearOpen(li); if(keep){ li._pin = true; li._click = true; syncNearDim(); } } };
    li.onmouseleave = () => { if(!hoverOK.matches || li._pin) return; li._t = setTimeout(() => nearShut(li), 180); };
  });
}
const hoverOK = matchMedia("(hover:hover)");
const ndim = $("#ndim");
function syncNearDim(){
  const on = [...document.querySelectorAll("#near .nc.open")].some(x => x._click);
  ndim.classList.toggle("on", on); document.body.classList.toggle("nfocus", on);
}
function nearShut(li){ li.classList.remove("open"); li._pin = false; li._click = false; li.querySelector(".chip").setAttribute("aria-expanded", "false"); syncNearDim(); }
function nearMap(li, j){
  const c = NEAR[+li.dataset.i];
  li.querySelectorAll(".pl,.ptab").forEach(el => el.classList.toggle("on", +el.dataset.j === j));
  if(!c.map) return;
  const f = li.querySelector("iframe"), p = c.pl[j], src = `https://maps.google.com/maps?q=${p.ll[0]},${p.ll[1]}&z=16&hl=${lang}&output=embed`;
  if(f.dataset.cur !== src){ f.dataset.cur = src; f.src = src; }
}
function nearOpen(li){
  document.querySelectorAll("#near .nc.open").forEach(o => { if(o !== li) nearShut(o); });
  const pop = li.querySelector(".pop"), lr = li.getBoundingClientRect(), w = pop.offsetWidth, left = lr.left + lr.width / 2 - w / 2, m = 10;
  pop.style.setProperty("--dx", (left < m ? m - left : left + w > innerWidth - m ? innerWidth - m - (left + w) : 0) + "px");
  const on = li.querySelector(".pl.on"); nearMap(li, on ? +on.dataset.j : 0);
  li.classList.add("open"); li.querySelector(".chip").setAttribute("aria-expanded", "true");
}
{
  const nearEl = $("#near");
  nearEl.addEventListener("click", e => {
    const tab = e.target.closest(".ptab"); if(tab){ nearMap(tab.closest(".nc"), +tab.dataset.j); return; }
    const b = e.target.closest(".chip"); if(!b) return;
    const li = b.closest(".nc"), open = li.classList.contains("open");
    if(open && li._click){ nearShut(li); return; }
    if(!open) nearOpen(li);
    li._pin = true; li._click = true; syncNearDim();
    const pop = li.querySelector(".pop"), lr = li.getBoundingClientRect(), need = lr.bottom + 12 + pop.offsetHeight + 16 - innerHeight;
    if(need > 0) scrollBy({top: Math.min(need, lr.top - 90), behavior: "smooth"});
  });
  nearEl.addEventListener("mouseover", e => { const tab = e.target.closest(".ptab"); if(tab && hoverOK.matches) nearMap(tab.closest(".nc"), +tab.dataset.j); });
  document.addEventListener("click", e => { if(!e.target.closest("#near .nc")) document.querySelectorAll("#near .nc.open").forEach(nearShut); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") document.querySelectorAll("#near .nc.open").forEach(nearShut); });
}

const io = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } }), {threshold:.12, rootMargin:"0px 0px -6% 0px"});
function reveal(){
  document.querySelectorAll(".sec h2,.sec .lead,.card,.feat,.chips,.map,.rform").forEach(el => {
    if(el.classList.contains("reveal")) return;
    el.style.setProperty("--d", ([...el.parentElement.children].indexOf(el) % 4) * 90 + "ms");
    el.classList.add("reveal");
    if(el.getBoundingClientRect().bottom < 0) el.classList.add("in"); else io.observe(el);
  });
}
function render(){
  let n = 0;
  const t = T[lang]; document.documentElement.lang = lang === "es" ? "es-MX" : lang;
  $("#langSel").value = lang; syncLang();
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  $("#cabins").innerHTML = CABINS.map(c => `<article class="card" data-cab="${c.id}"><div class="pic" aria-hidden="true">${t.photo} ${++n}</div><div class="body"><h3>${c[lang]}</h3><p>${fill(t.upto,{n:c.cap})}</p><p class="price">${money(c.price)} <small>${t.night}</small></p><p class="tot" aria-live="polite"></p><button class="go" data-id="${c.id}">${t.book}</button></div></article>`).join("");
  $("#feats").innerHTML = t.feats.map(f => `<div class="feat"><div class="fv fv-${f[0]}" aria-hidden="true">${FV[f[0]]}</div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join("");
  $("#talls").innerHTML = t.talls.map((x, i) => `<article class="card"><div class="pic" aria-hidden="true">${t.photo} ${++n}</div><div class="body"><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join("");
  renderNear(); bookRender();
  $("#revs").innerHTML = [...loadRev().reverse(), ...REVIEWS].map(revCard).join("");
  const dn = new Intl.DisplayNames([lang === "es" ? "es-MX" : lang], {type:"region"}), cur = $("#rCountry").value;
  $("#rCountry").innerHTML = `<option value="">${t.rvPick}</option>` + CODES.map(c => [c, dn.of(c)]).sort((a, b) => a[1].localeCompare(b[1], lang)).map(x => `<option value="${x[0]}">${x[1]}</option>`).join("");
  $("#rCountry").value = cur;
  $("#chIn").placeholder = t.chPh;
  $("#chClose").setAttribute("aria-label", t.chClose); $("#waFab").setAttribute("aria-label", t.chOpen); $("#chSend").setAttribute("aria-label", t.chSend);
  tick(); reveal();
}
function book(id){
  const t = T[lang], i = $("#dIn").value, o = $("#dOut").value;
  if(!i || !o || o <= i){ needDates(); return; }
  const c = CABINS.find(x => x.id === id);
  const text = fill(t.msg, {c:c[lang], i:fmtD(i,{weekday:"short",day:"numeric",month:"long",year:"numeric"}), o:fmtD(o,{weekday:"short",day:"numeric",month:"long",year:"numeric"}), g:$("#guests").value, l:$("#xl").checked?t.yes:t.no, d:$("#xd").checked?t.yes:t.no});
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
}
// ---- Selector de idioma (desplegable animado) ----
const lbox = $("#langBox"), lbtn = $("#langBtn"), llist = $("#langList");
function syncLang(){
  llist.querySelectorAll("button").forEach(b => {
    const on = b.dataset.v === lang;
    b.setAttribute("aria-selected", on); b.classList.toggle("on", on);
    if(on){ $("#langCur").textContent = b.querySelector("b").textContent; $("#langFlag").src = b.querySelector("img").src; }
  });
  if(typeof afterLang === "function") afterLang();
}
function langOpen(o, kb){
  lbox.classList.toggle("open", o); lbtn.setAttribute("aria-expanded", o);
  if(o && kb) llist.querySelector('[aria-selected="true"]').focus();
}
lbtn.onclick = e => langOpen(!lbox.classList.contains("open"), e.detail === 0);
// ---- Selector de idioma: se vuelve una bolita fija al bajar y vuelve a su forma original arriba ----
const lslot = $("#langSlot"), GAP = 18;
let orb = false, orbT;
function measureSlot(){ if(orb) return; lslot.style.width = lbox.offsetWidth + "px"; lslot.style.height = lbox.offsetHeight + "px"; }
function placeLang(){
  if(orb){ lbox.style.left = GAP + "px"; lbox.style.top = GAP + "px"; }
  else { const r = lslot.getBoundingClientRect(); lbox.style.left = r.left + "px"; lbox.style.top = r.top + "px"; }
}
function setOrb(o){
  if(o === orb) return;
  orb = o; clearTimeout(orbT);
  lbox.classList.add("moving"); lbox.classList.toggle("orb", o);
  if(o) langOpen(false);
  placeLang();
  orbT = setTimeout(() => { lbox.classList.remove("moving"); if(!orb){ measureSlot(); placeLang(); } }, 750);
}
function afterLang(){ requestAnimationFrame(() => { measureSlot(); placeLang(); }); }
addEventListener("scroll", () => { setOrb(scrollY > 40); placeLang(); }, {passive:true});
addEventListener("resize", afterLang);
addEventListener("load", afterLang);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(afterLang);
afterLang();
// ---- Transición al cambiar de idioma: la bandera elegida cruza la pantalla de izquierda a derecha ----
// El idioma y el scroll NO cambian hasta que la pantalla queda completamente tapada.
const wipe = document.createElement("div");
wipe.className = "lwipe"; wipe.setAttribute("aria-hidden", "true");
wipe.innerHTML = '<div class="lw"><img alt=""><span></span></div>';
document.body.appendChild(wipe);
const wp = wipe.firstChild, wImg = wipe.querySelector("img"), wTxt = wipe.querySelector("span");
["wheel", "touchmove"].forEach(ev => wipe.addEventListener(ev, e => e.preventDefault(), {passive:false}));
const reduceMotion = matchMedia("(prefers-reduced-motion:reduce)");
const loadImg = src => new Promise(res => { const i = new Image(); i.onload = i.onerror = () => res(); i.src = src; setTimeout(res, 700); });
const nextPaint = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
// Al cambiar de idioma se conserva lo que el usuario estaba viendo: se recuerda la sección que ocupa el borde superior de la pantalla y su desplazamiento.
function viewAnchor(){
  const els = [...document.querySelectorAll("main > section, footer")];
  const el = els.find(e => e.getBoundingClientRect().bottom > 1) || els[els.length - 1];
  return {el, off: el.getBoundingClientRect().top};
}
function applyLang(v){
  const a = viewAnchor();
  lang = v; render();
  window.scrollTo({top: Math.max(0, scrollY + a.el.getBoundingClientRect().top - a.off), left:0, behavior:"instant"});
}
let wiping = false;
async function switchLang(b){
  const v = b.dataset.v;
  if(wiping || v === lang) return;
  if(reduceMotion.matches){ applyLang(v); return; }
  wiping = true;
  const flag = b.querySelector("img").src.replace("/w40/", "/w320/");
  wipe.dataset.l = v; wImg.src = flag; wTxt.textContent = b.querySelector("b").textContent;
  await loadImg(flag);
  wipe.classList.add("on");
  const opt = {duration:1500, easing:"cubic-bezier(.7,0,.3,1)", fill:"forwards"};
  await wp.animate([{transform:"translateX(-100%)"}, {transform:"translateX(0)"}], opt).finished;
  applyLang(v);                       // recién ahora, con todo tapado, cambia el idioma y se vuelve al inicio
  await nextPaint();
  await new Promise(r => setTimeout(r, 750));
  await wp.animate([{transform:"translateX(0)"}, {transform:"translateX(100%)"}], opt).finished;
  wipe.classList.remove("on"); wp.getAnimations().forEach(a => a.cancel());
  wiping = false;
}
llist.addEventListener("click", e => { const b = e.target.closest("button[data-v]"); if(!b) return; langOpen(false); lbtn.focus({preventScroll:true}); switchLang(b); });
llist.addEventListener("keydown", e => {
  const bs = [...llist.querySelectorAll("button")], i = bs.indexOf(document.activeElement);
  if(e.key === "ArrowDown"){ e.preventDefault(); bs[(i + 1) % bs.length].focus(); }
  else if(e.key === "ArrowUp"){ e.preventDefault(); bs[(i - 1 + bs.length) % bs.length].focus(); }
  else if(e.key === "Escape"){ e.stopPropagation(); langOpen(false); lbtn.focus(); }
  else if(e.key === "Tab") langOpen(false);
});
document.addEventListener("click", e => { if(!e.target.closest("#langBox")) langOpen(false); });

$("#goBtn").onclick = () => { if(!$("#dIn").value || !$("#dOut").value){ needDates(); return; } $("#cabanas").scrollIntoView(); };
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
document.onkeydown = e => { if(e.key === "Escape"){ if(!$("#modal").hidden) closeModal(); else setChat(false); } };
$("#mOk").onclick = () => {
  if(!pending || left() > 0) return;
  const a = loadRev(); a.push(pending); saveRev(a);
  lastMem = Date.now(); try { localStorage.setItem("pirque_last", lastMem); } catch(e) {}
  closeModal(); $("#rform").reset(); thanks = true; render(); startTimer();
};
// ---- Minichat de WhatsApp ----
const chat = $("#chat"), dim = $("#dim"), fab = $("#waFab");
function setChat(open){
  chat.classList.toggle("open", open); dim.classList.toggle("on", open); fab.setAttribute("aria-expanded", open);
  if(open && matchMedia("(hover:hover)").matches) $("#chIn").focus({preventScroll:true});
}
function sendChat(){
  const v = $("#chIn").value.trim();
  if(!v){ $("#chIn").focus(); return; }
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(v)}`, "_blank");
  $("#chIn").value = ""; setChat(false);
}
fab.onclick = () => setChat(!chat.classList.contains("open"));
$("#chClose").onclick = () => setChat(false);
dim.onclick = () => setChat(false);
$("#chForm").onsubmit = e => { e.preventDefault(); sendChat(); };
$("#chIn").onkeydown = e => { if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); sendChat(); } };
// ---- Menú: resalta la sección que estás viendo ----
const navLinks = [...document.querySelectorAll("nav a")];
const spy = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id)); }), {rootMargin:"-35% 0px -60% 0px"});
["cabanas","experiencia","talleres","cerca","resenas"].forEach(id => spy.observe(document.getElementById(id)));
// ---- Menú: se despega de arriba al bajar ----
const mainNav = document.querySelector("nav");
const onScroll = () => mainNav.classList.toggle("float", window.scrollY > 40);
addEventListener("scroll", onScroll, {passive:true}); onScroll();
// ====== BUSCADOR: calendario de rango, huéspedes con +/− y resumen ======
const BK = {
 es:{when:"¿Cuándo vienes?",who:"¿Cuántas personas?",meals:"Comidas (opcional)",bf:"El desayuno ya está incluido",pick:"Elige tus fechas",outq:"¿salida?",pickIn:"Toca el día de llegada",pickOut:"Ahora toca el día de salida",clear:"Borrar fechas",g1:"huésped",gN:"huéspedes",n1:"noche",nN:"noches",gLess:"Menos huéspedes",gMore:"Más huéspedes",prev:"Mes anterior",next:"Mes siguiente",hint:"Elige tus fechas para ver el precio de cada alojamiento.",tot:"Total",fit:"Capacidad máxima: {n} personas"},
 en:{when:"When are you coming?",who:"How many people?",meals:"Meals (optional)",bf:"Breakfast is already included",pick:"Pick your dates",outq:"check-out?",pickIn:"Tap your check-in day",pickOut:"Now tap your check-out day",clear:"Clear dates",g1:"guest",gN:"guests",n1:"night",nN:"nights",gLess:"Fewer guests",gMore:"More guests",prev:"Previous month",next:"Next month",hint:"Pick your dates to see the price of each stay.",tot:"Total",fit:"Maximum capacity: {n} guests"},
 pt:{when:"Quando você vem?",who:"Quantas pessoas?",meals:"Refeições (opcional)",bf:"O café da manhã já está incluído",pick:"Escolha as datas",outq:"saída?",pickIn:"Toque no dia de chegada",pickOut:"Agora toque no dia de saída",clear:"Limpar datas",g1:"hóspede",gN:"hóspedes",n1:"noite",nN:"noites",gLess:"Menos hóspedes",gMore:"Mais hóspedes",prev:"Mês anterior",next:"Próximo mês",hint:"Escolha as datas para ver o preço de cada hospedagem.",tot:"Total",fit:"Capacidade máxima: {n} pessoas"}
};
const pad2 = n => String(n).padStart(2, "0");
const isoOf = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const parseD = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const locOf = () => lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-CL";
const fmtD = (s, o) => new Intl.DateTimeFormat(locOf(), o || {day:"numeric", month:"short"}).format(parseD(s));
const plural = (n, k) => n + " " + BK[lang][k + (n === 1 ? "1" : "N")];
const bk = {view:new Date()};
function bookRender(){
  const b = BK[lang];
  $("#bkWhen").textContent = b.when; $("#bkWho").textContent = b.who; $("#bkMeals").textContent = b.meals; $("#bkBf").textContent = b.bf;
  $("#gMinus").setAttribute("aria-label", b.gLess); $("#gPlus").setAttribute("aria-label", b.gMore);
  if(!$("#cal").hidden) calDraw();
  bookUpdate();
}
function bookUpdate(){
  const b = BK[lang], t = T[lang], i = $("#dIn").value, o = $("#dOut").value, g = +$("#guests").value;
  const n = i && o ? Math.round((parseD(o) - parseD(i)) / 864e5) : 0;
  $("#dVal").innerHTML = i ? `${fmtD(i)} → ${o ? fmtD(o) : `<span class="ph0">${b.outq}</span>`}${n ? ` · ${plural(n, "n")}` : ""}` : `<span class="ph0">${b.pick}</span>`;
  $("#gVal").innerHTML = `<b>${g}</b> ${g === 1 ? b.g1 : b.gN}`;
  $("#gMinus").disabled = g <= 1; $("#gPlus").disabled = g >= 12;
  const meals = [$("#xl").checked && t.lunch, $("#xd").checked && t.dinner].filter(Boolean);
  const sum = $("#sSum"); sum.classList.remove("err");
  sum.textContent = n ? [plural(n, "n"), plural(g, "g"), ...meals].join(" · ") : b.hint;
  document.querySelectorAll("#cabins .card[data-cab]").forEach(card => {
    const c = CABINS.find(x => x.id === card.dataset.cab);
    card.querySelector(".tot").innerHTML = (n ? `${b.tot} · ${plural(n, "n")}: <b>${money(c.price * n)}</b>` : "") + (g > c.cap ? `<span class="fitn">${fill(b.fit, {n:c.cap})}</span>` : "");
    card.classList.toggle("full", g > c.cap);
  });
}
function calDraw(){
  const b = BK[lang], cal = $("#cal"), i = $("#dIn").value, o = $("#dOut").value, td = isoOf(new Date());
  const two = matchMedia("(min-width:760px)").matches, v = bk.view, now = new Date(), minV = new Date(now.getFullYear(), now.getMonth(), 1);
  const wd = Array.from({length:7}, (_, k) => new Intl.DateTimeFormat(locOf(), {weekday:"narrow"}).format(new Date(2024, 0, 1 + k)));
  const month = off => {
    const d = new Date(v.getFullYear(), v.getMonth() + off, 1), first = (d.getDay() + 6) % 7, days = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    let cells = "<span></span>".repeat(first);
    for(let k = 1; k <= days; k++){
      const s = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(k)}`, cls = ["dy"];
      if(s === td) cls.push("t"); if(s === i) cls.push("s"); if(s === o) cls.push("e");
      if(i && !o && s === i) cls.push("x"); if(i && o && s > i && s < o) cls.push("r");
      cells += `<button type="button" class="${cls.join(" ")}" data-d="${s}"${s < td ? " disabled" : ""} aria-label="${fmtD(s, {weekday:"long", day:"numeric", month:"long", year:"numeric"})}" aria-pressed="${s === i || s === o}">${k}</button>`;
    }
    return `<div class="cmo"><h4>${new Intl.DateTimeFormat(locOf(), {month:"long", year:"numeric"}).format(d)}</h4><div class="cw">${wd.map(x => `<span>${x}</span>`).join("")}</div><div class="cd">${cells}</div></div>`;
  };
  cal.innerHTML = `<div class="calbar"><button type="button" class="calnav" data-nav="-1" aria-label="${b.prev}"${v <= minV ? " disabled" : ""}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><div class="calmonths">${month(0)}${two ? month(1) : ""}</div><button type="button" class="calnav" data-nav="1" aria-label="${b.next}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button></div><div class="calfoot"><span role="status">${!i || o ? b.pickIn : b.pickOut}</span>${i ? `<button type="button" data-clear>${b.clear}</button>` : ""}</div>`;
}
function calOpen(open){
  const cal = $("#cal");
  if(open && cal.hidden){ const i = $("#dIn").value, base = i ? parseD(i) : new Date(); bk.view = new Date(base.getFullYear(), base.getMonth(), 1); calDraw(); }
  cal.hidden = !open; $("#dBtn").setAttribute("aria-expanded", open);
}
function needDates(){
  const s = $("#sSum"); s.textContent = T[lang].need; s.classList.add("err");
  $("#search").scrollIntoView({behavior:"smooth", block:"center"}); calOpen(true);
}
$("#dBtn").onclick = () => calOpen($("#cal").hidden);
$("#cal").addEventListener("click", e => {
  const cal = $("#cal"), nav = e.target.closest("[data-nav]");
  if(nav){ bk.view = new Date(bk.view.getFullYear(), bk.view.getMonth() + +nav.dataset.nav, 1); calDraw(); const nb = cal.querySelector(`[data-nav="${nav.dataset.nav}"]`); if(nb && !nb.disabled) nb.focus(); return; }
  if(e.target.closest("[data-clear]")){ $("#dIn").value = ""; $("#dOut").value = ""; calDraw(); bookUpdate(); return; }
  const d = e.target.closest(".dy"); if(!d || d.disabled) return;
  const s = d.dataset.d, i = $("#dIn").value, o = $("#dOut").value;
  if(!i || o || s <= i){ $("#dIn").value = s; $("#dOut").value = ""; calDraw(); const nd = cal.querySelector(`[data-d="${s}"]`); if(nd) nd.focus(); }
  else { $("#dOut").value = s; calOpen(false); $("#dBtn").focus(); }
  bookUpdate();
});
$("#cal").addEventListener("mouseover", e => {
  const d = e.target.closest(".dy"), i = $("#dIn").value;
  if(!i || $("#dOut").value) return;
  document.querySelectorAll("#cal .dy").forEach(x => x.classList.toggle("pv", !!d && d.dataset.d > i && x.dataset.d > i && x.dataset.d <= d.dataset.d));
});
$("#cal").addEventListener("mouseleave", () => document.querySelectorAll("#cal .dy.pv").forEach(x => x.classList.remove("pv")));
document.addEventListener("click", e => { const p = e.composedPath(); if(!$("#cal").hidden && !p.includes($("#cal")) && !p.includes($("#dBtn"))) calOpen(false); });
addEventListener("keydown", e => { if(e.key === "Escape" && !$("#cal").hidden){ calOpen(false); $("#dBtn").focus(); } });
matchMedia("(min-width:760px)").addEventListener("change", () => { if(!$("#cal").hidden) calDraw(); });
$("#gMinus").onclick = () => { $("#guests").value = Math.max(1, +$("#guests").value - 1); bookUpdate(); };
$("#gPlus").onclick = () => { $("#guests").value = Math.min(12, +$("#guests").value + 1); bookUpdate(); };
$("#xl").onchange = $("#xd").onchange = bookUpdate;

// ====== Follaje lateral: imagen estática; solo se ubica debajo del encabezado ======
{
  const place = () => { const top = $(".top").offsetHeight + 22; document.querySelectorAll(".deco").forEach(e => e.style.top = top + "px"); };
  place(); addEventListener("load", place); addEventListener("resize", place);
}
// ====== Portada: el fondo no cambia al abrir el calendario (se fija la altura con el calendario cerrado) ======
{
  const hero = $(".hero");
  const pin = () => { if(!$("#cal").hidden) return; hero.style.removeProperty("--hh"); hero.style.setProperty("--hh", hero.offsetHeight + "px"); };
  new ResizeObserver(pin).observe(hero); addEventListener("load", pin); pin();
}
$("#waBtn").href = `https://wa.me/${WHATSAPP}`;
const nl = navigator.language.slice(0,2); lang = nl === "es" ? "es" : nl === "pt" ? "pt" : "en";
render();
startTimer();

// ---- Difuminado de los bordes: al bajar se difumina arriba; al subir, abajo ----
const sfT = document.createElement("div"), sfB = document.createElement("div");
sfT.className = "sfade sf-t"; sfB.className = "sfade sf-b";
[sfT, sfB].forEach(e => { e.setAttribute("aria-hidden", "true"); document.body.appendChild(e); });
let lastY = scrollY, fadeT;
addEventListener("scroll", () => {
  const y = scrollY, d = y - lastY;
  if(Math.abs(d) < 3) return;
  lastY = y;
  const maxY = document.documentElement.scrollHeight - innerHeight;
  sfT.classList.toggle("on", d > 0 && y > 60);
  sfB.classList.toggle("on", d < 0 && y < maxY - 60);
  clearTimeout(fadeT);
  fadeT = setTimeout(() => { sfT.classList.remove("on"); sfB.classList.remove("on"); }, 900);
}, {passive:true});
