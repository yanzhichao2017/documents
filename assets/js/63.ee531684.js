(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{261:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-解决-manjaro-录屏闪烁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决-manjaro-录屏闪烁","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 解决 Manjaro 录屏闪烁")]),t._v(" "),s("h3",{attrs:{id:"问题情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题情况")]),t._v(" "),s("p",[t._v("在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。")]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("步骤")]),t._v(" "),s("p",[s("code",[t._v("系统设置")]),t._v(" > "),s("code",[t._v("硬件")]),t._v(" > "),s("code",[t._v("显示和监控")]),t._v(" > "),s("code",[t._v("混成器")]),t._v(" > "),s("code",[t._v("避免撕裂(垂直同步)")]),t._v(" > "),s("code",[t._v("从不")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"/OS/manjaro/os_manjaro_5_20190218171136.png",alt:"录屏闪烁"}})]),t._v(" "),s("h2",{attrs:{id:"_2-禁用笔记本键盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-禁用笔记本键盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 禁用笔记本键盘")]),t._v(" "),s("h3",{attrs:{id:"问题情况-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题情况-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题情况")]),t._v(" "),s("p",[t._v("之前键盘进过水导致会启用按键失灵，所以需要禁用自带的键盘。")]),t._v(" "),s("h3",{attrs:{id:"解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("初级方案")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# manjaro 下 xinput 被 xorg-xinput 替代")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pacman -S xorg-xinput\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看设备列表")]),t._v("\nxinput list\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看笔记本键盘信息 ")]),t._v("\nxinput list-props "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AT Translated Set 2 keyboard'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Device Enabled (147): 1 =》 `1` 表示维禁用")]),t._v("\nxinput set-prop 17 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Device Enabled'")]),t._v(" 0\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次查看设备信息即可")]),t._v("\n")])])])]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("终极方案")]),t._v(" "),s("p",[s("code",[t._v("关电源")]),t._v(" > "),s("code",[t._v("打开后盖")]),t._v(" > "),s("code",[t._v("拆除笔记本键盘排线")])])]),t._v(" "),s("h2",{attrs:{id:"_3-修复文件夹名为英文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-修复文件夹名为英文","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 修复文件夹名为英文")]),t._v(" "),s("h3",{attrs:{id:"问题情况-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题情况-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题情况")]),t._v(" "),s("p",[t._v("将系统设置为中文后，用户目录下的文件夹也随之变为中文，在日常使用时就会造成频繁切换输入这就让人很烦了。而直接重命名会导致出现一些问题。")]),t._v(" "),s("h3",{attrs:{id:"解决方案-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("初级方案")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 找到 `～/.config/user-dirs.dis` 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.config/user-dirs.dirs \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 接着将中文命名修改为新改的英文，并使其生效")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.config/user-dirs.dirs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 然而这并没有结束，你还需要修改右侧图标的位置")]),t._v("\n右键 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 编辑 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 位置\n")])])])])])},[],!1,null,null,null);a.default=e.exports}}]);