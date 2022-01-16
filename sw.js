const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Icimence's Tech Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"27db74e146913f047533432bb5f0204c","url":"./2020/03/20/在Windows环境下Vim编辑器中文乱码问题/index.html"},{"revision":"c0105accd73eb9ac559dc0d907d06761","url":"./2020/03/20/怎么在hexo博客中使用latex格式的数学公式/index.html"},{"revision":"60d9138c95b024cd16852175a64adf05","url":"./2020/03/21/最近公共祖先问题/index.html"},{"revision":"0c75493b02815270ece12e1f1d4458dc","url":"./2020/03/21/后缀数组/index.html"},{"revision":"f97b8fc15a339f91951e91194434edc2","url":"./2020/03/22/关于CPP处理输入的一些说明和模板/index.html"},{"revision":"d1407cf4a99b3bbc4cde2c12af483f22","url":"./2020/03/26/换源大集合/index.html"},{"revision":"6cbf66c27130a959d1cea3789e4954c6","url":"./2020/03/28/Homebrew的一些诡异的问题解决/index.html"},{"revision":"c8bfe5a9f29090ae5a95d5f39f46c2f9","url":"./2020/03/28/MacOS环境变量的编辑/index.html"},{"revision":"007976da7586ca374929c57a02e5ab6d","url":"./2020/03/29/关于并查集的一道题目（Python）/index.html"},{"revision":"9aff068f1e66f2a839edddcc106927ae","url":"./2020/03/30/Spring Boot项目中的MySQL的相关问题/index.html"},{"revision":"73ef978f516ed95a2ccb1063ad215afd","url":"./2020/04/01/Electron-Vue技术笔记一/index.html"},{"revision":"d2b6177d382ac0ae1a91d63dcdf615f6","url":"./2020/04/01/SpringBoot项目sql配置指南/index.html"},{"revision":"d6e336211cbd8893d9ad84e7e668bfc3","url":"./2020/04/02/槎湖望族-戴家/index.html"},{"revision":"935166b18909daf21f5c3581a940ea08","url":"./2020/04/08/将VSC作为latex编辑工具/index.html"},{"revision":"e58e83b6d0e5bda864d6748047567607","url":"./2020/04/10/在自己的服务器上部署hexo博客/index.html"},{"revision":"640e7cbbbc45795223a11e3a20a56c87","url":"./2020/04/11/iDo微信小程序功能开发文档/index.html"},{"revision":"a4b04c19090797bafd22333bc1e0de31","url":"./2020/04/14/如何在Hexo静态博客中使用pdf文章/index.html"},{"revision":"8c6a4b14396c081b97fd25fc40cf89e3","url":"./2020/04/18/Packet-Tracer两PC单向ping通实验/index.html"},{"revision":"b99d90a9044b461f8b062ac93d3d1911","url":"./2020/04/18/WechatApp开发笔记之login界面（一）/index.html"},{"revision":"a281e9510add24d46d3f3fe7b33584e9","url":"./2020/04/19/概率论常用公式（持续更新）/index.html"},{"revision":"5906f1275495b90ed67b432a402e8bfb","url":"./2020/04/22/Ant Design of Vue学习笔记/index.html"},{"revision":"c870399166ead51249b4608344c4069d","url":"./2020/04/23/WechatApp开发笔记之UI（二）/index.html"},{"revision":"3badebe19dbbcb97bb8b308f84bd1ec1","url":"./2020/04/25/WechatApp技术笔记之Tab页（三）/index.html"},{"revision":"dd7c713ca9ef0d16caefc45fbe7a96a2","url":"./2020/04/25/WechatApp技术笔记之列表下拉（四）/index.html"},{"revision":"631423999455a16786aec1f7f90a7d84","url":"./2020/04/30/排序算法之二分法排序/index.html"},{"revision":"01ee5e832527e0ad5508a0578dc31b26","url":"./2020/05/01/GitHub进行git操作反复要求输入密码解决方法/index.html"},{"revision":"882728b73090ff321078872ed7394bb4","url":"./2020/05/01/排序算法之堆排序/index.html"},{"revision":"e634a4a3d9811bd164e7723e7ae64f31","url":"./2020/05/04/豆瓣图书爬虫/index.html"},{"revision":"66c9202907cc89927d9859adad28a23e","url":"./2020/05/05/Python爬虫xpath解析/index.html"},{"revision":"8eea0e61c2da7db4b30d86f721ca4039","url":"./2020/05/06/微信小程序-Django后端真机调试/index.html"},{"revision":"f315427eb2771505698e867114197f12","url":"./2020/05/08/RIP跳转导致路由回路的原因分析/index.html"},{"revision":"4bf54b5932bf751123570220b12f4384","url":"./2020/05/10/CPP中的istringstream用法解析/index.html"},{"revision":"a42b9c0e059049319f5fb4a38af07337","url":"./2020/05/10/数据科学基础大作业项目设计/index.html"},{"revision":"f1b5b8f7c91209666aaa6c2f96cd7795","url":"./2020/05/11/使用GitHub仓库作为高速OSS的方法/index.html"},{"revision":"aba6ec63a0986b13d891cb9c447a80a5","url":"./2020/05/15/Packet Tracer进行模拟RIP路由回路/index.html"},{"revision":"4000176b5d410399278d44f3f6c19f6a","url":"./2020/05/16/Django-uWSGI-Nginx部署服务器/index.html"},{"revision":"207247126c58b5d27aca616b53fd069b","url":"./2020/05/16/http请求的StatusCode的含义/index.html"},{"revision":"b8a2128e8f4d17aebf4826229e9490d7","url":"./2020/05/21/服务器Nginx配置实现域名访问/index.html"},{"revision":"c7008a2cdb4415619810a1a35aa872ea","url":"./2020/05/22/packet-tracer验证RIP及OSPF优先级差异/index.html"},{"revision":"63d2e37dee6619638707ed85291034d3","url":"./2020/05/29/ant-design-vue更改主题颜色/index.html"},{"revision":"8813b88a242debda3f8a34d6e83ac152","url":"./2020/06/04/关于WebStorm-使用Ant-Design-of-Vue-通知提醒框notification时，出现的语法无法检测问题/index.html"},{"revision":"a2298d4babbf62bf2b70426ffc296451","url":"./2020/06/07/electron应用打包教程/index.html"},{"revision":"0a4eeb890277a612e96e6001d2e0893f","url":"./2020/06/08/Packet-Tracer结课拓扑实验报告/index.html"},{"revision":"eccf98d193a5f559bf05224a5da731fb","url":"./2020/06/09/hexo博客文章加密/index.html"},{"revision":"ea915237ac290eced6596fbf50909eb6","url":"./2020/06/11/LeetCode刷题小记【一】-1-4/index.html"},{"revision":"c8f76d7ff4fecf38ddc6a9b23f40f8e4","url":"./2020/06/12/CentOS安装Java8/index.html"},{"revision":"36a26ec2623721a6f596f18175f13713","url":"./2020/06/12/CentOS安装MySQL5-7/index.html"},{"revision":"32d8c080da619b1008b55cf73ccf758b","url":"./2020/06/12/CentOS配置nginx/index.html"},{"revision":"872805768b6aa691fcfe810e0313691c","url":"./2020/06/15/Java启动系统默认浏览器并打开指定网址/index.html"},{"revision":"573e9042eff7dadd7df1e95fd1a236fb","url":"./2020/06/15/JS代码实现指定时间后跳转指定URL/index.html"},{"revision":"297d6fb3d94ef0f1125fe6e340349188","url":"./2020/06/25/centOS关闭指定端口的进程/index.html"},{"revision":"9077869da1aa4dae9dc48a7f106728d8","url":"./2020/06/30/在electron-vue应用中使用elementUI/index.html"},{"revision":"5a0eaf81cd236cf1bd18cbe454a83d61","url":"./2020/07/02/Catel酒店管理系统使用说明/index.html"},{"revision":"6f2848b5ab803104a6d21202b2591f36","url":"./2020/07/04/创建一个electron项目/index.html"},{"revision":"c6a0bfa066b99872c70e8fc22ec5babb","url":"./2020/07/04/在html文件中引用Vue以及ElementUI/index.html"},{"revision":"ef3e9ead579f4a50e7c3c441acd5a987","url":"./2020/07/25/软件工程与计算II重点整理-第1-5章/index.html"},{"revision":"e133b78cb331397374a37bfb389d56ea","url":"./2020/07/25/软件工程与计算II重点整理-第12-15章/index.html"},{"revision":"c415f64dcc636eeb4785e2a3ba9a05fb","url":"./2020/07/25/软件工程与计算II重点整理-第16-19章/index.html"},{"revision":"86ca11c8ee0e25ad0fb8ce13e4b18554","url":"./2020/07/25/软件工程与计算II重点整理-第20-23章/index.html"},{"revision":"b09f09686783a5bd1716e83ed44aeb53","url":"./2020/07/25/软件工程与计算II重点整理-第6-7章/index.html"},{"revision":"113611b827b644300a44e011cad1a76c","url":"./2020/07/25/软件工程与计算II重点整理-第8-11章/index.html"},{"revision":"c9f252cb91bcad4a9eeca9429d0eefbc","url":"./2020/07/31/近现代史纲要考点复习/index.html"},{"revision":"a138abafadb3db19f60ada96f3ab77c0","url":"./2020/08/10/计算机网络名词解释汇总/index.html"},{"revision":"77fbb4a8b7f6cfd5ec8d68ce260282b1","url":"./2020/10/20/云计算复习提纲/index.html"},{"revision":"5d1b71d3e158e4bfa3132537dc8d911a","url":"./2020/10/25/嵌入式复习提纲/index.html"},{"revision":"afc53122c59f8c09605b75ac0d91281e","url":"./2020/11/03/自动化测试复习提纲之AI测试（三）/index.html"},{"revision":"5ba9ee790ebf2cc149b2f39c3908b4ae","url":"./2020/11/03/自动化测试复习提纲之源码测试（一）/index.html"},{"revision":"8d23d78f55174a6a08030ca2a01ea1e9","url":"./2020/11/03/自动化测试复习提纲之移动测试（二）/index.html"},{"revision":"4ee824b80b22339c5124a79e5c4764ba","url":"./2020/11/06/hexo博客添加RSS订阅/index.html"},{"revision":"b42c41671887d5a9e8842d356528e5dd","url":"./2020/11/06/对Hexo博客版本进行升级/index.html"},{"revision":"72e107f6020f3f4dad2c3c8f1e5b9529","url":"./2020/11/09/操作系统问答二/index.html"},{"revision":"ef8a4c3f000a348b6ab44af2b04d1653","url":"./2020/11/13/商务智能复习提纲（一）/index.html"},{"revision":"0da0e8aad6e6be6e9c0a709e7180b85b","url":"./2020/11/30/操作系统问答三/index.html"},{"revision":"17ebf744b1e46ab57f03036325b9d1a6","url":"./2020/12/08/商务智能复习提纲（二）/index.html"},{"revision":"e8d9a9077c5f21c812234697b4974fb4","url":"./2020/12/09/MacOS安装HomeBrew缓慢或出现443的解决办法/index.html"},{"revision":"975794db47fae08603835bda13f97725","url":"./2020/12/28/操作系统问答四/index.html"},{"revision":"928b577c3316363d47d71e81d201b83b","url":"./2021/01/05/商务智能复习提纲（三）/index.html"},{"revision":"9d4a6609a5b017ceb13866ced43fcf06","url":"./2021/03/08/在Ubuntu中使用docker安装Jenkins/index.html"},{"revision":"4abe9fda03df7bb47975009567c9626d","url":"./2021/04/19/Linux程设复习提纲（一）/index.html"},{"revision":"1e6b16bbb6d5e83509c1225ebe15cdad","url":"./2021/04/20/Linux程设复习提纲（二）/index.html"},{"revision":"5d627acf4016339a9301ca9ea181fb12","url":"./2021/04/21/Linux程设复习提纲（三）/index.html"},{"revision":"92055febe78e2aa5dcc38b1d9d0c6dbb","url":"./2021/04/22/数据库复习提纲/index.html"},{"revision":"535ef62e4b10e3c53b2e757534c6a965","url":"./2021/04/26/面向服务复习提纲/index.html"},{"revision":"b5c2254474e0b949c7deed640f2cf341","url":"./2022/01/14/关于leetCode第34题引发的二分查找的思考/index.html"},{"revision":"b92b2575b22684409c7b4ff643417079","url":"./2022/01/16/LeetCode第32题动归思路/index.html"},{"revision":"6a71628197ccce005dd2b88bdd1e5d6d","url":"./2022/01/16/动态规划学习笔记/index.html"},{"revision":"a6c75ca22fb501ebec776fbad26a37ca","url":"./404.html"},{"revision":"be5e667c64f022e7e6e3e0e31d3dd8af","url":"./about/index.html"},{"revision":"dd4e1928cbebef0931ed3309e556e3ad","url":"./archives/2020/03/index.html"},{"revision":"1bcb19cf12107021b7dcbaa854cf2f65","url":"./archives/2020/04/index.html"},{"revision":"28189a8a75119fcd63db2e19fbe8471d","url":"./archives/2020/04/page/2/index.html"},{"revision":"bb28fde497c26e821248dc346e989593","url":"./archives/2020/05/index.html"},{"revision":"6cd0e366d5ea3325463a15572cb31abe","url":"./archives/2020/05/page/2/index.html"},{"revision":"8f4f225369461d88efd2bad3e238c421","url":"./archives/2020/06/index.html"},{"revision":"f1e4210f321b96536c8a6aad3a3279e6","url":"./archives/2020/06/page/2/index.html"},{"revision":"636f02768b25f632b9d5ed1bae1ebe40","url":"./archives/2020/07/index.html"},{"revision":"aaf0b392e879ef4ab66bb223b2d332d8","url":"./archives/2020/08/index.html"},{"revision":"4702a950867df20d8bbc5776e71faf40","url":"./archives/2020/10/index.html"},{"revision":"d4395d6083cc8b0945227cedca099493","url":"./archives/2020/11/index.html"},{"revision":"3283ec1651e993652b4f53f154cfa757","url":"./archives/2020/12/index.html"},{"revision":"1efd53772ca3c43e5c2a1c5a7011fdfc","url":"./archives/2020/index.html"},{"revision":"9dc5a902c1b4fea657faccf95b0f8c8d","url":"./archives/2020/page/2/index.html"},{"revision":"f1e92a00e34ed0fdadf94ccb70449b26","url":"./archives/2020/page/3/index.html"},{"revision":"1dc8e46b3d0ab1a119b36e674249ed50","url":"./archives/2020/page/4/index.html"},{"revision":"de2fe4ccf3cf09241fc96385f805a126","url":"./archives/2020/page/5/index.html"},{"revision":"dc51dcb88eadcc2fc327c7093ddf6dfc","url":"./archives/2020/page/6/index.html"},{"revision":"f8229138f2e473995e9d8a9ef55a6341","url":"./archives/2020/page/7/index.html"},{"revision":"2888222c6555513493c256e5a57b3f8c","url":"./archives/2020/page/8/index.html"},{"revision":"764e95098cdf7ed4781c24e71b92e93d","url":"./archives/2021/01/index.html"},{"revision":"d6e7b53b6e5e3b379b7dca437db0ff05","url":"./archives/2021/03/index.html"},{"revision":"2c05747d7815d7f6c884d7b8f4e52a8c","url":"./archives/2021/04/index.html"},{"revision":"8f3926ab1867c60b3f05a29a26a1f7b5","url":"./archives/2021/index.html"},{"revision":"25402d1a137e33bd4c9e7d5efb3a719f","url":"./archives/2022/01/index.html"},{"revision":"e72c2d2f64fed8d5ffc2752369f10067","url":"./archives/2022/index.html"},{"revision":"5895f953ab8e18c727f2fbe7bb1a6dfa","url":"./archives/index.html"},{"revision":"8128ad54894f3c44f2ee1d21a91ab7a9","url":"./archives/page/2/index.html"},{"revision":"5a93ae200c27e8bd586bb3ccc64fad22","url":"./archives/page/3/index.html"},{"revision":"39434e24e49bab096efeb53805454e87","url":"./archives/page/4/index.html"},{"revision":"2df6c133bb2ed972e5d724d260f5ca94","url":"./archives/page/5/index.html"},{"revision":"82e2abfd3fa3d961bb22bf0a3cc6138a","url":"./archives/page/6/index.html"},{"revision":"3c36a52e2d2e548d4781eb710f82fd90","url":"./archives/page/7/index.html"},{"revision":"47612efc39bb21fd6e17621a33689bbe","url":"./archives/page/8/index.html"},{"revision":"74b70597e40d3951c9cdcc5c3ae42b7e","url":"./archives/page/9/index.html"},{"revision":"411559c7c43c32f8c2116704bb2de36c","url":"./categories/index.html"},{"revision":"7166ccaceed9cc41eac60ad71e27f38a","url":"./categories/学习笔记/index.html"},{"revision":"8b8d76908eff94574bd5cbfd224cbb8f","url":"./categories/学习笔记/page/2/index.html"},{"revision":"c670c7f4b18cd43ebc5359be31747cfc","url":"./categories/学习笔记/page/3/index.html"},{"revision":"80bebfdb8e5cd125731274afc79b6d65","url":"./categories/学习笔记/page/4/index.html"},{"revision":"e728cead3587bbfb8e3dd5813b841370","url":"./categories/学习笔记/page/5/index.html"},{"revision":"8de706f539ff7598ccf8ebd288accc37","url":"./categories/小程序开发/index.html"},{"revision":"08e2117d40c6e94d0aef77d733d67a9c","url":"./categories/技术笔记/index.html"},{"revision":"653bf56f05d347396e904203692bf56d","url":"./categories/技术笔记/page/2/index.html"},{"revision":"1f7a787acfa7980e4af6799e75456776","url":"./categories/技术笔记/page/3/index.html"},{"revision":"f93fe91667f9b025fd55713e3378b523","url":"./categories/视频分享/index.html"},{"revision":"5726ceacb6b8fcc93f5689dba2f43f40","url":"./categories/算法笔记/index.html"},{"revision":"ada65d80cc61cc1867cb181947a0e20c","url":"./categories/问题解决/index.html"},{"revision":"d6999bceb55d99ec87c44d4f41e01ae0","url":"./comment/index.html"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"fd9fce7608215e16bed342eb18861e0f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fa3b365055c23d0df1f31b9264c99b4a","url":"./img/pwa/manifest.json"},{"revision":"825a6b08aac5b0a7c2042361d9886109","url":"./index.html"},{"revision":"c6c7244917621228ebccbc3a5c60b0fc","url":"./js/main.js"},{"revision":"d36a279469bce7854189f9481d3d0860","url":"./js/search/algolia.js"},{"revision":"1685cd43da0de7abd4a649dd5b2d81db","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"9f465e7dd29ec62dbc6af321882c2b59","url":"./js/utils.js"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"97d740cf594ad1b2e481561c72ba9fd3","url":"./link/index.html"},{"revision":"4fd86070a73092cdd4f1f9a8ec691233","url":"./page/2/index.html"},{"revision":"584ded05124b042db6cbd5ad0299f1a2","url":"./page/3/index.html"},{"revision":"ac545ed4ae1d0c95f157cfd4c3675374","url":"./page/4/index.html"},{"revision":"91b557da33764fb2bdce7d1d97d82cdb","url":"./page/5/index.html"},{"revision":"256fbb771034018f201885faea7d7673","url":"./page/6/index.html"},{"revision":"4e80663c85351f13d0300617e9919740","url":"./page/7/index.html"},{"revision":"53a05a9d209449bbd27a0218477bc4a8","url":"./page/8/index.html"},{"revision":"96a30fc1361fd2a32183edaa299e828f","url":"./page/9/index.html"},{"revision":"4915cd054c47f85806df8cd65711ac43","url":"./tags/CentOS/index.html"},{"revision":"e9cab6c6c2784d63c161e83472e32a71","url":"./tags/CloudComputing/index.html"},{"revision":"db8ef2e0c5d2c4953c4080f1aa04413e","url":"./tags/CPP/index.html"},{"revision":"f36050d1a10b5642fa533aeb5d80cb01","url":"./tags/DataSciense/index.html"},{"revision":"6ab28e635af7027ad7c4c1fac1e8d7e0","url":"./tags/Docker/index.html"},{"revision":"a2707b8ed625928bfa5e23e54dd84061","url":"./tags/Dynamic-Programming/index.html"},{"revision":"34dcd79a850a640f9e513253a9482d97","url":"./tags/Electron/index.html"},{"revision":"39806264054f2e78b7329e2714e572b6","url":"./tags/GitHub/index.html"},{"revision":"67c5c4ca32018ce24bf18bf20c1780ea","url":"./tags/Hexo/index.html"},{"revision":"72cef06a47befe1bed01ab01bde81065","url":"./tags/Homebrew/index.html"},{"revision":"55245dbdea4dd9c30a717b076cecc426","url":"./tags/index.html"},{"revision":"70b3b6db5f2718b416d72b9dcfceafe1","url":"./tags/Java/index.html"},{"revision":"bdb58bbd2ac7403428d1e4daf30dd579","url":"./tags/JavaScript/index.html"},{"revision":"b774b4135ffc81c40ee58f7b9fb3dde3","url":"./tags/Jenkins/index.html"},{"revision":"75267c72aa8599a3e410d733ff896d25","url":"./tags/JsDelivr/index.html"},{"revision":"9adc710a3db6ba03a01e8d77285b2ca5","url":"./tags/Latex/index.html"},{"revision":"1dc32526498f86e36442760eb29f388e","url":"./tags/LeetCode/index.html"},{"revision":"57f45354154a82a9fbcbcd91b842f121","url":"./tags/Linux/index.html"},{"revision":"7cc8bdfd6fc1fa72ae94aca140915e56","url":"./tags/macOS/index.html"},{"revision":"047c22e4afb20fdb9084dd44495979ca","url":"./tags/Math/index.html"},{"revision":"39797e2a84d3b1a435123d40dff5ed72","url":"./tags/MySQL/index.html"},{"revision":"0fb3758370ecd0010423ab10c1ff8857","url":"./tags/Nginx/index.html"},{"revision":"9428ec3f1b62d03ee2a9f51c915dc425","url":"./tags/OS/index.html"},{"revision":"46c626bce443af91bcef84905e199779","url":"./tags/packet-tracer/index.html"},{"revision":"5e64bf4dba0f1e3267104595db500041","url":"./tags/python/index.html"},{"revision":"0fbcb94bb7fc6ffe8518b357c04217dd","url":"./tags/SpringBoot/index.html"},{"revision":"573cdd143ca99896451ca162cbd74c83","url":"./tags/SSH-KEY/index.html"},{"revision":"5483978d927c34645278a98d77a3b718","url":"./tags/Video/index.html"},{"revision":"7d723593ff1070b7ab6c95cfd8d0574c","url":"./tags/Vim/index.html"},{"revision":"0d03b46fa14cbea731f7860c7cc61f9c","url":"./tags/VScode/index.html"},{"revision":"2bfb3cf5296ac977a8e2a73607ab8336","url":"./tags/Vue/index.html"},{"revision":"b241f1518adc2d2b0d1511ae17edd1f8","url":"./tags/wechat/index.html"},{"revision":"0925d8b0d5719c1bbc3a8f05538ee895","url":"./tags/商务智能/index.html"},{"revision":"691d32367ef08e69dfc03785eb3557e5","url":"./tags/嵌入式系统/index.html"},{"revision":"5a20c4fc614762ee40cbadc2c8868b1d","url":"./tags/换源/index.html"},{"revision":"3b4bb5efa2f8fdd73c68e438fd60b764","url":"./tags/算法/index.html"},{"revision":"d9d8309634b9c837e547746c8b369168","url":"./tags/自动化测试/index.html"},{"revision":"6e2fd7cd0c227c682900369a7829a927","url":"./tags/计网/index.html"},{"revision":"146f7089191eecfd7dfb94b73cdf90f6","url":"./tags/软件工程与计算Ⅱ/index.html"},{"revision":"94d38be468d615b297656d060269bbf6","url":"./tags/软工/index.html"},{"revision":"02620c72976330e75b6d2992d5f37e08","url":"./tags/近现代史纲要/index.html"},{"revision":"9c548891b7540698934850ce5dd1ad29","url":"./tags/面向服务/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();