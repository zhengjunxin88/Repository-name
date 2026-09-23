/* ==========================================================================
   main.js —— 项目渲染 + 类别筛选 + 展开介绍 + 顶部导航 + 入场动画
   ========================================================================== */
(function () {
  "use strict";

  var state = { filter: "全部" };

  /* ---------- 1. 渲染项目 ---------- */
  function catList() {
    var cats = ["全部"];
    (window.PROJECTS || []).forEach(function (p) {
      if (p.cat && cats.indexOf(p.cat) === -1) cats.push(p.cat);
    });
    return cats;
  }

  function projectHTML(p, i) {
    var no = String(i + 1).padStart(2, "0");
    var flip = i % 2 === 1 ? " flip" : "";
    var stack = (p.stack || []).map(function (s) {
      return "<li>" + s + "</li>";
    }).join("");
    var detail = (p.highlights && p.highlights.length)
      ? '<div class="p-detail" id="detail-' + i + '">' +
          "<h4>项目要点 / Notes</h4><ul>" +
          p.highlights.map(function (h) { return "<li>" + h + "</li>"; }).join("") +
          "</ul></div>"
      : "";

    return (
      '<article class="project' + flip + ' reveal" data-cat="' + p.cat + '">' +
        '<figure class="p-media">' +
          '<span class="p-cat">' + p.cat + "</span>" +
          '<div class="shot"><img src="' + p.image + '" alt="' + p.name + ' 项目配图" loading="lazy" /></div>' +
        "</figure>" +
        '<div class="p-body">' +
          '<div class="p-meta"><span class="p-no">' + no + "</span>" +
            '<span class="p-date">' + p.year + "</span></div>" +
          '<span class="p-tag">' + p.cat + "</span>" +
          '<h3 class="p-name">' + p.name + "</h3>" +
          '<p class="p-desc">' + p.desc + "</p>" +
          '<ul class="p-stack">' + stack + "</ul>" +
          (detail
            ? '<button class="p-more" type="button" data-i="' + i + '" aria-expanded="false">展开介绍 <span>＋</span></button>' + detail
            : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderFilters() {
    var box = document.getElementById("filters");
    if (!box) return;
    box.innerHTML = catList().map(function (c) {
      return '<button class="chip' + (c === state.filter ? " is-active" : "") +
        '" type="button" data-cat="' + c + '">' + c + "</button>";
    }).join("");

    box.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.filter = btn.getAttribute("data-cat");
      Array.prototype.forEach.call(box.querySelectorAll(".chip"), function (c) {
        c.classList.toggle("is-active", c === btn);
      });
      applyFilter();
    });
  }

  function applyFilter() {
    var items = document.querySelectorAll("#worksList .project");
    var shown = 0;
    Array.prototype.forEach.call(items, function (el) {
      var hit = state.filter === "全部" || el.getAttribute("data-cat") === state.filter;
      el.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    var count = document.getElementById("count");
    if (count) {
      count.innerHTML = "共 <b>" + shown + "</b> / " + items.length + " 个项目";
    }
  }

  function renderProjects() {
    var list = document.getElementById("worksList");
    if (!list || !window.PROJECTS) return;

    list.innerHTML = window.PROJECTS.map(projectHTML).join("");

    // 展开 / 收起介绍
    list.addEventListener("click", function (e) {
      var btn = e.target.closest(".p-more");
      if (!btn) return;
      var detail = document.getElementById("detail-" + btn.getAttribute("data-i"));
      if (!detail) return;
      var open = detail.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = open ? "收起介绍 <span>－</span>" : "展开介绍 <span>＋</span>";
    });

    applyFilter();
  }

  /* ---------- 2. 顶部导航：吸顶状态 + 移动端折叠 ---------- */
  function initNav() {
    var topbar = document.getElementById("topbar");
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("topnav");

    if (topbar) {
      var onScroll = function () {
        topbar.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
      });
      nav.addEventListener("click", function (e) {
        if (!e.target.closest("a")) return;
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    }
  }

  /* ---------- 3. 滚动高亮当前区域 ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".topnav .nav-link"));
    var sections = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) return;

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 4. 入场淡入（克制） ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFilters();
    renderProjects();
    initNav();
    initScrollSpy();
    initReveal();
  });
})();
