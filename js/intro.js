(function () {
	'use strict';

	var i18n = {
		'tw': {
			navAbout: '關於',
			navSkills: '技能',
			navExperience: '經歷',
			navContact: '聯絡',
			navCv: '履歷',
			badge: '就讀中原大學碩士班',
			title: '干皓軍',
			subtitle: '智慧運算與大數據研究生，熱衷開源社群與軟體開發。從 SITCON、COSCUP 到 Android 與資料視覺化專案，持續探索技術的無限可能。',
			ctaCv: '查看完整履歷',
			ctaGithub: 'GitHub',
			aboutLabel: '關於我',
			aboutTitle: '簡介',
			cardEduTitle: '教育背景',
			cardEduDesc: '就讀中原大學智慧運算與大數據碩士學位學程。曾於銘傳大學取得資訊工程與資訊管理雙學士，並在龍華科技大學修習資訊管理。',
			cardOsTitle: '開源社群',
			cardOsDesc: '自高中起參與 SITCON 夏令營、LHUIOSC 社團與 COSCUP 活動，長期投入臺灣學生開源社群，累積 Python、Linux 等實務技能。',
			cardProjTitle: '專案開發',
			cardProjDesc: '開發過 Android 遊戲（Whack-a-mole）、排程付款 App（Autopay），以及以 R Shiny 打造的都市宜居度資料視覺化平台（Ideallife）。',
			cardResearchTitle: '研究興趣',
			cardResearchDesc: '專注智慧運算、大數據分析與機器學習應用，熟悉 TensorFlow 框架，具備從資料收集、分析到視覺化呈現的完整開發經驗。',
			skillsLabel: '專業技能',
			skillsTitle: '技術棧',
			skillsLang: '程式語言',
			skillsMl: '機器學習',
			skillsOs: '作業系統',
			skillsTools: '工具與管理',
			expLabel: '精選經歷',
			expTitle: '里程碑',
			exp1Date: '2025 – 至今',
			exp1Title: '中原大學 · 智慧運算與大數據碩士',
			exp1Desc: '攻讀智慧運算與大數據相關研究',
			exp2Date: '2017 – 2018',
			exp2Title: 'SITCON Summer Camp',
			exp2Desc: '臺灣最大學生開源組織的夏令營，學習 Python 與進階電腦原理',
			exp3Date: '2015 – 2016',
			exp3Title: 'LHUIOSC · COSCUP',
			exp3Desc: '龍華科大開源社團，參與臺灣最大開源社群年會',
			exp4Date: '2021 – 2022',
			exp4Title: '兵役 · 二兵',
			exp4Desc: 'Compulsory Military Service',
			contactLabel: '聯絡方式',
			contactTitle: '保持聯繫',
			contactEmail: '電子郵件',
			contactPhone: '電話',
			contactGithub: 'GitHub',
			footer: 'Made by 干皓軍 · ',
			footerCv: '查看履歷',
			orbitPython: 'Python',
			orbitAndroid: 'Android',
			orbitR: 'R / Shiny',
			orbitMl: 'TensorFlow'
		},
		'cn': {
			navAbout: '关于',
			navSkills: '技能',
			navExperience: '经历',
			navContact: '联系',
			navCv: '简历',
			badge: '就读中原大学硕士班',
			title: '干皓军',
			subtitle: '智慧运算与大数据研究生，热衷开源社群与软件开发。从 SITCON、COSCUP 到 Android 与资料视觉化专案，持续探索技术的无限可能。',
			ctaCv: '查看完整简历',
			ctaGithub: 'GitHub',
			aboutLabel: '关于我',
			aboutTitle: '简介',
			cardEduTitle: '教育背景',
			cardEduDesc: '就读中原大学智慧运算与大数据硕士学位学程。曾于铭传大学取得信息工程与信息管理双学士，并在龙华科技大学修习信息管理。',
			cardOsTitle: '开源社群',
			cardOsDesc: '自高中起参与 SITCON 夏令营、LHUIOSC 社团与 COSCUP 活动，长期投入台湾学生开源社群，累积 Python、Linux 等实务技能。',
			cardProjTitle: '专案开发',
			cardProjDesc: '开发过 Android 游戏（Whack-a-mole）、排程付款 App（Autopay），以及以 R Shiny 打造的城市宜居度资料视觉化平台（Ideallife）。',
			cardResearchTitle: '研究兴趣',
			cardResearchDesc: '专注智慧运算、大数据分析与机器学习应用，熟悉 TensorFlow 框架，具备从资料收集、分析到视觉化呈现的完整开发经验。',
			skillsLabel: '专业技能',
			skillsTitle: '技术栈',
			skillsLang: '程式语言',
			skillsMl: '机器学习',
			skillsOs: '操作系统',
			skillsTools: '工具与管理',
			expLabel: '精选经历',
			expTitle: '里程碑',
			exp1Date: '2025 – 至今',
			exp1Title: '中原大学 · 智慧运算与大数据硕士',
			exp1Desc: '攻读智慧运算与大数据相关研究',
			exp2Date: '2017 – 2018',
			exp2Title: 'SITCON Summer Camp',
			exp2Desc: '台湾最大学生开源组织的夏令营，学习 Python 与进阶电脑原理',
			exp3Date: '2015 – 2016',
			exp3Title: 'LHUIOSC · COSCUP',
			exp3Desc: '龙华科大开源社团，参与台湾最大开源社群年会',
			exp4Date: '2021 – 2022',
			exp4Title: '兵役 · 二兵',
			exp4Desc: 'Compulsory Military Service',
			contactLabel: '联系方式',
			contactTitle: '保持联系',
			contactEmail: '电子邮件',
			contactPhone: '电话',
			contactGithub: 'GitHub',
			footer: 'Made by 干皓军 · ',
			footerCv: '查看简历',
			orbitPython: 'Python',
			orbitAndroid: 'Android',
			orbitR: 'R / Shiny',
			orbitMl: 'TensorFlow'
		},
		'en': {
			navAbout: 'About',
			navSkills: 'Skills',
			navExperience: 'Experience',
			navContact: 'Contact',
			navCv: 'CV',
			badge: 'Graduate Student at CYCU',
			title: 'Hao-Jun Kan',
			subtitle: 'Master\'s student in Intelligent Computing and Big Data. Active in open-source communities and software development — from SITCON and COSCUP to Android apps and data visualization projects.',
			ctaCv: 'View Full CV',
			ctaGithub: 'GitHub',
			aboutLabel: 'About Me',
			aboutTitle: 'Introduction',
			cardEduTitle: 'Education',
			cardEduDesc: 'Pursuing a Master\'s in Intelligent Computing and Big Data at Chung Yuan Christian University. Dual Bachelor\'s degrees in Information Engineering and Information Management from Ming Chuan University.',
			cardOsTitle: 'Open Source',
			cardOsDesc: 'Involved in SITCON Summer Camp, LHUIOSC club, and COSCUP since high school. Long-time contributor to Taiwan\'s student open-source community.',
			cardProjTitle: 'Projects',
			cardProjDesc: 'Built an Android game (Whack-a-mole), a scheduled payment app (Autopay), and a city livability visualization platform (Ideallife) with R Shiny.',
			cardResearchTitle: 'Research Interests',
			cardResearchDesc: 'Focused on intelligent computing, big data analytics, and machine learning applications with TensorFlow. Experienced in end-to-end data pipeline development.',
			skillsLabel: 'Professional Skills',
			skillsTitle: 'Tech Stack',
			skillsLang: 'Languages',
			skillsMl: 'Machine Learning',
			skillsOs: 'Operating Systems',
			skillsTools: 'Tools & Management',
			expLabel: 'Highlights',
			expTitle: 'Milestones',
			exp1Date: '2025 – Present',
			exp1Title: 'CYCU · Intelligent Computing & Big Data',
			exp1Desc: 'Graduate research in intelligent computing and big data',
			exp2Date: '2017 – 2018',
			exp2Title: 'SITCON Summer Camp',
			exp2Desc: 'Taiwan\'s largest student open-source IT conference and summer camp',
			exp3Date: '2015 – 2016',
			exp3Title: 'LHUIOSC · COSCUP',
			exp3Desc: 'Open-source club at Lunghwa University, COSCUP conference',
			exp4Date: '2021 – 2022',
			exp4Title: 'Military Service',
			exp4Desc: 'Compulsory Military Service, Private Second Class',
			contactLabel: 'Get in Touch',
			contactTitle: 'Contact',
			contactEmail: 'Email',
			contactPhone: 'Phone',
			contactGithub: 'GitHub',
			footer: 'Made by Hao-Jun Kan · ',
			footerCv: 'View CV',
			orbitPython: 'Python',
			orbitAndroid: 'Android',
			orbitR: 'R / Shiny',
			orbitMl: 'TensorFlow'
		}
	};

	var cvLinks = { tw: 'zh_tw.html', cn: 'zh_cn.html', en: 'en.html' };
	var currentLang = localStorage.getItem('intro-lang') || 'tw';
	var currentTheme = localStorage.getItem('intro-theme') || 'light';

	function applyLang(lang) {
		var t = i18n[lang];
		if (!t) return;
		currentLang = lang;
		localStorage.setItem('intro-lang', lang);
		document.documentElement.lang = lang === 'tw' ? 'zh-Hant' : lang === 'cn' ? 'zh-Hans' : 'en';
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (t[key] !== undefined) el.textContent = t[key];
		});
		document.querySelectorAll('.lang-switch button').forEach(function (btn) {
			btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
		});
		var cvLink = document.getElementById('cv-link');
		var footerCv = document.getElementById('footer-cv-link');
		var heroCv = document.getElementById('hero-cv-link');
		if (cvLink) cvLink.href = cvLinks[lang];
		if (footerCv) footerCv.href = cvLinks[lang];
		if (heroCv) heroCv.href = cvLinks[lang];
	}

	function applyTheme(theme) {
		currentTheme = theme;
		localStorage.setItem('intro-theme', theme);
		document.body.setAttribute('data-theme', theme);
	}

	function initNav() {
		var nav = document.querySelector('.intro-nav');
		var toggle = document.querySelector('.intro-nav__toggle');
		var links = document.querySelector('.intro-nav__links');

		window.addEventListener('scroll', function () {
			if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
		});

		if (toggle && links) {
			toggle.addEventListener('click', function () {
				toggle.classList.toggle('open');
				links.classList.toggle('open');
			});
			links.querySelectorAll('a').forEach(function (a) {
				a.addEventListener('click', function () {
					toggle.classList.remove('open');
					links.classList.remove('open');
				});
			});
		}

		document.querySelectorAll('.lang-switch button').forEach(function (btn) {
			btn.addEventListener('click', function () {
				applyLang(btn.getAttribute('data-lang'));
			});
		});

		var themeBtn = document.getElementById('theme-toggle');
		if (themeBtn) {
			themeBtn.addEventListener('click', function () {
				applyTheme(currentTheme === 'light' ? 'dark' : 'light');
			});
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		applyTheme(currentTheme);
		applyLang(currentLang);
		initNav();
	});
})();
