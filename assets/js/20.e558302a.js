(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{389:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("介绍")])]),t._v(" "),n("p",[t._v("eslint是语法检查工具，方便管理代码，避免语法错误，增强代码可读性。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("├── build                       \n├── mock                        \n├── node_modules                \n├── ···\n│     \n├── .eslintignore    # 忽略eslint语法检查的文件\n├── .eslintrc.js     # eslint配置项\n├── ···              \n")])])]),n("ul",[n("li",[t._v(".eslintignore：忽略eslint检查的文件。")]),t._v(" "),n("li",[t._v(".eslintrc.js：eslint检查配置项。")])])])]),t._v(" "),n("hr"),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[n("strong",[t._v("安装及启用")])]),t._v(" "),n("p",[t._v("给 vs code 编辑器安装并启用 ESLint 方便快速检查及修改语法错误。")]),t._v(" "),n("ul",[n("li",[t._v("安装ESLint：同时按住 ctrl+shift+x 快捷键进入插件搜索界面，搜索eslint进行安装。如下图所示：")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/image/eslint/eslint-install.png"),alt:"ESLint 安装"}}),t._v(" "),n("ul",[n("li",[t._v("启用ESLint：选择 “文件 -> 首选项 -> 设置” ，进入设置界面，搜索eslint，将“Eslint: Enable” 打开。如下图所示：")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/image/eslint/eslint-enable.png"),alt:"ESLint 启用"}}),t._v(" "),n("ul",[n("li",[t._v("在settings.json中配置：")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/image/eslint/eslint-settings.png"),alt:"ESLint 配置"}}),t._v(" "),n("p",[t._v("打开ESLint后，在保存时编辑器会自动修改一部分的ESLint语法错误。")])])]),t._v(" "),n("hr"),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[n("strong",[t._v("基本用法")])]),t._v(" "),n("ul",[n("li",[t._v("当用到一些js的全局属性时，需要添加"),n("code",[t._v("/*global */")]),t._v("，例如：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*global http protocol*/")]),t._v("\nhttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postDev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("protocol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("param_findButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("http")]),t._v("和"),n("code",[t._v("protocol")]),t._v("是js的全局属性，要增加"),n("code",[t._v("/*global http protocol*/")]),t._v("，ESLint检查才不会报错。"),n("br"),t._v(" "),n("strong",[t._v("新项目中的http、protocol已改为Vue的全局变量，不再需要使用global注释")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);