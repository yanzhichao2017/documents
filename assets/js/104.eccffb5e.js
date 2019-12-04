(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{381:function(t,s,a){"use strict";a.r(s);var e=a(24),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"rsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsync","aria-hidden":"true"}},[t._v("#")]),t._v(" Rsync")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Rsync",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rsync"),a("OutboundLink")],1),t._v("（Remote Sync），使用其 “Quick Check” 算法实现增量复制数据。可以使用 rsync 在不同目录（本地），不同服务器（远程）之前实现数据备份。在 3.x 版本可以做到一边对比差异一边复制。")]),t._v(" "),a("h3",{attrs:{id:"_1-选项（特性）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-选项（特性）","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 选项（特性）")]),t._v(" "),a("p",[t._v("Rsync 具有很多优异的特性，例如保持文件属性、权限；使用 rsh、ssh 等隧道加密传输文件（rsync 本身不会对数据加密）等。")]),t._v(" "),a("p",[t._v("具体的特性可以根据其命令参数得知：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("短参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("长参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-v")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--verbose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示输出过程")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-q")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--quiet")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("静默模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-P")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--progress")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("显示同步的过程及传输时的进度信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--rsh")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定隧道")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--archive")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多参数集合（-rtopgDl）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-r")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--recursive")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("递归")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--times")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持修改时间属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-o")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--owner")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持属主")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--perms")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持权限")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--group")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持用户组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-D")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--devices")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持设备文件信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-l")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--links")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("保持软链接")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-z")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--compress")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("压缩")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--bwlimit=KBPS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("限速，限制 I/O 带宽")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--delete")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除，即无差异同步数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-b")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--backup")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("备份，对于已存在同样的文件名时，老文件重命名为 "),a("code",[t._v("~filename")]),t._v("，可以使用 "),a("code",[t._v("--suffix")]),t._v(" 指定")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--backup-dir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("备份文件指定目录")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--exclude=PATTERN")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("排除传输的文件模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--exclude-from=FILE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("排除 FILE 中指定模式的文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--include=PATTERN")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("包含传输的文件模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--include-from=FILE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("包含 FILE 中指定模式的文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--password-file=FILE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从 FILE 中得到密码")])])])]),t._v(" "),a("p",[t._v("其中常用参数为 "),a("code",[t._v("-avz")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 语法")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    SRC    DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    SRC    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("host:DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("HOST:SRC    DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("HOST::SRC   DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    SRC    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("HOST::DEST\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OPTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    rsync://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("HOST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/SRC    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 常用示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目录间推送数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" /ect/hosts /opt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保持属性")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -vzrtopg --progress /etc/hosts /opt\n")])])])]),t._v(" "),a("li",[a("p",[t._v("目录间同步数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /null.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/hosts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -r --delete /null.txt /opt/hosts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同步目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /null\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v("  -r --delete /null /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /opt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("推送数据到对应主机端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -avz /etc/hosts root@45.78.12.89:/opt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等价于")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -avz /etc/hosts -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ssh -p 22'")]),t._v(" root@45.78.12.89:/opt \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到对应服务器上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("从服务器拉取数据")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v(" -avz -e  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ssh -p 22'")]),t._v(" root@45.78.12.89:/opt/hosts /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /opt/hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_4-可能存在的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-可能存在的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 可能存在的问题")]),t._v(" "),a("p",[t._v("看到部分文章说 rsync 传输大量小文件时会停止僵死（小文件是多小，大量是多大也没有描述清楚），这个问题搜了下，尚未得知具体的原因：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://superuser.com/questions/291803/best-way-to-copy-millions-of-files-between-2-servers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Best way to copy millions of files between 2 servers"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://serverfault.com/questions/365103/how-to-speed-up-rsync-for-small-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to speed up rsync for small files"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"scp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scp","aria-hidden":"true"}},[t._v("#")]),t._v(" Scp")]),t._v(" "),a("p",[a("code",[t._v("rsync")]),t._v(" 虽然可以增量下载，速度快一些，还有更多的功能，但是 "),a("code",[t._v("scp")]),t._v(" 非常不占资源，"),a("code",[t._v("rsync")]),t._v(" 在小文件众多时会导致磁盘 "),a("code",[t._v("I/O")]),t._v(" 非常高。")]),t._v(" "),a("h3",{attrs:{id:"_1-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 语法")]),t._v(" "),a("p",[t._v("相对于 "),a("code",[t._v("rsync")]),t._v("，"),a("code",[t._v("scp")]),t._v(" 的语法则简单很多：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("源文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("目标文件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选项")]),t._v("\n-1：使用 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" 协议版本1；\n-2：使用 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" 协议版本2；\n-4：使用 ipv4；\n-6：使用 ipv6；\n-B：以批处理模式运行；\n-C：使用压缩；\n-F：指定 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" 配置文件；\n-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如私钥），此参数直接传递给 ssh；\n-l：指定宽带限制；\n-o：指定使用的 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" 选项；\n-P：指定远程主机的端口号；\n-p：保留文件的最后修改时间，最后访问时间和权限模式；\n-q：不显示复制进度；\n-r：以递归方式复制。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源文件：指定要复制的源文件。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目标文件：目标文件。格式为 `user@host:filename` （文件名为目标文件的名称）。")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-常用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 常用示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("密码形式上传文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r /home/shanyuhai/Download/test shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n")])])]),a("p",[t._v("接着输入密码即可")])]),t._v(" "),a("li",[a("p",[t._v("秘钥形式上传文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -i ~/.ssh/id_rsa_xxx hi.png shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n")])])])]),t._v(" "),a("li",[a("p",[t._v("秘钥形式下载文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -i ~/.ssh/id_rsa_xxx shanyuhai@47.111.23.259:/home/shanyuhai/downloads/hi.png pictures\n")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("还可以使用 "),a("code",[t._v("lrzsz")]),t._v(" 来进行本地和远程的文件交互，不过需要双端都安装 "),a("code",[t._v("lrzsz")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("下载（sz）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sz filename\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待选择保存的本地路径")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("上传（rz）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待选择文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# （还可以拖拽文件）")]),t._v("\n")])])])])])])])},[],!1,null,null,null);s.default=n.exports}}]);