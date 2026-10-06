const verifiedAt = '2026-10-06';

const sources = {
  shMuseum: 'https://www.shanghaimuseum.cn/mu/frontend/pg/index',
  westBund: 'https://wbmshanghai.com/zh-hans/exhibition',
  national: 'https://www.chnmuseum.cn/zl/zhanlanyugao/index.shtml',
  ucca: 'https://www.ucca.org.cn/en/visit/exhibitions/ucca-edge/',
  shenzhen: 'https://www.shenzhenmuseum.com/exhlist',
  loans: 'https://www.chnmuseum.cn/zp/cpjz/',
  loans2: 'https://www.chnmuseum.cn/zp/cpjz/index_1.shtml',
  westBundGov: 'https://www.westbund.com/cn/index/NEWS-CENTER/20250503.html'
};

const palettes = [
  ['#244d3b','#efbc4c','#e34c35'], ['#c94a34','#f0d66d','#2d4771'], ['#26314c','#d66f4c','#f0d8a5'],
  ['#5d2c2f','#e5b548','#6f8c7a'], ['#453b73','#f19c79','#d9d04e'], ['#1f6570','#f2cc72','#d9533f'],
  ['#121212','#e34b30','#f1e5ca'], ['#6d4a32','#efc480','#a8bcb2']
];

const exhibitions = [
  {id:'world-tree',title:'世界树之巅：美洲古代文明大展',city:'上海',venue:'上海博物馆人民广场馆',start:'2026-07-09',end:'2027-11-14',type:'文明考古',official:'预约购票',source:sources.shMuseum,desc:'中国、墨西哥、秘鲁文博机构联合呈现的美洲古代文明专题展，展陈覆盖人民广场馆一至三楼。',score:9.1,dims:[9.4,8.9,9.0],reviews:128,palette:0},
  {id:'silla-crown',title:'金冠之下：新罗文物精华展',city:'上海',venue:'上海博物馆东馆',start:'2026-09-23',end:'2027-01-18',type:'文明考古',official:'以官方预约为准',source:sources.shMuseum,desc:'以金冠、金属工艺、国际交流与佛教艺术等线索呈现新罗历史文化。',score:8.7,dims:[9.0,8.5,8.6],reviews:46,palette:1},
  {id:'ming-qing-porcelain',title:'暂得之乐：暂得楼捐赠明清瓷器展',city:'上海',venue:'上海博物馆东馆',start:'2026-06-17',end:'2027-02-22',type:'传统艺术',official:'基本陈列免预约',source:sources.shMuseum,desc:'聚焦暂得楼捐赠的明清瓷器，在中国古代陶瓷馆尾厅展出。',score:8.5,dims:[8.9,8.2,8.4],reviews:37,palette:5},
  {id:'pearls-returned',title:'珠归海上：两塗轩书画展（第二期）',city:'上海',venue:'上海博物馆东馆',start:'2026-06-26',end:'2026-10-07',type:'传统艺术',official:'以官方预约为准',source:sources.shMuseum,desc:'呈现庄万里家族捐赠的珍贵书画，展览进入最后阶段。',score:8.8,dims:[9.1,8.4,8.8],reviews:72,palette:7},
  {id:'reshape-landscape',title:'重塑景观：蓬皮杜中心典藏展（四）',city:'上海',venue:'西岸美术馆',start:'2025-04-29',end:'2026-10-18',type:'当代艺术',official:'需购票',source:sources.westBund,desc:'从1906年至今的“风景”主题切入，以近70件作品梳理现当代艺术语言的变化。',score:8.9,dims:[9.2,9.1,8.5],reviews:231,palette:4},
  {id:'worlds-calculated',title:'计算万千世界',city:'上海',venue:'西岸美术馆',start:'2026-09-24',end:'2027-02-14',type:'当代艺术',official:'需购票',source:sources.westBund,desc:'西岸美术馆与蓬皮杜中心五年展陈合作项目的特展单元。',score:8.4,dims:[8.6,8.7,8.0],reviews:58,palette:2},
  {id:'pompeii',title:'叩问永恒：庞贝的探索与发掘',city:'北京',venue:'中国国家博物馆',start:'2026-02-04',end:'2026-10-11',type:'文明考古',official:'需预约',source:sources.national,desc:'回顾庞贝自1748年首次发掘以来近三百年的考古历程。',score:9.0,dims:[9.2,8.8,9.0],reviews:315,palette:1},
  {id:'poetic-dwelling',title:'中国古代书画：诗意栖居',city:'北京',venue:'中国国家博物馆',start:'2026-09-04',end:null,type:'传统艺术',official:'需预约',source:sources.national,desc:'汇集宋元至明清书画精品，并结合玉山子、篆刻与沉浸式展陈。',score:8.8,dims:[9.2,8.4,8.7],reviews:91,palette:0},
  {id:'brazil-soul',title:'巴西魂：波尔蒂纳里艺术展',city:'北京',venue:'中国国家博物馆',start:'2026-06-10',end:'2026-10-11',type:'现代艺术',official:'需预约',source:sources.national,desc:'以巴西艺术家波尔蒂纳里的创作呈现拉丁美洲艺术视角。',score:8.3,dims:[8.6,8.1,8.2],reviews:67,palette:3},
  {id:'liaozhai',title:'心游万仞：蒲松龄与《聊斋志异》',city:'北京',venue:'中国国家博物馆',start:'2026-05-28',end:'2026-10-11',type:'文学文化',official:'需预约',source:sources.national,desc:'围绕蒲松龄与《聊斋志异》展开的文学文化专题展。',score:8.6,dims:[8.8,8.3,8.6],reviews:104,palette:4},
  {id:'carsten-two',title:'Carsten Höller：Two',city:'北京',venue:'UCCA 尤伦斯当代艺术中心',start:'2026-07-14',end:'2027-01-31',type:'当代艺术',official:'需购票',source:sources.ucca,desc:'以感官实验和场域装置构成持续变化的“怀疑实验室”。',score:8.7,dims:[8.4,9.3,8.5],reviews:176,palette:6},
  {id:'dark-surfaces',title:'杨心广：暗面',city:'北戴河',venue:'UCCA 沙丘美术馆',start:'2026-04-19',end:'2026-10-11',type:'当代艺术',official:'需购票',source:sources.ucca,desc:'在沙丘美术馆独特的地下空间中展开的艺术家个展。',score:8.5,dims:[8.3,9.2,8.1],reviews:83,palette:2},
  {id:'folk-crafts',title:'第十届深圳民间工艺精品展',city:'深圳',venue:'深圳博物馆同心路馆',start:'2026-09-23',end:'2026-10-25',type:'非遗工艺',official:'以官方预约为准',source:sources.shenzhen,desc:'集中呈现深圳民间工艺精品与当代传承实践。',score:8.2,dims:[8.4,7.9,8.3],reviews:29,palette:3},
  {id:'letters-lingnan',title:'谁寄锦书来：岭南家书专题展',city:'深圳',venue:'深圳博物馆金田路馆',start:'2026-09-23',end:'2027-02-22',type:'历史人文',official:'以官方预约为准',source:sources.shenzhen,desc:'以岭南家书为线索，连接个人记忆、家庭情感与地方历史。',score:8.6,dims:[8.9,8.1,8.7],reviews:33,palette:7},
  {id:'wuyue',title:'太平年·天下同宁：吴越国与中华文明的传承',city:'杭州',venue:'浙江省博物馆之江馆区',start:'2026-07-28',end:'2027-06-20',type:'文明考古',official:'以场馆公告为准',source:sources.loans,desc:'汇集近百家文博机构的吴越国相关文物，分期呈现吴越初兴、纳统与文化传承。',score:9.0,dims:[9.3,8.8,8.9],reviews:147,palette:1},
  {id:'cong-spectrum',title:'琮谱：良渚遗址发现九十周年特展',city:'杭州',venue:'良渚博物院',start:'2026-09-12',end:'2026-11-29',type:'文明考古',official:'以场馆公告为准',source:sources.loans,desc:'纪念良渚遗址发现九十周年，以玉琮等重要文物呈现良渚文明。',score:9.2,dims:[9.5,9.0,9.1],reviews:112,palette:0},
  {id:'heavenly-questions',title:'天问：中华文明宇宙观',city:'合肥',venue:'安徽博物院蜀山馆',start:'2026-07-01',end:'2026-10-20',type:'科技文明',official:'以场馆公告为准',source:sources.loans2,desc:'以卜骨、天球仪等文物讨论古人对天象、时间与宇宙的理解。',score:8.8,dims:[9.0,8.6,8.7],reviews:76,palette:2},
  {id:'mythical-creatures',title:'跨越山海：东西方神话中的奇幻生物',city:'重庆',venue:'重庆中国三峡博物馆',start:'2026-06-18',end:'2026-10-18',type:'文明考古',official:'以场馆公告为准',source:sources.loans2,desc:'通过东西方文物中的奇幻生物，比较不同文明的神话想象。',score:8.9,dims:[8.8,9.1,8.7],reviews:139,palette:5},
  {id:'shijiahe-jade',title:'玉出江汉：石家河文化展',city:'太原',venue:'山西青铜博物馆',start:'2026-09-30',end:'2027-01-03',type:'文明考古',official:'以场馆公告为准',source:sources.loans,desc:'以石家河文化玉器为核心，呈现长江中游史前文明的重要面貌。',score:8.6,dims:[9.0,8.4,8.3],reviews:21,palette:6},
  {id:'taishan',title:'泰山：东方岱宗 万物始生',city:'济南',venue:'山东博物馆',start:'2026-09-14',end:'2026-12-14',type:'历史人文',official:'以场馆公告为准',source:sources.loans,desc:'以文物与图像讨论泰山的历史、信仰及文化象征。',score:8.7,dims:[9.0,8.6,8.5],reviews:44,palette:4}
].filter(item => !['folk-crafts','letters-lingnan','shijiahe-jade','taishan'].includes(item.id))
  .map((item, index) => ({...item, cover: `assets/covers/${item.id}.jpg`, palette: palettes[item.palette ?? index % palettes.length]}));

const groupEvents = [
  {id:'g1',day:'10',month:'OCT',time:'14:00',city:'上海',title:'一起去看「世界树之巅」',place:'上海博物馆人民广场馆南门',people:8,max:10,exhibitionId:'world-tree'},
  {id:'g2',day:'11',month:'OCT',time:'10:30',city:'北京',title:'庞贝闭幕前最后一场',place:'国家博物馆西门集合',people:6,max:8,exhibitionId:'pompeii'},
  {id:'g3',day:'17',month:'OCT',time:'13:30',city:'上海',title:'西岸漫游：重塑景观',place:'西岸美术馆入口',people:9,max:12,exhibitionId:'reshape-landscape'}
];

const state = {
  route: location.hash.slice(1) || 'home',
  city: '全部', type: '全部', query: '', profileTab: 'want',
  user: JSON.parse(localStorage.getItem('zps-user') || '{"want":[],"seen":[],"saved":[],"reviews":[],"groups":[]}')
};

const app = document.querySelector('#app');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modalContent');
const toast = document.querySelector('#toast');

function saveUser() { localStorage.setItem('zps-user', JSON.stringify(state.user)); }
function esc(s='') { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function formatDate(d) { if (!d) return '长期展出'; const [y,m,day] = d.split('-'); return `${y}.${m}.${day}`; }
function statusOf(item) {
  if (!item.end) return '长期展出';
  const now = new Date(`${verifiedAt}T00:00:00+08:00`), end = new Date(`${item.end}T23:59:59+08:00`);
  const days = Math.ceil((end-now)/86400000);
  if (days < 0) return '已结束';
  if (days <= 14) return `${days} 天后结束`;
  return '正在展出';
}
function cardPoster(item) {
  return `<div class="card-poster has-cover">
    <img class="cover-image" src="${item.cover}" alt="${esc(item.title)}官方展览主视觉" loading="lazy">
    <span class="card-city">${esc(item.city)} · ${esc(item.type)}</span>
    <h3 class="card-title">${esc(item.title)}</h3>
    <span class="card-status">${statusOf(item)}</span>
  </div>`;
}
function card(item) {
  return `<article class="exhibition-card" data-open="${item.id}" tabindex="0" role="link" aria-label="查看${esc(item.title)}">
    ${cardPoster(item)}
    <div class="card-info"><h3>${esc(item.title)}</h3><p>${esc(item.venue)}<br>${formatDate(item.start)} – ${formatDate(item.end)}</p>
      <div class="rating-line"><span class="score">${item.score.toFixed(1)}</span><span class="demo-label">演示评分 · ${item.reviews}人</span></div>
    </div>
  </article>`;
}
function footer() { return `<footer class="footer">展览信息与图片核验于 ${verifiedAt}，以各场馆最新公告为准。展览图片来自场馆或主办方公开页面，仅用于本产品原型展示，版权归原权利人所有。站内评分、短评人数与组团活动均为产品演示数据。</footer>`; }

function home() {
  const hero = exhibitions[0];
  const ending = exhibitions.filter(x => statusOf(x).includes('天后')).slice(0,4);
  const picks = ['wuyue','carsten-two','reshape-landscape','heavenly-questions'].map(id => exhibitions.find(x => x.id === id));
  return `<div class="page">
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">看展，从真实体验开始</p><h1 class="display">今天<br>看什么展？</h1>
        <p class="lead">发现值得去的展览，查看观众的结构化评分，也可以约上同好一起出发。这里的展评建立在真实观展之上。</p>
        <div class="hero-actions"><a class="btn primary" href="#discover">浏览全部展览</a><a class="btn" href="#groups">找人一起看</a></div>
      </div>
      <article class="hero-poster hero-real-cover" data-open="${hero.id}" tabindex="0">
        <img class="hero-cover-image" src="${hero.cover}" alt="${esc(hero.title)}官方展览主视觉">
        <div class="poster-content"><div class="poster-top"><span>本周编辑精选</span><span>NO. 01</span></div><h2 class="poster-title">${hero.title}</h2><div class="poster-meta"><span>${hero.city}<br>${hero.venue}</span><span>${formatDate(hero.start)}<br>${formatDate(hero.end)}</span></div></div>
      </article>
    </section>
    <div class="signal-strip"><div class="signal"><strong>${exhibitions.length}</strong><span>已核验真实展览</span></div><div class="signal"><strong>${new Set(exhibitions.map(x=>x.city)).size}</strong><span>覆盖城市</span></div><div class="signal"><strong>3维</strong><span>结构化评价</span></div><div class="signal"><strong>每周</strong><span>滚动更新评分</span></div></div>
    <div class="section-head"><div><p class="eyebrow">Closing soon</p><h2>快要结束，别错过</h2></div><a class="text-link" href="#discover">查看全部</a></div>
    <div class="exhibition-grid">${ending.map(card).join('')}</div>
    <div class="quote-block"><div class="quote-number">“</div><div class="quote-copy"><blockquote>评分不是一句“好看”，而是把内容、空间和体验拆开，让下一个观众知道它是否适合自己。</blockquote><p>展评所参与式评价原则</p></div></div>
    <div class="section-head"><div><p class="eyebrow">Editor’s picks</p><h2>编辑本月推荐</h2></div></div>
    <div class="exhibition-grid">${picks.map(card).join('')}</div>${footer()}
  </div>`;
}

function discover() {
  const cities = ['全部', ...new Set(exhibitions.map(x => x.city))];
  const types = ['全部', ...new Set(exhibitions.map(x => x.type))];
  const filtered = exhibitions.filter(x => (state.city==='全部'||x.city===state.city) && (state.type==='全部'||x.type===state.type) && (!state.query||`${x.title}${x.venue}${x.desc}`.toLowerCase().includes(state.query.toLowerCase())));
  return `<div class="page"><p class="eyebrow">Discover exhibitions</p><h1 class="display">找一个<br>值得去的展</h1>
    <div class="section-head"><div class="search-bar">⌕<input id="searchInput" value="${esc(state.query)}" placeholder="搜索展览、场馆或关键词" aria-label="搜索展览"></div></div>
    <div class="filters" aria-label="城市筛选">${cities.map(x=>`<button class="chip ${state.city===x?'active':''}" data-city="${x}">${x}</button>`).join('')}</div>
    <div class="filters" aria-label="类型筛选">${types.map(x=>`<button class="chip ${state.type===x?'active':''}" data-type="${x}">${x}</button>`).join('')}</div>
    <p class="result-count">找到 ${filtered.length} 个展览 · 信息核验于 ${verifiedAt}</p>
    ${filtered.length ? `<div class="exhibition-grid">${filtered.map(card).join('')}</div>` : `<div class="empty"><strong>没有找到对应展览</strong><p>试试更换城市、类型或搜索词。</p><button class="btn" id="clearFilters">清空筛选</button></div>`}
    ${footer()}</div>`;
}

function detail(id) {
  const item = exhibitions.find(x=>x.id===id) || exhibitions[0];
  const reviews = state.user.reviews.filter(x=>x.exhibitionId===id);
  const seeded = [
    {name:'小陆',text:'信息密度很高，建议至少留两个小时。展线后半段更精彩，适合先读一遍介绍再进去。',score:9.0},
    {name:'橘子海',text:'空间节奏做得不错，但周末人多时会影响细看。互动和导览对第一次接触这个主题的人很友好。',score:8.4}
  ];
  const actions = [['want','想看'],['seen','看过'],['saved','收藏']];
  return `<div class="page detail"><a class="back" href="#discover">← 返回找展</a><div class="detail-hero">
    <div>${cardPoster(item)}</div>
    <section><p class="eyebrow">${item.city} · ${item.type} · ${statusOf(item)}</p><h1 class="detail-title">${item.title}</h1><p class="lead">${item.desc}</p>
      <div class="detail-meta"><div class="meta-item"><span>展期</span><strong>${formatDate(item.start)} – ${formatDate(item.end)}</strong></div><div class="meta-item"><span>场馆</span><strong>${item.venue}</strong></div><div class="meta-item"><span>入场提示</span><strong>${item.official}</strong></div><div class="meta-item"><span>信息状态</span><strong>${verifiedAt} 已核验</strong></div></div>
      <div class="source-note">展览事实来自官方页面，日期与入场方式可能调整。<a href="${item.source}" target="_blank" rel="noopener">查看官方来源 ↗</a></div>
      <div class="action-row">${actions.map(([key,label])=>`<button class="btn ${state.user[key].includes(id)?'primary':''}" data-user-action="${key}" data-id="${id}">${state.user[key].includes(id)?'✓ ':''}${label}</button>`).join('')}<button class="btn red" data-review="${id}">写展评</button></div>
      <div class="rating-panel"><p class="eyebrow" style="color:#f3c451">参与式评分 · 演示数据</p><div class="overall-score"><strong>${item.score.toFixed(1)}</strong><span>/ 10<br>${item.reviews + reviews.length} 人评价</span></div>
        ${['内容质量','策划空间','观展体验'].map((x,i)=>`<div class="dimension"><span>${x}</span><div class="bar"><i style="width:${item.dims[i]*10}%"></i></div><b>${item.dims[i].toFixed(1)}</b></div>`).join('')}
      </div>
      <div class="review-list"><div class="section-head"><h2>观众短评</h2><button class="btn" data-review="${id}">我也说两句</button></div>
        ${[...reviews.map(x=>({name:'我',text:x.text,score:x.score,date:x.date})),...seeded].map(r=>`<article class="review"><div class="review-head"><strong>${esc(r.name)} <span class="score">${Number(r.score).toFixed(1)}</span></strong><small>${r.date||'演示短评'}</small></div><p>${esc(r.text)}</p></article>`).join('')}
      </div>
    </section></div>${footer()}</div>`;
}

function groups() {
  return `<div class="page"><p class="eyebrow">Co-view</p><h1 class="display">一起看展<br>会更好玩</h1><p class="lead" style="max-width:650px">每次活动控制在小组规模，现场观展后完成评分。报名功能为产品演示，不会产生真实预约。</p>
    <div class="section-head"><h2>近期组团</h2><button class="btn" id="createGroup">发起组团</button></div>
    <div class="group-list">${groupEvents.map(g=>`<article class="group-card"><div class="group-date"><strong>${g.day}</strong><span>${g.month}</span></div><div><p class="eyebrow">${g.city} · ${g.time}</p><h3>${g.title}</h3><p>${g.place} · 已有 ${g.people + (state.user.groups.includes(g.id)?1:0)} / ${g.max} 人</p></div><button class="btn ${state.user.groups.includes(g.id)?'primary':''}" data-join="${g.id}">${state.user.groups.includes(g.id)?'✓ 已报名':'加入活动'}</button></article>`).join('')}</div>${footer()}</div>`;
}

function profile() {
  const tabs = [['want','想看'],['seen','看过'],['saved','收藏'],['reviews','展评']];
  const ids = state.profileTab === 'reviews' ? state.user.reviews.map(x=>x.exhibitionId) : state.user[state.profileTab];
  const items = exhibitions.filter(x=>ids.includes(x.id));
  return `<div class="page"><div class="profile-head"><div class="avatar">我</div><div><h1>我的看展档案</h1><p>所有记录仅保存在当前浏览器中</p></div></div>
    <div class="profile-tabs">${tabs.map(([k,v])=>`<button class="${state.profileTab===k?'active':''}" data-profile-tab="${k}">${v} ${state.user[k].length}</button>`).join('')}</div>
    ${items.length?`<div class="exhibition-grid">${items.map(card).join('')}</div>`:`<div class="empty"><strong>这里还没有记录</strong><p>从一场真正想看的展览开始吧。</p><a class="btn" href="#discover">去找展</a></div>`}${footer()}</div>`;
}

function render() {
  const route = state.route;
  if (route.startsWith('exhibition/')) app.innerHTML = detail(route.split('/')[1]);
  else app.innerHTML = ({home,discover,groups,profile}[route] || home)();
  document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active', a.dataset.route===route));
  bind();
  window.scrollTo(0,0);
}

function bind() {
  document.querySelectorAll('[data-open]').forEach(el => {
    const go=()=>location.hash=`exhibition/${el.dataset.open}`;
    el.addEventListener('click',go); el.addEventListener('keydown',e=>{if(e.key==='Enter')go();});
  });
  document.querySelectorAll('[data-city]').forEach(b=>b.onclick=()=>{state.city=b.dataset.city;render();});
  document.querySelectorAll('[data-type]').forEach(b=>b.onclick=()=>{state.type=b.dataset.type;render();});
  const input=document.querySelector('#searchInput'); if(input) input.oninput=e=>{state.query=e.target.value; clearTimeout(input._t); input._t=setTimeout(render,180);};
  const clear=document.querySelector('#clearFilters'); if(clear) clear.onclick=()=>{state.city='全部';state.type='全部';state.query='';render();};
  document.querySelectorAll('[data-user-action]').forEach(b=>b.onclick=()=>toggleUser(b.dataset.userAction,b.dataset.id));
  document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>reviewModal(b.dataset.review));
  document.querySelectorAll('[data-join]').forEach(b=>b.onclick=()=>joinGroup(b.dataset.join));
  document.querySelectorAll('[data-profile-tab]').forEach(b=>b.onclick=()=>{state.profileTab=b.dataset.profileTab;render();});
  const create=document.querySelector('#createGroup'); if(create) create.onclick=createGroupModal;
}

function toggleUser(key,id) {
  const arr=state.user[key], index=arr.indexOf(id);
  if(index>=0) arr.splice(index,1); else arr.push(id);
  saveUser(); showToast(index>=0?'已取消记录':'已保存到我的'); render();
}
function joinGroup(id) {
  const i=state.user.groups.indexOf(id); if(i>=0) state.user.groups.splice(i,1); else state.user.groups.push(id);
  saveUser(); showToast(i>=0?'已取消报名':'报名成功（演示）'); render();
}
function showToast(msg) { toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800); }
function closeModal(){ modal.close(); }
function openModal(html){ modalContent.innerHTML=html;modal.showModal();document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeModal); }

function reviewModal(id) {
  const item=exhibitions.find(x=>x.id===id);
  openModal(`<form class="modal-inner" id="reviewForm"><div class="modal-head"><div><p class="eyebrow">真实观展后再评价</p><h2>${item.title}</h2></div><button class="close" type="button" data-close aria-label="关闭">×</button></div>
    ${['内容质量','策划空间','观展体验'].map((x,i)=>`<div class="range-row"><label for="r${i}">${x}</label><input id="r${i}" name="r${i}" type="range" min="1" max="10" step=".5" value="8"><output>8</output></div>`).join('')}
    <div class="form-field"><label for="reviewText">具体感受</label><textarea id="reviewText" name="text" minlength="10" maxlength="500" required placeholder="哪些作品、空间或服务影响了你的体验？"></textarea></div>
    <label style="display:flex;gap:9px;margin-top:14px;font-size:12px"><input type="checkbox" required> 我确认已经到现场看过这个展览</label>
    <div class="modal-actions"><button class="btn" type="button" data-close>取消</button><button class="btn red" type="submit">发布展评</button></div></form>`);
  modalContent.querySelectorAll('input[type=range]').forEach(r=>r.oninput=()=>r.nextElementSibling.textContent=r.value);
  document.querySelector('#reviewForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);const vals=[0,1,2].map(i=>Number(fd.get(`r${i}`)));state.user.reviews.unshift({exhibitionId:id,text:fd.get('text'),score:vals.reduce((a,b)=>a+b,0)/3,date:verifiedAt});if(!state.user.seen.includes(id))state.user.seen.push(id);saveUser();closeModal();showToast('展评已发布到本地');render();};
}

function createGroupModal() {
  openModal(`<form class="modal-inner" id="groupForm"><div class="modal-head"><div><p class="eyebrow">Create a co-view</p><h2>发起组团看展</h2></div><button class="close" type="button" data-close>×</button></div>
    <div class="form-field"><label>选择展览</label><select required>${exhibitions.slice(0,10).map(x=>`<option>${x.title}</option>`).join('')}</select></div>
    <div class="form-field"><label>集合时间</label><input type="datetime-local" required></div><div class="form-field"><label>补充说明</label><textarea placeholder="集合地点、预计时长、希望同行者提前了解的内容"></textarea></div>
    <div class="modal-actions"><button class="btn" type="button" data-close>取消</button><button class="btn red" type="submit">发布活动</button></div></form>`);
  document.querySelector('#groupForm').onsubmit=e=>{e.preventDefault();closeModal();showToast('活动草稿已保存（演示）');};
}

document.querySelector('#searchTrigger').onclick=()=>{location.hash='discover';setTimeout(()=>document.querySelector('#searchInput')?.focus(),100);};
window.addEventListener('hashchange',()=>{state.route=location.hash.slice(1)||'home';render();});
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
render();
