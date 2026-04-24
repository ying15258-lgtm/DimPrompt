// ==========================================================
// DimPrompt v2.2 — Designverse products + tooltips + Word/TXT export + Light Mode fix
// ==========================================================

// ---------- 1. i18n ----------
let currentLang = 'en';
const i18n = {
    en: {
        app_title: "DimPrompt", tit_config: "Configuration", leg_core: "Core", leg_high: "High", leg_med: "Med", leg_low: "Low",
        lbl_mode: "Mode Selection", lbl_prod: "Product Type", lbl_comp: "Strategy", lbl_dim: "Dimensions", lbl_const: "Constraints", lbl_param: "Parameters",
        opt_rec: "Research Recommendation", opt_free: "Free Combination", btn_reset: "Reset", btn_gen: "Generate", btn_exp: "Preview",
        btn_exp_json: "Research JSON", btn_exp_word: "Export Word", btn_exp_txt: "Export TXT", btn_clear_hist: "Clear",
        btn_copy: "Copy Prompt", btn_copy_txt: "Copy", btn_download: "Download Word",
        comp_def: "Default", comp_top: "Top-K Priority", comp_sin: "Single Focus", comp_mul: "Balance",
        pl_search: "Search dimensions...", pl_prod_search: "Search products...",
        pl_user: "Constraints (User, Eng, Market, Style)...", pl_no: "Exclude words...", pl_note: "Version note...",
        txt_wait: "Select dimensions and click generate.", txt_empty_tit: "Ready to Build", txt_chart_empty: "No Selection",
        txt_filter: "Prefer Only", txt_syn: "Synthesizing...", txt_copied: "Copied!",
        tit_hist: "Version History", tit_exp: "Export", lbl_rat: "Rationale", lbl_gen: "Prompt", lbl_sum: "Basis", btn_close: "Close",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus",
        "Version": "Version", "Prefer": "Prefer", "Neutral": "Neutral", "Discard": "Discard", "Note": "Note", "Product": "Product",
        "Category": "Category",
        txt_emphasis: "Emphasis", txt_weight: "Weight", txt_active_dims: "Active Dimensions",
        txt_empty_generate: "Select at least one dimension before generating.",
        txt_confirm_clear: "Clear ALL version history? This cannot be undone.",
        txt_render_err: "Render error. Please refresh.",
        lbl_desc: "Definition", lbl_ex: "Example", lbl_ref: "Reference",
        cat_supplies: "Office Supplies", cat_equipment: "Office Equipment", cat_furniture: "Office Furniture",
        cat_materials: "Office Building Materials", cat_other: "Other Office"
    },
    zh: {
        app_title: "DimPrompt", tit_config: "配置面板", leg_core: "核心", leg_high: "高优", leg_med: "中优", leg_low: "低优",
        lbl_mode: "实验模式", lbl_prod: "产品类型", lbl_comp: "生成策略", lbl_dim: "设计维度", lbl_const: "补充约束条件", lbl_param: "生成参数",
        opt_rec: "研究推荐模式", opt_free: "自由组合模式", btn_reset: "清空", btn_gen: "生成方案", btn_exp: "预览最新",
        btn_exp_json: "研究数据 JSON", btn_exp_word: "导出 Word", btn_exp_txt: "导出 TXT", btn_clear_hist: "清空记录",
        btn_copy: "复制提示词", btn_copy_txt: "复制", btn_download: "下载 Word",
        comp_def: "默认平铺", comp_top: "高权重优先", comp_sin: "单维度强化", comp_mul: "多维度平衡",
        pl_search: "搜索维度...", pl_prod_search: "搜索产品...",
        pl_user: "输入用户需求、工程制造、市场品牌或设计风格等补充约束...", pl_no: "排除词...", pl_note: "记录实验笔记...",
        txt_wait: "在左侧勾选维度并点击生成以开始研究", txt_empty_tit: "等待生成", txt_chart_empty: "勾选维度查看分布",
        txt_filter: "仅看偏好", txt_syn: "正在合成...", txt_copied: "已成功复制!",
        tit_hist: "版本记录", tit_exp: "导出", lbl_rat: "理论依据", lbl_gen: "提示词文本", lbl_sum: "摘要", btn_close: "关闭",
        "Visual Focus": "视觉焦点", "Technical Focus": "技术焦点", "Scenario Focus": "场景焦点",
        "Version": "版本", "Prefer": "偏好", "Neutral": "中立", "Discard": "放弃", "Note": "笔记", "Product": "产品",
        "Category": "分类",
        txt_emphasis: "强化", txt_weight: "权重", txt_active_dims: "激活维度",
        txt_empty_generate: "请先勾选至少一个维度再生成。",
        txt_confirm_clear: "确定清空所有版本记录？此操作不可撤销。",
        txt_render_err: "渲染失败，请刷新页面。",
        lbl_desc: "定义", lbl_ex: "示例", lbl_ref: "文献",
        cat_supplies: "办公用品", cat_equipment: "办公设备", cat_furniture: "办公家具",
        cat_materials: "办公建材", cat_other: "其他办公类"
    },
    ko: {
        app_title: "DimPrompt", tit_config: "구성", leg_core: "핵심", leg_high: "높음", leg_med: "중간", leg_low: "낮음",
        lbl_mode: "모드", lbl_prod: "제품", lbl_comp: "전략", lbl_dim: "디자인 차원", lbl_const: "제약 조건", lbl_param: "파라미터",
        opt_rec: "추천 모드", opt_free: "자유 모드", btn_reset: "초기화", btn_gen: "생성하기", btn_exp: "미리보기",
        btn_exp_json: "연구 데이터 JSON", btn_exp_word: "Word 내보내기", btn_exp_txt: "TXT 내보내기", btn_clear_hist: "기록 지우기",
        btn_copy: "복사", btn_copy_txt: "복사", btn_download: "Word 다운로드",
        comp_def: "기본값", comp_top: "가중치 우선", comp_sin: "단일 강조", comp_mul: "다차원 균형",
        pl_search: "검색...", pl_prod_search: "제품 검색...",
        pl_user: "제약 조건 입력 (사용자, 엔지니어링, 시장 또는 디자인 스타일)...", pl_no: "제외어...", pl_note: "메모...",
        txt_wait: "차원을 선택하여 시작하세요.", txt_empty_tit: "합성 준비 완료", txt_chart_empty: "차원을 선택하세요",
        txt_filter: "선호만 보기", txt_syn: "합성 중...", txt_copied: "복사됨!",
        tit_hist: "버전 기록", tit_exp: "내보내기", lbl_rat: "이론적 근거", lbl_gen: "프롬프트", lbl_sum: "요약", btn_close: "닫기",
        "Visual Focus": "시각적 포커스", "Technical Focus": "기술적 포커스", "Scenario Focus": "시나리오 포커스",
        "Version": "버전", "Prefer": "선호", "Neutral": "중립", "Discard": "폐기", "Note": "메모", "Product": "제품",
        "Category": "카테고리",
        txt_emphasis: "강조", txt_weight: "가중치", txt_active_dims: "활성 차원",
        txt_empty_generate: "먼저 차원을 선택하세요.",
        txt_confirm_clear: "모든 버전 기록을 삭제하시겠습니까?",
        txt_render_err: "렌더링 오류. 새로고침하세요.",
        lbl_desc: "정의", lbl_ex: "예시", lbl_ref: "참고문헌",
        cat_supplies: "사무용품", cat_equipment: "사무 장비", cat_furniture: "사무 가구",
        cat_materials: "건축 자재", cat_other: "기타"
    }
};

// ---------- 2. Designverse Office Categories (B2 / 办公类) ----------
// Each item: [zh, en]. English is used for prompt output; zh is UI-friendly label.
const OFFICE_CATEGORIES = [
    {
        key: "cat_supplies",
        items: [
            ["钢笔","Fountain Pen"],["圆珠笔","Ballpoint Pen"],["铅笔","Pencil"],["马克笔","Marker Pen"],
            ["荧光笔","Highlighter"],["记号笔","Permanent Marker"],["签字笔","Signing Pen"],["自动铅笔","Mechanical Pencil"],
            ["文件袋","File Pouch"],["文件夹","File Folder"],["文件盒","File Box"],["文件架","File Rack"],
            ["文件篮","File Basket"],["书信篮","Letter Tray"],["文件标签","File Label"],["文件柜","File Cabinet (Supplies)"],
            ["档案袋","Archive Pouch"],["档案盒","Archive Box"],["卡片袋","Card Holder"],["图纸夹","Drawing Clip"],
            ["证件卡","Badge Card"],["钥匙管理","Key Organizer"],
            ["订书机","Stapler"],["订书针","Staples"],["回形针","Paper Clip"],["裁纸刀","Utility Knife"],
            ["剪刀","Scissors"],["胶水","Glue"],["胶带","Tape"],["封箱胶带","Packing Tape"],
            ["图钉","Push Pin"],["图钉板","Pin Board"],["白板","Whiteboard"],["翻页板","Flip Chart"],
            ["文具盒","Pencil Case"],["票夹","Bill Clip"],
            ["复印纸","Copy Paper"],["打印纸","Printing Paper"],["笔记本","Notebook"],["便签纸","Sticky Note"],
            ["信封","Envelope"],["信纸","Letter Paper"],["封口贴","Seal Sticker"],["标签纸","Label Paper"],
            ["考试用纸","Exam Paper"],["美术纸","Art Paper"],
            ["笔筒","Pen Holder"],["台历架","Calendar Stand"],["书立","Bookend"],["书签","Bookmark"],
            ["台历","Desk Calendar"],["笔记板","Clipboard"],["桌面组织盒","Desk Organizer"],
            ["纸巾盒","Tissue Box"],["垃圾桶","Trash Bin"],
            ["记事本","Memo Pad"],["日历","Calendar"],["计划本","Planner"],["便签本","Sticky Pad"],
            ["索引卡片","Index Card"],["练习簿","Exercise Book"],["清单本","Checklist Pad"],
            ["U盘","USB Flash Drive"],["硬盘","Hard Drive"],["存储卡","Memory Card"]
        ]
    },
    {
        key: "cat_equipment",
        items: [
            ["喷墨打印机","Inkjet Printer"],["激光打印机","Laser Printer"],["多功能一体机","Multifunction Printer"],
            ["复印机","Copier"],["扫描仪","Scanner"],["传真机","Fax Machine"],
            ["裁纸机","Paper Cutter"],["装订机","Binding Machine"],["打孔机","Hole Puncher"],["碎纸机","Paper Shredder"],
            ["投影仪","Projector"],["计算器","Calculator"],
            ["台式电脑","Desktop Computer"],["笔记本电脑","Laptop"],["一体机","All-in-One PC"],
            ["服务器","Server"],["显示器","Monitor"],["键盘","Keyboard"],["鼠标","Office Mouse"],
            ["网络设备","Networking Device"],["UPS","UPS Power Supply"],
            ["电子标签打印机","Label Printer"],["收银机","Cash Register"],
            ["电话机","Desk Phone"],["电话会议设备","Conference Phone"],["视频会议系统","Video Conference System"],
            ["无线通信设备","Wireless Communication Device"],
            ["监控摄像头","Surveillance Camera"],["门禁系统","Access Control System"],
            ["安全警报器","Security Alarm"],["防火墙","Firewall Appliance"],["生物识别设备","Biometric Device"],
            ["医疗设备","Medical Device"],["清洁设备","Cleaning Equipment"],["仓储设备","Warehouse Equipment"],["机器人","Office Robot"]
        ]
    },
    {
        key: "cat_furniture",
        items: [
            ["会议桌","Conference Table"],["会议椅","Conference Chair"],["办公桌","Office Desk"],["办公椅","Office Chair"],
            ["文件柜","File Cabinet"],["书柜","Bookcase"],["储物柜","Storage Cabinet"],["文件架","File Shelf"],
            ["书架","Bookshelf"],["杂志架","Magazine Rack"],["展示架","Display Shelf"],["接待台","Reception Desk"],
            ["办公屏风","Office Partition Screen"],["沙发","Sofa"],["咖啡桌","Coffee Table"],
            ["橱柜","Cupboard"],["隔断墙","Partition Wall"]
        ]
    },
    {
        key: "cat_materials",
        items: [
            ["地毯","Carpet"],["木地板","Wooden Floor"],["瓷砖","Tile"],
            ["石膏板","Gypsum Board"],["石材","Stone Panel"],["玻璃","Glass Panel"],
            ["吊顶板","Ceiling Panel"],["吊顶瓷砖","Ceiling Tile"],
            ["油漆","Paint"],["壁纸","Wallpaper"],
            ["木门","Wooden Door"],["金属门","Metal Door"],["钢化玻璃","Tempered Glass"],
            ["窗框","Window Frame"],["天窗","Skylight"],
            ["窗帘","Curtain"],["百叶窗","Blinds"],["遮阳膜","Sun Film"],
            ["活动隔断","Movable Partition"],["固定隔断","Fixed Partition"],
            ["隔音板","Acoustic Panel"],["吸音地毯","Acoustic Carpet"],["隔音系统","Soundproof System"],
            ["隔热窗帘","Thermal Curtain"],["隔热膜","Thermal Film"],
            ["防水涂料","Waterproof Coating"],["防水膜","Waterproof Membrane"],
            ["电源插座","Power Socket"],["开关","Wall Switch"],
            ["吸顶灯","Ceiling Lamp"],["台灯","Desk Lamp"],
            ["木质装饰板","Wood Decorative Panel"],["装饰石膏板","Decorative Gypsum Board"]
        ]
    },
    {
        key: "cat_other",
        items: [["3D打印机","3D Printer"]]
    }
];

function flatProducts() {
    const out = [];
    OFFICE_CATEGORIES.forEach(cat => cat.items.forEach(([zh, en]) => out.push({ zh, en, catKey: cat.key })));
    return out;
}

// ---------- 3. Dimensions + AHP Weights ----------
const DIM_DATA = {
    parent: {
        "B1 Functional Design":                  { en: "Functional Design",        zh: "功能设计",       ko: "기능 디자인" },
        "B2 User Experience Design":             { en: "User Experience Design",   zh: "用户体验设计",   ko: "사용자 경험 디자인" },
        "B3 Emotional Design":                   { en: "Emotional Design",         zh: "情感设计",       ko: "감성 디자인" },
        "B4 Innovation and User-Driven Design":  { en: "Innovation Design",        zh: "创新设计",       ko: "혁신 디자인" },
        "B5 Market and Brand Adaptation":        { en: "Market Adaptation",        zh: "市场品牌适配",   ko: "시장 브랜드 적응" },
        "B6 Sustainable Design":                 { en: "Sustainable Design",       zh: "可持续设计",     ko: "지속가능 디자인" }
    },
    child: {
        "C1 Usability":               { en: "Usability",               zh: "易用性",       ko: "사용성" },
        "C2 Reliability":             { en: "Reliability",             zh: "可靠性",       ko: "신뢰성" },
        "C3 Safety":                  { en: "Safety",                  zh: "安全性",       ko: "안전성" },
        "C4 Comfort":                 { en: "Comfort",                 zh: "舒适度",       ko: "편안함" },
        "C5 Intuitive Operation":     { en: "Intuitive Operation",     zh: "直觉操作",     ko: "직관적 조작" },
        "C6 Feedback Mechanism":      { en: "Feedback Mechanism",      zh: "反馈机制",     ko: "피드백 메커니즘" },
        "C7 Aesthetics":              { en: "Aesthetics",              zh: "审美性",       ko: "미학" },
        "C8 Emotional Resonance":     { en: "Emotional Resonance",     zh: "情感共鸣",     ko: "감성적 공명" },
        "C9 Customization":           { en: "Customization",           zh: "个性化定制",   ko: "맞춤화" },
        "C10 Innovation":             { en: "Innovation",              zh: "创新性",       ko: "혁신성" },
        "C11 Market Orientation":     { en: "Market Orientation",      zh: "市场导向",     ko: "시장 지향성" },
        "C12 Forward-looking":        { en: "Forward-looking",         zh: "前瞻性",       ko: "미래 지향성" },
        "C13 Market Adaptability":    { en: "Market Adaptability",     zh: "市场适应性",   ko: "시장 적응성" },
        "C14 Brand Identity":         { en: "Brand Identity",          zh: "品牌识别",     ko: "브랜드 정체성" },
        "C15 Inclusiveness":          { en: "Inclusiveness",           zh: "包容性设计",   ko: "포용성" },
        "C16 Longevity":              { en: "Longevity",               zh: "长寿性",       ko: "내구성" },
        "C17 Eco-friendly Materials": { en: "Eco-friendly Materials",  zh: "环保材料",     ko: "친환경 소재" },
        "C18 Production Cost":        { en: "Production Cost",         zh: "生产成本",     ko: "생산 비용" }
    }
};
const DIM_ORDER = [
    { parent: "B1 Functional Design",                 children: ["C1 Usability", "C2 Reliability", "C3 Safety"] },
    { parent: "B2 User Experience Design",            children: ["C4 Comfort", "C5 Intuitive Operation", "C6 Feedback Mechanism"] },
    { parent: "B3 Emotional Design",                  children: ["C7 Aesthetics", "C8 Emotional Resonance", "C9 Customization"] },
    { parent: "B4 Innovation and User-Driven Design", children: ["C10 Innovation", "C11 Market Orientation", "C12 Forward-looking"] },
    { parent: "B5 Market and Brand Adaptation",       children: ["C13 Market Adaptability", "C14 Brand Identity", "C15 Inclusiveness"] },
    { parent: "B6 Sustainable Design",                children: ["C16 Longevity", "C17 Eco-friendly Materials", "C18 Production Cost"] }
];
// --- AHP global relative weights (single source of truth; UI never displays numerically) ---
const WEIGHTS = {
    "C1 Usability": 0.064, "C2 Reliability": 0.053, "C3 Safety": 0.048,
    "C4 Comfort": 0.083, "C5 Intuitive Operation": 0.074, "C6 Feedback Mechanism": 0.063,
    "C7 Aesthetics": 0.112, "C8 Emotional Resonance": 0.090, "C9 Customization": 0.077,
    "C10 Innovation": 0.045, "C11 Market Orientation": 0.038, "C12 Forward-looking": 0.049,
    "C13 Market Adaptability": 0.035, "C14 Brand Identity": 0.028, "C15 Inclusiveness": 0.029,
    "C16 Longevity": 0.031, "C17 Eco-friendly Materials": 0.040, "C18 Production Cost": 0.040
};
const PARENT_WEIGHTS = {
    "B1 Functional Design": 0.165,
    "B2 User Experience Design": 0.2199,
    "B3 Emotional Design": 0.2795,
    "B4 Innovation and User-Driven Design": 0.1327,
    "B5 Market and Brand Adaptation": 0.0915,
    "B6 Sustainable Design": 0.1114
};
function priorityTier(code) {
    const w = WEIGHTS[code] || 0;
    if (w >= 0.085) return "core";
    if (w >= 0.06)  return "high";
    if (w >= 0.04)  return "medium";
    return "low";
}
const TIER_DOT = { core: "bg-red-500", high: "bg-orange-400", medium: "bg-blue-400", low: "bg-slate-400 dark:bg-slate-600" };

// ---------- 4. Dimension descriptions (tooltip content) ----------
const DIM_DESC = {
    "C1 Usability": { desc:"强调产品在核心任务上的可用程度与效率，关注是否好用、顺手、少出错。", ex:"例：明确的左右键分区与滚轮阻尼，减少误触并提升点击准确性。", ref:"[ref]" },
    "C2 Reliability": { desc:"强调结构与性能稳定性，关注长期使用是否可靠、是否容易失效。", ex:"例：按键寿命与滚轮结构加固，避免松动与回弹失真。", ref:"[ref]" },
    "C3 Safety": { desc:"强调使用风险控制与安全感，包括材料安全与误操作风险。", ex:"例：圆角过渡、防夹缝设计或防滑纹理降低滑落风险。", ref:"[ref]" },
    "C4 Comfort": { desc:"强调人体接触与持续使用的舒适体验，关注疲劳与负担。", ex:"例：掌托曲面与软触涂层降低长时间使用的手部压迫。", ref:"[ref]" },
    "C5 Intuitive Operation": { desc:"强调无需学习即可理解的操作逻辑与布局可读性。", ex:"例：关键按钮位置符合直觉，功能分区清晰且一眼可识别。", ref:"[ref]" },
    "C6 Feedback Mechanism": { desc:"强调操作反馈与状态可见性，减少不确定感。", ex:"例：指示灯/触觉回弹/声学提示让用户确认已触发或当前模式。", ref:"[ref]" },
    "C7 Aesthetics": { desc:"强调形态、比例、材质与细节带来的审美质量与视觉协调性。", ex:"例：简洁轮廓线与统一材质语言形成高级感与秩序感。", ref:"[ref]" },
    "C8 Emotional Resonance": { desc:"强调情绪与身份层面的共鸣感，塑造亲和、愉悦或信赖感受。", ex:"例：柔和形态与温和色彩营造友好、治愈的情感印象。", ref:"[ref]" },
    "C9 Customization": { desc:"强调可个性化与可调节能力，使产品适配不同偏好与情境。", ex:"例：可更换外壳/模块化按键/多配置档位支持用户自定义。", ref:"[ref]" },
    "C10 Innovation": { desc:"强调形态、交互或功能上的新颖方案，体现差异化与突破。", ex:"例：触控环/手势区等新交互或独特结构带来新体验。", ref:"[ref]" },
    "C11 Market Orientation": { desc:"强调目标人群与市场定位匹配，体现受众适配与产品定位。", ex:"例：针对年轻办公人群的极简科技风与高频办公功能组合。", ref:"[ref]" },
    "C12 Forward-looking": { desc:"强调未来趋势与长期价值导向，体现对未来场景与技术演进的预判。", ex:"例：为混合办公加入可扩展接口或更前瞻的交互语言。", ref:"[ref]" },
    "C13 Market Adaptability": { desc:"强调跨场景与跨市场的通用性与可迁移性，便于推广。", ex:"例：在家庭办公/共享办公/企业办公中保持一致体验与外观语言。", ref:"[ref]" },
    "C14 Brand Identity": { desc:"强调与品牌识别系统一致，通过造型语言与细节建立辨识度。", ex:"例：延续品牌标志性线条、配色或结构比例。", ref:"[ref]" },
    "C15 Inclusiveness": { desc:"强调对不同能力与人群差异的包容性，提升可达性与公平使用。", ex:"例：左右手通用、不同手型可握持、视觉/触觉提示兼顾。", ref:"[ref]" },
    "C16 Longevity": { desc:"强调耐久与生命周期价值，关注耐磨损、可维护与长期稳定使用。", ex:"例：可更换部件、耐磨表面与抗污材料延长使用寿命。", ref:"[ref]" },
    "C17 Eco-friendly Materials": { desc:"强调材料选择的环境影响，关注可回收、低碳或可持续材料策略。", ex:"例：使用再生塑料/生物基材料或减少混材以提升回收效率。", ref:"[ref]" },
    "C18 Production Cost": { desc:"强调制造与成本可行性，关注结构易生产、装配效率与成本控制。", ex:"例：减少复杂曲面与零件数量，采用标准件降低装配与模具成本。", ref:"[ref]" }
};

// --- Dimension → prompt clauses (Visual / Technical / Scenario) ---
const DIM_CLAUSES = {
    "C1 Usability":              { visual: "intuitive shape language with unambiguous touch targets", technical: "ergonomic control placement with single-grip operation and a near-zero learning curve", scenario: "a first-time user picks it up and immediately knows what to do" },
    "C2 Reliability":            { visual: "solid mechanical stance and premium build cues",           technical: "reinforced joints, durable materials, high MTBF construction",                          scenario: "it survives daily office wear for years without failure" },
    "C3 Safety":                 { visual: "rounded edges and calm, non-aggressive silhouette",        technical: "certified safe materials, no sharp protrusions, stable base",                           scenario: "the user feels safe during prolonged contact and operation" },
    "C4 Comfort":                { visual: "soft contours tailored to hand and posture",               technical: "anthropometric contours, balanced weight distribution, cushioned touchpoints",          scenario: "an 8-hour workday remains comfortable and fatigue-free" },
    "C5 Intuitive Operation":    { visual: "visually obvious controls with clear visual hierarchy",    technical: "self-explanatory controls, no hidden state, mapping that matches user expectation",     scenario: "the user operates it by instinct, without reading any manual" },
    "C6 Feedback Mechanism":     { visual: "subtle light and indicator cues integrated into form",     technical: "tactile click, audible cue, or LED feedback confirming each action",                   scenario: "every action answers the user with a clear confirmation" },
    "C7 Aesthetics":             { visual: "refined proportions, clean geometric language, high visual appeal", technical: "consistent design language across all surfaces, tight panel gaps, premium finish", scenario: "users place it visibly on the desk because it simply looks beautiful" },
    "C8 Emotional Resonance":    { visual: "warm material pairings and an inviting silhouette",        technical: "tactile materials selected to evoke calm, focus, and trust",                            scenario: "the object feels like a companion the user genuinely enjoys using" },
    "C9 Customization":          { visual: "modular visual parts and interchangeable colorways",       technical: "swappable modules and user-configurable components",                                    scenario: "each user configures it to match their own workflow and taste" },
    "C10 Innovation":            { visual: "unconventional silhouette that clearly departs from convention", technical: "novel mechanism or configuration unseen in existing products",                 scenario: "users feel they are using tomorrow's tool today" },
    "C11 Market Orientation":    { visual: "contemporary visual language with broad appeal",           technical: "aligned with current market-segment expectations and price tier",                       scenario: "immediately recognized as desirable by its target buyer" },
    "C12 Forward-looking":       { visual: "futuristic form cues, minimal but technical",              technical: "anticipates future workflows with upgrade-ready hardware",                              scenario: "it remains relevant five years from now without feeling dated" },
    "C13 Market Adaptability":   { visual: "neutral visual language adaptable to varied contexts",     technical: "modular SKUs for different markets and price tiers",                                    scenario: "fits equally well in home, small office, and enterprise settings" },
    "C14 Brand Identity":        { visual: "distinct brand signature mark and recognizable silhouette", technical: "coherent with a brand CMF system and consistent brand cues",                          scenario: "a user spots the brand from across the room" },
    "C15 Inclusiveness":         { visual: "accessible color contrast and readable iconography",       technical: "universal design supporting varying abilities and left/right-handed use",               scenario: "equally usable by users of different ages and abilities" },
    "C16 Longevity":             { visual: "timeless silhouette that avoids fleeting trends",          technical: "repairable and upgradeable with replaceable parts",                                     scenario: "kept and used for a decade instead of replaced in a year" },
    "C17 Eco-friendly Materials":{ visual: "honest material expression with visible recycled texture", technical: "recycled or bio-based materials with low-carbon production",                            scenario: "users feel good about its environmental footprint" },
    "C18 Production Cost":       { visual: "simple forms optimized for cost-effective production",     technical: "DFM-friendly parting lines, shared tooling, minimal assembly steps",                    scenario: "affordable to produce at scale without ever feeling cheap" }
};
const TEMPLATES = [
    { id: 'visual',    title: "Visual Focus",    suffix: "studio high-end lighting, minimalist, clean background, product photography" },
    { id: 'technical', title: "Technical Focus", suffix: "technical illustration, orthographic projection, engineering blueprint style" },
    { id: 'scenario',  title: "Scenario Focus",  suffix: "real-world context, natural lighting, candid lifestyle photography" }
];

// ---------- 5. Storage ----------
const STORAGE = { history: 'dimprompt.history.v2', prefs: 'dimprompt.prefs.v2' };
let versionHistory = [];
const PROMPT_CACHE = {};
function saveHistory() { try { localStorage.setItem(STORAGE.history, JSON.stringify(versionHistory)); } catch (e) {} }
function loadHistory() {
    try {
        const raw = localStorage.getItem(STORAGE.history);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) versionHistory = parsed;
    } catch (e) { versionHistory = []; }
}
function savePrefs() {
    try {
        const topkInput = document.getElementById('topk-input');
        const prefs = {
            lang: currentLang,
            topK: topkInput ? (parseInt(topkInput.value, 10) || 5) : 5,
            productType: (document.getElementById('product-type') || {}).value || '',
            compMode: (document.querySelector('input[name="composition-mode"]:checked') || {}).value || 'Default (Implicit)'
        };
        localStorage.setItem(STORAGE.prefs, JSON.stringify(prefs));
    } catch (e) {}
}
function loadPrefs() {
    try { const raw = localStorage.getItem(STORAGE.prefs); return raw ? (JSON.parse(raw) || {}) : {}; }
    catch (e) { return {}; }
}

// ---------- 6. Helpers ----------
function t(key) { return (i18n[currentLang] && i18n[currentLang][key]) || key; }
function esc(s) {
    if (s === null || s === undefined) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function childDisplayName(code) {
    // Strip "Cxx " prefix; show localized child name only (no code).
    const meta = DIM_DATA.child[code];
    if (meta && meta[currentLang]) return meta[currentLang];
    return code.replace(/^C\d+\s+/, '');
}
function parentDisplayName(parentCode) {
    const meta = DIM_DATA.parent[parentCode];
    if (meta && meta[currentLang]) return meta[currentLang];
    return parentCode.replace(/^B\d+\s+/, '');
}
function productEnglish(value) {
    // value stored as zh item name; return English mapping if known
    for (const cat of OFFICE_CATEGORIES) {
        for (const [zh, en] of cat.items) {
            if (value === zh || value === en) return en;
        }
    }
    return value;
}

// ---------- 7. Chart ----------
let radarChart;
function initChart() {
    try {
        const ctx = document.getElementById('radarChart');
        if (!ctx || typeof Chart === 'undefined') return;
        radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: DIM_ORDER.map(g => parentDisplayName(g.parent).split(/\s|·/)[0]),
                datasets: [{ data: [0,0,0,0,0,0], backgroundColor: 'rgba(99, 102, 241, 0.4)', borderColor: '#818cf8', borderWidth: 1.5, pointRadius: 0 }]
            },
            options: { responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { r: { min: 0, max: 1, ticks: { display: false, stepSize: 0.25 }, grid: { color: 'rgba(255,255,255,0.08)' }, angleLines: { color: 'rgba(255,255,255,0.12)' }, pointLabels: { color: 'rgba(255,255,255,0.6)', font: { size: 8 } } } }
            }
        });
    } catch (e) { console.warn('initChart failed', e); }
}
function updateChart() {
    if (!radarChart) return;
    try {
        const checked = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
        const emptyEl = document.getElementById('chart-empty');
        if (emptyEl) emptyEl.style.opacity = checked.length ? '0' : '1';
        const weighted = DIM_ORDER.map(g => {
            const sel = checked.filter(c => g.children.includes(c));
            const sum = sel.reduce((a, c) => a + (WEIGHTS[c] || 0), 0);
            const pw = PARENT_WEIGHTS[g.parent] || 1;
            return Math.min(1, sum / pw);
        });
        radarChart.data.datasets[0].data = weighted;
        radarChart.update();
    } catch (e) { console.warn('updateChart failed', e); }
}

// ---------- 8. Product selector (search + grouped select) ----------
function renderProductSelector(term) {
    const sel = document.getElementById('product-type');
    if (!sel) return;
    const prev = sel.value;
    const q = (term || '').trim().toLowerCase();
    sel.innerHTML = '';
    let first = null;
    OFFICE_CATEGORIES.forEach(cat => {
        const filtered = cat.items.filter(([zh, en]) =>
            !q || zh.toLowerCase().includes(q) || en.toLowerCase().includes(q) || t(cat.key).toLowerCase().includes(q)
        );
        if (!filtered.length) return;
        const og = document.createElement('optgroup');
        og.label = t(cat.key);
        filtered.forEach(([zh, en]) => {
            const opt = document.createElement('option');
            opt.value = zh;
            opt.textContent = currentLang === 'en' ? en : (currentLang === 'zh' ? zh : `${zh} / ${en}`);
            og.appendChild(opt);
            if (!first) first = zh;
        });
        sel.appendChild(og);
    });
    if (!sel.options.length) {
        const opt = document.createElement('option');
        opt.value = ''; opt.textContent = '—';
        sel.appendChild(opt);
    }
    const allowed = Array.from(sel.options).some(o => o.value === prev);
    sel.value = allowed ? prev : (first || '');
    savePrefs();
}
function filterProducts() {
    const el = document.getElementById('product-search');
    renderProductSelector(el ? el.value : '');
}

// ---------- 9. Dimension rendering ----------
function renderDimensions() {
    const container = document.getElementById('dimensions-container');
    if (!container) return;
    try {
        const checkedSet = new Set(Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value));
        let html = '';
        DIM_ORDER.forEach(group => {
            const gid = group.parent.replace(/[^a-zA-Z0-9]/g, '-');
            const parentLabel = parentDisplayName(group.parent);
            const childrenHtml = group.children.map(code => {
                const tier = priorityTier(code);
                const labelText = childDisplayName(code);
                const isChecked = checkedSet.has(code);
                return `
                <label class="dim-item-container prio-${tier} flex items-center gap-3 cursor-pointer rounded-xl py-2.5 pr-3 transition-all"
                       data-name="${esc(code)}" data-search="${esc((code + ' ' + labelText).toLowerCase())}">
                    <input type="checkbox" value="${esc(code)}"
                           class="dim-checkbox child-cb-${gid} w-4 h-4 rounded border-slate-300 dark:border-slate-700 accent-indigo-500 flex-shrink-0"
                           data-gid="${gid}" ${isChecked ? 'checked' : ''}>
                    <span class="priority-dot w-2.5 h-2.5 rounded-full ${TIER_DOT[tier]}"></span>
                    <span class="text-[11px] font-bold flex-1 truncate text-slate-700 dark:text-slate-300">${esc(labelText)}</span>
                    <button type="button" class="dim-info-btn" data-dim-info="${esc(code)}" aria-label="info" tabindex="-1">?</button>
                </label>`;
            }).join('');
            html += `
            <div id="card-${gid}" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all shadow-sm">
                <div class="flex items-center justify-between bg-slate-50 dark:bg-slate-800/30 p-4">
                    <div class="flex items-center gap-3">
                        <input type="checkbox" id="group-${gid}" class="w-4 h-4 accent-indigo-500" data-group-for="${gid}">
                        <label class="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 cursor-pointer" data-folder-toggle="${gid}">${esc(parentLabel)}</label>
                    </div>
                    <button data-folder-toggle="${gid}" id="arrow-${gid}" class="text-slate-400 dark:text-slate-500 rotate-180 transition-transform" aria-label="toggle">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"></path></svg>
                    </button>
                </div>
                <div id="content-${gid}" class="dim-group-content grid grid-cols-1 md:grid-cols-2 gap-1 p-3 border-t border-slate-100 dark:border-slate-800/50">${childrenHtml}</div>
            </div>`;
        });
        container.innerHTML = html;
        DIM_ORDER.forEach(g => updateGroupState(g.parent.replace(/[^a-zA-Z0-9]/g, '-')));
    } catch (err) {
        console.error('renderDimensions failed:', err);
        container.innerHTML = `<div class="render-error">${esc(t('txt_render_err'))}<br><code style="font-size:10px">${esc(String(err && err.message || err))}</code></div>`;
    }
}

// ---------- 10. Tooltip for dimension info ----------
let tooltipHideTimer = null;
function showDimTooltip(code, anchor) {
    const tip = document.getElementById('dim-tooltip');
    if (!tip) return;
    const info = DIM_DESC[code];
    if (!info) return;
    const title = childDisplayName(code);
    tip.innerHTML = `
        <div class="dt-title">${esc(title)}</div>
        <div class="dt-row"><span class="dt-label">${esc(t('lbl_desc'))}</span><span class="dt-text">${esc(info.desc)}</span></div>
        <div class="dt-row"><span class="dt-label">${esc(t('lbl_ex'))}</span><span class="dt-text">${esc(info.ex)}</span></div>
        <div class="dt-row"><span class="dt-label">${esc(t('lbl_ref'))}</span><span class="dt-text dt-ref">${esc(info.ref)}</span></div>
    `;
    tip.setAttribute('aria-hidden', 'false');
    tip.classList.add('show');
    const r = anchor.getBoundingClientRect();
    const pad = 8;
    // measure after show
    const tw = tip.offsetWidth || 280;
    const th = tip.offsetHeight || 120;
    let left = r.right + pad;
    let top  = r.top - 4;
    if (left + tw > window.innerWidth - 8) left = r.left - tw - pad;
    if (left < 8) left = 8;
    if (top + th > window.innerHeight - 8) top = window.innerHeight - th - 8;
    if (top < 8) top = 8;
    tip.style.left = left + 'px';
    tip.style.top  = top + 'px';
}
function hideDimTooltip() {
    const tip = document.getElementById('dim-tooltip');
    if (!tip) return;
    tip.classList.remove('show');
    tip.setAttribute('aria-hidden', 'true');
}

// ---------- 11. Language switch ----------
function changeLanguage() {
    try {
        const langSel = document.getElementById('lang-switch');
        if (langSel) currentLang = langSel.value || 'en';
    } catch (e) {}
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        const v = i18n[currentLang] && i18n[currentLang][k];
        if (v) { el.tagName === 'OPTION' ? el.text = v : el.innerText = v; }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        const v = i18n[currentLang] && i18n[currentLang][k];
        if (v) el.placeholder = v;
    });
    renderDimensions();
    filterProducts();
    if (radarChart) {
        radarChart.data.labels = DIM_ORDER.map(g => parentDisplayName(g.parent).split(/\s|·/)[0]);
        radarChart.update();
    }
    if (versionHistory.length) renderVersionHistory();
    savePrefs();
}

// ---------- 12. Prompt generation (AHP-weighted) ----------
function getTopK() {
    const el = document.getElementById('topk-input');
    const v = el ? parseInt(el.value, 10) : 5;
    if (!Number.isFinite(v) || v < 1) return 5;
    return Math.min(v, 18);
}
function buildPrompt(tpl, productType, dims, coreText, constraints, params) {
    const clauses = dims.map(d => (DIM_CLAUSES[d] && DIM_CLAUSES[d][tpl.id]) || d).join('; ');
    const parts = [
        `Imagine a ${productType} design.`,
        coreText || '',
        clauses ? `Key qualities: ${clauses}.` : '',
        constraints ? `Constraints: ${constraints}.` : '',
        tpl.suffix + '.',
        `--v ${params.v} --ar ${params.ar} --s ${params.s} --q ${params.q}` + (params.raw ? ' --raw' : '') + (params.no ? ` --no ${params.no}` : '')
    ];
    return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}
function generatePrompt() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    if (!sel.length) { showToast(t('txt_empty_generate')); return; }
    document.getElementById('initial-placeholder').classList.add('hidden');
    document.getElementById('skeleton-loader').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('skeleton-loader').classList.add('hidden');
        const res = document.getElementById('results-container');
        res.classList.remove('hidden'); res.innerHTML = '';
        const vn = versionHistory.length + 1;
        const prodValue = document.getElementById('product-type').value;
        const prodForPrompt = productEnglish(prodValue);
        const prodDisplay = prodValue;
        const compMode = document.querySelector('input[name="composition-mode"]:checked').value;
        const constr = document.getElementById('const-all').value.trim();
        const params = {
            v:   document.getElementById('param-v').value,
            ar:  document.getElementById('param-ar').value,
            s:   document.getElementById('param-s').value,
            q:   document.getElementById('param-q').value,
            raw: document.getElementById('param-raw').checked,
            no:  document.getElementById('param-no').value.trim()
        };
        const sortByW = (a, b) => (WEIGHTS[b] || 0) - (WEIGHTS[a] || 0);
        let processed = [...sel];
        let coreText = '';
        let emphasis = null;
        const K = getTopK();
        // active dimension names for prompt text (no codes)
        const nameOf = c => (DIM_DATA.child[c] && DIM_DATA.child[c].en) || c.replace(/^C\d+\s+/, '');
        if (compMode === 'Top-K Priority') {
            processed = [...sel].sort(sortByW).slice(0, K);
            coreText = `Prioritized focus (Top-${processed.length}): ${processed.map(nameOf).join(', ')}.`;
        } else if (compMode === 'Single-Dimension Emphasis') {
            processed = [[...sel].sort(sortByW)[0]];
            emphasis = processed[0];
            coreText = `Strongly emphasize [${nameOf(emphasis)}]; other qualities remain subordinate.`;
        } else if (compMode === 'Multi-Dimension Balance') {
            const byParent = {};
            sel.forEach(d => {
                const grp = DIM_ORDER.find(gr => gr.children.includes(d));
                if (!grp) return;
                (byParent[grp.parent] = byParent[grp.parent] || []).push(d);
            });
            const balanced = [];
            Object.keys(byParent).forEach(p => { byParent[p].sort(sortByW); balanced.push(byParent[p][0]); });
            processed = balanced.sort(sortByW);
            coreText = `Balanced coverage across ${processed.length} dimensions: ${processed.map(nameOf).join(', ')}.`;
        } else {
            processed = [...sel].sort(sortByW);
            coreText = `Dimensions included (${processed.length}): ${processed.map(nameOf).join(', ')}.`;
        }
        const compactPrompts = {};
        TEMPLATES.forEach(tpl => {
            const pText = buildPrompt(tpl, prodForPrompt, processed, coreText, constr, params);
            const key = `v${vn}-${tpl.id}`;
            PROMPT_CACHE[key] = pText;
            const emphasisBadge = emphasis ? `<span class="emphasis-badge ml-3">${esc(t('txt_emphasis'))}: ${esc(nameOf(emphasis))}</span>` : '';
            compactPrompts[tpl.id] = { text: pText, eval: null, title: tpl.title };
            res.innerHTML += `
                <div class="result-card">
                    <div class="flex justify-between items-center mb-8 gap-4 flex-wrap">
                        <h2 class="text-2xl font-black italic tracking-tighter text-indigo-600 dark:text-indigo-400 uppercase leading-none flex items-center">${esc(t(tpl.title))} ${emphasisBadge}</h2>
                        <div class="flex bg-slate-100 dark:bg-black/40 rounded-2xl p-1 gap-1 border border-slate-200 dark:border-slate-800 shadow-inner">
                            <button data-eval="Prefer"  data-version="${vn}" data-tpl="${tpl.id}" id="btn-${vn}-${tpl.id}-Prefer"  class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">${esc(t('Prefer'))}</button>
                            <button data-eval="Neutral" data-version="${vn}" data-tpl="${tpl.id}" id="btn-${vn}-${tpl.id}-Neutral" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">${esc(t('Neutral'))}</button>
                            <button data-eval="Discard" data-version="${vn}" data-tpl="${tpl.id}" id="btn-${vn}-${tpl.id}-Discard" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">${esc(t('Discard'))}</button>
                        </div>
                    </div>
                    <div class="result-code text-[14px] font-mono p-6 rounded-3xl break-words leading-relaxed relative group shadow-inner">
                        <pre class="whitespace-pre-wrap break-words m-0 font-mono text-[13px]">${esc(pText)}</pre>
                        <button class="copy-btn absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl transition-all" data-copy-key="${key}">${esc(t('btn_copy'))}</button>
                    </div>
                    <div class="result-summary p-6 rounded-2xl mt-6 space-y-3">
                        <span class="text-[10px] font-black text-slate-500 uppercase block mb-2 border-b border-slate-200 dark:border-slate-800 pb-2">${esc(t('lbl_sum'))}</span>
                        <div class="grid grid-cols-2 gap-y-3 text-[11px] font-bold">
                            <div class="flex justify-between px-4"><span class="text-slate-500">${esc(t('Product'))}:</span><span class="text-slate-900 dark:text-white">${esc(prodDisplay)}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-500">${esc(t('lbl_comp'))}:</span><span class="text-slate-900 dark:text-white">${esc(compMode.split('(')[0].trim())}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-500">${esc(t('txt_active_dims'))}:</span><span class="text-slate-900 dark:text-white">${processed.length}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-500">Config:</span><span class="text-indigo-600 dark:text-indigo-400">v${esc(params.v)} / ${esc(params.ar)} / s${esc(params.s)}</span></div>
                        </div>
                    </div>
                </div>`;
        });
        versionHistory.push({
            version: vn, timestamp: new Date().toISOString(), timestampDisplay: new Date().toLocaleString(),
            productType: prodDisplay, productEN: prodForPrompt, compMode,
            topK: compMode === 'Top-K Priority' ? K : null,
            emphasis, selectedDimensions: sel, activeDimensions: processed,
            // keep numeric weights in data (for export/research JSON) but never render in UI
            weights: processed.reduce((m, d) => { m[d] = WEIGHTS[d] || 0; return m; }, {}),
            constraints: constr, params, prompts: compactPrompts, note: ""
        });
        saveHistory();
        renderVersionHistory();
        document.getElementById('history-section').classList.remove('hidden');
    }, 400);
}

// ---------- 13. Evaluation + history ----------
function setEval(vn, id, ev) {
    const v = versionHistory.find(h => h.version === vn);
    if (!v || !v.prompts[id]) return;
    v.prompts[id].eval = ev;
    saveHistory();
    document.querySelectorAll(`[id^="btn-${vn}-${id}"]`).forEach(b => b.classList.remove('active-prefer','active-neutral','active-discard'));
    const target = document.getElementById(`btn-${vn}-${id}-${ev}`);
    if (target) target.classList.add(`active-${ev.toLowerCase()}`);
    renderVersionHistory();
}
function renderVersionHistory() {
    const hc = document.getElementById('history-container');
    const fpEl = document.getElementById('filter-prefer');
    const fp = fpEl ? fpEl.checked : false;
    if (!hc) return;
    hc.innerHTML = '';
    if (!versionHistory.length) { document.getElementById('history-section').classList.add('hidden'); return; }
    document.getElementById('history-section').classList.remove('hidden');
    [...versionHistory].reverse().forEach(v => {
        if (fp && !Object.values(v.prompts || {}).some(p => p.eval === 'Prefer')) return;
        const ph = Object.entries(v.prompts || {}).map(([id, da]) => {
            if (fp && da.eval !== 'Prefer') return '';
            const activeClass = da.eval ? `active-${da.eval.toLowerCase()}` : '';
            const key = `hist-v${v.version}-${id}`;
            PROMPT_CACHE[key] = da.text;
            return `<div class="history-prompt-card mb-4 p-4 rounded-2xl relative group">
                <div class="flex justify-between items-center text-[10px] font-black text-slate-500 mb-2 uppercase">
                    <span>${esc(t(da.title))}</span>
                    <div class="flex items-center gap-2">
                        <span class="eval-btn text-[9px] px-2 py-0.5 rounded ${activeClass}">${esc(t(da.eval||'—'))}</span>
                        <button class="copy-btn bg-indigo-600/80 hover:bg-indigo-500 text-white text-[9px] font-black px-3 py-1 rounded-md transition-all" data-copy-key="${key}">${esc(t('btn_copy'))}</button>
                    </div>
                </div>
                <pre class="text-[11px] text-slate-600 dark:text-slate-400 font-mono whitespace-pre-wrap break-words m-0">${esc(da.text)}</pre>
            </div>`;
        }).join('');
        const activeNames = (v.activeDimensions || []).map(c => (DIM_DATA.child[c] && DIM_DATA.child[c][currentLang]) || c.replace(/^C\d+\s+/, '')).join(' · ');
        const emphasisLine = v.emphasis ? ` · ${esc(t('txt_emphasis'))}: ${esc((DIM_DATA.child[v.emphasis] && DIM_DATA.child[v.emphasis][currentLang]) || v.emphasis.replace(/^C\d+\s+/, ''))}` : '';
        const kLine = v.topK ? ` · K=${v.topK}` : '';
        const stamp = v.timestampDisplay || v.timestamp || '';
        hc.innerHTML += `<details open class="history-card group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 mb-6 shadow-sm">
            <summary class="cursor-pointer flex justify-between items-center font-black uppercase italic text-slate-600 dark:text-slate-400 tracking-tighter outline-none flex-wrap gap-2">
                <span>${esc(t('Version'))} ${v.version} — ${esc(stamp)}</span>
                <span class="text-[10px] not-italic text-slate-500 normal-case tracking-wide">${esc(v.productType)} · ${esc(v.compMode.split('(')[0].trim())}${kLine}${emphasisLine}</span>
            </summary>
            <div class="pt-6">
                <div class="history-meta text-[10px] text-slate-500 mb-3">${esc(t('txt_active_dims'))}: ${esc(activeNames)}</div>
                <input type="text" class="history-note-input w-full rounded-xl px-4 py-2 text-xs mb-4 outline-none"
                    placeholder="${esc(t('pl_note'))}" value="${esc(v.note || '')}" data-note-version="${v.version}">
                ${ph}
            </div>
        </details>`;
    });
}

// ---------- 14. Utilities ----------
function updateNote(vn, val) { const v = versionHistory.find(h => h.version === vn); if (v) { v.note = val; saveHistory(); } }
function toggleFolder(gid) {
    const c = document.getElementById(`content-${gid}`); const a = document.getElementById(`arrow-${gid}`);
    if (c) c.classList.toggle('collapsed'); if (a) a.classList.toggle('rotate-180');
}
function toggleMode() {
    const container = document.getElementById('dimensions-container');
    const mode = document.getElementById('system-mode');
    if (!container || !mode) return;
    container.classList.toggle('hide-priorities', mode.value === 'free');
}
function updateGroupState(gid) {
    const c = document.querySelectorAll(`.child-cb-${gid}`);
    const g = document.getElementById(`group-${gid}`);
    const cc = Array.from(c).filter(i => i.checked).length;
    if (g) { g.checked = cc === c.length && c.length > 0; g.indeterminate = cc > 0 && cc < c.length; }
    updateChart();
}
function toggleGroup(gcb, gid) {
    document.querySelectorAll(`.child-cb-${gid}`).forEach(cb => { cb.checked = gcb.checked; });
    updateGroupState(gid);
}
function filterDimensions() {
    const term = ((document.getElementById('dim-search') || {}).value || '').toLowerCase();
    document.querySelectorAll('.dim-item-container').forEach(el => {
        const s = (el.getAttribute('data-search') || el.getAttribute('data-name') || '').toLowerCase();
        el.style.display = s.includes(term) ? 'flex' : 'none';
    });
}
function resetAll() {
    document.querySelectorAll('.dim-checkbox').forEach(cb => cb.checked = false);
    const c = document.getElementById('const-all'); if (c) c.value = '';
    DIM_ORDER.forEach(g => updateGroupState(g.parent.replace(/[^a-zA-Z0-9]/g, '-')));
    updateChart();
}
function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }
function showToast(msg) {
    const el = document.getElementById('toast'); if (!el) return;
    el.textContent = msg; el.classList.add('show');
    clearTimeout(el._timer); el._timer = setTimeout(() => el.classList.remove('show'), 1600);
}

// ---------- 15. Clipboard ----------
async function copyText(text, btn) {
    const flash = () => {
        if (btn) {
            const orig = btn.textContent;
            btn.textContent = t('txt_copied'); btn.classList.add('copied');
            setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1200);
        }
        showToast(t('txt_copied'));
    };
    // 1) Clipboard API (HTTPS only)
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text); flash(); return true;
        }
    } catch (e) {}
    // 2) execCommand fallback
    try {
        const ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', '');
        ta.style.position = 'fixed'; ta.style.top = '0'; ta.style.left = '-9999px'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        if (ok) { flash(); return true; }
    } catch (e) {}
    // 3) Last resort: manual prompt
    try { window.prompt('Copy the prompt manually (Ctrl/Cmd+C):', text); showToast('Copy manually'); } catch (e) {}
    return false;
}

// ---------- 16. Export ----------
function buildVersionTXT(v) {
    const lines = [];
    lines.push(`DimPrompt — Version ${v.version}`);
    lines.push(`Timestamp: ${v.timestampDisplay || v.timestamp}`);
    lines.push(`Product: ${v.productType}${v.productEN && v.productEN !== v.productType ? ' (' + v.productEN + ')' : ''}`);
    lines.push(`Mode: ${document.getElementById('system-mode') ? document.getElementById('system-mode').value : 'recommend'}`);
    lines.push(`Strategy: ${v.compMode}`);
    if (v.topK) lines.push(`Top-K: ${v.topK}`);
    if (v.emphasis) {
        const eName = (DIM_DATA.child[v.emphasis] && DIM_DATA.child[v.emphasis].en) || v.emphasis.replace(/^C\d+\s+/, '');
        lines.push(`Emphasis: ${eName}`);
    }
    const toNames = arr => (arr || []).map(c => (DIM_DATA.child[c] && DIM_DATA.child[c].en) || c.replace(/^C\d+\s+/, '')).join(', ');
    lines.push(`Selected dimensions (${(v.selectedDimensions || []).length}): ${toNames(v.selectedDimensions)}`);
    lines.push(`Active dimensions (${(v.activeDimensions || []).length}): ${toNames(v.activeDimensions)}`);
    lines.push(`Parameters: v${v.params.v} / ar ${v.params.ar} / s ${v.params.s} / q ${v.params.q}${v.params.raw ? ' / raw' : ''}${v.params.no ? ' / no ' + v.params.no : ''}`);
    lines.push(`Constraints: ${v.constraints || '-'}`);
    lines.push(`Note: ${v.note || '-'}`);
    lines.push('');
    lines.push('--- Prompts ---');
    ['visual','technical','scenario'].forEach(id => {
        const p = (v.prompts || {})[id];
        if (!p) return;
        lines.push('');
        lines.push(`## ${p.title} (${p.eval || '—'})`);
        lines.push(p.text);
    });
    return lines.join('\n');
}
function buildAllTXT() {
    return versionHistory.map(v => buildVersionTXT(v)).join('\n\n==============================\n\n');
}
function buildVersionHTML(v) {
    const toNames = arr => (arr || []).map(c => (DIM_DATA.child[c] && DIM_DATA.child[c].en) || c.replace(/^C\d+\s+/, '')).join(', ');
    const promptBlocks = ['visual','technical','scenario'].map(id => {
        const p = (v.prompts || {})[id]; if (!p) return '';
        return `<div style="margin-bottom:24px;padding:15px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;">
            <h3 style="margin-top:0;color:#1e293b;">${esc(p.title)} ${p.eval ? `<span style="color:#10b981;">[${esc(p.eval)}]</span>` : ''}</h3>
            <pre style="font-family:'Courier New',Courier,monospace;background:#fff;padding:12px;border:1px solid #cbd5e1;border-radius:4px;white-space:pre-wrap;word-break:break-word;">${esc(p.text)}</pre>
        </div>`;
    }).join('');
    const eName = v.emphasis ? ((DIM_DATA.child[v.emphasis] && DIM_DATA.child[v.emphasis].en) || v.emphasis.replace(/^C\d+\s+/, '')) : '';
    return `<h2 style="color:#4f46e5;border-bottom:1px solid #c7d2fe;padding-bottom:6px;">Version ${v.version}</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:30%;">Timestamp</td><td style="padding:8px;border:1px solid #ddd;">${esc(v.timestampDisplay || v.timestamp)}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Product</td><td style="padding:8px;border:1px solid #ddd;">${esc(v.productType)}${v.productEN && v.productEN !== v.productType ? ' <i>(' + esc(v.productEN) + ')</i>' : ''}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Strategy</td><td style="padding:8px;border:1px solid #ddd;">${esc(v.compMode)}${v.topK ? ` (K=${v.topK})` : ''}${eName ? ` · Emphasis: ${esc(eName)}` : ''}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Selected Dimensions (${(v.selectedDimensions||[]).length})</td><td style="padding:8px;border:1px solid #ddd;">${esc(toNames(v.selectedDimensions))}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Active Dimensions (${(v.activeDimensions||[]).length})</td><td style="padding:8px;border:1px solid #ddd;">${esc(toNames(v.activeDimensions))}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Parameters</td><td style="padding:8px;border:1px solid #ddd;">v${esc(v.params.v)} / ${esc(v.params.ar)} / s${esc(v.params.s)} / q${esc(v.params.q)}${v.params.raw ? ' / raw' : ''}${v.params.no ? ' / no ' + esc(v.params.no) : ''}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Constraints</td><td style="padding:8px;border:1px solid #ddd;">${esc(v.constraints || '-')}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Note</td><td style="padding:8px;border:1px solid #ddd;">${esc(v.note || '-')}</td></tr>
        </table>
        ${promptBlocks}`;
}
function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
}
function downloadExportWord() {
    if (!versionHistory.length) { showToast(t('txt_empty_generate')); return; }
    const body = [...versionHistory].reverse().map(buildVersionHTML).join('<hr style="margin:40px 0;">');
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>DimPrompt Report</title></head>
        <body style="font-family:'Segoe UI',Arial,sans-serif;color:#333;padding:24px;">
            <h1 style="color:#4f46e5;border-bottom:2px solid #4f46e5;padding-bottom:10px;">DimPrompt Generation Report</h1>
            <p style="color:#64748b;font-size:12px;">Exported at ${new Date().toLocaleString()}</p>
            ${body}
        </body></html>`;
    const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
    downloadFile(`DimPrompt_${stamp}.doc`, '\ufeff' + html, 'application/msword');
    showToast('Word');
}
function downloadExportTXT() {
    if (!versionHistory.length) { showToast(t('txt_empty_generate')); return; }
    const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
    downloadFile(`DimPrompt_${stamp}.txt`, buildAllTXT(), 'text/plain;charset=utf-8');
    showToast('TXT');
}
function exportHistoryJSON() {
    if (!versionHistory.length) { showToast(t('txt_empty_generate')); return; }
    const payload = {
        schemaVersion: 2, exportedAt: new Date().toISOString(),
        weights: WEIGHTS, parentWeights: PARENT_WEIGHTS, versions: versionHistory
    };
    downloadFile(`DimPrompt_history_${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.json`,
        JSON.stringify(payload, null, 2), 'application/json');
    showToast('JSON');
}
function closeExportModal() {
    const m = document.getElementById('export-modal');
    m.classList.add('opacity-0');
    setTimeout(() => m.classList.add('hidden'), 500);
}
async function copyExportText(btn) { await copyText(document.getElementById('export-textarea').value, btn); }
function exportCurrentVersion() {
    const v = versionHistory[versionHistory.length - 1];
    if (!v) { showToast(t('txt_empty_generate')); return; }
    document.getElementById('export-textarea').value = buildVersionTXT(v);
    const m = document.getElementById('export-modal');
    m.classList.remove('hidden'); setTimeout(() => m.classList.remove('opacity-0'), 10);
}
function clearHistory() {
    if (!confirm(t('txt_confirm_clear'))) return;
    versionHistory = []; saveHistory(); renderVersionHistory(); showToast('OK');
}

// ---------- 17. Event delegation ----------
function wireGlobalEvents() {
    document.addEventListener('click', async (e) => {
        const copyBtn = e.target.closest('.copy-btn');
        if (copyBtn && copyBtn.dataset.copyKey) {
            const text = PROMPT_CACHE[copyBtn.dataset.copyKey];
            if (text) { await copyText(text, copyBtn); return; }
        }
        const evalBtn = e.target.closest('.eval-btn[data-eval]');
        if (evalBtn) {
            const vn = parseInt(evalBtn.dataset.version, 10);
            if (Number.isFinite(vn) && evalBtn.dataset.tpl && evalBtn.dataset.eval) {
                setEval(vn, evalBtn.dataset.tpl, evalBtn.dataset.eval); return;
            }
        }
        const info = e.target.closest('.dim-info-btn[data-dim-info]');
        if (info) {
            e.preventDefault();
            e.stopPropagation();
            const code = info.getAttribute('data-dim-info');
            const tip = document.getElementById('dim-tooltip');
            if (tip && tip.classList.contains('show') && tip.dataset.activeCode === code) {
                hideDimTooltip(); tip.dataset.activeCode = '';
            } else {
                showDimTooltip(code, info);
                if (tip) tip.dataset.activeCode = code;
            }
            return;
        }
        // click outside tooltip closes it
        const tip = document.getElementById('dim-tooltip');
        if (tip && tip.classList.contains('show') && !e.target.closest('#dim-tooltip')) {
            hideDimTooltip(); tip.dataset.activeCode = '';
        }
        const folder = e.target.closest('[data-folder-toggle]');
        if (folder) { toggleFolder(folder.dataset.folderToggle); return; }
    });
    document.addEventListener('mouseover', (e) => {
        const info = e.target.closest('.dim-info-btn[data-dim-info]');
        if (info) {
            clearTimeout(tooltipHideTimer);
            showDimTooltip(info.getAttribute('data-dim-info'), info);
        }
    });
    document.addEventListener('mouseout', (e) => {
        const info = e.target.closest('.dim-info-btn[data-dim-info]');
        if (info) {
            clearTimeout(tooltipHideTimer);
            tooltipHideTimer = setTimeout(hideDimTooltip, 160);
        }
    });
    document.addEventListener('change', (e) => {
        const target = e.target;
        if (target.classList && target.classList.contains('dim-checkbox')) {
            updateGroupState(target.dataset.gid); return;
        }
        if (target.dataset && target.dataset.groupFor) {
            toggleGroup(target, target.dataset.groupFor); return;
        }
        if (target.dataset && target.dataset.noteVersion) {
            updateNote(parseInt(target.dataset.noteVersion, 10), target.value); return;
        }
        if (target.name === 'composition-mode') {
            const showK = target.value === 'Top-K Priority';
            const wrap = document.getElementById('topk-wrap');
            if (wrap) {
                wrap.classList.toggle('hidden', !showK);
                wrap.classList.toggle('flex', showK);
            }
            savePrefs(); return;
        }
        if (target.id === 'topk-input' || target.id === 'product-type') savePrefs();
    });
    const ki = document.getElementById('topk-input');
    if (ki) ki.addEventListener('input', savePrefs);
}

// ---------- 18. Bootstrap ----------
function bootstrap() {
    try {
        const prefs = loadPrefs();
        if (prefs.lang && i18n[prefs.lang]) {
            const ls = document.getElementById('lang-switch'); if (ls) ls.value = prefs.lang;
        }
        if (prefs.topK) { const ki = document.getElementById('topk-input'); if (ki) ki.value = prefs.topK; }
        if (prefs.compMode) {
            const r = document.querySelector(`input[name="composition-mode"][value="${prefs.compMode}"]`);
            if (r) r.checked = true;
        }
        const checkedMode = document.querySelector('input[name="composition-mode"]:checked');
        if (checkedMode && checkedMode.value === 'Top-K Priority') {
            const wrap = document.getElementById('topk-wrap');
            if (wrap) { wrap.classList.remove('hidden'); wrap.classList.add('flex'); }
        }
        // Product: render then restore if prev selected exists
        // (Language needs to be set first for optgroup labels)
        changeLanguage();
        if (prefs.productType) {
            const sel = document.getElementById('product-type');
            if (sel && Array.from(sel.options).some(o => o.value === prefs.productType)) sel.value = prefs.productType;
        } else {
            const sel = document.getElementById('product-type');
            if (sel && !sel.value) sel.value = '鼠标'; // sensible default from equipment
        }
    } catch (e) { console.warn('bootstrap prefs failed', e); changeLanguage(); }
    initChart();
    wireGlobalEvents();
    setTimeout(() => {
        const c = document.getElementById('dimensions-container');
        if (c && c.querySelectorAll('.dim-checkbox').length === 0) {
            console.warn('dimensions-container empty after boot; re-rendering');
            renderDimensions();
        }
    }, 80);
    loadHistory();
    if (versionHistory.length) {
        versionHistory.forEach(v => {
            Object.entries(v.prompts || {}).forEach(([id, da]) => {
                PROMPT_CACHE[`hist-v${v.version}-${id}`] = da.text;
            });
        });
        const ip = document.getElementById('initial-placeholder');
        if (ip) ip.classList.add('hidden');
        renderVersionHistory();
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}
