# 小郑 · 个人作品集

一个使用原生 HTML / CSS / JavaScript 手工完成的个人作品集网站，无框架、无第三方 UI 组件库。米色底、橙色强调、衬线大标题的杂志风设计，兼容桌面端与移动端。

## 主要功能

- **封面区**：大字姓名 + 橙底人像，个人简介与快捷入口
- **精选作品**：项目卡片由 JS 数据驱动渲染，支持按类别筛选（胶囊按钮）与项目数量统计
- **项目详情**：每个项目可展开查看技术栈与项目要点
- **关于我 / 联系我**：项目经历时间线与联系方式
- **深浅色主题切换**：导航栏右侧按钮一键切换，使用 `localStorage` 记住用户选择，背景、文字、边框颜色同步变化
- **交互细节**：吸顶导航、滚动高亮当前区域、入场淡入动画、移动端折叠菜单

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 结构 | 原生 HTML5 |
| 样式 | 原生 CSS3（CSS 变量实现主题切换） |
| 逻辑 | 原生 JavaScript（ES5 风格，IIFE 组织） |
| 字体 | Google Fonts（Playfair Display / Noto Serif SC / Inter / Noto Sans SC） |

## 目录结构

```
.
├── index.html          # 页面入口
├── css/
│   └── style.css       # 全部样式（含深浅色主题变量）
└── js/
    ├── projects.js     # 项目数据（window.PROJECTS 数组）
    └── main.js         # 渲染、筛选、导航、主题切换等逻辑
```

## 运行方式

纯静态页面，无需构建：

1. 直接用浏览器打开 `index.html`；
2. 或使用任意本地静态服务器，例如：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

然后访问 `http://localhost:8000`。

## 如何新增项目

编辑 `js/projects.js`，在 `window.PROJECTS` 数组末尾追加一条对象即可，筛选胶囊与版式会自动生成：

```js
{
  name: "项目名称",
  cat: "类别",          // 同时用于筛选胶囊与标签
  year: "2026.01",
  desc: "项目简介",
  stack: ["技术1", "技术2"],
  image: "配图路径或 URL",
  link: "#"             // 项目链接，无则填 "#"
}
```
