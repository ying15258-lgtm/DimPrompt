// ==========================================================
// 1. i18n
// ==========================================================
let currentLang = 'en';
const i18n = {
    en: {
        app_title: "DimPrompt", tit_config: "Configuration", leg_core: "Core", leg_high: "High", leg_med: "Med", leg_low: "Low",
        lbl_mode: "Mode", lbl_prod: "Product Type", lbl_comp: "Strategy", lbl_dim: "Dimensions", lbl_const: "Constraints", lbl_param: "Parameters",
        opt_rec: "Research Mode", opt_free: "Free Mode",
        btn_reset: "Reset", btn_gen: "Generate", btn_copy: "Copy Prompt", btn_copy_txt: "Copy Text", btn_close: "Close",
        btn_exp_word: "Export Word", btn_exp_txt: "Export TXT", btn_exp_latest: "Export Latest ↗",
        comp_def: "Recommended Mix", comp_top: "Top-K Focus (K=5)", comp_sin: "One-Dimension Highlight", comp_mul: "Balanced Blend",
        comp_def_desc: "Blend dims in standard way. Good for first runs.",
        comp_top_desc: "Emphasize top-5 highest-weight dims. More focused output.",
        comp_sin_desc: "Strongly highlight one chosen dim. Best for A/B comparison.",
        comp_mul_desc: "Even weight across all dims. No single dim dominates.",
        lbl_focus: "Focus Dimension",
        lbl_autotrans: "Auto-translate constraints to English (ZH/KR→EN)",
        warn_nonenglish: "⚠ Non-English characters detected. Please provide an English version before generating.",
        pl_search: "Search dimensions...", pl_user: "Constraints (User, Eng, Market, Style)...",
        pl_no: "Exclude words...", pl_note: "Version note...", pl_prod_search: "Search products...",
        txt_empty_tit: "Ready to Build", txt_chart_empty: "No Selection", txt_filter: "Prefer Only",
        txt_copied: "Copied!", tit_hist: "Version History", tit_exp: "Export",
        lbl_sum: "Basis", lbl_results: "Results",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus",
        "Version": "Version", "Prefer": "Prefer", "Neutral": "Neutral", "Discard": "Discard", "Product": "Product",
        effect_mix: "Standard mix of selected dimensions.",
        effect_topk: "Prioritized Top-K:",
        effect_blend: "Even emphasis across selected dimensions.",
        effect_single: "Highlighted:",
        rec_tpl_label: "Recommended template:", rec_tpl_visual: "Visual Focus", rec_tpl_tech: "Technical Focus", rec_tpl_scen: "Scenario Focus",
        rec_tpl_reason_aesthetic: "because you emphasized aesthetic/emotional dimensions",
        rec_tpl_reason_technical: "because you prioritized usability/reliability/safety",
        rec_tpl_reason_scenario: "because your constraints suggest a specific use context",
        rec_badge: "★ Recommended",
        lbl_active_dims: "Active dims", lbl_strategy_effect: "Strategy effect",
        grp_sup: "Office Supplies", grp_equ: "Office Equipment", grp_fur: "Office Furniture", grp_mat: "Office Building", grp_oth: "Other",
    },
    zh: {
        app_title: "DimPrompt", tit_config: "配置面板", leg_core: "核心", leg_high: "高优", leg_med: "中优", leg_low: "低优",
        lbl_mode: "实验模式", lbl_prod: "产品类型", lbl_comp: "生成策略", lbl_dim: "设计维度", lbl_const: "补充约束条件", lbl_param: "生成参数",
        opt_rec: "研究推荐模式", opt_free: "自由组合模式",
        btn_reset: "清空", btn_gen: "生成方案", btn_copy: "复制提示词", btn_copy_txt: "复制文本", btn_close: "关闭",
        btn_exp_word: "导出 Word", btn_exp_txt: "导出 TXT", btn_exp_latest: "导出最新版本 ↗",
        comp_def: "常规混合", comp_top: "高权重优先 (K=5)", comp_sin: "单维度强化", comp_mul: "均衡融合",
        comp_def_desc: "按常规方式融合所选维度，适合首次使用/快速出图。",
        comp_top_desc: "优先强调权重最高的 5 个维度，让提示词更聚焦。",
        comp_sin_desc: "强烈突出一个指定维度，便于对照或验证维度影响。",
        comp_mul_desc: "均衡强调所选维度，避免某一维度过强导致偏航。",
        lbl_focus: "焦点维度",
        lbl_autotrans: "自动将约束条件翻译为英文（中/韩→英）",
        warn_nonenglish: "⚠ 检测到非英文字符。请提供英文版本后再生成。",
        pl_search: "搜索维度...", pl_user: "输入用户需求、工程制造、市场品牌或设计风格等补充约束...",
        pl_no: "排除词...", pl_note: "记录实验笔记...", pl_prod_search: "搜索产品...",
        txt_empty_tit: "等待生成", txt_chart_empty: "勾选维度查看分布", txt_filter: "仅看偏好",
        txt_copied: "已复制!", tit_hist: "版本记录", tit_exp: "导出",
        lbl_sum: "摘要", lbl_results: "生成结果",
        "Visual Focus": "视觉焦点", "Technical Focus": "技术焦点", "Scenario Focus": "场景焦点",
        "Version": "版本", "Prefer": "偏好", "Neutral": "中立", "Discard": "放弃", "Product": "产品",
        effect_mix: "所选维度标准混合输出。", effect_topk: "高权重 Top-K 优先：",
        effect_blend: "所选维度均衡强调输出。", effect_single: "焦点维度：",
        rec_tpl_label: "推荐模板：", rec_tpl_visual: "视觉焦点", rec_tpl_tech: "技术焦点", rec_tpl_scen: "场景焦点",
        rec_tpl_reason_aesthetic: "因为你侧重了审美/情感类维度",
        rec_tpl_reason_technical: "因为你优先考虑了可用性/可靠性/安全性",
        rec_tpl_reason_scenario: "因为你的约束条件暗示了具体使用场景",
        rec_badge: "★ 推荐",
        lbl_active_dims: "活跃维度", lbl_strategy_effect: "策略效果",
        grp_sup: "办公用品", grp_equ: "办公设备", grp_fur: "办公家具", grp_mat: "办公建材", grp_oth: "其他办公类",
    },
    ko: {
        app_title: "DimPrompt", tit_config: "구성", leg_core: "핵심", leg_high: "높음", leg_med: "중간", leg_low: "낮음",
        lbl_mode: "모드", lbl_prod: "제품", lbl_comp: "전략", lbl_dim: "디자인 차원", lbl_const: "제약 조건", lbl_param: "파라미터",
        opt_rec: "추천 모드", opt_free: "자유 모드",
        btn_reset: "초기화", btn_gen: "생성하기", btn_copy: "복사", btn_copy_txt: "텍스트 복사", btn_close: "닫기",
        btn_exp_word: "Word 내보내기", btn_exp_txt: "TXT 내보내기", btn_exp_latest: "최신 버전 내보내기 ↗",
        comp_def: "권장 혼합", comp_top: "상위 K 집중 (K=5)", comp_sin: "단일 차원 강조", comp_mul: "균형 혼합",
        comp_def_desc: "선택한 차원을 일반적인 방식으로 혼합합니다. 처음 사용 시 권장.",
        comp_top_desc: "가중치 상위 5개 차원을 우선 강조합니다. 더 집중된 출력.",
        comp_sin_desc: "지정된 하나의 차원을 강하게 강조합니다. A/B 비교에 최적.",
        comp_mul_desc: "모든 차원을 균등하게 강조합니다. 특정 차원 과도 방지.",
        lbl_focus: "집중 차원",
        lbl_autotrans: "제약 조건을 영어로 자동 번역 (ZH/KR→EN)",
        warn_nonenglish: "⚠ 비영어 문자가 감지되었습니다. 영어 버전을 제공한 후 생성하세요.",
        pl_search: "검색...", pl_user: "제약 조건 입력 (사용자, 엔지니어링, 시장 또는 디자인 스타일)...",
        pl_no: "제외어...", pl_note: "메모...", pl_prod_search: "제품 검색...",
        txt_empty_tit: "합성 준비 완료", txt_chart_empty: "차원을 선택하세요", txt_filter: "선호만 보기",
        txt_copied: "복사됨!", tit_hist: "버전 기록", tit_exp: "내보내기",
        lbl_sum: "요약", lbl_results: "생성 결과",
        "Visual Focus": "시각적 포커스", "Technical Focus": "기술적 포커스", "Scenario Focus": "시나리오 포커스",
        "Version": "버전", "Prefer": "선호", "Neutral": "중립", "Discard": "폐기", "Product": "제품",
        effect_mix: "선택된 차원의 표준 혼합 출력.", effect_topk: "상위 K 우선순위:",
        effect_blend: "선택된 차원의 균등 강조 출력.", effect_single: "강조 차원:",
        rec_tpl_label: "추천 템플릿:", rec_tpl_visual: "시각적 포커스", rec_tpl_tech: "기술적 포커스", rec_tpl_scen: "시나리오 포커스",
        rec_tpl_reason_aesthetic: "미학/감성 차원을 중시했기 때문에",
        rec_tpl_reason_technical: "사용성/신뢰성/안전성을 우선했기 때문에",
        rec_tpl_reason_scenario: "제약 조건이 특정 사용 맥락을 시사하기 때문에",
        rec_badge: "★ 추천",
        lbl_active_dims: "활성 차원", lbl_strategy_effect: "전략 효과",
        grp_sup: "사무용품", grp_equ: "사무기기", grp_fur: "사무가구", grp_mat: "사무 건자재", grp_oth: "기타 사무용품",
    }
};

function t(key) { return (i18n[currentLang] && i18n[currentLang][key]) ? i18n[currentLang][key] : (i18n['en'][key] || key); }

// ==========================================================
// 2. Product Catalog
// ==========================================================
const PRODUCT_CATALOG = [
    { groupKey: 'grp_sup', items: [
        { v: 'Office Mouse',      zh: '办公鼠标',   ko: '오피스 마우스' },
        { v: 'Keyboard',          zh: '键盘',       ko: '키보드' },
        { v: 'File Box',          zh: '文件盒',     ko: '파일함' },
        { v: 'Desktop Organizer', zh: '桌面收纳',   ko: '데스크 정리함' },
        { v: 'Pen Holder',        zh: '笔筒',       ko: '펜꽂이' },
        { v: 'Sticky Notes',      zh: '便签',       ko: '메모지' },
        { v: 'USB Drive',         zh: 'U盘',        ko: 'USB 드라이브' },
        { v: 'Desk Lamp',         zh: '台灯',       ko: '데스크 램프' },
        { v: 'Calculator',        zh: '计算器',     ko: '계산기' },
        { v: 'Stapler',           zh: '订书机',     ko: '스테이플러' },
        { v: 'Correction Tape',   zh: '修正带',     ko: '수정 테이프' },
        { v: 'Scissors',          zh: '剪刀',       ko: '가위' },
    ]},
    { groupKey: 'grp_equ', items: [
        { v: 'Printer',           zh: '打印机',     ko: '프린터' },
        { v: 'Monitor',           zh: '显示器',     ko: '모니터' },
        { v: 'Scanner',           zh: '扫描仪',     ko: '스캐너' },
        { v: 'Projector',         zh: '投影仪',     ko: '프로젝터' },
        { v: 'All-in-One PC',     zh: '一体机',     ko: '올인원 PC' },
        { v: 'Label Printer',     zh: '标签打印机', ko: '라벨 프린터' },
        { v: 'Paper Shredder',    zh: '碎纸机',     ko: '문서 파쇄기' },
        { v: 'Conference Camera', zh: '会议摄像头', ko: '회의용 카메라' },
        { v: 'Office Phone',      zh: '电话机',     ko: '사무용 전화기' },
        { v: 'Fax Machine',       zh: '传真机',     ko: '팩스' },
    ]},
    { groupKey: 'grp_fur', items: [
        { v: 'Office Desk',       zh: '办公桌',     ko: '사무용 책상' },
        { v: 'Office Chair',      zh: '办公椅',     ko: '사무용 의자' },
        { v: 'Standing Desk',     zh: '升降桌',     ko: '스탠딩 데스크' },
        { v: 'File Cabinet',      zh: '文件柜',     ko: '파일 캐비닛' },
        { v: 'Bookshelf',         zh: '书架',       ko: '책장' },
        { v: 'Conference Table',  zh: '会议桌',     ko: '회의용 테이블' },
        { v: 'Storage Cabinet',   zh: '储物柜',     ko: '수납장' },
        { v: 'Room Divider',      zh: '隔断',       ko: '파티션' },
        { v: 'Whiteboard',        zh: '白板',       ko: '화이트보드' },
        { v: 'Locker',            zh: '储物柜/保险柜', ko: '사물함' },
    ]},
    { groupKey: 'grp_mat', items: [
        { v: 'Glass Partition',   zh: '玻璃隔断',   ko: '유리 파티션' },
        { v: 'Partition Wall',    zh: '隔墙系统',   ko: '파티션 벽' },
        { v: 'Raised Floor',      zh: '活动地板',   ko: '이중 마루' },
        { v: 'Suspended Ceiling', zh: '吊顶系统',   ko: '천장 시스템' },
        { v: 'Venetian Blinds',   zh: '百叶窗',     ko: '블라인드' },
        { v: 'Office Carpet',     zh: '办公地毯',   ko: '사무용 카펫' },
        { v: 'Office Lighting',   zh: '办公照明灯具', ko: '사무용 조명' },
        { v: 'Acoustic Panel',    zh: '吸音板',     ko: '흡음 패널' },
    ]},
    { groupKey: 'grp_oth', items: [
        { v: 'Safe Box',          zh: '保险箱',     ko: '금고' },
        { v: 'Water Dispenser',   zh: '饮水机',     ko: '정수기' },
        { v: 'Coffee Machine',    zh: '咖啡机',     ko: '커피 머신' },
        { v: 'Air Purifier',      zh: '空气净化器', ko: '공기 청정기' },
        { v: 'Attendance Machine',zh: '考勤机',     ko: '출퇴근 기록기' },
        { v: 'Delivery Locker',   zh: '快递柜',     ko: '택배함' },
        { v: 'Humidifier',        zh: '加湿器',     ko: '가습기' },
        { v: 'Acoustic Screen',   zh: '隔音屏障',   ko: '방음 스크린' },
    ]},
];

function getProductDisplayName(item) {
    if (currentLang === 'zh') return item.zh;
    if (currentLang === 'ko') return item.ko;
    return item.v;
}

function renderProductSelect(searchTerm = '') {
    const sel = document.getElementById('product-type');
    if (!sel) return;
    const term = searchTerm.trim().toLowerCase();
    const prevVal = sel.value;
    sel.innerHTML = '';

    PRODUCT_CATALOG.forEach(group => {
        const matchingItems = group.items.filter(item => {
            if (!term) return true;
            const displayName = getProductDisplayName(item);
            return item.v.toLowerCase().includes(term) || displayName.toLowerCase().includes(term);
        });
        if (!matchingItems.length) return;

        const og = document.createElement('optgroup');
        og.label = t(group.groupKey);
        matchingItems.forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.v;
            opt.text = getProductDisplayName(item);
            og.appendChild(opt);
        });
        sel.appendChild(og);
    });

    if (prevVal && sel.querySelector(`option[value="${CSS.escape(prevVal)}"]`)) {
        sel.value = prevVal;
    }
}

function filterProducts() {
    const term = document.getElementById('prod-search')?.value || '';
    renderProductSelect(term);
}

// ==========================================================
// 3. Dimension Tooltip Data
// ==========================================================
const DIM_TOOLTIPS = {
    en: {
        "C1 Usability":            { def: "How easily users can learn and operate the product.", ex: "e.g. A mouse with labeled buttons reduces the learning curve." },
        "C2 Reliability":          { def: "Consistent performance under expected conditions.", ex: "e.g. A keyboard that registers every keystroke without failure." },
        "C3 Safety":               { def: "Protection from harm or injury during normal use.", ex: "e.g. Rounded edges on a file box prevent hand cuts." },
        "C4 Comfort":              { def: "Physical and ergonomic ease during prolonged use.", ex: "e.g. A wrist rest on an ergonomic mouse reduces fatigue." },
        "C5 Intuitive Operation":  { def: "Actions users understand without any instruction.", ex: "e.g. A play/pause icon understood immediately without a manual." },
        "C6 Feedback Mechanism":   { def: "How the system communicates its state to the user.", ex: "e.g. A tactile click sound confirms a mouse button press." },
        "C7 Aesthetics":           { def: "The visual appeal and beauty of the product.", ex: "e.g. A sleek matte finish that complements office decor." },
        "C8 Emotional Resonance":  { def: "Design that evokes feelings or emotional connection.", ex: "e.g. A form that makes users feel confident and professional." },
        "C9 Customization":        { def: "The ability to adapt the product to personal preferences.", ex: "e.g. Adjustable DPI settings and RGB lighting on a mouse." },
        "C10 Innovation":          { def: "Novel or breakthrough design beyond existing solutions.", ex: "e.g. Wireless charging built into a mouse pad." },
        "C11 Market Orientation":  { def: "Alignment with the needs of the target market.", ex: "e.g. A budget keyboard designed specifically for students." },
        "C12 Forward-looking":     { def: "Anticipating and reflecting future trends in design.", ex: "e.g. Adopting USB-C before the industry has fully shifted." },
        "C13 Market Adaptability": { def: "Ability to function effectively across diverse markets.", ex: "e.g. A keyboard layout supporting multiple languages." },
        "C14 Brand Identity":      { def: "Visual and functional consistency with brand values.", ex: "e.g. Minimalist language consistent with Apple-style branding." },
        "C15 Inclusiveness":       { def: "Accessible design for diverse and underserved user groups.", ex: "e.g. Extra-large buttons for elderly or low-vision users." },
        "C16 Longevity":           { def: "Durability and sustained performance over time.", ex: "e.g. A keyboard rated for 50 million keystrokes." },
        "C17 Eco-friendly Materials": { def: "Use of sustainable or recycled materials in production.", ex: "e.g. A mouse shell made from post-consumer recycled plastic." },
        "C18 Production Cost":     { def: "Efficiency in manufacturing and cost of goods.", ex: "e.g. Simplifying assembly to reduce BOM cost by 15%." },
    },
    zh: {
        "C1 Usability":            { def: "用户能轻松学会并使用产品的程度。", ex: "例：按键有清晰标注的鼠标，上手门槛极低。" },
        "C2 Reliability":          { def: "产品在预期使用条件下稳定表现的能力。", ex: "例：无论敲击多快都不漏键的键盘。" },
        "C3 Safety":               { def: "使用过程中对用户的防伤害保护设计。", ex: "例：文件盒圆角设计，避免划伤手部。" },
        "C4 Comfort":              { def: "长时间使用时的生理舒适感与人体工学。", ex: "例：鼠标配腕托，长时间使用不疲劳。" },
        "C5 Intuitive Operation":  { def: "无需说明即可被理解和操作的设计。", ex: "例：播放/暂停图标，无需说明即可识别。" },
        "C6 Feedback Mechanism":   { def: "系统向用户传达操作状态的反馈设计。", ex: "例：鼠标按键有清晰点击声，确认输入成功。" },
        "C7 Aesthetics":           { def: "产品的视觉吸引力与整体美感。", ex: "例：哑光金属外壳与办公桌风格和谐搭配。" },
        "C8 Emotional Resonance":  { def: "设计唤起情感认同或归属感的能力。", ex: "例：外观让用户感到自信、有专业感。" },
        "C9 Customization":        { def: "产品适应个人偏好与需求的能力。", ex: "例：鼠标可自由调节 DPI 和 RGB 灯光。" },
        "C10 Innovation":          { def: "超越现有解决方案的突破性设计理念。", ex: "例：鼠标垫内置无线充电功能。" },
        "C11 Market Orientation":  { def: "与目标市场需求和期望保持一致的导向。", ex: "例：专为学生设计的高性价比键盘。" },
        "C12 Forward-looking":     { def: "预判并提前反映未来趋势的设计能力。", ex: "例：在行业全面转型前就采用 USB-C 接口。" },
        "C13 Market Adaptability": { def: "在不同市场或地区通用的适应性。", ex: "例：支持多语言布局的键盘。" },
        "C14 Brand Identity":      { def: "视觉与功能与品牌价值观的一致性。", ex: "例：与苹果品牌一致的极简主义产品语言。" },
        "C15 Inclusiveness":       { def: "面向多元或特殊用户群体的无障碍设计。", ex: "例：为老年或视力不佳用户设计的超大按键。" },
        "C16 Longevity":           { def: "产品在长期使用中的耐久性与持续性能。", ex: "例：额定按键寿命 5000 万次的键盘。" },
        "C17 Eco-friendly Materials": { def: "在生产中使用可持续或可回收材料。", ex: "例：采用消费后回收塑料制成的鼠标外壳。" },
        "C18 Production Cost":     { def: "生产制造效率与物料成本控制。", ex: "例：简化装配工序使 BOM 成本降低 15%。" },
    },
    ko: {
        "C1 Usability":            { def: "사용자가 제품을 쉽게 배우고 조작할 수 있는 정도.", ex: "예: 버튼 라벨이 명확한 마우스는 학습 곡선을 줄여준다." },
        "C2 Reliability":          { def: "예상 조건에서 일관된 성능을 유지하는 능력.", ex: "예: 아무리 빠르게 타이핑해도 누락이 없는 키보드." },
        "C3 Safety":               { def: "정상 사용 중 부상으로부터 사용자를 보호하는 설계.", ex: "예: 파일함의 둥근 모서리로 손 부상 방지." },
        "C4 Comfort":              { def: "장시간 사용 시 신체적 편안함과 인체공학.", ex: "예: 손목 받침이 있는 마우스로 피로 감소." },
        "C5 Intuitive Operation":  { def: "설명 없이도 이해되고 조작 가능한 설계.", ex: "예: 설명서 없이 바로 이해되는 재생/정지 아이콘." },
        "C6 Feedback Mechanism":   { def: "시스템이 사용자에게 상태를 전달하는 피드백 설계.", ex: "예: 마우스 클릭 소리로 입력 성공 확인." },
        "C7 Aesthetics":           { def: "제품의 시각적 매력과 아름다움.", ex: "예: 사무실 인테리어와 잘 어울리는 무광 마감." },
        "C8 Emotional Resonance":  { def: "감정적 연결이나 소속감을 불러일으키는 디자인.", ex: "예: 사용자가 자신감과 전문성을 느끼게 하는 외관." },
        "C9 Customization":        { def: "개인 선호에 맞게 제품을 조정할 수 있는 능력.", ex: "예: DPI와 RGB 조명을 자유롭게 조절하는 마우스." },
        "C10 Innovation":          { def: "기존 솔루션을 넘어선 혁신적인 설계 개념.", ex: "예: 마우스 패드에 내장된 무선 충전." },
        "C11 Market Orientation":  { def: "목표 시장의 요구와 기대에 부합하는 방향성.", ex: "예: 학생을 위해 설계된 가성비 키보드." },
        "C12 Forward-looking":     { def: "미래 트렌드를 예측하고 미리 반영하는 설계.", ex: "예: 업계 전환 전 USB-C를 먼저 도입." },
        "C13 Market Adaptability": { def: "다양한 시장이나 지역에서 통용 가능한 적응성.", ex: "예: 다국어 레이아웃을 지원하는 키보드." },
        "C14 Brand Identity":      { def: "브랜드 가치관과의 시각적·기능적 일관성.", ex: "예: 애플 스타일 브랜딩과 일치하는 미니멀리즘 제품 언어." },
        "C15 Inclusiveness":       { def: "다양하고 소외된 사용자 그룹을 위한 접근성 설계.", ex: "예: 노인이나 시력이 약한 사용자를 위한 대형 버튼." },
        "C16 Longevity":           { def: "장기 사용에 걸친 내구성과 지속적인 성능.", ex: "예: 5천만 회 타건 수명이 보장된 키보드." },
        "C17 Eco-friendly Materials": { def: "생산에 지속 가능하거나 재활용된 소재 사용.", ex: "예: 소비 후 재활용 플라스틱으로 제작된 마우스 케이스." },
        "C18 Production Cost":     { def: "제조 효율성과 원가 관리.", ex: "예: 조립 단순화로 BOM 비용 15% 절감." },
    }
};

// ==========================================================
// 4. Dimension Metadata
// ==========================================================
const DIM_DATA = {
    parent: {
        "B1 Functional Design":            { en: "Functional Design",     zh: "功能设计",     ko: "기능 디자인" },
        "B2 User Experience Design":       { en: "User Experience Design",zh: "用户体验设计", ko: "사용자 경험 디자인" },
        "B3 Emotional Design":             { en: "Emotional Design",      zh: "情感设计",     ko: "감성 디자인" },
        "B4 Innovation and User-Driven Design": { en: "Innovation Design", zh: "创新设计",    ko: "혁신 디자인" },
        "B5 Market and Brand Adaptation":  { en: "Market Adaptation",     zh: "市场品牌适配", ko: "시장 브랜드 적응" },
        "B6 Sustainable Design":           { en: "Sustainable Design",    zh: "可持续设计",   ko: "지속가능 디자인" }
    },
    child: {
        "C1 Usability":           { zh: "易用性",     ko: "사용성" },
        "C2 Reliability":         { zh: "可靠性",     ko: "신뢰성" },
        "C3 Safety":              { zh: "安全性",     ko: "안전성" },
        "C4 Comfort":             { zh: "舒适度",     ko: "편안함" },
        "C5 Intuitive Operation": { zh: "直觉操作",   ko: "직관적 조작" },
        "C6 Feedback Mechanism":  { zh: "反馈机制",   ko: "피드백 메커니즘" },
        "C7 Aesthetics":          { zh: "审美性",     ko: "미학" },
        "C8 Emotional Resonance": { zh: "情感共鸣",   ko: "감성적 공명" },
        "C9 Customization":       { zh: "个性化定制", ko: "맞춤화" },
        "C10 Innovation":         { zh: "创新性",     ko: "혁신성" },
        "C11 Market Orientation": { zh: "市场导向",   ko: "시장 지향성" },
        "C12 Forward-looking":    { zh: "前瞻性",     ko: "미래 지향성" },
        "C13 Market Adaptability":{ zh: "市场适应性", ko: "시장 적응성" },
        "C14 Brand Identity":     { zh: "品牌识别",   ko: "브랜드 정체성" },
        "C15 Inclusiveness":      { zh: "包容性设计", ko: "포용성" },
        "C16 Longevity":          { zh: "长寿性",     ko: "내구성" },
        "C17 Eco-friendly Materials": { zh: "环保材料", ko: "친환경 소재" },
        "C18 Production Cost":    { zh: "生产成本",   ko: "생산 비용" }
    }
};

const DIM_ORDER = [
    { parent: "B1 Functional Design",            children: ["C1 Usability", "C2 Reliability", "C3 Safety"] },
    { parent: "B2 User Experience Design",       children: ["C4 Comfort", "C5 Intuitive Operation", "C6 Feedback Mechanism"] },
    { parent: "B3 Emotional Design",             children: ["C7 Aesthetics", "C8 Emotional Resonance", "C9 Customization"] },
    { parent: "B4 Innovation and User-Driven Design", children: ["C12 Forward-looking", "C10 Innovation", "C11 Market Orientation"] },
    { parent: "B5 Market and Brand Adaptation",  children: ["C13 Market Adaptability", "C15 Inclusiveness", "C14 Brand Identity"] },
    { parent: "B6 Sustainable Design",           children: ["C17 Eco-friendly Materials", "C18 Production Cost", "C16 Longevity"] }
];

const PRIO_MAP = {
    "C7 Aesthetics": "Core", "C8 Emotional Resonance": "Core",
    "C4 Comfort": "High Priority", "C9 Customization": "High Priority",
    "C5 Intuitive Operation": "High Priority", "C1 Usability": "High Priority", "C6 Feedback Mechanism": "High Priority",
    "C2 Reliability": "Medium Priority", "C12 Forward-looking": "Medium Priority",
    "C3 Safety": "Medium Priority", "C10 Innovation": "Medium Priority"
};
const WEIGHT_LVL = { "Core": 4, "High Priority": 3, "Medium Priority": 2, "Low Priority": 1 };
const DOTS = { "Core": "bg-red-500", "High Priority": "bg-orange-400", "Medium Priority": "bg-blue-400", "Low Priority": "bg-slate-600" };

const LS_KEY = 'dimPrompt_v2_history';

// ==========================================================
// 5. DIM_PHRASINGS — three-template dimension phrasing matrix
//    Each dimension has three distinct natural-language renderings:
//    visual  → what the photographer / art director sees
//    tech    → what the engineer / technical illustrator annotates
//    scen    → what the user does / feels in the real environment
// ==========================================================
const DIM_PHRASINGS = {
    visual: {
        "C1 Usability":               "visually legible control layout, approachable and inviting product form",
        "C2 Reliability":             "solid refined surface finish, precision material detailing that communicates robustness",
        "C3 Safety":                  "smooth protective contours, soft-edge safety-conscious geometry",
        "C4 Comfort":                 "ergonomic curvature, body-conforming grip silhouette, organic natural hand lines",
        "C5 Intuitive Operation":     "clear visual affordance cues, iconic legible control placement at a glance",
        "C6 Feedback Mechanism":      "tactile surface texture detail, integrated visual status indicator element",
        "C7 Aesthetics":              "striking hero-shot visual presence, refined proportions, premium material palette, award-winning product beauty",
        "C8 Emotional Resonance":     "emotionally warm expressive form language, character-rich surface detail with personality",
        "C9 Customization":           "modular visual design elements, expressive personalized color zone language",
        "C10 Innovation":             "distinctive unconventional silhouette that breaks category conventions, novel formal language",
        "C11 Market Orientation":     "commercially appealing trend-conscious product language, style-forward finish",
        "C12 Forward-looking":        "contemporary future-oriented aesthetic, advanced material and color direction",
        "C13 Market Adaptability":    "universal clean design language, globally neutral and versatile palette",
        "C14 Brand Identity":         "strong visual brand identity expression, consistent material and form brand language",
        "C15 Inclusiveness":          "high-contrast legible visual hierarchy, approachable scale welcoming for all users",
        "C16 Longevity":              "premium surface finish suggesting timeless enduring quality, heirloom material presence",
        "C17 Eco-friendly Materials": "natural sustainable material texture, honest earthy surface finish with visible material truth",
        "C18 Production Cost":        "clean simplified efficient geometry, honest no-excess form with purposeful material use",
    },
    tech: {
        "C1 Usability":               "labeled control-layout diagram with operating-sequence callout annotations and reduced-error interface map",
        "C2 Reliability":             "structural reinforcement cross-section with stress-distribution zone labels and failure-mode callouts",
        "C3 Safety":                  "protective mechanism cross-section with safety-critical component callouts and clearance dimension notes",
        "C4 Comfort":                 "ergonomic angle annotation with pressure-distribution zone geometry and hand-fit dimension detail",
        "C5 Intuitive Operation":     "interface control hierarchy diagram with labeled interaction-flow sequence and zero-learning-curve callout",
        "C6 Feedback Mechanism":      "feedback sensor placement exploded view with signal-pathway annotations and indicator-zone specification",
        "C7 Aesthetics":              "surface finish specification diagram with material layer cross-section, coating thickness callout, and CMF detail",
        "C8 Emotional Resonance":     "form-language design rationale annotations with brand touchpoint mapping and emotional-response diagram",
        "C9 Customization":           "modular assembly exploded view with configurable component variant breakdown and swap-interface detail",
        "C10 Innovation":             "novel mechanism cross-section with patent-illustration of breakthrough feature and innovation callout",
        "C11 Market Orientation":     "feature-specification comparison callouts with target-user requirement mapping and market-fit annotation",
        "C12 Forward-looking":        "technology integration diagram with future-platform compatibility annotations and roadmap callout",
        "C13 Market Adaptability":    "multi-region variant diagram with localization specification callouts and universal standard annotations",
        "C14 Brand Identity":         "brand element placement specification with visual identity system diagram and typography callout",
        "C15 Inclusiveness":          "accessibility feature labeled callouts with inclusive dimension annotations and barrier-free design notes",
        "C16 Longevity":              "material durability specification with wear-resistance zone annotations and lifecycle test callout",
        "C17 Eco-friendly Materials": "material composition breakdown with recycled-content percentage labels and sustainability certification callout",
        "C18 Production Cost":        "BOM efficiency diagram with simplified assembly sequence annotation and cost-optimization callout",
    },
    scen: {
        "C1 Usability":               "first-time user immediately understands how to operate the product without any guidance or instruction",
        "C2 Reliability":             "professional trusts it for all-day continuous office use without hesitation or concern about failure",
        "C3 Safety":                  "user feels completely at ease during normal task, no anxiety about accidental injury",
        "C4 Comfort":                 "office worker maintains a natural, relaxed posture through an extended work session without physical strain",
        "C5 Intuitive Operation":     "user reaches for it instinctively mid-task — a zero-instruction discovery moment caught in the act",
        "C6 Feedback Mechanism":      "user feels the confirmation — a click, a light, a sound — naturally woven into their unbroken workflow",
        "C7 Aesthetics":              "the product enhances the visual calm and polish of the surrounding office, a natural centerpiece on the desk",
        "C8 Emotional Resonance":     "user radiates quiet professional pride and confidence using it in front of colleagues",
        "C9 Customization":           "the user's personalized workspace setup uniquely reflects their individual identity in the shared office",
        "C10 Innovation":             "user notices the clever unexpected feature mid-task — a genuine moment of pleasant surprise and delight",
        "C11 Market Orientation":     "office professional confidently selects and chooses it over competing alternatives, clear value recognized",
        "C12 Forward-looking":        "used in a modern agile workspace where the product's technology feels seamlessly ahead of its time",
        "C13 Market Adaptability":    "colleagues from diverse cultural and linguistic backgrounds share and effectively use it in the same common space",
        "C14 Brand Identity":         "immediately recognized on the desk as part of a coherent trusted brand family the whole team relies on",
        "C15 Inclusiveness":          "accessible to a colleague with different physical needs, a welcoming and equal presence for everyone in the shared office",
        "C16 Longevity":              "still in trusted daily use after years of service, a dependable companion across multiple office generations",
        "C17 Eco-friendly Materials": "eco-conscious choice noticed and quietly appreciated by colleagues — an effortless statement of shared values",
        "C18 Production Cost":        "smart team procurement decision whose everyday value is recognized and appreciated at the whole-office scale",
    }
};

// ==========================================================
// 6. Three Independent Prompt Builders
//    Each builder starts with a template-type declaration,
//    embeds strategy framing, then dimension phrasings, then
//    closes with template-specific photographic/rendering style.
// ==========================================================

function buildParamSuffix(pV, pAR, pS, pQ, pRaw, pNo) {
    return `--v ${pV} --ar ${pAR} --s ${pS} --q ${pQ}${pRaw ? ' --raw' : ''}${pNo ? ' --no ' + pNo : ''}`;
}

/**
 * getStrategyIntro — returns a per-template framing sentence
 * that encodes the strategy intent in natural language.
 * This replaces the old generic coreT string.
 */
function getStrategyIntro(template, compMode, proc, focusDimName) {
    const topNames = proc.slice(0, 5).map(d => d.split(' ').slice(1).join(' ')).join(', ');

    if (template === 'visual') {
        if (compMode === 'Top-K Focus')
            return `with strong visual emphasis on ${topNames} — these qualities must dominate the visual hierarchy, all other aspects subordinate:`;
        if (compMode === 'One-Dimension Highlight')
            return `with every single visual decision driven by one dominant quality — ${focusDimName} — expressed to its maximum visual extreme:`;
        if (compMode === 'Balanced Blend')
            return `with perfectly equal visual weight given to each design quality — no single aspect may dominate the composition:`;
        // Recommended Mix
        return `showcasing a balanced visual composition across the following design qualities:`;
    }

    if (template === 'tech') {
        if (compMode === 'Top-K Focus')
            return `with detailed technical documentation and annotation prioritizing ${topNames} above all other specifications:`;
        if (compMode === 'One-Dimension Highlight')
            return `with all engineering diagrams, cross-sections, and annotations entirely centered on one specification — ${focusDimName}:`;
        if (compMode === 'Balanced Blend')
            return `with equal technical documentation depth and annotation density across every specification — no hierarchy:`;
        // Recommended Mix
        return `engineering documentation systematically covering the following functional and structural attributes:`;
    }

    if (template === 'scen') {
        if (compMode === 'Top-K Focus')
            return `with the user's behavior and scene narrative primarily demonstrating ${topNames} — these qualities are the foreground story:`;
        if (compMode === 'One-Dimension Highlight')
            return `with the entire scene, user action, and environment organized around one single behavioral quality — ${focusDimName}:`;
        if (compMode === 'Balanced Blend')
            return `with equal narrative screen time and scene weight given to each behavioral quality — a holistic slice-of-life:`;
        // Recommended Mix
        return `depicting the real-world use scenario with the following behavioral and contextual qualities integrated naturally:`;
    }

    return '';
}

/**
 * buildVisualPrompt — Hero product shot.
 * Image task type: studio product photography, form/material/aesthetics focus.
 * Template signature appears in the FIRST words.
 */
function buildVisualPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix) {
    const stratIntro = getStrategyIntro('visual', compMode, proc, focusDimName);
    const phrases = proc.map(d => DIM_PHRASINGS.visual[d] || dimNameOnly(d));

    let prompt = `Professional studio product photography of a ${prod}, clean white seamless backdrop, cinematic three-point lighting: `;
    prompt += `${stratIntro} `;
    if (phrases.length) prompt += phrases.join('; ') + '. ';
    if (constr) prompt += `Additional design direction: ${constr}. `;
    prompt += `Ultra-sharp focus, perfect exposure, commercial hero-shot composition, minimal props, product design award presentation quality.`;
    prompt += ` ${paramSuffix}`;
    return prompt.replace(/\s+/g, ' ').trim();
}

/**
 * buildTechnicalPrompt — Engineering/structure/function diagram.
 * Image task type: exploded view, cross-section, multi-angle, annotated technical illustration.
 * Template signature appears in the FIRST words.
 */
function buildTechnicalPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix) {
    const stratIntro = getStrategyIntro('tech', compMode, proc, focusDimName);
    const phrases = proc.map(d => DIM_PHRASINGS.tech[d] || dimNameOnly(d));

    let prompt = `Technical engineering illustration of a ${prod}: exploded-assembly view, orthographic multi-angle projection, cross-section diagram, labeled component callouts, dimension annotations. `;
    prompt += `${stratIntro} `;
    if (phrases.length) prompt += phrases.join('; ') + '. ';
    if (constr) prompt += `Engineering constraints: ${constr}. `;
    prompt += `Blueprint drafting style, precise clean linework, white or light-grey background, CAD-quality rendering, patent-illustration level of technical detail.`;
    prompt += ` ${paramSuffix}`;
    return prompt.replace(/\s+/g, ' ').trim();
}

/**
 * buildScenarioPrompt — User in real-world context.
 * Image task type: lifestyle/documentary photography, human + environment + behavior.
 * Template signature appears in the FIRST words.
 */
function buildScenarioPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix) {
    const stratIntro = getStrategyIntro('scen', compMode, proc, focusDimName);
    const phrases = proc.map(d => DIM_PHRASINGS.scen[d] || dimNameOnly(d));

    let prompt = `Lifestyle documentary photography of a ${prod} in active real office use — a real person in a real workspace, an authentic human moment in progress: `;
    prompt += `${stratIntro} `;
    if (phrases.length) prompt += phrases.join('; ') + '. ';
    if (constr) prompt += `Scene and context notes: ${constr}. `;
    prompt += `Natural ambient office lighting, candid unposed documentary style, human-centered story-driven composition, authentic workspace environment, genuine emotion visible.`;
    prompt += ` ${paramSuffix}`;
    return prompt.replace(/\s+/g, ' ').trim();
}

// ==========================================================
// 7. Chart
// ==========================================================
let radarChart, versionHistory = [], currentExportVersion = null;

function initChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(DIM_DATA.parent).map(k => DIM_DATA.parent[k][currentLang].split(' ')[0]),
            datasets: [{ data: [0,0,0,0,0,0], backgroundColor: 'rgba(99,102,241,0.4)', borderColor: '#818cf8', borderWidth: 1.5, pointRadius: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
            scales: { r: { min: 0, max: 3, ticks: { display: false },
                grid: { color: 'rgba(255,255,255,0.05)' },
                angleLines: { color: 'rgba(255,255,255,0.1)' },
                pointLabels: { color: 'rgba(255,255,255,0.4)', font: { size: 7 } } } } }
    });
}

function updateChart() {
    if (!radarChart) return;
    const checked = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    document.getElementById('chart-empty').style.opacity = checked.length ? '0' : '1';
    let counts = [0,0,0,0,0,0];
    checked.forEach(d => {
        const idx = DIM_ORDER.findIndex(g => g.children.includes(d));
        if (idx > -1) counts[idx]++;
    });
    radarChart.data.datasets[0].data = counts;
    radarChart.update();
}

// ==========================================================
// 8. Tooltip (hover, near button, smart flip, i18n)
// ==========================================================
function showDimTooltip(btn, dimKey) {
    const tooltip = document.getElementById('dim-tooltip');
    const data = (DIM_TOOLTIPS[currentLang] || DIM_TOOLTIPS['en'])[dimKey];
    if (!data || !tooltip) return;
    document.getElementById('dim-tooltip-def').textContent = data.def;
    document.getElementById('dim-tooltip-ex').textContent = data.ex;

    const rect = btn.getBoundingClientRect();
    const TW = 270, TH = 95;
    let left = rect.right + 10, top = rect.top;
    if (left + TW > window.innerWidth - 8)  left = rect.left - TW - 10;
    if (top  + TH > window.innerHeight - 8) top  = rect.bottom - TH;
    if (left < 8) left = 8;
    if (top  < 8) top  = 8;

    tooltip.style.left = left + 'px';
    tooltip.style.top  = top  + 'px';
    tooltip.classList.remove('hidden');
}

function hideDimTooltip() {
    document.getElementById('dim-tooltip')?.classList.add('hidden');
}

// ==========================================================
// 9. Render Dimensions
// ==========================================================
function renderDimensions() {
    const container = document.getElementById('dimensions-container');
    if (!container) return;
    const checked = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    container.innerHTML = '';

    DIM_ORDER.forEach(group => {
        const gid = group.parent.replace(/[^a-zA-Z0-9]/g, '-');
        const parentLabel = currentLang === 'en'
            ? group.parent
            : `${DIM_DATA.parent[group.parent][currentLang]} (${group.parent})`;

        const children = group.children.map(c => {
            const childText = currentLang === 'en'
                ? c
                : `<span class="lang-main">${DIM_DATA.child[c][currentLang]}</span><span class="lang-sub">(${c.split(' ')[0]})</span>`;
            return `
            <div class="dim-item-container flex items-center gap-1 hover:bg-white/5 rounded-xl group" data-name="${c}">
                <label class="flex items-center gap-2 cursor-pointer p-2.5 flex-1 min-w-0">
                    <input type="checkbox" value="${c}" class="dim-checkbox child-cb-${gid} w-4 h-4 rounded border-slate-700 accent-indigo-500 shrink-0"
                           onchange="updateGroupState('${gid}');" ${checked.includes(c) ? 'checked' : ''}>
                    <span class="priority-dot w-2 h-2 rounded-full ${DOTS[PRIO_MAP[c] || 'Low Priority']} shrink-0"></span>
                    <span class="text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors truncate">${childText}</span>
                </label>
                <button class="dim-q-btn shrink-0 mr-2 w-4 h-4 rounded-full bg-slate-700 text-slate-400 text-[9px] font-black flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                        onmouseenter="showDimTooltip(this,'${c}')" onmouseleave="hideDimTooltip()">?</button>
            </div>`;
        }).join('');

        container.innerHTML += `
            <div id="card-${gid}" class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                <div class="flex items-center justify-between bg-slate-800/30 p-4">
                    <div class="flex items-center gap-3">
                        <input type="checkbox" id="group-${gid}" class="w-4 h-4 accent-indigo-500" onchange="toggleGroup(this,'${gid}')">
                        <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer" onclick="toggleFolder('${gid}')">${parentLabel}</label>
                    </div>
                    <button onclick="toggleFolder('${gid}')" id="arrow-${gid}" class="text-slate-600 rotate-180 transition-transform">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3"></path></svg>
                    </button>
                </div>
                <div id="content-${gid}" class="dim-group-content grid grid-cols-1 md:grid-cols-2 gap-1 p-3 border-t border-slate-800/50">${children}</div>
            </div>`;
        updateGroupState(gid);
    });
}

// ==========================================================
// 10. Language
// ==========================================================
function changeLanguage() {
    currentLang = document.getElementById('lang-switch').value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (i18n[currentLang][k]) el.tagName === 'OPTION' ? el.text = i18n[currentLang][k] : el.innerText = i18n[currentLang][k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][k]) el.placeholder = i18n[currentLang][k];
    });
    renderProductSelect(document.getElementById('prod-search')?.value || '');
    renderDimensions();
    if (radarChart) {
        radarChart.data.labels = Object.keys(DIM_DATA.parent).map(k => DIM_DATA.parent[k][currentLang].split(' ')[0]);
        radarChart.update();
    }
    updateRecommendedTemplate();
    const warnEl = document.getElementById('constraint-warning');
    if (warnEl && !warnEl.classList.contains('hidden')) warnEl.textContent = t('warn_nonenglish');
    if (versionHistory.length) renderVersionHistory();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductSelect();
    changeLanguage();
    initChart();
    loadFromLocalStorage();
    updateFocusDimOptions();
});

// ==========================================================
// 11. Non-English constraint guard
// ==========================================================
function hasNonEnglish(str) {
    return /[\u4e00-\u9fff\u3400-\u4dbf\uac00-\ud7af\u3040-\u30ff]/.test(str);
}
function clearConstraintWarning() {
    document.getElementById('constraint-warning')?.classList.add('hidden');
    const el = document.getElementById('const-all');
    if (el) { el.classList.remove('border-red-500', 'border'); }
}

// ==========================================================
// 12. Focus dimension selector
// ==========================================================
function updateFocusDimOptions() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    const focusSelect = document.getElementById('focus-dim-select');
    const wrapper = document.getElementById('focus-dim-wrapper');
    if (!focusSelect || !wrapper) return;

    const compMode = document.querySelector('input[name="composition-mode"]:checked')?.value || '';
    wrapper.classList.toggle('hidden', compMode !== 'One-Dimension Highlight');

    if (!sel.length) { focusSelect.innerHTML = `<option value="">—</option>`; return; }

    const sortW = (a, b) => (WEIGHT_LVL[PRIO_MAP[b] || 'Low Priority'] || 1) - (WEIGHT_LVL[PRIO_MAP[a] || 'Low Priority'] || 1);
    const sorted = [...sel].sort(sortW);
    const prev = focusSelect.value;
    focusSelect.innerHTML = sorted.map(d => `<option value="${d}">${d}</option>`).join('');
    focusSelect.value = (prev && sorted.includes(prev)) ? prev : sorted[0];
}

// ==========================================================
// 13. Recommended Template (shared logic + left-panel hint)
// ==========================================================
const SCENARIO_SIGNALS = [
    'office','meeting','user','context','elderly','student','home','outdoor','public','team',
    'group','scenario','environment','workspace','person','crowd','usage','field',
    '场景','人群','使用','环境','老人','学生','办公','室外','情境','背景',
    '시나리오','환경','사용자','노인','학생','상황','맥락'
];
const AESTHETIC_DIMS = ['C7 Aesthetics', 'C8 Emotional Resonance', 'C9 Customization'];
const TECH_DIMS      = ['C1 Usability', 'C2 Reliability', 'C3 Safety', 'C5 Intuitive Operation', 'C6 Feedback Mechanism'];

function computeRecommendedTemplate(sel, constr) {
    const cl = (constr || '').toLowerCase();
    const hasScenario = SCENARIO_SIGNALS.some(s => cl.includes(s));
    const aestheticCount = sel.filter(d => AESTHETIC_DIMS.includes(d)).length;
    const techCount      = sel.filter(d => TECH_DIMS.includes(d)).length;
    if (hasScenario)                                   return { id: 'scen',   recKey: 'rec_tpl_scen',   reasonKey: 'rec_tpl_reason_scenario' };
    if (techCount >= 2 && techCount >= aestheticCount) return { id: 'tech',   recKey: 'rec_tpl_tech',   reasonKey: 'rec_tpl_reason_technical' };
    return                                                    { id: 'visual', recKey: 'rec_tpl_visual', reasonKey: 'rec_tpl_reason_aesthetic' };
}

function updateRecommendedTemplate() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    const constr = document.getElementById('const-all')?.value || '';
    const recEl = document.getElementById('recommended-template-area');
    if (!recEl) return;
    if (!sel.length) { recEl.classList.add('hidden'); return; }

    const rec = computeRecommendedTemplate(sel, constr);
    recEl.innerHTML =
        `<span style="font-size:9px" class="font-black text-slate-500 uppercase tracking-wider">${t('rec_tpl_label')}</span> ` +
        `<span class="font-bold text-indigo-400">${t(rec.recKey)}</span> ` +
        `<span class="text-slate-500">(${t(rec.reasonKey)})</span>`;
    recEl.classList.remove('hidden');
}

// ==========================================================
// 14. Generate Prompt — three independent scaffold builders
// ==========================================================
function generatePrompt() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    if (!sel.length) {
        // B8: brief visual warning — flash generate button red for 1.8 s
        const genBtn = document.querySelector('button[onclick="generatePrompt()"]');
        if (genBtn) {
            const orig = genBtn.innerText;
            genBtn.style.cssText = 'background:#ef4444!important;color:#fff!important;';
            genBtn.innerText = '⚠ Select at least one dimension';
            setTimeout(() => { genBtn.style.cssText = ''; genBtn.innerText = orig; }, 1800);
        }
        return;
    }

    // B: Guard non-English constraints
    const constrRaw = (document.getElementById('const-all')?.value || '').trim();
    const autoTransOn = document.getElementById('auto-translate-toggle')?.checked !== false;
    if (autoTransOn && hasNonEnglish(constrRaw)) {
        const warnEl  = document.getElementById('constraint-warning');
        const inputEl = document.getElementById('const-all');
        if (warnEl)  { warnEl.textContent = t('warn_nonenglish'); warnEl.classList.remove('hidden'); }
        if (inputEl) { inputEl.classList.add('border', 'border-red-500'); }
        return;
    }
    const constr = constrRaw;

    const nextVn = versionHistory.length ? Math.max(...versionHistory.map(v => v.version)) + 1 : 1;
    document.getElementById('initial-placeholder').classList.add('hidden');
    document.getElementById('skeleton-loader').classList.remove('hidden');
    document.getElementById('results-header').classList.add('hidden');

    setTimeout(() => {
        document.getElementById('skeleton-loader').classList.add('hidden');
        const res = document.getElementById('results-container');
        res.classList.remove('hidden'); res.innerHTML = '';
        document.getElementById('results-header').classList.remove('hidden');

        const prod     = document.getElementById('product-type').value;
        const compMode = document.querySelector('input[name="composition-mode"]:checked').value;
        const sysMode  = document.getElementById('system-mode').value;
        const pV   = document.getElementById('param-v').value;
        const pAR  = document.getElementById('param-ar').value;
        const pS   = document.getElementById('param-s').value;
        const pQ   = document.getElementById('param-q').value;
        const pRaw = document.getElementById('param-raw').checked;
        const pNo  = document.getElementById('param-no').value;

        const sortW = (a, b) => (WEIGHT_LVL[PRIO_MAP[b] || 'Low Priority'] || 1) - (WEIGHT_LVL[PRIO_MAP[a] || 'Low Priority'] || 1);
        let proc = [...sel];
        let strategyEffect = '';

        // Strategy: compute proc (active dim subset) and strategyEffect label
        if (compMode === 'Top-K Focus') {
            proc.sort(sortW);
            proc = proc.slice(0, 5);
            strategyEffect = `${t('effect_topk')} ${proc.map(d => d.split(' ')[0]).join('/')}`;

        } else if (compMode === 'One-Dimension Highlight') {
            const focusDim = document.getElementById('focus-dim-select')?.value;
            const focusD   = (focusDim && sel.includes(focusDim)) ? focusDim : [...sel].sort(sortW)[0];
            proc = [focusD];
            strategyEffect = `${t('effect_single')} ${focusD}`;

        } else if (compMode === 'Balanced Blend') {
            const g = {};
            sel.forEach(d => {
                const p = DIM_ORDER.find(gr => gr.children.includes(d))?.parent;
                if (p) { if (!g[p]) g[p] = []; g[p].push(d); }
            });
            const bc = [];
            for (const k in g) { g[k].sort(sortW); bc.push(g[k][0]); }
            proc = bc;
            strategyEffect = t('effect_blend');

        } else {
            // Recommended Mix — use all selected dims
            strategyEffect = t('effect_mix');
        }

        // Focus dim name for strategy intros (One-Dimension Highlight only)
        const focusDimName = (compMode === 'One-Dimension Highlight' && proc.length)
            ? proc[0].split(' ').slice(1).join(' ')
            : '';

        // Build param suffix once
        const paramSuffix = buildParamSuffix(pV, pAR, pS, pQ, pRaw, pNo);

        // E: Compute recommended template for badge
        const rec = computeRecommendedTemplate(sel, constr);

        // Three templates — each uses its own independent builder
        const TEMPLATES = [
            {
                id: 'visual', title: "Visual Focus",
                buildFn: () => buildVisualPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix)
            },
            {
                id: 'tech',   title: "Technical Focus",
                buildFn: () => buildTechnicalPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix)
            },
            {
                id: 'scen',   title: "Scenario Focus",
                buildFn: () => buildScenarioPrompt(prod, proc, compMode, focusDimName, constr, paramSuffix)
            }
        ];

        const cp = {};
        TEMPLATES.forEach(tpl => {
            const pText  = tpl.buildFn();
            const isRec  = (tpl.id === rec.id);
            const reasonText = t(rec.reasonKey);
            cp[tpl.id]   = { text: pText, eval: null, title: tpl.title };

            res.innerHTML += `
                <div class="result-card${isRec ? ' recommended-card' : ''}">
                    <div class="mb-${isRec ? '2' : '8'}">
                        <div class="flex justify-between items-start gap-4">
                            <div class="flex items-center gap-3 flex-wrap">
                                <h2 class="text-2xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none">${t(tpl.title)}</h2>
                                ${isRec ? `<span class="rec-badge">${t('rec_badge')}</span>` : ''}
                            </div>
                            <div class="flex bg-black/40 rounded-2xl p-1 gap-1 border border-slate-800 shadow-inner shrink-0">
                                <button onclick="setEval(${nextVn},'${tpl.id}','Prefer')"  id="btn-${nextVn}-${tpl.id}-Prefer"  class="eval-btn text-[10px] px-4 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Prefer')}</button>
                                <button onclick="setEval(${nextVn},'${tpl.id}','Neutral')" id="btn-${nextVn}-${tpl.id}-Neutral" class="eval-btn text-[10px] px-4 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Neutral')}</button>
                                <button onclick="setEval(${nextVn},'${tpl.id}','Discard')" id="btn-${nextVn}-${tpl.id}-Discard" class="eval-btn text-[10px] px-4 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Discard')}</button>
                            </div>
                        </div>
                        ${isRec ? `<p class="rec-reason-line mt-1.5">${reasonText}</p>` : ''}
                    </div>
                    <div class="prompt-text font-mono bg-black/50 p-6 rounded-3xl border border-slate-800 break-words relative group shadow-inner mb-6">
                        ${pText}
                        <button onclick="copyToClipboard(this,'${encodeURIComponent(pText).replace(/'/g,'%27')}')" class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl transition-all">${t('btn_copy')}</button>
                    </div>
                    <div class="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 space-y-2">
                        <span class="text-[10px] font-black text-slate-500 uppercase block mb-2 border-b border-slate-800 pb-2">${t('lbl_sum')}</span>
                        <div class="grid grid-cols-2 gap-y-2 text-[11px] font-bold text-slate-400">
                            <div class="flex justify-between px-3"><span class="text-slate-600">${t('Product')}:</span><span class="text-slate-200">${prod}</span></div>
                            <div class="flex justify-between px-3"><span class="text-slate-600">${t('lbl_comp')}:</span><span class="text-slate-200 text-right">${compMode}</span></div>
                            <div class="flex justify-between px-3"><span class="text-slate-600">${t('lbl_active_dims')}:</span><span class="text-slate-200">${proc.length}</span></div>
                            <div class="flex justify-between px-3"><span class="text-slate-600">Config:</span><span class="text-indigo-400">v${pV} / ${pAR} / s${pS}</span></div>
                            <div class="col-span-2 flex justify-between px-3 pt-1.5 border-t border-slate-800/60">
                                <span class="text-slate-600">${t('lbl_strategy_effect')}:</span>
                                <span class="text-emerald-400 text-right ml-4">${strategyEffect}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        const entry = {
            version: nextVn,
            timestamp: new Date().toLocaleTimeString(),
            productType: prod,
            sysMode,
            compMode,
            strategyEffect,
            dimensions: sel,
            params: { v: pV, ar: pAR, s: pS, q: pQ, raw: pRaw, no: pNo },
            prompts: cp,
            note: ''
        };
        versionHistory.push(entry);
        saveToLocalStorage();
        renderVersionHistory();
        document.getElementById('history-section').classList.remove('hidden');
    }, 600);
}

// ==========================================================
// 15. Eval + Version History
// ==========================================================
function setEval(vn, id, ev) {
    const v = versionHistory.find(h => h.version === vn);
    if (v) { v.prompts[id].eval = ev; saveToLocalStorage(); }
    document.querySelectorAll(`[id^="btn-${vn}-${id}"]`).forEach(b => b.classList.remove('active-prefer','active-neutral','active-discard'));
    document.getElementById(`btn-${vn}-${id}-${ev}`)?.classList.add(`active-${ev.toLowerCase()}`);
    renderVersionHistory();
}

function renderVersionHistory() {
    const hc = document.getElementById('history-container');
    const fp = document.getElementById('filter-prefer').checked;
    if (!hc) return;
    hc.innerHTML = '';
    [...versionHistory].reverse().forEach(v => {
        if (fp && !Object.values(v.prompts).some(p => p.eval === 'Prefer')) return;
        const ph = Object.entries(v.prompts).map(([id, da]) => {
            if (fp && da.eval !== 'Prefer') return '';
            const ac = da.eval ? `active-${da.eval.toLowerCase()}` : '';
            return `<div class="mb-4 p-4 border border-slate-800/50 bg-slate-900/30 rounded-2xl">
                <div class="flex justify-between text-[10px] font-black text-slate-500 mb-2 uppercase">
                    <span>${t(da.title)}</span>
                    <span class="eval-btn text-[9px] px-2 py-0.5 rounded ${ac}">${t(da.eval || '')}</span>
                </div>
                <div class="history-prompt-text font-mono">${da.text}</div>
            </div>`;
        }).join('');

        const dimDisplay = (v.dimensions || []).map(dimNameOnly).join(', ');
        const effectLine = v.strategyEffect ? `<span class="text-emerald-500/70 ml-3 text-[10px]">${t('lbl_strategy_effect')}: ${v.strategyEffect}</span>` : '';

        hc.innerHTML += `
            <details open class="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 mb-4 shadow-sm">
                <summary class="cursor-pointer flex justify-between items-start outline-none">
                    <div>
                        <span class="font-black uppercase italic text-slate-300 tracking-tighter">${t('Version')} ${v.version} — ${v.timestamp}</span>
                        ${effectLine}
                        <div class="text-[10px] text-slate-500 mt-1 font-medium">${t('Product')}: ${v.productType} · ${v.compMode}</div>
                    </div>
                    <button onclick="event.preventDefault(); openExportModal(${v.version})"
                            class="shrink-0 ml-4 text-[9px] font-black text-indigo-400 bg-indigo-400/10 px-3 py-1.5 rounded-xl border border-indigo-400/20 hover:bg-indigo-400/20 transition-all"
                            data-i18n="btn_exp_word">Export ↗</button>
                </summary>
                <div class="pt-5">
                    <div class="text-[10px] text-slate-600 mb-3 leading-relaxed">${t('lbl_active_dims')}: <span class="text-slate-500">${dimDisplay}</span></div>
                    <input type="text" class="w-full bg-black border border-slate-800 rounded-xl px-4 py-2 text-xs mb-4 text-slate-400 outline-none focus:border-indigo-500"
                           placeholder="${t('pl_note')}" value="${v.note || ''}" onchange="updateNote(${v.version}, this.value)">
                    ${ph}
                </div>
            </details>`;
    });
}

// ==========================================================
// 16. localStorage persistence
// ==========================================================
function saveToLocalStorage() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(versionHistory)); }
    catch(e) { console.warn('localStorage save failed:', e); }
}

function loadFromLocalStorage() {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (Array.isArray(data) && data.length) {
            versionHistory = data;
            document.getElementById('initial-placeholder').classList.remove('hidden');
            renderVersionHistory();
            document.getElementById('history-section').classList.remove('hidden');
        }
    } catch(e) { versionHistory = []; }
}

// ==========================================================
// 17. Export (Word primary + TXT secondary, full fields)
// ==========================================================
function dimNameOnly(d) { return d.replace(/^C\d+\s+/, ''); }

function buildExportTxt(v) {
    // B6: numbered C-code format e.g. "1) C7 Aesthetics; 2) C4 Comfort"
    const dims = v.dimensions || [];
    const dimFormatted = dims.map((d, i) => `${i + 1}) ${d}`).join('; ');
    const p = v.params || {};
    const paramStr = `--v ${p.v || '?'} --ar ${p.ar || '?'} --s ${p.s || '?'} --q ${p.q || '?'}${p.raw ? ' --raw' : ''}${p.no ? ' --no ' + p.no : ''}`;
    let out = `DimPrompt Research Export\n${'='.repeat(60)}\n\n`;
    out += `Version:          V${v.version}\n`;
    out += `Time:             ${v.timestamp}\n`;
    out += `Product:          ${v.productType}\n`;
    out += `System Mode:      ${v.sysMode || '-'}\n`;
    out += `Strategy:         ${v.compMode}\n`;
    out += `Strategy Effect:  ${v.strategyEffect || '-'}\n`;
    out += `Active Dims (${dims.length}):\n  ${dimFormatted}\n`;
    out += `Parameters:       ${paramStr}\n`;
    out += `Note:             ${v.note || '-'}\n\n`;
    out += `${'─'.repeat(60)}\nPROMPTS\n${'─'.repeat(60)}\n\n`;
    Object.entries(v.prompts || {}).forEach(([id, da]) => {
        out += `[${da.title}]  →  ${da.eval || 'Not evaluated'}\n${da.text}\n\n`;
    });
    return out;
}

function openExportModal(vn) {
    const v = vn ? versionHistory.find(h => h.version === vn) : versionHistory[versionHistory.length - 1];
    if (!v) return;
    currentExportVersion = v;
    document.getElementById('export-textarea').value = buildExportTxt(v);
    const modal = document.getElementById('export-modal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeExportModal() {
    const modal = document.getElementById('export-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 500);
}

function downloadExportTxt() {
    const v = currentExportVersion || versionHistory[versionHistory.length - 1];
    if (!v) return;
    const blob = new Blob([buildExportTxt(v)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `DimPrompt_V${v.version}.txt`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
}

function downloadExportWord() {
    const v = currentExportVersion || versionHistory[versionHistory.length - 1];
    if (!v) return;
    // B6: numbered C-code format, rendered as <ol> in Word
    const dims = v.dimensions || [];
    const dimListHtml = dims.length
        ? `<ol style="margin:4px 0 0 16px;padding:0;">${dims.map(d => `<li style="font-size:12px;">${d}</li>`).join('')}</ol>`
        : '-';
    const p = v.params || {};
    const paramStr  = `--v ${p.v||'?'} --ar ${p.ar||'?'} --s ${p.s||'?'} --q ${p.q||'?'}${p.raw?' --raw':''}${p.no?' --no '+p.no:''}`;

    const row = (label, val) => `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:30%;background:#f8fafc;vertical-align:top;">${label}</td><td style="padding:8px;border:1px solid #ddd;">${val}</td></tr>`;

    let html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>DimPrompt Report</title></head>
<body style="font-family:'Segoe UI',Arial,sans-serif;color:#1e293b;line-height:1.6;">
<h1 style="color:#4f46e5;border-bottom:3px solid #4f46e5;padding-bottom:10px;font-size:24px;">DimPrompt Generation Report</h1>
<h2 style="color:#334155;margin-top:24px;">Research Summary</h2>
<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
${row('Version', `V${v.version} (${v.timestamp})`)}
${row('Product', v.productType)}
${row('System Mode', v.sysMode || '-')}
${row('Strategy', v.compMode)}
${row('Strategy Effect', v.strategyEffect || '-')}
${row(`Active Dimensions (${dims.length})`, dimListHtml)}
${row('Parameters', paramStr)}
${row('Note', v.note || '-')}
</table>
<h2 style="color:#334155;margin-top:24px;">Generated Prompts</h2>`;

    Object.entries(v.prompts || {}).forEach(([id, da]) => {
        const evalColor = da.eval === 'Prefer' ? '#10b981' : da.eval === 'Discard' ? '#ef4444' : '#64748b';
        html += `<div style="margin-bottom:20px;padding:16px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;">
<h3 style="margin:0 0 8px;color:#1e293b;">${da.title}${da.eval ? ` <span style="color:${evalColor};font-size:14px;">[${da.eval}]</span>` : ''}</h3>
<p style="font-family:'Courier New',monospace;background:#fff;padding:12px;border:1px solid #cbd5e1;border-radius:4px;font-size:12px;line-height:1.7;word-break:break-word;">${da.text}</p>
</div>`;
    });

    html += `</body></html>`;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `DimPrompt_V${v.version}.doc`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
}

function copyExportText(btn) {
    const ta = document.getElementById('export-textarea'); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    const ot = btn.innerText; btn.innerText = t('txt_copied'); setTimeout(() => btn.innerText = ot, 2000);
}

// ==========================================================
// 18. Utilities
// ==========================================================
function updateNote(vn, val) {
    const v = versionHistory.find(h => h.version === vn);
    if (v) { v.note = val; saveToLocalStorage(); }
}
function toggleFolder(gid) {
    document.getElementById(`content-${gid}`).classList.toggle('collapsed');
    document.getElementById(`arrow-${gid}`).classList.toggle('rotate-180');
}
function toggleMode() {
    document.getElementById('dimensions-container').classList.toggle('hide-priorities', document.getElementById('system-mode').value === 'free');
}
function updateGroupState(gid) {
    const c = document.querySelectorAll(`.child-cb-${gid}`);
    const g = document.getElementById(`group-${gid}`);
    const cc = Array.from(c).filter(i => i.checked).length;
    if (g) { g.checked = cc === c.length; g.indeterminate = cc > 0 && cc < c.length; }
    updateChart();
    updateFocusDimOptions();
    updateRecommendedTemplate();
}
function toggleGroup(gcb, gid) {
    document.querySelectorAll(`.child-cb-${gid}`).forEach(cb => { cb.checked = gcb.checked; });
    updateGroupState(gid);
}
function filterDimensions() {
    const term = document.getElementById('dim-search').value.toLowerCase();
    document.querySelectorAll('.dim-item-container').forEach(el => {
        el.style.display = el.getAttribute('data-name').toLowerCase().includes(term) ? 'flex' : 'none';
    });
}
function resetAll() {
    document.querySelectorAll('.dim-checkbox').forEach(cb => cb.checked = false);
    document.getElementById('const-all').value = '';
    document.getElementById('prod-search').value = '';
    renderProductSelect();
    updateChart();
    updateFocusDimOptions();
    updateRecommendedTemplate();
    clearConstraintWarning();
}
function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }

function copyToClipboard(btn, et) {
    const text = decodeURIComponent(et);
    const orig = btn.innerText;
    const show = () => { btn.innerText = t('txt_copied'); setTimeout(() => btn.innerText = orig, 1200); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(show).catch(() => fbCopy(text, show));
    else fbCopy(text, show);
}
function fbCopy(text, cb) {
    const ta = document.createElement('textarea'); ta.value = text;
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta); cb();
}
