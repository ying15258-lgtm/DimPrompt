// ==========================================================
// 1. Language System & Pure English Logic Keys
// ==========================================================
let currentLang = 'en';
const i18n = {
    en: {
        app_title: "DimPrompt", tit_config: "Configuration", leg_core: "Core", leg_high: "High", leg_med: "Med", leg_low: "Low",
        lbl_mode: "Mode Selection", lbl_prod: "Product Type", lbl_comp: "Strategy", lbl_dim: "Dimensions", lbl_const: "Constraints", lbl_param: "Parameters",
        opt_rec: "Research Mode", opt_free: "Free Mode", btn_reset: "Reset", btn_gen: "Generate", btn_exp: "Export Data", 
        btn_copy: "Copy Prompt", btn_copy_txt: "Copy All", btn_download: "Download Word", comp_def: "Default", comp_top: "Top-5 Priority", comp_sin: "Single Focus", comp_mul: "Balance",
        pl_search: "Search dimensions...", pl_user: "Constraints (User, Eng, Market, Style)...", pl_no: "Exclude words...", pl_note: "Version note...",
        txt_wait: "Select dimensions and click generate.", txt_empty_tit: "Ready to Build", txt_chart_empty: "No Selection", txt_filter: "Prefer Only", txt_syn: "Synthesizing...", txt_copied: "Copied!",
        tit_hist: "Version History", tit_exp: "Export", lbl_rat: "Rationale", lbl_gen: "Prompt", lbl_sum: "Basis", btn_close: "Close",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus", 
        "Version": "Version", "Prefer": "Prefer", "Neutral": "Neutral", "Discard": "Discard", "Note": "Note", "Product": "Product"
    },
    zh: {
        app_title: "DimPrompt", tit_config: "配置面板", leg_core: "核心", leg_high: "高优", leg_med: "中优", leg_low: "低优",
        lbl_mode: "实验模式", lbl_prod: "产品类型", lbl_comp: "生成策略", lbl_dim: "设计维度", lbl_const: "补充约束条件", lbl_param: "生成参数",
        opt_rec: "研究推荐模式", opt_free: "自由组合模式", btn_reset: "清空", btn_gen: "生成方案", btn_exp: "导出数据", 
        btn_copy: "复制提示词", btn_copy_txt: "复制全量数据", btn_download: "下载 Word", comp_def: "默认平铺", comp_top: "高权重优先", comp_sin: "单维度强化", comp_mul: "多维度平衡",
        pl_search: "搜索维度...", pl_user: "输入用户需求、工程制造、市场品牌或设计风格等补充约束...", pl_no: "排除词...", pl_note: "记录实验笔记...",
        txt_wait: "在左侧勾选维度并点击生成以开始研究", txt_empty_tit: "等待生成", txt_chart_empty: "勾选维度查看分布", txt_filter: "仅看偏好", txt_syn: "正在合成...", txt_copied: "已成功复制!",
        tit_hist: "版本记录", tit_exp: "导出", lbl_rat: "理论依据", lbl_gen: "提示词文本", lbl_sum: "摘要", btn_close: "关闭",
        "Visual Focus": "视觉焦点", "Technical Focus": "技术焦点", "Scenario Focus": "场景焦点", 
        "Version": "版本", "Prefer": "偏好", "Neutral": "中立", "Discard": "放弃", "Note": "笔记", "Product": "产品"
    },
    ko: {
        app_title: "DimPrompt", tit_config: "구성", leg_core: "핵심", leg_high: "높음", leg_med: "중간", leg_low: "낮음",
        lbl_mode: "모드", lbl_prod: "제품", lbl_comp: "전략", lbl_dim: "디자인 차원", lbl_const: "제약 조건",
        opt_rec: "추천 모드", opt_free: "자유 모드", btn_reset: "초기화", btn_gen: "생성하기", btn_exp: "내보내기", 
        btn_copy: "복사", btn_copy_txt: "전체 복사", btn_download: "Word 다운로드", comp_def: "기본값", comp_top: "가중치 우선", comp_sin: "단일 강조", comp_mul: "다차원 균형",
        pl_search: "검색...", pl_user: "제약 조건 입력 (사용자, 엔지니어링, 시장 또는 디자인 스타일)...", pl_no: "제외어...", pl_note: "메모...",
        txt_wait: "차원을 선택하여 시작하세요.", txt_empty_tit: "합성 준비 완료", txt_chart_empty: "차원을 선택하세요", txt_filter: "선호만 보기", txt_syn: "합성 중...", txt_copied: "복사됨!",
        tit_hist: "버전 기록", tit_exp: "내보내기", lbl_rat: "이론적 근거", lbl_gen: "프롬프트", lbl_sum: "요약", btn_close: "닫기",
        "Visual Focus": "시각적 포커스", "Technical Focus": "기술적 포커스", "Scenario Focus": "시나리오 포커스", 
        "Version": "버전", "Prefer": "선호", "Neutral": "중립", "Discard": "폐기", "Note": "메모", "Product": "제품"
    }
};

const PRODUCT_DATA = {
    en: { "Office Mouse": "Office Mouse", "Office Keyboard": "Keyboard", "File Box": "File Box", "Organizer": "Organizer", "Pen Holder": "Pen Holder", "Sticky Notes": "Sticky Notes", "USB Drive": "USB Drive", "Printer": "Printer", "Monitor": "Monitor", "Scanner": "Scanner", "Projector": "Projector", "All-in-One PC": "AIO PC", "Office Desk": "Office Desk", "Office Chair": "Chair", "Standing Desk": "Standing Desk", "Sofa / Table": "Sofa / Table" },
    zh: { "Office Mouse": "办公鼠标", "Office Keyboard": "键盘", "File Box": "文件盒", "Organizer": "收纳器", "Pen Holder": "笔筒", "Sticky Notes": "便签", "USB Drive": "U盘", "Printer": "打印机", "Monitor": "显示器", "Scanner": "扫描仪", "Projector": "投影仪", "AIO PC": "一体机", "Office Desk": "办公桌", "Office Chair": "办公椅", "Standing Desk": "升降桌", "Sofa / Table": "沙发茶几" },
    ko: { "Office Mouse": "오피스 마우스", "Office Keyboard": "키보드", "File Box": "파일함", "Organizer": "정리함", "Pen Holder": "펜꽂이", "Sticky Notes": "메모장", "USB Drive": "USB 드라이브", "Printer": "프린터", "Monitor": "모니터", "Scanner": "스캐너", "Projector": "프로젝터", "AIO PC": "올인원 PC", "Office Desk": "사무용 책상", "Office Chair": "의자", "Standing Desk": "스탠딩 데스크", "Sofa / Table": "소파/테이블" }
};

const DIM_DATA = {
    parent: {
        "B1 Functional Design": { en: "Functional Design", zh: "功能设计", ko: "기능 디자인" },
        "B2 User Experience Design": { en: "User Experience Design", zh: "用户体验设计", ko: "사용자 경험 디자인" },
        "B3 Emotional Design": { en: "Emotional Design", zh: "情感设计", ko: "감성 디자인" },
        "B4 Innovation and User-Driven Design": { en: "Innovation Design", zh: "创新设计", ko: "혁신 디자인" },
        "B5 Market and Brand Adaptation": { en: "Market Adaptation", zh: "市场品牌适配", ko: "시장 브랜드 적응" },
        "B6 Sustainable Design": { en: "Sustainable Design", zh: "可持续设计", ko: "지속가능 디자인" }
    },
    child: {
        "C1 Usability": { zh: "易用性", ko: "사용성" }, "C2 Reliability": { zh: "可靠性", ko: "신뢰성" }, "C3 Safety": { zh: "安全性", ko: "안전성" },
        "C4 Comfort": { zh: "舒适度", ko: "편안함" }, "C5 Intuitive Operation": { zh: "直觉操作", ko: "직관적 조작" }, "C6 Feedback Mechanism": { zh: "反馈机制", ko: "피드백 메커니즘" },
        "C7 Aesthetics": { zh: "审美性", ko: "미학" }, "C8 Emotional Resonance": { zh: "情感共鸣", ko: "감성적 공명" }, "C9 Customization": { zh: "个性化定制", ko: "맞춤화" },
        "C10 Innovation": { zh: "创新性", ko: "혁신성" }, "C11 Market Orientation": { zh: "市场导向", ko: "시장 지향성" }, "C12 Forward-looking": { zh: "前瞻性", ko: "미래 지향성" },
        "C13 Market Adaptability": { zh: "市场适应性", ko: "시장 적응성" }, "C14 Brand Identity": { zh: "品牌识别", ko: "브랜드 정체성" }, "C15 Inclusiveness": { zh: "包容性设计", ko: "포용성" },
        "C16 Longevity": { zh: "长寿性", ko: "내구성" }, "C17 Eco-friendly Materials": { zh: "环保材料", ko: "친환경 소재" }, "C18 Production Cost": { zh: "生产成本", ko: "생산 비용" }
    }
};

const DIM_ORDER = [
    { parent: "B1 Functional Design", children: ["C1 Usability", "C2 Reliability", "C3 Safety"] },
    { parent: "B2 User Experience Design", children: ["C4 Comfort", "C5 Intuitive Operation", "C6 Feedback Mechanism"] },
    { parent: "B3 Emotional Design", children: ["C7 Aesthetics", "C8 Emotional Resonance", "C9 Customization"] },
    { parent: "B4 Innovation and User-Driven Design", children: ["C12 Forward-looking", "C10 Innovation", "C11 Market Orientation"] },
    { parent: "B5 Market and Brand Adaptation", children: ["C13 Market Adaptability", "C15 Inclusiveness", "C14 Brand Identity"] },
    { parent: "B6 Sustainable Design", children: ["C17 Eco-friendly Materials", "C18 Production Cost", "C16 Longevity"] }
];

const PRIO_MAP = { "C7 Aesthetics": "Core", "C8 Emotional Resonance": "Core", "C4 Comfort": "High Priority", "C9 Customization": "High Priority", "C5 Intuitive Operation": "High Priority", "C1 Usability": "High Priority", "C6 Feedback Mechanism": "High Priority", "C2 Reliability": "Medium Priority", "C12 Forward-looking": "Medium Priority", "C3 Safety": "Medium Priority", "C10 Innovation": "Medium Priority" };
const WEIGHT_LVL = { "Core": 4, "High Priority": 3, "Medium Priority": 2, "Low Priority": 1 };
const DOTS = { "Core": "bg-red-500", "High Priority": "bg-orange-400", "Medium Priority": "bg-blue-400", "Low Priority": "bg-slate-600" };

function t(key) { return i18n[currentLang][key] || key; }

// ==========================================================
// 2. Logic Functions
// ==========================================================
let radarChart, versionHistory = [];

function initChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(DIM_DATA.parent).map(k => DIM_DATA.parent[k][currentLang].split(' ')[0]),
            datasets: [{ data: [0,0,0,0,0,0], backgroundColor: 'rgba(99, 102, 241, 0.4)', borderColor: '#818cf8', borderWidth: 1.5, pointRadius: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { r: { min: 0, max: 3, ticks: { display: false }, grid: { color: 'rgba(255,255,255,0.05)' }, angleLines: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { color: 'rgba(255,255,255,0.4)', font: { size: 7 } } } } }
    });
}

function updateChart() {
    if (!radarChart) return;
    const checked = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    document.getElementById('chart-empty').style.opacity = checked.length ? '0' : '1';
    let counts = [0,0,0,0,0,0];
    checked.forEach(d => {
        const idx = DIM_ORDER.findIndex(g => g.children.includes(d));
        if(idx > -1) counts[idx]++;
    });
    radarChart.data.datasets[0].data = counts;
    radarChart.update();
}

function renderDimensions() {
    const container = document.getElementById('dimensions-container');
    if(!container) return; // VITAL: Security check
    const checked = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    container.innerHTML = '';
    
    DIM_ORDER.forEach(group => {
        const gid = group.parent.replace(/[^a-zA-Z0-9]/g, '-');
        const parentLabel = currentLang === 'en' ? group.parent : `${DIM_DATA.parent[group.parent][currentLang]} (${group.parent})`;
        
        const children = group.children.map(c => {
            const childText = currentLang === 'en' ? c : `<span class="lang-main">${DIM_DATA.child[c][currentLang]}</span><span class="lang-sub">(${c.split(' ')[1]})</span>`;
            return `<label class="dim-item-container flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2.5 rounded-xl group" data-name="${c}">
                <input type="checkbox" value="${c}" class="dim-checkbox child-cb-${gid} w-4 h-4 rounded border-slate-700 accent-indigo-500" onchange="updateGroupState('${gid}')" ${checked.includes(c)?'checked':''}>
                <span class="priority-dot w-2 h-2 rounded-full ${DOTS[PRIO_MAP[c]||'Low Priority']}"></span>
                <span class="text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">${childText}</span>
            </label>`;
        }).join('');

        container.innerHTML += `
            <div id="card-${gid}" class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all shadow-sm">
                <div class="flex items-center justify-between bg-slate-800/30 p-4">
                    <div class="flex items-center gap-3">
                        <input type="checkbox" id="group-${gid}" class="w-4 h-4 accent-indigo-500" onchange="toggleGroup(this,'${gid}')">
                        <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer" onclick="toggleFolder('${gid}')">${parentLabel}</label>
                    </div>
                    <button onclick="toggleFolder('${gid}')" id="arrow-${gid}" class="text-slate-600 rotate-180 transition-transform"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"></path></svg></button>
                </div>
                <div id="content-${gid}" class="dim-group-content grid grid-cols-1 md:grid-cols-2 gap-1 p-3 border-t border-slate-800/50">${children}</div>
            </div>`;
        updateGroupState(gid);
    });
}

function changeLanguage() {
    currentLang = document.getElementById('lang-switch').value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (i18n[currentLang][k]) el.tagName === 'OPTION' ? el.text = i18n[currentLang][k] : el.innerText = i18n[currentLang][k];
    });
    // Update product select
    const pSelect = document.getElementById('product-type');
    Array.from(pSelect.querySelectorAll('option')).forEach(opt => {
        if(PRODUCT_DATA[currentLang][opt.value]) opt.text = PRODUCT_DATA[currentLang][opt.value];
    });
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][k]) el.placeholder = i18n[currentLang][k];
    });
    // VITAL: Re-render dimensions and update chart labels
    renderDimensions();
    if(radarChart) {
        radarChart.data.labels = Object.keys(DIM_DATA.parent).map(k => DIM_DATA.parent[k][currentLang].split(' ')[0]);
        radarChart.update();
    }
    if(versionHistory.length) renderVersionHistory();
}

// FIX: Correct startup sequence
document.addEventListener('DOMContentLoaded', () => { 
    changeLanguage(); // Render static text and dimensions first
    initChart();       // Then init chart with correct language labels
});

// ==========================================================
// 3. Logic & Evaluation
// ==========================================================
function generatePrompt() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    if(!sel.length) return;
    const vn = versionHistory.length + 1;
    document.getElementById('initial-placeholder').classList.add('hidden');
    document.getElementById('skeleton-loader').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('skeleton-loader').classList.add('hidden');
        const res = document.getElementById('results-container'); res.classList.remove('hidden'); res.innerHTML = '';
        const prod = document.getElementById('product-type').value;
        const compMode = document.querySelector('input[name="composition-mode"]:checked').value;
        const constr = document.getElementById('const-all').value; // FIX: ID match
        const pV = document.getElementById('param-v').value;
        const pAR = document.getElementById('param-ar').value;
        const pS = document.getElementById('param-s').value;
        const pQ = document.getElementById('param-q').value;
        const pRaw = document.getElementById('param-raw').checked ? '--raw' : '';
        const pNo = document.getElementById('param-no').value;

        const sortW = (a, b) => (WEIGHT_LVL[PRIO_MAP[b]||1] - WEIGHT_LVL[PRIO_MAP[a]||1]);
        let coreT = ""; let proc = [...sel];
        if (compMode === "Top-K Priority") { proc.sort(sortW); proc = proc.slice(0, 5); coreT = `Prioritizing: ${proc.join(', ')}. `; }
        else if (compMode === "Single-Dimension Emphasis") { proc.sort(sortW); proc = [proc[0]]; coreT = `Focused on [${proc[0]}]. `; }
        else if (compMode === "Multi-Dimension Balance") { 
            const g = {}; sel.forEach(d => { const p = DIM_ORDER.find(gr=>gr.children.includes(d)).parent; if(!g[p]) g[p]=[]; g[p].push(d); });
            let bc = []; for(const k in g){ g[k].sort(sortW); bc.push(g[k][0]); }
            proc = bc; coreT = `Balanced focus: ${bc.join(', ')}. `;
        } else { coreT = `Dimensions included: ${sel.join(', ')}. `; }

        const TEMPLATES = [
            { id: 'visual', title: "Visual Focus", suffix: "studio high-end lighting, minimalist, clean background" },
            { id: 'tech', title: "Technical Focus", suffix: "blueprint style, detailed technical draft, engineering presentation" },
            { id: 'scen', title: "Scenario Focus", suffix: "real-world context, photography, natural lighting" }
        ];

        let cp = {};
        TEMPLATES.forEach(tpl => {
            const pText = `Imagine a ${prod} design. ${coreT}${constr? 'Constraints: '+constr : ''}. ${tpl.suffix} --v ${pV} --ar ${pAR} --s ${pS} --q ${pQ} ${pRaw} ${pNo?'--no '+pNo:''}`;
            cp[tpl.id] = { text: pText.replace(/\s+/g, ' '), eval: null, title: tpl.title };
            res.innerHTML += `
                <div class="result-card">
                    <div class="flex justify-between items-center mb-8 gap-4">
                        <h2 class="text-2xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none">${t(tpl.title)}</h2>
                        <div class="flex bg-black/40 rounded-2xl p-1 gap-1 border border-slate-800 shadow-inner">
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Prefer')" id="btn-${vn}-${tpl.id}-Prefer" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">Prefer</button>
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Neutral')" id="btn-${vn}-${tpl.id}-Neutral" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">Neutral</button>
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Discard')" id="btn-${vn}-${tpl.id}-Discard" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">Discard</button>
                        </div>
                    </div>
                    <div class="text-[14px] font-mono text-indigo-300 bg-black/50 p-6 rounded-3xl border border-slate-800 break-words leading-relaxed relative group shadow-inner">
                        ${pText}
                        <button onclick="copyToClipboard(this,'${encodeURIComponent(pText)}')" class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl transition-all">${t('btn_copy')}</button>
                    </div>
                    <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 mt-6 space-y-3">
                        <span class="text-[10px] font-black text-slate-500 uppercase block mb-2 border-b border-slate-800 pb-2">${t('lbl_sum')}</span>
                        <div class="grid grid-cols-2 gap-y-3 text-[11px] font-bold text-slate-400">
                            <div class="flex justify-between px-4"><span class="text-slate-600">${t('Product')}:</span><span class="text-white">${prod}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">${t('lbl_comp')}:</span><span class="text-white">${compMode.split('(')[0]}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">Active Dims:</span><span class="text-white">${proc.length} items</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">Config:</span><span class="text-indigo-400">v${pV} / ${pAR} / s${pS}</span></div>
                        </div>
                    </div>
                </div>`;
        });
        versionHistory.push({ version: vn, timestamp: new Date().toLocaleTimeString(), productType: prod, dimensions: sel, prompts: cp, note: "", compMode: compMode });
        renderVersionHistory(); document.getElementById('history-section').classList.remove('hidden');
    }, 600);
}

function setEval(vn, id, ev) {
    const v = versionHistory.find(h => h.version === vn);
    if(v) v.prompts[id].eval = ev;
    const btns = document.querySelectorAll(`[id^="btn-${vn}-${id}"]`);
    btns.forEach(b => b.classList.remove('active-prefer', 'active-neutral', 'active-discard'));
    const target = document.getElementById(`btn-${vn}-${id}-${ev}`);
    if(target) target.classList.add(`active-${ev.toLowerCase()}`);
    renderVersionHistory();
}

function renderVersionHistory() {
    const hc = document.getElementById('history-container'); const fp = document.getElementById('filter-prefer').checked;
    if(!hc) return;
    hc.innerHTML = '';
    [...versionHistory].reverse().forEach(v => {
        if(fp && !Object.values(v.prompts).some(p => p.eval === 'Prefer')) return;
        const ph = Object.entries(v.prompts).map(([id, da]) => {
            if (fp && da.eval!=='Prefer') return '';
            const activeClass = da.eval ? `active-${da.eval.toLowerCase()}` : '';
            return `<div class="mb-4 p-4 border border-slate-800/50 bg-slate-900/30 rounded-2xl">
                <div class="flex justify-between text-[10px] font-black text-slate-500 mb-2 uppercase"><span>${t(da.title)}</span><span class="eval-btn text-[9px] px-2 py-0.5 rounded ${activeClass}">${t(da.eval||'')}</span></div>
                <div class="text-[11px] text-slate-500 font-mono">${da.text}</div>
            </div>`;
        }).join('');
        hc.innerHTML += `<details open class="group bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 mb-6 shadow-sm"><summary class="cursor-pointer flex justify-between font-black uppercase italic text-slate-400 tracking-tighter outline-none"><span>${t('Version')} ${v.version} - ${v.timestamp}</span></summary><div class="pt-6"><input type="text" class="w-full bg-black border border-slate-800 rounded-xl px-4 py-2 text-xs mb-4 text-slate-400 outline-none focus:border-indigo-500" placeholder="${t('pl_note')}" value="${v.note}" onchange="updateNote(${v.version},this.value)">${ph}</div></details>`;
    });
}

// ==========================================================
// 4. Utility Functions & DOWNLOAD Logic
// ==========================================================
function updateNote(vn, val) { const v = versionHistory.find(h => h.version === vn); if(v) v.note = val; }
function toggleFolder(gid) { document.getElementById(`content-${gid}`).classList.toggle('collapsed'); document.getElementById(`arrow-${gid}`).classList.toggle('rotate-180'); }
function toggleMode() { document.getElementById('dimensions-container').classList.toggle('hide-priorities', document.getElementById('system-mode').value==='free'); }
function updateGroupState(gid) {
    const c = document.querySelectorAll(`.child-cb-${gid}`); const g = document.getElementById(`group-${gid}`);
    const cc = Array.from(c).filter(i => i.checked).length;
    if(g) { g.checked = cc === c.length; g.indeterminate = cc > 0 && cc < c.length; }
    updateChart();
}
function toggleGroup(gcb, gid) { document.querySelectorAll(`.child-cb-${gid}`).forEach(cb => { cb.checked = gcb.checked; }); updateGroupState(gid); }
function filterDimensions() { const term = document.getElementById('dim-search').value.toLowerCase(); document.querySelectorAll('.dim-item-container').forEach(el => el.style.display = el.getAttribute('data-name').toLowerCase().includes(term) ? 'flex' : 'none'); }
function resetAll() { document.querySelectorAll('.dim-checkbox').forEach(cb => cb.checked = false); document.getElementById('const-all').value = ''; updateChart(); }
function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }

function copyToClipboard(btn, et) { 
    const t_ = decodeURIComponent(et); const orig = btn.innerText;
    const show = () => { btn.innerText = t("txt_copied"); setTimeout(()=>btn.innerText=orig,1000); };
    if(navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(t_).then(show).catch(()=>fbCopy(t_,show)); else fbCopy(t_,show); 
}
function fbCopy(t_, c) { const ta = document.createElement("textarea"); ta.value = t_; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy');}catch(e){} document.body.removeChild(ta); c(); }

function closeExportModal() { document.getElementById('export-modal').classList.add('opacity-0'); setTimeout(()=>document.getElementById('export-modal').classList.add('hidden'),500); }
function copyExportText(btn) { 
    const ta = document.getElementById('export-textarea'); ta.select(); try{document.execCommand('copy');}catch(e){}
    const ot = btn.innerText; btn.innerText = t("txt_copied"); setTimeout(()=>btn.innerText=ot,2000); 
}

function exportCurrentVersion() { 
    const v = versionHistory[versionHistory.length - 1]; if(!v) return; 
    let txt = `[V${v.version}] ${v.timestamp}\nProduct: ${v.productType}\nNote: ${v.note}\n\nPrompts:\n`; 
    Object.entries(v.prompts).forEach(([id, da]) => { txt += `${da.title} (${da.eval||'None'}):\n${da.text}\n\n`; }); 
    document.getElementById('export-textarea').value = txt; 
    document.getElementById('export-modal').classList.remove('hidden'); 
    setTimeout(()=>document.getElementById('export-modal').classList.remove('opacity-0'),10); 
}

// 🚀 NATIVE WORD DOCUMENT DOWNLOAD GENERATOR
function downloadExportText() {
    const v = versionHistory[versionHistory.length - 1];
    if(!v) return;

    // Grab parameters from the first generated prompt string
    const paramsMatch = v.prompts[Object.keys(v.prompts)[0]].text.match(/--v\s[\d\.]+\s--ar\s[\d:]+\s--s\s\d+\s--q\s[\d\.]+(?:\s--raw)?(?:\s--no\s.+)?/);
    const params = paramsMatch ? paramsMatch[0] : "N/A";

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>DimPrompt Report</title></head>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; color: #333;">
        <h1 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">DimPrompt Generation Report</h1>
        
        <h2>Research Basis Summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Version</td><td style="padding: 8px; border: 1px solid #ddd;">V${v.version} (${v.timestamp})</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Product</td><td style="padding: 8px; border: 1px solid #ddd;">${v.productType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Strategy</td><td style="padding: 8px; border: 1px solid #ddd;">${v.compMode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Active Dimensions (${v.dimensions.length})</td><td style="padding: 8px; border: 1px solid #ddd;">${v.dimensions.join(', ')}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Parameters</td><td style="padding: 8px; border: 1px solid #ddd;">${params}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Note</td><td style="padding: 8px; border: 1px solid #ddd;">${v.note || 'None'}</td></tr>
        </table>

        <h2>Generated Prompts</h2>
    `;

    Object.entries(v.prompts).forEach(([id, da]) => {
        htmlContent += `
        <div style="margin-bottom: 24px; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
            <h3 style="margin-top: 0; color: #1e293b;">${t(da.title)} ${da.eval ? ` <span style="color:#10b981;">[${t(da.eval)}]</span>` : ''}</h3>
            <p style="font-family: 'Courier New', Courier, monospace; background-color: #ffffff; padding: 12px; border: 1px solid #cbd5e1; border-radius: 4px;">${da.text}</p>
        </div>
        `;
    });

    htmlContent += `</body></html>`;

    // Create a Blob with Word application type
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DimPrompt_V${v.version}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}