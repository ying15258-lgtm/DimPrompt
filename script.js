// ==========================================================
// 1. Language System & Pure English Logic Keys
// ==========================================================
let currentLang = 'en';
const i18n = {
    en: {
        app_title: "DimPrompt", tit_config: "Configuration", leg_core: "Core", leg_high: "High", leg_med: "Med", leg_low: "Low",
        lbl_mode: "Mode Selection", lbl_prod: "Product Type", lbl_comp: "Strategy", lbl_dim: "Dimensions", lbl_const: "Constraints", lbl_param: "Parameters",
        opt_rec: "Research Mode", opt_free: "Free Mode", btn_reset: "Reset", btn_gen: "Generate", btn_exp: "Export Data", 
        btn_copy: "Copy Prompt", btn_copy_txt: "Copy All", btn_download: "Download Word", btn_download_txt: "Download TXT", btn_export_all: "Export All Versions", btn_help: "Help", btn_skip: "Skip", btn_next: "Next", btn_done: "Done",
        comp_def: "Recommended Mix", comp_top: "Top-K Focus", comp_sin: "One-Dimension Highlight", comp_mul: "Balanced Blend",
        desc_comp_def: "Blend selected dimensions in a standard way. Good for first runs.", desc_comp_top: "Emphasize the highest-weight selected dimensions.", desc_comp_sin: "Strongly highlight one chosen dimension. Useful for A/B comparison.", desc_comp_mul: "Keep selected dimensions evenly balanced.",
        pl_search: "Search dimensions...", pl_user: "e.g., ergonomic grip, minimalist style, low-cost structure, premium feel", pl_no: "Exclude words...", pl_note: "Version note...",
        txt_wait: "Select dimensions and click generate.", txt_empty_tit: "Ready to Build", txt_chart_empty: "No Selection", txt_filter: "Prefer Only", txt_syn: "Synthesizing...", txt_copied: "Copied!", txt_copy_failed: "Copy failed",
        tit_hist: "Version History", tit_exp: "Export", lbl_rat: "Rationale", lbl_gen: "Prompt", lbl_sum: "Basis", lbl_active_dims: "Active Dims", lbl_config: "Config", btn_close: "Close",
        helper_dim: "Select dimensions that describe the intended product value.", helper_weight: "Color dots indicate dimension priority weights.", helper_const: "Optional: add user, engineering, market, brand, material, or style constraints.", helper_const_translate: "Please enter supplementary constraints in English for better text-to-image results.", radar_caption: "Radar chart shows the current distribution of selected design dimensions.",
        lbl_focus_dim: "Focus Dimension", focus_select_hint: "Please select at least one design dimension first.", focus_select_placeholder: "Select a focus dimension...",
        prompt_mapping_note: "Highlighted phrases in the full prompt show which selected dimensions they came from.", recommended_label: "Recommended", rec_prefix: "Template recommendation",
        btn_show_full: "Show full prompt", btn_hide_full: "Hide full prompt", summary_prefix: "Summary", summary_focus_visual: "visual form and appearance", summary_focus_tech: "structure, function, and feasibility", summary_focus_scen: "user context and interaction",
        summary_visual: "Summary: This prompt emphasizes product appearance, form, CMF, and visual presentation.", summary_tech: "Summary: This prompt emphasizes structure, function, mechanism, specification, and manufacturability.", summary_scen: "Summary: This prompt emphasizes users, usage context, interaction, and scenario-based experience.",
        tag_visual_appearance: "Appearance", tag_visual_form: "Form", tag_visual_cmf: "CMF", tag_visual_composition: "Composition", tag_tech_structure: "Structure", tag_tech_function: "Function", tag_tech_specification: "Specification", tag_tech_manufacturing: "Manufacturing", tag_scen_user: "User", tag_scen_context: "Context", tag_scen_interaction: "Interaction", tag_scen_usage: "Usage",
        template_desc_visual: "Visual Focus emphasizes appearance, form, CMF, and composition.", template_desc_tech: "Technical Focus emphasizes structure, function, mechanism, and specification.", template_desc_scen: "Scenario Focus emphasizes user context, interaction, and usage situation.",
        rec_visual_reason: "Recommended because your selected dimensions emphasize visual quality, emotion, brand expression, or product form.", rec_tech_reason: "Recommended because your selected dimensions emphasize usability, functional clarity, reliability, or production logic.", rec_scen_reason: "Recommended because your selected dimensions emphasize user context, interaction, comfort, or inclusive use.",
        tour_step: "Step", tour_product_title: "Choose a product type.", tour_product_body: "Select the product category for this prompt record.", tour_dimensions_title: "Select design dimensions.", tour_dimensions_body: "Choose the design dimensions that describe your design intent.", tour_strategy_title: "Choose a generation strategy.", tour_strategy_body: "The strategy changes how selected dimensions are emphasized in the prompt, without changing the system's core logic.", tour_prompt_title: "Generate and compare prompt templates.", tour_prompt_body: "The system generates Visual Focus, Technical Focus, and Scenario Focus prompt templates.", tour_export_title: "Export your prompt records.", tour_export_body: "After at least one iteration, export two rounds of prompt records from the version history area.",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus", 
        "Version": "Version", "Prefer": "Prefer", "Neutral": "Neutral", "Discard": "Discard", "Note": "Note", "Product": "Product"
    },
    zh: {
        app_title: "DimPrompt", tit_config: "配置面板", leg_core: "核心", leg_high: "高优", leg_med: "中优", leg_low: "低优",
        lbl_mode: "实验模式", lbl_prod: "产品类型", lbl_comp: "生成策略", lbl_dim: "设计维度", lbl_const: "补充约束条件", lbl_param: "生成参数",
        opt_rec: "研究推荐模式", opt_free: "自由组合模式", btn_reset: "清空", btn_gen: "生成方案", btn_exp: "导出数据", 
        btn_copy: "复制提示词", btn_copy_txt: "复制全量数据", btn_download: "下载 Word", btn_download_txt: "下载 TXT", btn_export_all: "导出全部版本", btn_help: "使用引导", btn_skip: "跳过", btn_next: "下一步", btn_done: "完成",
        comp_def: "推荐混合", comp_top: "Top-K 聚焦", comp_sin: "单维度高亮", comp_mul: "平衡混合",
        desc_comp_def: "以标准方式融合所选维度，适合第一次生成。", desc_comp_top: "突出权重最高的所选维度。", desc_comp_sin: "强烈突出一个关键维度，适合进行 A/B 比较。", desc_comp_mul: "让所选维度保持相对均衡。",
        pl_search: "搜索维度...", pl_user: "e.g., ergonomic grip, minimalist style, low-cost structure, premium feel", pl_no: "排除词...", pl_note: "记录实验笔记...",
        txt_wait: "在左侧勾选维度并点击生成以开始研究", txt_empty_tit: "等待生成", txt_chart_empty: "勾选维度查看分布", txt_filter: "仅看偏好", txt_syn: "正在合成...", txt_copied: "已成功复制!", txt_copy_failed: "复制失败",
        tit_hist: "版本记录", tit_exp: "导出", lbl_rat: "理论依据", lbl_gen: "提示词文本", lbl_sum: "摘要", lbl_active_dims: "生效维度", lbl_config: "参数", btn_close: "关闭",
        helper_dim: "选择能够描述产品设计意图和价值方向的维度。", helper_weight: "彩色圆点表示设计维度的优先权重。", helper_const: "可选：补充用户、工程、市场、品牌、材料或风格约束。", helper_const_translate: "建议使用英文填写补充约束，以便文生图模型更准确理解。例如: ergonomic grip, minimalist style, low-cost structure, premium feel。", radar_caption: "雷达图显示当前所选设计维度的分布状态。",
        lbl_focus_dim: "聚焦维度", focus_select_hint: "请先选择至少一个设计维度。", focus_select_placeholder: "选择一个聚焦维度...",
        prompt_mapping_note: "完整提示词中的高亮短语表示其对应的所选设计维度。", recommended_label: "推荐", rec_prefix: "推荐模板",
        btn_show_full: "展开完整提示词", btn_hide_full: "收起提示词", summary_prefix: "摘要", summary_focus_visual: "外观造型表达", summary_focus_tech: "结构、功能与可实现性", summary_focus_scen: "用户情境与交互体验",
        summary_visual: "摘要：该提示词强调产品外观、造型比例、CMF 与视觉呈现。", summary_tech: "摘要：该提示词强调结构、功能、机制、规格与制造可行性。", summary_scen: "摘要：该提示词强调用户、使用场景、交互行为与情境体验。",
        tag_visual_appearance: "外观", tag_visual_form: "造型", tag_visual_cmf: "CMF", tag_visual_composition: "构图", tag_tech_structure: "结构", tag_tech_function: "功能", tag_tech_specification: "规格", tag_tech_manufacturing: "制造", tag_scen_user: "用户", tag_scen_context: "场景", tag_scen_interaction: "交互", tag_scen_usage: "使用",
        template_desc_visual: "Visual Focus 强调外观、形态、CMF 与构图。", template_desc_tech: "Technical Focus 强调结构、功能、机制与规格。", template_desc_scen: "Scenario Focus 强调用户情境、交互与使用场景。",
        rec_visual_reason: "推荐 Visual Focus，因为你选择的维度更强调视觉质量、情感表达、品牌识别或产品形态。", rec_tech_reason: "推荐 Technical Focus，因为你选择的维度更强调可用性、功能清晰度、可靠性或生产逻辑。", rec_scen_reason: "推荐 Scenario Focus，因为你选择的维度更强调用户情境、交互方式、舒适度或包容性使用。",
        tour_step: "步骤", tour_product_title: "第一步：选择产品类型。", tour_product_body: "为本次提示词记录选择对应的产品类别。", tour_dimensions_title: "第二步：选择设计维度。", tour_dimensions_body: "选择能够表达设计意图的设计维度。", tour_strategy_title: "第三步：选择生成策略。", tour_strategy_body: "策略会影响所选维度进入提示词的强调方式，但不会改变系统核心逻辑。", tour_prompt_title: "第四步：生成并比较提示词模板。", tour_prompt_body: "系统会生成 Visual Focus、Technical Focus 和 Scenario Focus 三类提示词。", tour_export_title: "第五步：导出提示词记录。", tour_export_body: "至少完成一次迭代后，可以在版本记录区域导出两轮提示词。",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus", 
        "Version": "版本", "Prefer": "偏好", "Neutral": "中立", "Discard": "放弃", "Note": "笔记", "Product": "产品"
    },
    ko: {
        app_title: "DimPrompt", tit_config: "구성", leg_core: "핵심", leg_high: "높음", leg_med: "중간", leg_low: "낮음",
        lbl_mode: "모드", lbl_prod: "제품", lbl_comp: "전략", lbl_dim: "디자인 차원", lbl_const: "제약 조건",
        opt_rec: "추천 모드", opt_free: "자유 모드", btn_reset: "초기화", btn_gen: "생성하기", btn_exp: "내보내기", 
        btn_copy: "복사", btn_copy_txt: "전체 복사", btn_download: "Word 다운로드", btn_download_txt: "TXT 다운로드", btn_export_all: "모든 버전 내보내기", btn_help: "도움말", btn_skip: "건너뛰기", btn_next: "다음", btn_done: "완료",
        comp_def: "추천 혼합", comp_top: "Top-K 포커스", comp_sin: "단일 차원 강조", comp_mul: "균형 혼합",
        desc_comp_def: "선택한 차원을 표준 방식으로 혼합합니다.", desc_comp_top: "가중치가 높은 차원을 강조합니다.", desc_comp_sin: "하나의 핵심 차원을 강하게 강조합니다.", desc_comp_mul: "선택한 차원을 균형 있게 유지합니다.",
        pl_search: "검색...", pl_user: "e.g., ergonomic grip, minimalist style, low-cost structure, premium feel", pl_no: "제외어...", pl_note: "메모...",
        txt_wait: "차원을 선택하여 시작하세요.", txt_empty_tit: "합성 준비 완료", txt_chart_empty: "차원을 선택하세요", txt_filter: "선호만 보기", txt_syn: "합성 중...", txt_copied: "복사됨!", txt_copy_failed: "복사 실패",
        tit_hist: "버전 기록", tit_exp: "내보내기", lbl_rat: "이론적 근거", lbl_gen: "프롬프트", lbl_sum: "요약", lbl_active_dims: "활성 차원", lbl_config: "설정", btn_close: "닫기",
        helper_dim: "제품 의도와 가치를 설명하는 디자인 차원을 선택하세요.", helper_weight: "색상 점은 디자인 차원의 우선순위 가중치를 나타냅니다.", helper_const: "선택 사항: 사용자, 엔지니어링, 시장, 브랜드, 소재 또는 스타일 제약을 추가하세요.", helper_const_translate: "더 정확한 이미지 생성을 위해 보충 제약은 영어로 입력하는 것을 권장합니다. e.g., ergonomic grip, minimalist style, low-cost structure, premium feel", radar_caption: "레이더 차트는 현재 선택한 디자인 차원의 분포를 보여줍니다.",
        lbl_focus_dim: "강조 차원", focus_select_hint: "먼저 하나 이상의 디자인 차원을 선택하세요.", focus_select_placeholder: "강조할 차원을 선택하세요...",
        prompt_mapping_note: "전체 프롬프트의 강조된 문구는 선택한 디자인 차원과 연결됩니다.", recommended_label: "추천", rec_prefix: "템플릿 추천",
        btn_show_full: "전체 프롬프트 보기", btn_hide_full: "프롬프트 접기", summary_prefix: "요약", summary_focus_visual: "시각적 형태와 외관", summary_focus_tech: "구조, 기능, 실현 가능성", summary_focus_scen: "사용 맥락과 상호작용",
        summary_visual: "요약: 이 프롬프트는 제품 외관, 형태, CMF, 시각적 표현을 강조합니다.", summary_tech: "요약: 이 프롬프트는 구조, 기능, 메커니즘, 사양, 제조 가능성을 강조합니다.", summary_scen: "요약: 이 프롬프트는 사용자, 사용 맥락, 상호작용, 상황 기반 경험을 강조합니다.",
        tag_visual_appearance: "외관", tag_visual_form: "형태", tag_visual_cmf: "CMF", tag_visual_composition: "구성", tag_tech_structure: "구조", tag_tech_function: "기능", tag_tech_specification: "사양", tag_tech_manufacturing: "제조", tag_scen_user: "사용자", tag_scen_context: "맥락", tag_scen_interaction: "상호작용", tag_scen_usage: "사용",
        template_desc_visual: "Visual Focus emphasizes appearance, form, CMF, and composition.", template_desc_tech: "Technical Focus emphasizes structure, function, mechanism, and specification.", template_desc_scen: "Scenario Focus emphasizes user context, interaction, and usage situation.",
        rec_visual_reason: "Recommended because your selected dimensions emphasize visual quality, emotion, brand expression, or product form.", rec_tech_reason: "Recommended because your selected dimensions emphasize usability, functional clarity, reliability, or production logic.", rec_scen_reason: "Recommended because your selected dimensions emphasize user context, interaction, comfort, or inclusive use.",
        tour_step: "단계", tour_product_title: "제품 유형 선택", tour_product_body: "이번 프롬프트 기록의 제품 범주를 선택하세요.", tour_dimensions_title: "디자인 차원 선택", tour_dimensions_body: "프롬프트 생성을 이끌 디자인 가치를 선택하세요.", tour_strategy_title: "생성 전략 선택", tour_strategy_body: "전략은 선택 차원의 강조 방식을 바꿉니다.", tour_prompt_title: "프롬프트 생성 및 비교", tour_prompt_body: "생성 후 세 가지 템플릿을 비교하세요.", tour_export_title: "기록 내보내기", tour_export_body: "생성 후 기록 영역에서 모든 버전과 메모를 내보낼 수 있습니다.",
        "Visual Focus": "Visual Focus", "Technical Focus": "Technical Focus", "Scenario Focus": "Scenario Focus", 
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
const TEMPLATE_DESC_KEYS = {
    visual: "template_desc_visual",
    tech: "template_desc_tech",
    scen: "template_desc_scen"
};
const TEMPLATE_TAG_KEYS = {
    visual: ["tag_visual_appearance", "tag_visual_form", "tag_visual_cmf", "tag_visual_composition"],
    tech: ["tag_tech_structure", "tag_tech_function", "tag_tech_specification", "tag_tech_manufacturing"],
    scen: ["tag_scen_user", "tag_scen_context", "tag_scen_interaction", "tag_scen_usage"]
};
const TEMPLATE_SUMMARY_KEYS = {
    visual: "summary_visual",
    tech: "summary_tech",
    scen: "summary_scen"
};
const TEMPLATE_SUFFIXES = {
    visual: "Emphasize appearance, form, silhouette, CMF, proportion, surface treatment, visual composition, and a refined product design presentation with studio lighting and a clean background.",
    tech: "Emphasize structure, function, mechanism, component layout, specification clarity, manufacturable detail, and an engineering-oriented product presentation.",
    scen: "Emphasize user context, interaction, hand posture, usage situation, environmental cues, and a realistic scene showing how the product is used."
};
const DIM_PROMPT_PHRASES = {
    "C1 Usability": "clear, easy-to-understand interaction and intuitive daily operation",
    "C2 Reliability": "stable performance, durable structure, and dependable long-term use",
    "C3 Safety": "safe contact surfaces, risk reduction, and protective details",
    "C4 Comfort": "comfortable grip, ergonomic contact areas, and reduced physical strain",
    "C5 Intuitive Operation": "obvious controls, low learning effort, and naturally discoverable operation",
    "C6 Feedback Mechanism": "clear tactile, visual, or auditory feedback during interaction",
    "C7 Aesthetics": "well-balanced proportions, attractive surfaces, and coherent visual style",
    "C8 Emotional Resonance": "a product character that creates emotional appeal and user attachment",
    "C9 Customization": "personalized options, modular details, or adaptable visual features",
    "C10 Innovation": "distinctive design ideas that move beyond conventional product forms",
    "C11 Market Orientation": "features and styling aligned with identifiable market needs",
    "C12 Forward-looking": "future-oriented form language, emerging use patterns, and advanced product cues",
    "C13 Market Adaptability": "adaptability to different usage contexts, user groups, and market scenarios",
    "C14 Brand Identity": "recognizable brand cues, consistent design language, and memorable visual identity",
    "C15 Inclusiveness": "inclusive affordances that support diverse users and different abilities",
    "C16 Longevity": "durable material expression, repairable structure, and long product lifespan",
    "C17 Eco-friendly Materials": "sustainable material cues, recyclable components, and low-impact material choices",
    "C18 Production Cost": "cost-aware structure, simplified parts, and feasible manufacturing logic"
};
const DIM_EXPLANATIONS = {
    "C1 Usability": { en: "How easily users can understand and complete basic tasks with the product.", zh: "用户能否容易理解并完成产品的基本操作。", ko: "사용자가 제품의 기본 작업을 쉽게 이해하고 수행할 수 있는 정도입니다." },
    "C2 Reliability": { en: "Whether the product appears stable, durable, and dependable over time.", zh: "产品是否表现出稳定、耐用和长期可靠的特征。", ko: "제품이 시간에 따라 안정적이고 내구성 있으며 신뢰할 수 있는지를 의미합니다." },
    "C3 Safety": { en: "How the design reduces risk, sharp edges, misuse, or unsafe contact.", zh: "设计如何减少风险、尖锐边缘、误用或不安全接触。", ko: "위험, 날카로운 모서리, 오사용, 불안전한 접촉을 줄이는 정도입니다." },
    "C4 Comfort": { en: "Whether the product supports comfortable touch, grip, posture, or prolonged use.", zh: "产品是否支持舒适触感、握持姿势和长时间使用。", ko: "제품이 편안한 촉감, 잡기, 자세, 장시간 사용을 지원하는지 의미합니다." },
    "C5 Intuitive Operation": { en: "Whether controls and interactions can be understood without extra explanation.", zh: "控制方式和交互是否无需额外解释即可被理解。", ko: "조작과 상호작용이 별도 설명 없이 이해될 수 있는지 의미합니다." },
    "C6 Feedback Mechanism": { en: "How the product communicates states, actions, or results to the user.", zh: "产品如何向用户传达状态、操作或结果。", ko: "제품이 상태, 행동, 결과를 사용자에게 전달하는 방식입니다." },
    "C7 Aesthetics": { en: "The visual quality of proportion, silhouette, surface, and overall styling.", zh: "比例、轮廓、表面与整体风格的视觉质量。", ko: "비례, 실루엣, 표면, 전체 스타일의 시각적 품질입니다." },
    "C8 Emotional Resonance": { en: "Whether the design creates attachment, delight, or a meaningful feeling.", zh: "设计是否能带来依恋、愉悦或有意义的情感感受。", ko: "디자인이 애착, 즐거움, 의미 있는 감정을 만드는지 의미합니다." },
    "C9 Customization": { en: "Whether the product allows personalization, modularity, or user-specific variation.", zh: "产品是否支持个性化、模块化或用户定制变化。", ko: "제품이 개인화, 모듈화, 사용자 맞춤 변형을 지원하는지 의미합니다." },
    "C10 Innovation": { en: "The degree to which the concept differs from conventional product solutions.", zh: "概念相对于常规产品方案的差异化和新颖程度。", ko: "개념이 기존 제품 해결책과 얼마나 다른지를 의미합니다." },
    "C11 Market Orientation": { en: "How well the design responds to identifiable market needs and user segments.", zh: "设计对明确市场需求和用户群体的响应程度。", ko: "디자인이 명확한 시장 요구와 사용자 세그먼트에 대응하는 정도입니다." },
    "C12 Forward-looking": { en: "Whether the product suggests future use patterns, technologies, or form language.", zh: "产品是否体现未来使用方式、技术趋势或造型语言。", ko: "제품이 미래 사용 방식, 기술, 형태 언어를 제안하는지 의미합니다." },
    "C13 Market Adaptability": { en: "Whether the design can adapt to different markets, contexts, or user groups.", zh: "设计是否能适应不同市场、场景或用户群体。", ko: "디자인이 다양한 시장, 맥락, 사용자 집단에 적응할 수 있는지 의미합니다." },
    "C14 Brand Identity": { en: "Whether the product expresses recognizable and consistent brand cues.", zh: "产品是否表达清晰且一致的品牌识别特征。", ko: "제품이 인식 가능하고 일관된 브랜드 단서를 표현하는지 의미합니다." },
    "C15 Inclusiveness": { en: "Whether the design supports users with different abilities, needs, or contexts.", zh: "设计是否支持不同能力、需求或使用情境的用户。", ko: "디자인이 다양한 능력, 요구, 맥락의 사용자를 지원하는지 의미합니다." },
    "C16 Longevity": { en: "Whether the product suggests durability, repairability, and long service life.", zh: "产品是否体现耐用、可维修和较长使用寿命。", ko: "제품이 내구성, 수리 가능성, 긴 수명을 제안하는지 의미합니다." },
    "C17 Eco-friendly Materials": { en: "Whether material choices communicate sustainability and lower environmental impact.", zh: "材料选择是否传达可持续性和较低环境影响。", ko: "소재 선택이 지속가능성과 낮은 환경 영향을 전달하는지 의미합니다." },
    "C18 Production Cost": { en: "Whether the structure, parts, and details suggest feasible manufacturing cost.", zh: "结构、零件和细节是否体现可行的制造成本控制。", ko: "구조, 부품, 디테일이 실현 가능한 제조 비용을 제안하는지 의미합니다." }
};
const STRATEGY_LABELS = {
    "Default (Implicit)": "Recommended Mix",
    "Top-K Priority": "Top-K Focus",
    "Single-Dimension Emphasis": "One-Dimension Highlight",
    "Multi-Dimension Balance": "Balanced Blend"
};

function t(key) { return i18n[currentLang][key] || key; }
function getStrategyLabel(value) { return STRATEGY_LABELS[value] || value; }
function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
function escapeRegExp(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function escapeJsString(value) { return String(value || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function encodeForInline(value) { return encodeURIComponent(value).replace(/'/g, '%27'); }
function priorityLabel(dim) { return PRIO_MAP[dim] || "Low Priority"; }
function getTemplateDescription(id) { return t(TEMPLATE_DESC_KEYS[id] || ''); }
function weightOf(dim) { return WEIGHT_LVL[priorityLabel(dim)] || 1; }
function describeDimension(dim) { return DIM_PROMPT_PHRASES[dim] || dim; }
function getLocalizedProductName(product) { return PRODUCT_DATA[currentLang][product] || product; }
function getDimensionName(dim) {
    if (currentLang === 'en') return dim;
    const translated = DIM_DATA.child[dim]?.[currentLang];
    return translated ? `${dim} / ${translated}` : dim;
}
function getDimensionShortName(dim) {
    if (currentLang === 'en') return dim.replace(/^C\d+\s/, '').toLowerCase();
    return DIM_DATA.child[dim]?.[currentLang] || dim.replace(/^C\d+\s/, '');
}
function getSelectedDimensions() {
    return Array.from(document.querySelectorAll('.dim-checkbox:checked')).map(cb => cb.value);
}
function getCurrentCompositionMode() {
    return document.querySelector('input[name="composition-mode"]:checked')?.value || "Default (Implicit)";
}
function updateFocusDimensionOptions() {
    const control = document.getElementById('single-focus-control');
    const select = document.getElementById('focus-dimension');
    const hint = document.getElementById('focus-dimension-hint');
    if (!control || !select || !hint) return;

    const isSingleFocus = getCurrentCompositionMode() === "Single-Dimension Emphasis";
    control.classList.toggle('hidden', !isSingleFocus);
    if (!isSingleFocus) return;

    const selected = getSelectedDimensions();
    const previous = select.value;
    select.innerHTML = '';

    if (!selected.length) {
        select.disabled = true;
        select.appendChild(new Option(t('focus_select_placeholder'), ''));
        hint.classList.remove('hidden');
        return;
    }

    select.disabled = false;
    hint.classList.add('hidden');
    selected.forEach(dim => select.appendChild(new Option(getDimensionName(dim), dim)));
    select.value = selected.includes(previous) ? previous : selected[0];
}
function syncFocusDimension() {
    updateFocusDimensionOptions();
}
function getFocusDimension(selectedDimensions) {
    const select = document.getElementById('focus-dimension');
    if (select && selectedDimensions.includes(select.value)) return select.value;
    return selectedDimensions[0] || '';
}
function getDimensionTooltipHtml(dim) {
    const explanation = DIM_EXPLANATIONS[dim]?.[currentLang] || DIM_EXPLANATIONS[dim]?.en || '';
    return `<strong>${escapeHtml(getDimensionName(dim))}</strong><span>${escapeHtml(explanation)}</span>`;
}
function showTooltip(event, html) {
    const tooltip = document.getElementById('dim-tooltip');
    if (!tooltip) return;
    tooltip.innerHTML = html;
    tooltip.classList.remove('hidden');
    positionTooltip(event);
}
function positionTooltip(event) {
    const tooltip = document.getElementById('dim-tooltip');
    if (!tooltip || tooltip.classList.contains('hidden')) return;
    const pad = 14;
    const rect = tooltip.getBoundingClientRect();
    const x = Math.min(window.innerWidth - rect.width - pad, Math.max(pad, event.clientX + 14));
    const y = Math.min(window.innerHeight - rect.height - pad, Math.max(pad, event.clientY + 14));
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}
function showDimTooltip(event, dim) {
    event.preventDefault();
    event.stopPropagation();
    showTooltip(event, getDimensionTooltipHtml(dim));
}
function hideDimTooltip() {
    const tooltip = document.getElementById('dim-tooltip');
    if (tooltip) tooltip.classList.add('hidden');
}
function joinLocalizedList(items) {
    const visible = items.filter(Boolean);
    if (currentLang === 'zh') return visible.join('、');
    if (visible.length <= 1) return visible[0] || '';
    if (visible.length === 2) return `${visible[0]} and ${visible[1]}`;
    return `${visible.slice(0, -1).join(', ')}, and ${visible[visible.length - 1]}`;
}
function buildPromptSummary(dimensions, templateId, product) {
    return t(TEMPLATE_SUMMARY_KEYS[templateId] || 'summary_prefix');
}
function renderTemplateTags(templateId) {
    return (TEMPLATE_TAG_KEYS[templateId] || []).map(key => `
        <span class="template-tag"><span class="template-tag-mark" aria-hidden="true"></span>${t(key)}</span>
    `).join('');
}
function getTemplatePreview(templateId) {
    const className = { visual: "visual", tech: "technical", scen: "scenario" }[templateId];
    if (!className) return '';
    return `<div class="template-bg ${className}" aria-hidden="true"></div>`;
}
function renderPromptWithHighlights(promptText, dims) {
    let html = escapeHtml(promptText);
    dims.forEach(dim => {
        const phrase = describeDimension(dim);
        const safePhrase = escapeHtml(phrase);
        const replacement = `<button type="button" class="prompt-phrase" data-dim="${escapeHtml(dim)}">${safePhrase}</button>`;
        html = html.replace(new RegExp(escapeRegExp(safePhrase), 'g'), replacement);
    });
    return html;
}
function togglePromptPreview(boxId, btn) {
    const box = document.getElementById(boxId);
    if (!box) return;
    const collapsed = box.classList.toggle('collapsed');
    btn.innerText = collapsed ? t('btn_show_full') : t('btn_hide_full');
}
function joinPhrases(items) {
    if (items.length <= 1) return items[0] || '';
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join('; ')}; and ${items[items.length - 1]}`;
}
function buildDimensionNarrative(activeDims, allDims, compMode) {
    const phrases = activeDims.map(describeDimension);
    const phraseText = joinPhrases(phrases);
    if (compMode === "Top-K Priority") {
        return `Prioritize the highest-weight selected design requirements: ${phraseText}. These priorities should guide the main design direction while keeping the product coherent.`;
    }
    if (compMode === "Single-Dimension Emphasis") {
        return `Strongly highlight ${phraseText} as the central design direction, while the remaining product details stay coherent and realistic.`;
    }
    if (compMode === "Multi-Dimension Balance") {
        return `Balance representative requirements across the selected design dimensions: ${phraseText}. No single dimension should dominate the concept.`;
    }
    return `Integrate the selected design requirements into the concept: ${joinPhrases(allDims.map(describeDimension))}. The design should translate these requirements into concrete product form, function, and user experience details.`;
}
function getTemplateRecommendation(dimensions) {
    const score = { visual: 0, tech: 0, scen: 0 };
    dimensions.forEach(dim => {
        const group = DIM_ORDER.find(gr => gr.children.includes(dim));
        if (!group) return;
        if (group.parent === "B1 Functional Design") score.tech += 2;
        if (group.parent === "B2 User Experience Design") score.scen += 2;
        if (group.parent === "B3 Emotional Design") score.visual += 2;
        if (group.parent === "B4 Innovation and User-Driven Design") score.visual += 1;
        if (group.parent === "B5 Market and Brand Adaptation") score.scen += 1;
        if (group.parent === "B6 Sustainable Design") score.tech += 1;
        if (["C1 Usability", "C2 Reliability", "C3 Safety", "C18 Production Cost"].includes(dim)) score.tech += 1;
        if (["C4 Comfort", "C5 Intuitive Operation", "C6 Feedback Mechanism", "C15 Inclusiveness"].includes(dim)) score.scen += 1;
        if (["C7 Aesthetics", "C8 Emotional Resonance", "C9 Customization", "C14 Brand Identity"].includes(dim)) score.visual += 1;
    });
    const id = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    const title = { visual: "Visual Focus", tech: "Technical Focus", scen: "Scenario Focus" }[id];
    const reasonKey = {
        visual: "rec_visual_reason",
        tech: "rec_tech_reason",
        scen: "rec_scen_reason"
    }[id];
    return { id, title, reasonKey };
}

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
    applyChartTheme();
}

function applyChartTheme() {
    if (!radarChart) return;
    const dark = document.documentElement.classList.contains('dark');
    radarChart.data.datasets[0].backgroundColor = dark ? 'rgba(99, 102, 241, 0.4)' : 'rgba(79, 70, 229, 0.18)';
    radarChart.data.datasets[0].borderColor = dark ? '#818cf8' : '#4f46e5';
    radarChart.options.scales.r.grid.color = dark ? 'rgba(255,255,255,0.05)' : 'rgba(79, 70, 229, 0.16)';
    radarChart.options.scales.r.angleLines.color = dark ? 'rgba(255,255,255,0.1)' : 'rgba(79, 70, 229, 0.18)';
    radarChart.options.scales.r.pointLabels.color = dark ? 'rgba(255,255,255,0.55)' : '#475569';
    radarChart.update();
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
            const prio = priorityLabel(c);
            return `<label class="dim-item-container flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2.5 rounded-xl group" data-name="${c}" title="${escapeHtml(c)} · ${escapeHtml(prio)}">
                <input type="checkbox" value="${c}" class="dim-checkbox child-cb-${gid} w-4 h-4 rounded border-slate-700 accent-indigo-500" onchange="updateGroupState('${gid}')" ${checked.includes(c)?'checked':''}>
                <span class="priority-dot w-2 h-2 rounded-full ${DOTS[prio]}" title="Priority weight: ${escapeHtml(prio)}"></span>
                <span class="text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">${childText}</span>
                <button type="button" class="dim-info-btn" data-dim="${escapeHtml(c)}" aria-label="Dimension information" onmouseenter="showDimTooltip(event,'${escapeJsString(c)}')" onmousemove="positionTooltip(event)" onmouseleave="hideDimTooltip()" onclick="showDimTooltip(event,'${escapeJsString(c)}')">?</button>
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
    updateFocusDimensionOptions();
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
        applyChartTheme();
        radarChart.update();
    }
    if(versionHistory.length) renderVersionHistory();
    updateFocusDimensionOptions();
    const tourOverlay = document.getElementById('tour-overlay');
    if(tourOverlay && !tourOverlay.classList.contains('hidden')) renderTourStep();
}

// FIX: Correct startup sequence
document.addEventListener('DOMContentLoaded', () => { 
    changeLanguage(); // Render static text and dimensions first
    initChart();       // Then init chart with correct language labels
    bindTooltipDelegates();
    document.querySelectorAll('input[name="composition-mode"]').forEach(input => input.addEventListener('change', updateFocusDimensionOptions));
    updateFocusDimensionOptions();
    setTimeout(() => startTour(false), 350);
});

function tooltipDimFromEvent(event) {
    const source = event.target?.nodeType === 3 ? event.target.parentElement : event.target;
    const target = source?.closest?.('.prompt-phrase, .dim-info-btn');
    return target?.dataset?.dim || '';
}
function bindTooltipDelegates() {
    document.addEventListener('mouseover', event => {
        const dim = tooltipDimFromEvent(event);
        if (dim) showDimTooltip(event, dim);
    });
    document.addEventListener('mousemove', event => {
        if (tooltipDimFromEvent(event)) positionTooltip(event);
    });
    document.addEventListener('mouseout', event => {
        if (tooltipDimFromEvent(event)) hideDimTooltip();
    });
    document.addEventListener('click', event => {
        const dim = tooltipDimFromEvent(event);
        if (dim) showDimTooltip(event, dim);
    });
    window.addEventListener('resize', () => {
        const overlay = document.getElementById('tour-overlay');
        if (overlay && !overlay.classList.contains('hidden')) renderTourStep();
    });
}

// ==========================================================
// 2.5 Lightweight Guided Tour
// ==========================================================
let tourIndex = 0;
const TOUR_STORAGE_KEY = 'dimpromptTourSeen';

function hasSeenTour() {
    try { return sessionStorage.getItem(TOUR_STORAGE_KEY) === '1'; } catch(e) { return false; }
}
function markTourSeen() {
    try { sessionStorage.setItem(TOUR_STORAGE_KEY, '1'); } catch(e) {}
}
function getTourSteps() {
    return [
        { targets: ['#tour-product'], title: t('tour_product_title'), body: t('tour_product_body') },
        { targets: ['#tour-dimensions'], title: t('tour_dimensions_title'), body: t('tour_dimensions_body') },
        { targets: ['#tour-strategy'], title: t('tour_strategy_title'), body: t('tour_strategy_body') },
        { targets: ['#results-container:not(.hidden)', '#tour-results'], title: t('tour_prompt_title'), body: t('tour_prompt_body') },
        { targets: ['#history-section:not(.hidden)', '#tour-results'], title: t('tour_export_title'), body: t('tour_export_body') }
    ];
}
function findTourTarget(step) {
    for (const selector of step.targets || []) {
        const candidate = document.querySelector(selector);
        if (candidate && candidate.offsetParent !== null) return candidate;
    }
    return document.querySelector('#tour-results');
}
function clampValue(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function placeTourCard(target) {
    const card = document.getElementById('tour-card');
    if (!card || !target) return;
    const pad = 16;
    const gap = 16;
    card.style.maxWidth = 'min(400px, calc(100vw - 32px))';
    card.style.left = `${pad}px`;
    card.style.top = `${pad}px`;
    const targetRect = target.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;
    let left;
    let top;
    if (targetRect.right + gap + cardRect.width <= viewportW - pad) {
        left = targetRect.right + gap;
        top = targetRect.top;
    } else if (targetRect.left - gap - cardRect.width >= pad) {
        left = targetRect.left - gap - cardRect.width;
        top = targetRect.top;
    } else if (targetRect.bottom + gap + cardRect.height <= viewportH - pad) {
        left = targetRect.left;
        top = targetRect.bottom + gap;
    } else if (targetRect.top - gap - cardRect.height >= pad) {
        left = targetRect.left;
        top = targetRect.top - gap - cardRect.height;
    } else {
        left = (viewportW - cardRect.width) / 2;
        top = (viewportH - cardRect.height) / 2;
    }
    card.style.left = `${clampValue(left, pad, viewportW - cardRect.width - pad)}px`;
    card.style.top = `${clampValue(top, pad, viewportH - cardRect.height - pad)}px`;
}
function startTour(force = false) {
    if (!force && hasSeenTour()) return;
    const overlay = document.getElementById('tour-overlay');
    if (!overlay) return;
    tourIndex = 0;
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    renderTourStep();
}
function renderTourStep() {
    const overlay = document.getElementById('tour-overlay');
    if (!overlay || overlay.classList.contains('hidden')) return;
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    const steps = getTourSteps();
    const step = steps[tourIndex] || steps[0];
    let target = findTourTarget(step);
    if (target) {
        target.classList.add('tour-highlight');
        target.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' });
    }
    document.getElementById('tour-step-count').innerText = `${t('tour_step')} ${tourIndex + 1} / ${steps.length}`;
    document.getElementById('tour-title').innerText = step.title;
    document.getElementById('tour-body').innerText = step.body;
    const nextBtn = document.querySelector('.tour-next');
    if (nextBtn) nextBtn.innerText = tourIndex === steps.length - 1 ? t('btn_done') : t('btn_next');
    const skipBtn = document.querySelector('.tour-skip');
    if (skipBtn) skipBtn.innerText = t('btn_skip');
    requestAnimationFrame(() => placeTourCard(target));
}
function nextTour() {
    const steps = getTourSteps();
    if (tourIndex >= steps.length - 1) {
        skipTour();
        return;
    }
    tourIndex += 1;
    renderTourStep();
}
function skipTour() {
    const overlay = document.getElementById('tour-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        overlay.setAttribute('aria-hidden', 'true');
    }
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    markTourSeen();
}

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

        const sortW = (a, b) => (weightOf(b) - weightOf(a));
        let proc = [...sel];
        if (compMode === "Top-K Priority") { proc.sort(sortW); proc = proc.slice(0, 5); }
        else if (compMode === "Single-Dimension Emphasis") { proc = [getFocusDimension(sel)].filter(Boolean); }
        else if (compMode === "Multi-Dimension Balance") { 
            const g = {}; sel.forEach(d => { const p = DIM_ORDER.find(gr=>gr.children.includes(d)).parent; if(!g[p]) g[p]=[]; g[p].push(d); });
            let bc = []; for(const k in g){ g[k].sort(sortW); bc.push(g[k][0]); }
            proc = bc;
        }
        const dimensionNarrative = buildDimensionNarrative(proc, sel, compMode);
        const promptDims = compMode === "Default (Implicit)" ? sel : proc;
        const constraintsText = constr.trim() ? `Supplementary constraints: ${constr.trim()}. ` : '';
        const noText = pNo.trim() ? `--no ${pNo.trim()}` : '';

        const TEMPLATES = [
            { id: 'visual', title: "Visual Focus", suffix: TEMPLATE_SUFFIXES.visual, descKey: TEMPLATE_DESC_KEYS.visual },
            { id: 'tech', title: "Technical Focus", suffix: TEMPLATE_SUFFIXES.tech, descKey: TEMPLATE_DESC_KEYS.tech },
            { id: 'scen', title: "Scenario Focus", suffix: TEMPLATE_SUFFIXES.scen, descKey: TEMPLATE_DESC_KEYS.scen }
        ];

        const recommendation = getTemplateRecommendation(sel);
        const recommendationReason = t(recommendation.reasonKey);
        res.innerHTML = `
            <div class="prompt-note">
                ${t('prompt_mapping_note')}
            </div>
            <div class="recommendation-box">
                <span class="recommendation-badge">${t('recommended_label')}</span>
                <span>${t('rec_prefix')}: <strong>${t(recommendation.title)}</strong>. ${recommendationReason}</span>
            </div>
        `;
        let cp = {};
        TEMPLATES.forEach(tpl => {
            const pText = `Imagine a ${prod} design. ${dimensionNarrative} ${constraintsText}${tpl.suffix} The result should be a coherent, feasible product concept with visible design details. --v ${pV} --ar ${pAR} --s ${pS} --q ${pQ} ${pRaw} ${noText}`;
            const normalizedPrompt = pText.replace(/\s+/g, ' ');
            const renderedPrompt = renderPromptWithHighlights(normalizedPrompt, promptDims);
            const promptBoxId = `prompt-box-${vn}-${tpl.id}`;
            const isRecommended = recommendation.id === tpl.id;
            const tplDescription = t(tpl.descKey);
            const promptSummary = buildPromptSummary(sel, tpl.id, prod);
            cp[tpl.id] = { text: normalizedPrompt, eval: null, title: tpl.title, descKey: tpl.descKey, description: tplDescription, recommended: isRecommended, summary: promptSummary, promptDimensions: promptDims };
            res.innerHTML += `
                <div class="result-card template-preview-card ${isRecommended ? 'recommended-card' : ''}">
                    ${getTemplatePreview(tpl.id)}
                    <div class="template-card-header">
                        <div class="template-heading-block">
                            <div class="template-title-stack">
                                <div class="template-title-row">
                                    <h2 class="text-2xl font-black italic tracking-tighter text-indigo-400 uppercase leading-none">${t(tpl.title)}</h2>
                                    ${isRecommended ? `<span class="template-chip recommended-chip">${t('recommended_label')}</span>` : ''}
                                </div>
                                <div class="template-tag-row">
                                    ${renderTemplateTags(tpl.id)}
                                </div>
                            </div>
                        </div>
                        <div class="eval-group flex bg-black/40 rounded-2xl p-1 gap-1 border border-slate-800 shadow-inner">
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Prefer')" id="btn-${vn}-${tpl.id}-Prefer" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Prefer')}</button>
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Neutral')" id="btn-${vn}-${tpl.id}-Neutral" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Neutral')}</button>
                            <button onclick="setEval(${vn}, '${tpl.id}', 'Discard')" id="btn-${vn}-${tpl.id}-Discard" class="eval-btn text-[10px] px-5 py-2.5 rounded-xl font-black uppercase text-slate-500 hover:text-white transition-all">${t('Discard')}</button>
                        </div>
                    </div>
                    <div class="summary-panel bg-slate-900/50 p-4 rounded-2xl border border-slate-800 mb-4">
                        <p class="prompt-summary-text">${promptSummary}</p>
                    </div>
                    <div class="prompt-output-box collapsed" id="${promptBoxId}">
                        <div class="prompt-output-label">${t('lbl_gen')} · ${tpl.title}</div>
                        <button onclick="copyToClipboard(this,'${encodeForInline(normalizedPrompt)}')" class="copy-prompt-btn">${t('btn_copy')}</button>
                        <div class="prompt-text">${renderedPrompt}</div>
                        <button type="button" onclick="togglePromptPreview('${promptBoxId}', this)" class="toggle-prompt-btn">${t('btn_show_full')}</button>
                    </div>
                </div>`;
        });
        versionHistory.push({
            version: vn,
            timestamp: new Date().toLocaleString(),
            productType: prod,
            dimensions: sel,
            activeDimensions: proc,
            constraints: constr,
            prompts: cp,
            templateRecommendation: recommendation.title,
            templateRecommendationRationale: recommendationReason,
            templateRecommendationRationaleKey: recommendation.reasonKey,
            note: "",
            compMode: compMode,
            strategyLabel: getStrategyLabel(compMode),
            params: { version: pV, ratio: pAR, stylize: pS, quality: pQ, raw: Boolean(pRaw), no: pNo }
        });
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
            const description = da.descKey ? t(da.descKey) : (da.description || '');
            return `<div class="history-prompt-card mb-4 p-4 border border-slate-800/50 bg-slate-900/30 rounded-2xl">
                <div class="flex justify-between text-[10px] font-black text-slate-500 mb-2 uppercase"><span>${t(da.title)}</span><span class="eval-btn text-[9px] px-2 py-0.5 rounded ${activeClass}">${t(da.eval||'')}</span></div>
                <div class="text-[10px] text-slate-600 font-bold mb-2">${description}${da.recommended ? ` · ${t('recommended_label')}` : ''}</div>
                <div class="text-[11px] text-slate-500 font-mono leading-relaxed">${escapeHtml(da.text)}</div>
            </div>`;
        }).join('');
        const rationale = v.templateRecommendationRationaleKey ? t(v.templateRecommendationRationaleKey) : (v.templateRecommendationRationale || '');
        hc.innerHTML += `<details open class="history-card group bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 mb-6 shadow-sm"><summary class="cursor-pointer flex justify-between font-black uppercase italic text-slate-400 tracking-tighter outline-none"><span>${t('Version')} ${v.version} - ${v.timestamp}</span></summary><div class="pt-6"><div class="recommendation-box mb-4"><strong>${t('rec_prefix')}: ${t(v.templateRecommendation || '')}</strong>. ${rationale}</div><input type="text" class="w-full bg-black border border-slate-800 rounded-xl px-4 py-2 text-xs mb-4 text-slate-400 outline-none focus:border-indigo-500" placeholder="${t('pl_note')}" value="${escapeHtml(v.note)}" onchange="updateNote(${v.version},this.value)">${ph}</div></details>`;
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
    updateFocusDimensionOptions();
}
function toggleGroup(gcb, gid) { document.querySelectorAll(`.child-cb-${gid}`).forEach(cb => { cb.checked = gcb.checked; }); updateGroupState(gid); }
function filterDimensions() { const term = document.getElementById('dim-search').value.toLowerCase(); document.querySelectorAll('.dim-item-container').forEach(el => el.style.display = el.getAttribute('data-name').toLowerCase().includes(term) ? 'flex' : 'none'); }
function resetAll() { document.querySelectorAll('.dim-checkbox').forEach(cb => cb.checked = false); document.getElementById('const-all').value = ''; updateChart(); updateFocusDimensionOptions(); }
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    applyChartTheme();
}

function setCopyFeedback(btn, ok, originalText) {
    btn.innerText = ok ? t('txt_copied') : t('txt_copy_failed');
    btn.classList.toggle('copy-ok', ok);
    btn.classList.toggle('copy-error', !ok);
    setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('copy-ok', 'copy-error');
    }, 1400);
}
function copyTextValue(text, onDone) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => onDone(true)).catch(() => onDone(fbCopy(text)));
    } else {
        onDone(fbCopy(text));
    }
}
function copyToClipboard(btn, et) { 
    const textValue = decodeURIComponent(et);
    const orig = btn.innerText;
    copyTextValue(textValue, ok => setCopyFeedback(btn, ok, orig));
}
function fbCopy(textValue) {
    const ta = document.createElement("textarea");
    ta.value = textValue;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch(e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
}

function closeExportModal() { document.getElementById('export-modal').classList.add('opacity-0'); setTimeout(()=>document.getElementById('export-modal').classList.add('hidden'),500); }
function copyExportText(btn) { 
    const ot = btn.innerText;
    copyTextValue(document.getElementById('export-textarea').value, ok => setCopyFeedback(btn, ok, ot));
}

function exportCurrentVersion() { 
    if(!versionHistory.length) return;
    document.getElementById('export-textarea').value = buildExportText(versionHistory); 
    document.getElementById('export-modal').classList.remove('hidden'); 
    setTimeout(()=>document.getElementById('export-modal').classList.remove('opacity-0'),10); 
}

function formatParams(v) {
    if (!v.params) return "N/A";
    return `--v ${v.params.version} --ar ${v.params.ratio} --s ${v.params.stylize} --q ${v.params.quality}${v.params.raw ? ' --raw' : ''}${v.params.no ? ' --no ' + v.params.no : ''}`;
}
function buildExportText(history) {
    let txt = `DimPrompt Research Export\nTotal versions: ${history.length}\nExported: ${new Date().toLocaleString()}\n\n`;
    history.forEach(v => {
        const rationale = v.templateRecommendationRationaleKey ? t(v.templateRecommendationRationaleKey) : (v.templateRecommendationRationale || 'N/A');
        txt += `========================================\n`;
        txt += `version: ${v.version}\n`;
        txt += `time: ${v.timestamp}\n`;
        txt += `product: ${v.productType}\n`;
        txt += `strategy: ${v.strategyLabel || getStrategyLabel(v.compMode)}\n`;
        txt += `strategy internal value: ${v.compMode}\n`;
        txt += `selected dimensions: ${v.dimensions.join(', ')}\n`;
        txt += `active dimensions: ${(v.activeDimensions || []).join(', ')}\n`;
        txt += `supplementary constraints: ${v.constraints || 'None'}\n`;
        txt += `parameters: ${formatParams(v)}\n`;
        txt += `template recommendation: ${v.templateRecommendation || 'N/A'}\n`;
        txt += `template recommendation rationale: ${rationale}\n`;
        txt += `user evaluation / note: ${v.note || 'None'}\n\n`;
        txt += `[Visual Focus] -> ${v.prompts.visual.eval || 'Not evaluated'}\n${v.prompts.visual.text}\n\n`;
        txt += `[Technical Focus] -> ${v.prompts.tech.eval || 'Not evaluated'}\n${v.prompts.tech.text}\n\n`;
        txt += `[Scenario Focus] -> ${v.prompts.scen.eval || 'Not evaluated'}\n${v.prompts.scen.text}\n\n`;
    });
    return txt;
}
function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function downloadExportTxt() {
    if(!versionHistory.length) return;
    const blob = new Blob([buildExportText(versionHistory)], { type: 'text/plain;charset=utf-8' });
    downloadBlob('DimPrompt_AllVersions.txt', blob);
}

// 🚀 NATIVE WORD DOCUMENT DOWNLOAD GENERATOR
function downloadExportText() {
    if(!versionHistory.length) return;

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>DimPrompt Report</title></head>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; color: #333;">
        <h1 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">DimPrompt Generation Report</h1>
    `;

    versionHistory.forEach(v => {
        const rationale = v.templateRecommendationRationaleKey ? t(v.templateRecommendationRationaleKey) : (v.templateRecommendationRationale || 'N/A');
        htmlContent += `
            <h2>Version ${v.version} (${escapeHtml(v.timestamp)})</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">version</td><td style="padding: 8px; border: 1px solid #ddd;">${v.version}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">time</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.timestamp)}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">product</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.productType)}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">strategy</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.strategyLabel || getStrategyLabel(v.compMode))}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">strategy internal value</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.compMode)}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">selected dimensions</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.dimensions.join(', '))}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">active dimensions</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml((v.activeDimensions || []).join(', '))}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">supplementary constraints</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.constraints || 'None')}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">parameters</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(formatParams(v))}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">template recommendation</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.templateRecommendation || 'N/A')}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">template recommendation rationale</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(rationale)}</td></tr>
                <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">user evaluation / note</td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(v.note || 'None')}</td></tr>
            </table>
        `;
        Object.entries(v.prompts).forEach(([id, da]) => {
            const description = da.descKey ? t(da.descKey) : (da.description || '');
            htmlContent += `
            <div style="margin-bottom: 24px; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #f8fafc;">
                <h3 style="margin-top: 0; color: #1e293b;">${escapeHtml(da.title)} ${da.eval ? ` <span style="color:#10b981;">[${escapeHtml(da.eval)}]</span>` : ''}${da.recommended ? ' <span style="color:#4f46e5;">[Recommended]</span>' : ''}</h3>
                <p style="margin-top: 0; color: #64748b;">${escapeHtml(description)}</p>
                <p style="font-family: 'Courier New', Courier, monospace; background-color: #ffffff; padding: 12px; border: 1px solid #cbd5e1; border-radius: 4px;">${escapeHtml(da.text)}</p>
            </div>
            `;
        });
    });

    htmlContent += `</body></html>`;

    // Create a Blob with Word application type
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    downloadBlob('DimPrompt_AllVersions.doc', blob);
}
