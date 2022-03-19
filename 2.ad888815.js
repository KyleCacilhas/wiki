/*! For license information please see 2.ad888815.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{122:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(117),o=a(62),l=a.n(o);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:l.a.skipToContent,onKeyDown:function(e){if(13===e.keyCode){document.activeElement.blur();var t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}}},"Skip to main content"))},s=a(118),u=a(138),d=a(63),m=a.n(d);var f=function(){var e,t=Object(u.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,o=Object(s.useThemeConfig)().announcementBar;if(!o)return null;var l=o.content,i=o.backgroundColor,d=o.textColor,f=o.isCloseable;return!l||f&&a?null:r.a.createElement("div",{className:m.a.announcementBar,style:{backgroundColor:i,color:d},role:"banner"},r.a.createElement("div",{className:Object(c.a)(m.a.announcementBarContent,(e={},e[m.a.announcementBarCloseable]=f,e)),dangerouslySetInnerHTML:{__html:l}}),f?r.a.createElement("button",{type:"button",className:m.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=a(3),v=function(){return null},b=a(155),p=a.n(b),g=a(21),k=a(64),E=a.n(k),O=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.dark),style:a},t)},j=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(E.a.toggle,E.a.light),style:a},t)},y=function(e){var t=Object(s.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(g.default)().isClient;return r.a.createElement(p.a,Object(h.a)({disabled:!l,icons:{checked:r.a.createElement(O,{icon:a,style:n}),unchecked:r.a.createElement(j,{icon:c,style:o})}},e))},_=a(126),C=a(123),w=a(141),N=function(e){var t=Object(C.useLocation)(),a=Object(n.useState)(!e),r=a[0],c=a[1],o=Object(n.useRef)(!1),l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(0),d=u[0],m=u[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(w.a)((function(t){var a=t.scrollY;if(e&&!(a<d)){if(o.current)return o.current=!1,c(!1),void s(a);i&&0===a&&c(!0);var n=document.documentElement.scrollHeight-d,r=window.innerHeight;i&&a>=i?c(!1):a+r<n&&c(!0),s(a)}}),[i,d,o]),Object(n.useEffect)((function(){e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&(o.current=!0)}),[t.hash]),{navbarRef:f,isNavbarVisible:r}},S=a(142),T=a(143),L=a(7),I=a(124),D=["mobile"];function B(e){var t=e.mobile,a=Object(L.a)(e,D),n=Object(g.default)(),c=n.siteConfig.baseUrl,o=n.i18n,l=o.defaultLocale,i=o.currentLocale,s=o.locales,u=o.localeConfigs,d=Object(C.useLocation)().pathname;function m(e){return u[e].label}var f=i===l?c:c.replace("/"+i+"/","/"),v=d.replace(c,"");var b=s.map((function(e){var t=""+function(e){return e===l?""+f:""+f+e+"/"}(e)+v;return{isNavLink:!0,label:m(e),to:"pathname://"+t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":""}})),p=t?"Languages":m(i);return r.a.createElement(I.a,Object(h.a)({},a,{mobile:t,label:p,items:b}))}var x=["type"],P={default:function(){return I.a},localeDropdown:function(){return B},docsVersion:function(){return a(160).default},docsVersionDropdown:function(){return a(161).default},doc:function(){return a(162).default}};function M(e){var t=e.type,a=Object(L.a)(e,x),n=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var A=a(144),V=a(146),F=a(66),X=a.n(F),H="right";var R=function(){var e,t,a=Object(s.useThemeConfig)(),o=a.navbar,l=o.items,i=o.hideOnScroll,u=o.style,d=a.colorMode.disableSwitch,m=Object(n.useState)(!1),f=m[0],b=m[1],p=Object(n.useState)(!1),g=p[0],k=p[1],E=Object(_.a)(),O=E.isDarkTheme,j=E.setLightTheme,C=E.setDarkTheme,w=N(i),L=w.navbarRef,I=w.isNavbarVisible;Object(S.a)(f);var D=Object(n.useCallback)((function(){b(!0)}),[b]),B=Object(n.useCallback)((function(){b(!1)}),[b]),x=Object(n.useCallback)((function(e){return e.target.checked?C():j()}),[j,C]),P=Object(T.a)();Object(n.useEffect)((function(){P===T.b.desktop&&b(!1)}),[P]);var F=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:H)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:H)}))}}(l),R=F.leftItems,U=F.rightItems;return r.a.createElement("nav",{ref:L,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===u,"navbar--primary":"primary"===u,"navbar-sidebar--show":f},e[X.a.navbarHideable]=i,e[X.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement(V.a,null)),r.a.createElement(A.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[X.a.hideLogoText]=g,t))}),R.map((function(e,t){return r.a.createElement(M,Object(h.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},U.map((function(e,t){return r.a.createElement(M,Object(h.a)({},e,{key:t}))})),!d&&r.a.createElement(y,{className:X.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:x}),r.a.createElement(v,{handleSearchBarToggle:k,isSearchBarExpanded:g}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:B}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(A.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:B}),!d&&f&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:x})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement(M,Object(h.a)({mobile:!0},e,{onClick:B,key:t}))})))))))},U=a(119),G=a(121),Y=a(67),K=a.n(Y),W=["to","href","label","prependBaseUrlToHref"];function z(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(L.a)(e,W),l=Object(G.a)(t),i=Object(G.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(U.a,Object(h.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var J=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var q=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,u=Object(G.a)(i.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(z,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:K.a.footerLogoLink},r.a.createElement(J,{alt:i.alt,url:u})):r.a.createElement(J,{alt:i.alt,url:u})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},Q=a(12),Z="light",$="dark",ee=function(e){return e===$?$:Z},te=function(){return Q.a.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):Z},ae=function(e){try{localStorage.setItem("theme",ee(e))}catch(t){console.error(t)}},ne=function(){var e=Object(s.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(te),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o(Z),ae(Z)}),[]),i=Object(n.useCallback)((function(){o($),ae($)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",ee(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(ee(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?$:Z)}))}),[]),{isDarkTheme:c===$,setLightTheme:l,setDarkTheme:i}},re=a(140);var ce=function(e){var t=ne(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(re.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},oe="docusaurus.tab.",le=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(oe))e[n.substring(oe.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ie="docusaurus.announcement.dismiss",se="docusaurus.announcement.id",ue=function(){var e=Object(s.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(ie,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(se);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(se,t),n&&localStorage.setItem(ie,"false"),(n||"false"===localStorage.getItem(ie))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},de=a(139);var me=function(e){var t=le(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ue(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(de.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function fe(e){var t=e.children;return r.a.createElement(ce,null,r.a.createElement(me,null,r.a.createElement(s.DocsPreferredVersionContextProvider,null,t)))}var he=a(23);function ve(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(he.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}function be(e){var t=Object(g.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,o=a.themeConfig,l=o.image,i=o.metadatas,u=a.url,d=e.title,m=e.description,f=e.image,v=e.keywords,b=e.permalink,p=e.searchMetadatas,k=Object(s.useTitleFormatter)(d),E=f||l,O=Object(G.a)(E,{absolute:!0}),j=Object(G.a)(c),y=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,null,r.a.createElement("html",{lang:y}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),c&&r.a.createElement("link",{rel:"shortcut icon",href:j}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:u+b}),b&&r.a.createElement("link",{rel:"canonical",href:u+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(ve,Object(h.a)({tag:s.DEFAULT_SEARCH_TAG,locale:n},p)),r.a.createElement(he.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(h.a)({key:"metadata_"+t},e))}))))}a(68);var pe=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(69);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return pe(),r.a.createElement(fe,null,r.a.createElement(be,e),r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(R,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(q,null))}},124:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(117),i=a(119),s=a(121),u=a(123),d=a(118),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],f=["items","position","className"],h=["className"],v=["items","className","position"],b=["className"],p=["mobile"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,h=e.prependBaseUrlToHref,v=Object(r.a)(e,m),b=Object(s.a)(c),p=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:h?g:l}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),v),u)}function k(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,f),u=Object(c.useRef)(null),d=Object(c.useRef)(null),m=Object(c.useState)(!1),v=m[0],b=m[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":v})},o.a.createElement(g,Object(n.a)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!v))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,h);return o.a.createElement("li",{key:a},o.a.createElement(g,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(g,Object(n.a)({className:p(i)},s))}function E(e){var t,a,i=e.items,s=e.className,m=(e.position,Object(r.a)(e,v)),f=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=i&&i.some((function(e){return Object(d.isSamePath)(e.to,h)}))))||void 0===e||e})),k=p[0],E=p[1],O=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(g,Object(n.a)({className:O(s)},m)));var j=null!==(t=f.current)&&void 0!==t&&t.scrollHeight?(null===(a=f.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":k})},o.a.createElement(g,Object(n.a)({role:"button",className:O(s,!0)},m,{onClick:function(){E((function(e){return!e}))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:f,style:{height:k?void 0:j}},i.map((function(e,t){var a=e.className,c=Object(r.a)(e,b);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:O(a)},c,{onClick:m.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,p),c=a?E:k;return o.a.createElement(c,n)}},126:function(e,t,a){"use strict";var n=a(0),r=a(140);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},138:function(e,t,a){"use strict";var n=a(0),r=a(139);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},139:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},140:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},141:function(e,t,a){"use strict";var n=a(0),r=a(12),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},142:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},143:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},144:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(119),i=a(145),s=a(121),u=a(21),d=a(118),m=a(127),f=["imageClassName","titleClassName"];t.a=function(e){var t=Object(u.default)().isClient,a=Object(d.useThemeConfig)().navbar,c=a.title,h=a.logo,v=void 0===h?{src:""}:h,b=e.imageClassName,p=e.titleClassName,g=Object(r.a)(e,f),k=Object(s.a)(v.href||"/"),E=v.target?{target:v.target}:Object(m.a)(k)?{}:{rel:"noopener noreferrer",target:"_blank"},O={light:Object(s.a)(v.src),dark:Object(s.a)(v.srcDark||v.src)};return o.a.createElement(l.a,Object(n.a)({to:k},g,E),v.src&&o.a.createElement(i.a,{key:t,className:b,sources:O,alt:v.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:p},c))}},145:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(117),i=a(21),s=a(126),u=a(65),d=a.n(u),m=["sources","className","alt"];t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,f=e.alt,h=void 0===f?"":f,v=Object(r.a)(e,m),b=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:h,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],u)},v))})))}},146:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=["width","height","className"];t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=Object(r.a)(e,l);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:i,viewBox:"0 0 30 30",role:"img",focusable:"false"},u),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),l=m(a(156)),i=m(a(1)),s=m(a(157)),u=m(a(158)),d=a(159);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},156:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},157:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},158:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},160:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(124),i=a(120),s=a(118),u=["label","to","docsPluginId"];function d(e){var t,a=e.label,c=e.to,d=e.docsPluginId,m=Object(r.a)(e,u),f=Object(i.useActiveVersion)(d),h=Object(s.useDocsPreferredVersion)(d).preferredVersion,v=Object(i.useLatestVersion)(d),b=null!==(t=null!=f?f:h)&&void 0!==t?t:v,p=null!=a?a:b.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},m,{label:p,to:g}))}},161:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(124),i=a(120),s=a(118),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,a,c=e.mobile,m=e.docsPluginId,f=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,v=e.dropdownItemsAfter,b=Object(r.a)(e,u),p=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),k=Object(i.useLatestVersion)(m),E=Object(s.useDocsPreferredVersion)(m),O=E.preferredVersion,j=E.savePreferredVersionName;var y=null!==(t=null!==(a=p.activeVersion)&&void 0!==a?a:O)&&void 0!==t?t:k,_=c?"Versions":y.label,C=c?void 0:d(y).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:_,to:C,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(h,e,v);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(124),i=a(120),s=a(117),u=a(118),d=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,a,c=e.docId,m=e.activeSidebarClassName,f=e.label,h=e.docsPluginId,v=Object(r.a)(e,d),b=Object(i.useActiveDocContext)(h),p=b.activeVersion,g=b.activeDoc,k=Object(u.useDocsPreferredVersion)(h).preferredVersion,E=Object(i.useLatestVersion)(h),O=null!==(t=null!=p?p:k)&&void 0!==t?t:E,j=O.docs.find((function(e){return e.id===c}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+O.name+".\nAvailable docIds=\n- "+O.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},v,{className:Object(s.a)(v.className,(a={},a[m]=g&&g.sidebar===j.sidebar,a)),label:null!=f?f:j.id,to:j.path}))}}}]);