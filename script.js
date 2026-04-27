// ==========================================================
// 1. Language System
// ==========================================================
let currentLang = 'en';
const i18n = {
    en: {
        app_title: "DimPrompt", tit_config: "Configuration", leg_core: "Core", leg_high: "High", leg_med: "Med", leg_low: "Low",
        lbl_mode: "Mode Selection", lbl_prod: "Product Type", lbl_comp: "Strategy", lbl_dim: "Dimensions", lbl_const: "Constraints", lbl_param: "Parameters",
        opt_rec: "Research Mode", opt_free: "Free Mode", btn_reset: "Reset", btn_gen: "Generate", btn_exp: "Export Data",
        btn_copy: "Copy Prompt", btn_copy_txt: "Copy All", btn_download: "Download Word",
        // D: Strategy names
        comp_def: "Recommended Mix", comp_top: "Top-K Focus (K=5)", comp_sin: "One-Dimension Highlight", comp_mul: "Balanced Blend",
        // D: Strategy descriptions (shown below each button)
        comp_def_desc: "Blend dims in standard way. Good for first runs.",
        comp_top_desc: "Emphasize top-5 highest-weight dims. More focused output.",
        comp_sin_desc: "Strongly highlight one chosen dim. Best for A/B comparison.",
        comp_mul_desc: "Even weight across all dims. No single dim dominates.",
        // D: Focus dimension label
        lbl_focus: "Focus Dimension",
        // B: Constraints
        lbl_autotrans: "Auto-translate constraints to English (ZH/KR→EN)",
        warn_nonenglish: "⚠ Non-English characters detected in constraints. Please provide an English version before generating.",
        // Search / placeholders
        pl_search: "Search dimensions...", pl_user: "Constraints (User, Eng, Market, Style)...", pl_no: "Exclude words...", pl_note: "Version note...",
        txt_wait: "Select dimensions and click generate.", txt_empty_tit: "Ready to Build", txt_chart_empty: "No Selection", txt_filter: "Prefer Only", txt_syn: "Synthesizing...", txt_copied: "Copied!",
        tit_hist: "Version History", tit_exp: "Export", lbl_rat: "Rationale", lbl_gen: "Prompt", lbl_sum: "Basis", btn_close: "Close",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus",
        "Version": "Version", "Prefer": "Prefer", "Neutral": "Neutral", "Discard": "Discard", "Note": "Note", "Product": "Product",
        // D: Strategy effect labels
        effect_mix: "Standard mix of selected dimensions.",
        effect_topk: "Prioritized Top-K:",
        effect_blend: "Even emphasis across selected dimensions.",
        effect_single: "Highlighted:",
        // E: Recommended template
        rec_tpl_label: "Recommended template:",
        rec_tpl_visual: "Visual Focus",
        rec_tpl_tech: "Technical Focus",
        rec_tpl_scen: "Scenario Focus",
        rec_tpl_reason_aesthetic: "because you emphasized aesthetic/emotional dimensions",
        rec_tpl_reason_technical: "because you prioritized usability/reliability/safety",
        rec_tpl_reason_scenario: "because your constraints suggest a specific use context",
        // History active dims label
        lbl_active_dims: "Active dims",
        lbl_strategy_effect: "Strategy effect",
    },
    zh: {
        app_title: "DimPrompt", tit_config: "配置面板", leg_core: "核心", leg_high: "高优", leg_med: "中优", leg_low: "低优",
        lbl_mode: "实验模式", lbl_prod: "产品类型", lbl_comp: "生成策略", lbl_dim: "设计维度", lbl_const: "补充约束条件", lbl_param: "生成参数",
        opt_rec: "研究推荐模式", opt_free: "自由组合模式", btn_reset: "清空", btn_gen: "生成方案", btn_exp: "导出数据",
        btn_copy: "复制提示词", btn_copy_txt: "复制全量数据", btn_download: "下载 Word",
        // D: Strategy names
        comp_def: "常规混合", comp_top: "高权重优先 (K=5)", comp_sin: "单维度强化", comp_mul: "均衡融合",
        // D: Strategy descriptions
        comp_def_desc: "按常规方式融合所选维度，适合首次使用/快速出图。",
        comp_top_desc: "优先强调权重最高的 5 个维度，让提示词更聚焦。",
        comp_sin_desc: "强烈突出一个指定维度，便于对照或验证维度影响。",
        comp_mul_desc: "均衡强调所选维度，避免某一维度过强导致偏航。",
        // D: Focus dimension label
        lbl_focus: "焦点维度",
        // B: Constraints
        lbl_autotrans: "自动将约束条件翻译为英文（中/韩→英）",
        warn_nonenglish: "⚠ 检测到约束条件含非英文字符。请提供英文版本后再生成。",
        // Search / placeholders
        pl_search: "搜索维度...", pl_user: "输入用户需求、工程制造、市场品牌或设计风格等补充约束...", pl_no: "排除词...", pl_note: "记录实验笔记...",
        txt_wait: "在左侧勾选维度并点击生成以开始研究", txt_empty_tit: "等待生成", txt_chart_empty: "勾选维度查看分布", txt_filter: "仅看偏好", txt_syn: "正在合成...", txt_copied: "已成功复制!",
        tit_hist: "版本记录", tit_exp: "导出", lbl_rat: "理论依据", lbl_gen: "提示词文本", lbl_sum: "摘要", btn_close: "关闭",
        "Visual Focus": "视觉焦点", "Technical Focus": "技术焦点", "Scenario Focus": "场景焦点",
        "Version": "版本", "Prefer": "偏好", "Neutral": "中立", "Discard": "放弃", "Note": "笔记", "Product": "产品",
        // D: Strategy effect labels
        effect_mix: "所选维度标准混合输出。",
        effect_topk: "高权重 Top-K 优先：",
        effect_blend: "所选维度均衡强调输出。",
        effect_single: "焦点维度：",
        // E: Recommended template
        rec_tpl_label: "推荐模板：",
        rec_tpl_visual: "视觉焦点",
        rec_tpl_tech: "技术焦点",
        rec_tpl_scen: "场景焦点",
        rec_tpl_reason_aesthetic: "因为你侧重了审美/情感类维度",
        rec_tpl_reason_technical: "因为你优先考虑了可用性/可靠性/安全性",
        rec_tpl_reason_scenario: "因为你的约束条件暗示了具体使用场景",
        lbl_active_dims: "活跃维度",
        lbl_strategy_effect: "策略效果",
    },
    ko: {
        app_title: "DimPrompt", tit_config: "구성", leg_core: "핵심", leg_high: "높음", leg_med: "중간", leg_low: "낮음",
        lbl_mode: "모드", lbl_prod: "제품", lbl_comp: "전략", lbl_dim: "디자인 차원", lbl_const: "제약 조건", lbl_param: "파라미터",
        opt_rec: "추천 모드", opt_free: "자유 모드", btn_reset: "초기화", btn_gen: "생성하기", btn_exp: "내보내기",
        btn_copy: "복사", btn_copy_txt: "전체 복사", btn_download: "Word 다운로드",
        // D: Strategy names
        comp_def: "권장 혼합", comp_top: "상위 K 집중 (K=5)", comp_sin: "단일 차원 강조", comp_mul: "균형 혼합",
        // D: Strategy descriptions
        comp_def_desc: "선택한 차원을 일반적인 방식으로 혼합합니다. 처음 사용 시 권장.",
        comp_top_desc: "가중치 상위 5개 차원을 우선 강조합니다. 더 집중된 출력.",
        comp_sin_desc: "지정된 하나의 차원을 강하게 강조합니다. A/B 비교에 최적.",
        comp_mul_desc: "모든 차원을 균등하게 강조합니다. 특정 차원 과도 방지.",
        // D: Focus dimension label
        lbl_focus: "집중 차원",
        // B: Constraints
        lbl_autotrans: "제약 조건을 영어로 자동 번역 (ZH/KR→EN)",
        warn_nonenglish: "⚠ 제약 조건에 비영어 문자가 감지되었습니다. 영어 버전을 제공한 후 생성하세요.",
        // Search / placeholders
        pl_search: "검색...", pl_user: "제약 조건 입력 (사용자, 엔지니어링, 시장 또는 디자인 스타일)...", pl_no: "제외어...", pl_note: "메모...",
        txt_wait: "차원을 선택하여 시작하세요.", txt_empty_tit: "합성 준비 완료", txt_chart_empty: "차원을 선택하세요", txt_filter: "선호만 보기", txt_syn: "합성 중...", txt_copied: "복사됨!",
        tit_hist: "버전 기록", tit_exp: "내보내기", lbl_rat: "이론적 근거", lbl_gen: "프롬프트", lbl_sum: "요약", btn_close: "닫기",
        "Visual Focus": "시각적 포커스", "Technical Focus": "기술적 포커스", "Scenario Focus": "시나리오 포커스",
        "Version": "버전", "Prefer": "선호", "Neutral": "중립", "Discard": "폐기", "Note": "메모", "Product": "제품",
        // D: Strategy effect labels
        effect_mix: "선택된 차원의 표준 혼합 출력.",
        effect_topk: "상위 K 우선순위:",
        effect_blend: "선택된 차원의 균등 강조 출력.",
        effect_single: "강조 차원:",
        // E: Recommended template
        rec_tpl_label: "추천 템플릿:",
        rec_tpl_visual: "시각적 포커스",
        rec_tpl_tech: "기술적 포커스",
        rec_tpl_scen: "시나리오 포커스",
        rec_tpl_reason_aesthetic: "미학/감성 차원을 중시했기 때문에",
        rec_tpl_reason_technical: "사용성/신뢰성/안전성을 우선했기 때문에",
        rec_tpl_reason_scenario: "제약 조건이 특정 사용 맥락을 시사하기 때문에",
        lbl_active_dims: "활성 차원",
        lbl_strategy_effect: "전략 효과",
    }
};

// ==========================================================
// A: Tooltip content — per dimension, 3 languages
// ==========================================================
const DIM_TOOLTIPS = {
    en: {
        "C1 Usability":            { def: "How easily users can learn and operate the product.", ex: "e.g. A mouse with labeled buttons reduces the learning curve." },
        "C2 Reliability":          { def: "Consistent performance under expected conditions.", ex: "e.g. A keyboard that registers every keystroke without failure." },
        "C3 Safety":               { def: "Protection from harm or injury during normal use.", ex: "e.g. Rounded edges on a file box prevent hand cuts." },
        "C4 Comfort":              { def: "Physical and ergonomic ease during prolonged use.", ex: "e.g. A wrist rest on an ergonomic mouse reduces fatigue." },
        "C5 Intuitive Operation":  { def: "Actions users understand without instruction.", ex: "e.g. A play/pause icon understood immediately without a manual." },
        "C6 Feedback Mechanism":   { def: "How the system communicates its state to the user.", ex: "e.g. A tactile click sound confirms a mouse button press." },
        "C7 Aesthetics":           { def: "The visual appeal and beauty of the product.", ex: "e.g. A sleek matte finish that complements office decor." },
        "C8 Emotional Resonance":  { def: "Design that evokes feelings or emotional connection.", ex: "e.g. A form language that makes users feel confident and professional." },
        "C9 Customization":        { def: "The ability to adapt the product to personal preferences.", ex: "e.g. Adjustable DPI settings and RGB lighting on a mouse." },
        "C10 Innovation":          { def: "Novel or breakthrough design beyond existing solutions.", ex: "e.g. Wireless charging built into a mouse pad." },
        "C11 Market Orientation":  { def: "Alignment with the needs of the target market.", ex: "e.g. A budget keyboard designed specifically for students." },
        "C12 Forward-looking":     { def: "Anticipating and reflecting future trends in design.", ex: "e.g. Adopting USB-C before the industry has fully shifted." },
        "C13 Market Adaptability": { def: "Ability to function effectively across diverse markets.", ex: "e.g. A keyboard layout supporting multiple languages." },
        "C14 Brand Identity":      { def: "Visual and functional consistency with brand values.", ex: "e.g. Minimalist product language consistent with Apple-style branding." },
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

const PRODUCT_DATA = {
    en: { "Office Mouse": "Office Mouse", "Office Keyboard": "Keyboard", "File Box": "File Box", "Organizer": "Organizer", "Pen Holder": "Pen Holder", "Sticky Notes": "Sticky Notes", "USB Drive": "USB Drive", "Printer": "Printer", "Monitor": "Monitor", "Scanner": "Scanner", "Projector": "Projector", "All-in-One PC": "AIO PC", "Office Desk": "Office Desk", "Office Chair": "Chair", "Standing Desk": "Standing Desk", "Sofa / Table": "Sofa / Table" },
    zh: { "Office Mouse": "办公鼠标", "Office Keyboard": "键盘", "File Box": "文件盒", "Organizer": "收纳器", "Pen Holder": "笔筒", "Sticky Notes": "便签", "USB Drive": "U盘", "Printer": "打印机", "Monitor": "显示器", "Scanner": "扫描仪", "Projector": "投影仪", "AIO PC": "一体机", "Office Desk": "办公桌", "Office Chair": "办公椅", "Standing Desk": "升降桌", "Sofa / Table": "沙发茶几" },
    ko: { "Office Mouse": "오피스 마우스", "Office Keyboard": "키보드", "File Box": "파일함", "Organizer": "정리함", "Pen Holder": "펜꽂이", "Sticky Notes": "메모장", "USB Drive": "USB 드라이브", "Printer": "프린터", "Monitor": "모니터", "Scanner": "스캐너", "Projector": "프로젝터", "AIO PC": "올인원 PC", "Office Desk": "사무용 책상", "Office Chair": "의자", "Standing Desk": "스탠딩 데스크", "Sofa / Table": "소파/테이블" }
};

const DIM_DATA = {
    parent: {
        "B1 Functional Design":            { en: "Functional Design", zh: "功能设计", ko: "기능 디자인" },
        "B2 User Experience Design":       { en: "User Experience Design", zh: "用户体验设计", ko: "사용자 경험 디자인" },
        "B3 Emotional Design":             { en: "Emotional Design", zh: "情感设计", ko: "감성 디자인" },
        "B4 Innovation and User-Driven Design": { en: "Innovation Design", zh: "创新设计", ko: "혁신 디자인" },
        "B5 Market and Brand Adaptation":  { en: "Market Adaptation", zh: "市场品牌适配", ko: "시장 브랜드 적응" },
        "B6 Sustainable Design":           { en: "Sustainable Design", zh: "可持续设计", ko: "지속가능 디자인" }
    },
    child: {
        "C1 Usability":            { zh: "易用性",      ko: "사용성" },
        "C2 Reliability":          { zh: "可靠性",      ko: "신뢰성" },
        "C3 Safety":               { zh: "安全性",      ko: "안전성" },
        "C4 Comfort":              { zh: "舒适度",      ko: "편안함" },
        "C5 Intuitive Operation":  { zh: "直觉操作",    ko: "직관적 조작" },
        "C6 Feedback Mechanism":   { zh: "反馈机制",    ko: "피드백 메커니즘" },
        "C7 Aesthetics":           { zh: "审美性",      ko: "미학" },
        "C8 Emotional Resonance":  { zh: "情感共鸣",    ko: "감성적 공명" },
        "C9 Customization":        { zh: "个性化定制",  ko: "맞춤화" },
        "C10 Innovation":          { zh: "创新性",      ko: "혁신성" },
        "C11 Market Orientation":  { zh: "市场导向",    ko: "시장 지향성" },
        "C12 Forward-looking":     { zh: "前瞻性",      ko: "미래 지향성" },
        "C13 Market Adaptability": { zh: "市场适应性",  ko: "시장 적응성" },
        "C14 Brand Identity":      { zh: "品牌识别",    ko: "브랜드 정체성" },
        "C15 Inclusiveness":       { zh: "包容性设计",  ko: "포용성" },
        "C16 Longevity":           { zh: "长寿性",      ko: "내구성" },
        "C17 Eco-friendly Materials": { zh: "环保材料", ko: "친환경 소재" },
        "C18 Production Cost":     { zh: "生产成本",    ko: "생산 비용" }
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

function t(key) { return (i18n[currentLang] && i18n[currentLang][key]) ? i18n[currentLang][key] : key; }

// ==========================================================
// 2. Chart
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

// ==========================================================
// A: Tooltip functions
// ==========================================================
function showDimTooltip(btn, dimKey) {
    const tooltip = document.getElementById('dim-tooltip');
    const data = (DIM_TOOLTIPS[currentLang] || DIM_TOOLTIPS['en'])[dimKey];
    if (!data || !tooltip) return;

    document.getElementById('dim-tooltip-def').textContent = data.def;
    document.getElementById('dim-tooltip-ex').textContent = data.ex;

    const rect = btn.getBoundingClientRect();
    const TW = 270, TH = 90;
    let left = rect.right + 10;
    let top  = rect.top;

    if (left + TW > window.innerWidth - 8)  left = rect.left - TW - 10;
    if (top  + TH > window.innerHeight - 8) top  = rect.bottom - TH;
    if (left < 8) left = 8;
    if (top  < 8) top  = 8;

    tooltip.style.left = left + 'px';
    tooltip.style.top  = top  + 'px';
    tooltip.classList.remove('hidden');
}

function hideDimTooltip() {
    const tooltip = document.getElementById('dim-tooltip');
    if (tooltip) tooltip.classList.add('hidden');
}

// ==========================================================
// 3. Render Dimensions
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

            // A: ? button outside the label to avoid checkbox toggle
            return `
            <div class="dim-item-container flex items-center gap-1 hover:bg-white/5 rounded-xl group" data-name="${c}">
                <label class="flex items-center gap-2 cursor-pointer p-2.5 flex-1 min-w-0">
                    <input type="checkbox" value="${c}" class="dim-checkbox child-cb-${gid} w-4 h-4 rounded border-slate-700 accent-indigo-500 shrink-0"
                           onchange="updateGroupState('${gid}');" ${checked.includes(c) ? 'checked' : ''}>
                    <span class="priority-dot w-2 h-2 rounded-full ${DOTS[PRIO_MAP[c] || 'Low Priority']} shrink-0"></span>
                    <span class="text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors truncate">${childText}</span>
                </label>
                <button
                    class="dim-q-btn shrink-0 mr-2 w-4 h-4 rounded-full bg-slate-700 text-slate-400 text-[9px] font-black flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                    onmouseenter="showDimTooltip(this,'${c}')"
                    onmouseleave="hideDimTooltip()">?</button>
            </div>`;
        }).join('');

        container.innerHTML += `
            <div id="card-${gid}" class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all shadow-sm">
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
// 4. Language
// ==========================================================
function changeLanguage() {
    currentLang = document.getElementById('lang-switch').value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (i18n[currentLang][k]) el.tagName === 'OPTION' ? el.text = i18n[currentLang][k] : el.innerText = i18n[currentLang][k];
    });
    const pSelect = document.getElementById('product-type');
    Array.from(pSelect.querySelectorAll('option')).forEach(opt => {
        if (PRODUCT_DATA[currentLang][opt.value]) opt.text = PRODUCT_DATA[currentLang][opt.value];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLang][k]) el.placeholder = i18n[currentLang][k];
    });
    renderDimensions();
    if (radarChart) {
        radarChart.data.labels = Object.keys(DIM_DATA.parent).map(k => DIM_DATA.parent[k][currentLang].split(' ')[0]);
        radarChart.update();
    }
    // A: Update tooltip content language (tooltip re-reads currentLang on next hover — no extra work needed)
    // E: Re-render recommended template with new language
    updateRecommendedTemplate();
    // B: Re-render warning text if visible
    const warnEl = document.getElementById('constraint-warning');
    if (warnEl && !warnEl.classList.contains('hidden')) {
        warnEl.textContent = t('warn_nonenglish');
    }
    if (versionHistory.length) renderVersionHistory();
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage();
    initChart();
    updateFocusDimOptions();
});

// ==========================================================
// 5. B: Non-English detection helpers
// ==========================================================
function hasNonEnglish(str) {
    // Matches CJK Unified Ideographs, Hangul, Hiragana/Katakana
    return /[\u4e00-\u9fff\u3400-\u4dbf\uac00-\ud7af\u3040-\u30ff]/.test(str);
}

function clearConstraintWarning() {
    const warnEl = document.getElementById('constraint-warning');
    const inputEl = document.getElementById('const-all');
    if (warnEl) warnEl.classList.add('hidden');
    if (inputEl) { inputEl.classList.remove('border-red-500'); inputEl.classList.remove('border'); }
}

// ==========================================================
// 6. D: Focus dimension selector
// ==========================================================
function updateFocusDimOptions() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    const focusSelect = document.getElementById('focus-dim-select');
    const wrapper = document.getElementById('focus-dim-wrapper');
    if (!focusSelect || !wrapper) return;

    const compMode = document.querySelector('input[name="composition-mode"]:checked')?.value || '';
    const isHighlight = (compMode === 'One-Dimension Highlight');
    wrapper.classList.toggle('hidden', !isHighlight);

    if (sel.length === 0) {
        focusSelect.innerHTML = `<option value="">— ${t('lbl_dim')} —</option>`;
        return;
    }
    const sortW = (a, b) => (WEIGHT_LVL[PRIO_MAP[b] || 'Low Priority'] || 1) - (WEIGHT_LVL[PRIO_MAP[a] || 'Low Priority'] || 1);
    const sorted = [...sel].sort(sortW);
    const currentVal = focusSelect.value;
    focusSelect.innerHTML = sorted.map(d => `<option value="${d}">${d}</option>`).join('');
    focusSelect.value = (currentVal && sorted.includes(currentVal)) ? currentVal : sorted[0];
}

// ==========================================================
// 7. E: Recommended Template
// ==========================================================
function updateRecommendedTemplate() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    const constr = (document.getElementById('const-all')?.value || '').toLowerCase();
    const recEl = document.getElementById('recommended-template-area');
    if (!recEl) return;

    if (sel.length === 0) { recEl.classList.add('hidden'); return; }

    // Scenario signals (EN + ZH + KO keywords)
    const scenarioSignals = [
        'office','meeting','user','context','elderly','student','home','outdoor','public','team',
        'group','scenario','environment','workspace','person','crowd','usage','field',
        '场景','人群','使用','环境','老人','学生','办公','室外','情境','背景',
        '시나리오','환경','사용자','노인','학생','상황','맥락'
    ];
    const hasScenarioSignal = scenarioSignals.some(s => constr.includes(s));

    const aestheticDims = ['C7 Aesthetics', 'C8 Emotional Resonance', 'C9 Customization'];
    const techDims      = ['C1 Usability', 'C2 Reliability', 'C3 Safety', 'C5 Intuitive Operation', 'C6 Feedback Mechanism'];
    const aestheticCount = sel.filter(d => aestheticDims.includes(d)).length;
    const techCount      = sel.filter(d => techDims.includes(d)).length;

    let recKey, reasonKey;
    if (hasScenarioSignal) {
        recKey = 'rec_tpl_scen'; reasonKey = 'rec_tpl_reason_scenario';
    } else if (techCount >= 2 && techCount >= aestheticCount) {
        recKey = 'rec_tpl_tech'; reasonKey = 'rec_tpl_reason_technical';
    } else {
        recKey = 'rec_tpl_visual'; reasonKey = 'rec_tpl_reason_aesthetic';
    }

    recEl.innerHTML =
        `<span class="font-black text-slate-500 uppercase tracking-wider" style="font-size:9px">${t('rec_tpl_label')}</span> ` +
        `<span class="font-bold text-indigo-400">${t(recKey)}</span> ` +
        `<span class="text-slate-500">(${t(reasonKey)})</span>`;
    recEl.classList.remove('hidden');
}

// ==========================================================
// 8. Generate Prompt
// ==========================================================
function generatePrompt() {
    const sel = Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
    if (!sel.length) return;

    // B: Non-English constraint check
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

    const vn = versionHistory.length + 1;
    document.getElementById('initial-placeholder').classList.add('hidden');
    document.getElementById('skeleton-loader').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('skeleton-loader').classList.add('hidden');
        const res = document.getElementById('results-container');
        res.classList.remove('hidden'); res.innerHTML = '';

        const prod    = document.getElementById('product-type').value;
        const compMode = document.querySelector('input[name="composition-mode"]:checked').value;
        const pV  = document.getElementById('param-v').value;
        const pAR = document.getElementById('param-ar').value;
        const pS  = document.getElementById('param-s').value;
        const pQ  = document.getElementById('param-q').value;
        const pRaw = document.getElementById('param-raw').checked ? '--raw' : '';
        const pNo  = document.getElementById('param-no').value;

        const sortW = (a, b) => (WEIGHT_LVL[PRIO_MAP[b] || 'Low Priority'] || 1) - (WEIGHT_LVL[PRIO_MAP[a] || 'Low Priority'] || 1);

        let coreT = '', proc = [...sel], strategyEffect = '', rationaleNote = '';

        // D: Compose prompt core based on strategy
        if (compMode === 'Top-K Focus') {
            proc.sort(sortW); proc = proc.slice(0, 5);
            coreT = `Prioritizing top dimensions: ${proc.join(', ')}. `;
            strategyEffect = `${t('effect_topk')} ${proc.map(d => d.split(' ')[0]).join('/')}`;

        } else if (compMode === 'One-Dimension Highlight') {
            const focusDim = document.getElementById('focus-dim-select')?.value;
            const focusD = (focusDim && sel.includes(focusDim)) ? focusDim : [...sel].sort(sortW)[0];
            const focusName = focusD.split(' ').slice(1).join(' ');
            proc = [focusD];
            coreT = `Design strongly driven by [${focusD}]. ${focusName} is the primary design driver — emphasized throughout all visual and functional decisions. `;
            rationaleNote = `Single Focus on: ${focusD} (${focusName})`;
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
            coreT = `Balanced emphasis across dimensions: ${bc.join(', ')}. `;
            strategyEffect = t('effect_blend');

        } else { // Recommended Mix
            coreT = `Dimensions included: ${sel.join(', ')}. `;
            strategyEffect = t('effect_mix');
        }

        const TEMPLATES = [
            { id: 'visual', title: "Visual Focus",    suffix: "studio high-end lighting, minimalist, clean background" },
            { id: 'tech',   title: "Technical Focus", suffix: "blueprint style, detailed technical draft, engineering presentation" },
            { id: 'scen',   title: "Scenario Focus",  suffix: "real-world context, photography, natural lighting" }
        ];

        let cp = {};
        TEMPLATES.forEach(tpl => {
            const pText = `Imagine a ${prod} design. ${coreT}${constr ? 'Constraints: ' + constr + '. ' : ''}${rationaleNote ? rationaleNote + '. ' : ''}${tpl.suffix} --v ${pV} --ar ${pAR} --s ${pS} --q ${pQ} ${pRaw} ${pNo ? '--no ' + pNo : ''}`.replace(/\s+/g, ' ').trim();

            cp[tpl.id] = { text: pText, eval: null, title: tpl.title };

            res.innerHTML += `
                <div class="result-card">
                    <div class="flex justify-between items-center mb-8 gap-4">
                        <h2 class="text-2xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none">${t(tpl.title)}</h2>
                        <div class="flex bg-black/40 rounded-2xl p-1 gap-1 border border-slate-800 shadow-inner">
                            <button onclick="setEval(${vn},'${tpl.id}','Prefer')"  id="btn-${vn}-${tpl.id}-Prefer"  class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Prefer')}</button>
                            <button onclick="setEval(${vn},'${tpl.id}','Neutral')" id="btn-${vn}-${tpl.id}-Neutral" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Neutral')}</button>
                            <button onclick="setEval(${vn},'${tpl.id}','Discard')" id="btn-${vn}-${tpl.id}-Discard" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Discard')}</button>
                        </div>
                    </div>
                    <div class="prompt-text font-mono bg-black/50 p-6 rounded-3xl border border-slate-800 break-words relative group shadow-inner">
                        ${pText}
                        <button onclick="copyToClipboard(this,'${encodeURIComponent(pText)}')" class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl transition-all">${t('btn_copy')}</button>
                    </div>
                    <div class="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 mt-6 space-y-3">
                        <span class="text-[10px] font-black text-slate-500 uppercase block mb-2 border-b border-slate-800 pb-2">${t('lbl_sum')}</span>
                        <div class="grid grid-cols-2 gap-y-3 text-[11px] font-bold text-slate-400">
                            <div class="flex justify-between px-4"><span class="text-slate-600">${t('Product')}:</span><span class="text-slate-200">${prod}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">${t('lbl_comp')}:</span><span class="text-slate-200">${compMode}</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">${t('lbl_active_dims')}:</span><span class="text-slate-200">${proc.length} items</span></div>
                            <div class="flex justify-between px-4"><span class="text-slate-600">Config:</span><span class="text-indigo-400">v${pV} / ${pAR} / s${pS}</span></div>
                            <div class="col-span-2 flex justify-between px-4 pt-1 border-t border-slate-800/60">
                                <span class="text-slate-600">${t('lbl_strategy_effect')}:</span>
                                <span class="text-emerald-400 text-right ml-4">${strategyEffect}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        versionHistory.push({ version: vn, timestamp: new Date().toLocaleTimeString(), productType: prod, dimensions: sel, prompts: cp, note: '', compMode, strategyEffect });
        renderVersionHistory();
        document.getElementById('history-section').classList.remove('hidden');
    }, 600);
}

// ==========================================================
// 9. Eval + Version History
// ==========================================================
function setEval(vn, id, ev) {
    const v = versionHistory.find(h => h.version === vn);
    if (v) v.prompts[id].eval = ev;
    const btns = document.querySelectorAll(`[id^="btn-${vn}-${id}"]`);
    btns.forEach(b => b.classList.remove('active-prefer', 'active-neutral', 'active-discard'));
    const target = document.getElementById(`btn-${vn}-${id}-${ev}`);
    if (target) target.classList.add(`active-${ev.toLowerCase()}`);
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
            const activeClass = da.eval ? `active-${da.eval.toLowerCase()}` : '';
            return `<div class="mb-4 p-4 border border-slate-800/50 bg-slate-900/30 rounded-2xl">
                <div class="flex justify-between text-[10px] font-black text-slate-500 mb-2 uppercase">
                    <span>${t(da.title)}</span>
                    <span class="eval-btn text-[9px] px-2 py-0.5 rounded ${activeClass}">${t(da.eval || '')}</span>
                </div>
                <div class="history-prompt-text font-mono">${da.text}</div>
            </div>`;
        }).join('');

        const effectLine = v.strategyEffect ? `<div class="text-[10px] text-emerald-500/70 mt-1">${t('lbl_strategy_effect')}: ${v.strategyEffect}</div>` : '';

        hc.innerHTML += `
            <details open class="group bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 mb-6 shadow-sm">
                <summary class="cursor-pointer flex flex-col outline-none">
                    <span class="font-black uppercase italic text-slate-300 tracking-tighter">${t('Version')} ${v.version} — ${v.timestamp}</span>
                    ${effectLine}
                </summary>
                <div class="pt-6">
                    <input type="text" class="w-full bg-black border border-slate-800 rounded-xl px-4 py-2 text-xs mb-4 text-slate-400 outline-none focus:border-indigo-500"
                           placeholder="${t('pl_note')}" value="${v.note}" onchange="updateNote(${v.version},this.value)">
                    ${ph}
                </div>
            </details>`;
    });
}

// ==========================================================
// 10. Utilities
// ==========================================================
function updateNote(vn, val) { const v = versionHistory.find(h => h.version === vn); if (v) v.note = val; }

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
    updateChart();
    updateFocusDimOptions();
    updateRecommendedTemplate();
    clearConstraintWarning();
}

function toggleDarkMode() { document.documentElement.classList.toggle('dark'); }

function copyToClipboard(btn, et) {
    const text = decodeURIComponent(et);
    const orig = btn.innerText;
    const show = () => { btn.innerText = t('txt_copied'); setTimeout(() => btn.innerText = orig, 1000); };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(show).catch(() => fbCopy(text, show));
    else fbCopy(text, show);
}
function fbCopy(text, cb) {
    const ta = document.createElement('textarea'); ta.value = text;
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta); cb();
}

function closeExportModal() {
    document.getElementById('export-modal').classList.add('opacity-0');
    setTimeout(() => document.getElementById('export-modal').classList.add('hidden'), 500);
}

function copyExportText(btn) {
    const ta = document.getElementById('export-textarea'); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    const ot = btn.innerText; btn.innerText = t('txt_copied'); setTimeout(() => btn.innerText = ot, 2000);
}

function exportCurrentVersion() {
    const v = versionHistory[versionHistory.length - 1]; if (!v) return;
    let txt = `[V${v.version}] ${v.timestamp}\nProduct: ${v.productType}\nNote: ${v.note}\n\nPrompts:\n`;
    Object.entries(v.prompts).forEach(([id, da]) => { txt += `${da.title} (${da.eval || 'None'}):\n${da.text}\n\n`; });
    document.getElementById('export-textarea').value = txt;
    document.getElementById('export-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('export-modal').classList.remove('opacity-0'), 10);
}

function downloadExportText() {
    const v = versionHistory[versionHistory.length - 1]; if (!v) return;
    const paramsMatch = v.prompts[Object.keys(v.prompts)[0]].text.match(/--v\s[\d.]+\s--ar\s[\d:]+\s--s\s\d+\s--q\s[\d.]+(?:\s--raw)?(?:\s--no\s.+)?/);
    const params = paramsMatch ? paramsMatch[0] : 'N/A';

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>DimPrompt Report</title></head>
    <body style="font-family:'Segoe UI',Arial,sans-serif;color:#333;">
        <h1 style="color:#4f46e5;border-bottom:2px solid #4f46e5;padding-bottom:10px;">DimPrompt Generation Report</h1>
        <h2>Research Basis Summary</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:30%;">Version</td><td style="padding:8px;border:1px solid #ddd;">V${v.version} (${v.timestamp})</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Product</td><td style="padding:8px;border:1px solid #ddd;">${v.productType}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Strategy</td><td style="padding:8px;border:1px solid #ddd;">${v.compMode}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Strategy Effect</td><td style="padding:8px;border:1px solid #ddd;">${v.strategyEffect || ''}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Active Dimensions (${v.dimensions.length})</td><td style="padding:8px;border:1px solid #ddd;">${v.dimensions.join(', ')}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Parameters</td><td style="padding:8px;border:1px solid #ddd;">${params}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Note</td><td style="padding:8px;border:1px solid #ddd;">${v.note || 'None'}</td></tr>
        </table>
        <h2>Generated Prompts</h2>`;

    Object.entries(v.prompts).forEach(([id, da]) => {
        htmlContent += `
        <div style="margin-bottom:24px;padding:15px;border:1px solid #e2e8f0;border-radius:8px;background-color:#f8fafc;">
            <h3 style="margin-top:0;color:#1e293b;">${t(da.title)}${da.eval ? ` <span style="color:#10b981;">[${t(da.eval)}]</span>` : ''}</h3>
            <p style="font-family:'Courier New',Courier,monospace;background-color:#fff;padding:12px;border:1px solid #cbd5e1;border-radius:4px;">${da.text}</p>
        </div>`;
    });

    htmlContent += `</body></html>`;
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `DimPrompt_V${v.version}.doc`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
}
