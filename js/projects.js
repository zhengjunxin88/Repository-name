/* ==========================================================================
   项目数据 —— 内容来源：js/profile.md「项目经历」
   新增项目只需在此数组末尾追加一条对象，版式与筛选自动生成。
   字段说明：
   - name : 项目名称
   - cat  : 类别（图框角标 + 名称上方标签 + 筛选胶囊）
   - year : 完成时间
   - desc : 项目简介
   - stack: 技术栈数组（渲染为胶囊）
   - image: 配图路径（可换成本地 images/xxx.jpg）
   - link : 项目链接（无则填 "#"）
   ========================================================================== */

window.PROJECTS = [
  {
    name: "轻记账",
    cat: "移动应用",
    year: "2025.04",
    desc: "「轻记账」是一款面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。项目支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。",
    stack: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smartphone%20screen%20showing%20minimal%20expense%20tracking%20app%20with%20monthly%20chart%2C%20on%20clean%20desk%20with%20notebook%20and%20coffee%2C%20soft%20warm%20light%2C%20editorial%20magazine%20photography&image_size=landscape_4_3",
    link: "#"
  },
  {
    name: "拾光集市",
    cat: "Web 应用",
    year: "2025.09",
    desc: "「拾光集市」是一个面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    stack: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=campus%20secondhand%20marketplace%20website%20on%20laptop%20screen%20with%20product%20cards%20grid%2C%20cozy%20dorm%20desk%20with%20warm%20lamp%20light%2C%20editorial%20magazine%20photography&image_size=landscape_4_3",
    link: "#"
  },
  {
    name: "城市脉搏",
    cat: "数据可视化",
    year: "2026.03",
    desc: "「城市脉搏」是一个城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
    stack: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=large%20data%20visualization%20dashboard%20on%20wide%20monitor%20showing%20city%20traffic%20map%20and%20weather%20charts%2C%20dark%20UI%20with%20glowing%20lines%2C%20editorial%20tech%20photography&image_size=landscape_16_9",
    link: "#"
  },
  {
    name: "课语通",
    cat: "AI 应用",
    year: "2026.07",
    desc: "「课语通」是一个基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    stack: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laptop%20showing%20ai%20chat%20interface%20with%20study%20notes%20and%20textbook%20beside%2C%20library%20table%20with%20soft%20window%20light%2C%20editorial%20magazine%20photography&image_size=landscape_4_3",
    link: "#"
  }
];
