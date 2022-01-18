const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Icimence's Tech Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"9b2d461a6d869d37d5c8242961b7abf3","url":"./2020/03/20/在Windows环境下Vim编辑器中文乱码问题/index.html"},{"revision":"69a282def2c852cb7ac2505416793218","url":"./2020/03/20/怎么在hexo博客中使用latex格式的数学公式/index.html"},{"revision":"5314d6d530ceda8f330f173e0c32e369","url":"./2020/03/21/最近公共祖先问题/index.html"},{"revision":"00aab3678a295f6ef1749dfc10fc7889","url":"./2020/03/21/后缀数组/index.html"},{"revision":"4e83d1a768e2bf68ae641a14a9fd27f7","url":"./2020/03/22/关于CPP处理输入的一些说明和模板/index.html"},{"revision":"32e3d0a3499f0037c120c922aed2edaa","url":"./2020/03/26/换源大集合/index.html"},{"revision":"689e681bb3b8d9d3ba3077053db186fc","url":"./2020/03/28/Homebrew的一些诡异的问题解决/index.html"},{"revision":"c475d581415089bf71192878988d414b","url":"./2020/03/28/MacOS环境变量的编辑/index.html"},{"revision":"2fb1c8f3de932336110f73309e09f367","url":"./2020/03/29/关于并查集的一道题目（Python）/index.html"},{"revision":"fef2c94c2c7023640fc3f6178aaca110","url":"./2020/03/30/Spring Boot项目中的MySQL的相关问题/index.html"},{"revision":"30df5d26023ec8335c1c757c39ff5bc2","url":"./2020/04/01/Electron-Vue技术笔记一/index.html"},{"revision":"4b5cf0d2f50d58a56297985475d212ee","url":"./2020/04/01/SpringBoot项目sql配置指南/index.html"},{"revision":"74e7117cbefb62d00840426cdcd7a7a6","url":"./2020/04/02/槎湖望族-戴家/index.html"},{"revision":"463aaf54981c9f5317c6d496a1a26e06","url":"./2020/04/08/将VSC作为latex编辑工具/index.html"},{"revision":"69f96ed8630c846002b9e769e8cb6351","url":"./2020/04/10/在自己的服务器上部署hexo博客/index.html"},{"revision":"00782dce9ca0c91a2b3d81a05e74536c","url":"./2020/04/11/iDo微信小程序功能开发文档/index.html"},{"revision":"f996c0bb90c6d514d5b48ad9f5f270e2","url":"./2020/04/14/如何在Hexo静态博客中使用pdf文章/index.html"},{"revision":"f40e21b57c7af3c9487c4af1b0a1b9cd","url":"./2020/04/18/Packet-Tracer两PC单向ping通实验/index.html"},{"revision":"7d2e093932c742cf56b93d39a695978b","url":"./2020/04/18/WechatApp开发笔记之login界面（一）/index.html"},{"revision":"1fef878bb9c09f583e31af5e8c88161e","url":"./2020/04/19/概率论常用公式（持续更新）/index.html"},{"revision":"687e74f8d47222ceed0ed62bcdfa6276","url":"./2020/04/22/Ant Design of Vue学习笔记/index.html"},{"revision":"a70f359e81d201f10dab4601f5993b01","url":"./2020/04/23/WechatApp开发笔记之UI（二）/index.html"},{"revision":"79cbc99f15b77ebda4d865362d006e5b","url":"./2020/04/25/WechatApp技术笔记之Tab页（三）/index.html"},{"revision":"48bc3fc9b4f8c94f099b39bf88b92472","url":"./2020/04/25/WechatApp技术笔记之列表下拉（四）/index.html"},{"revision":"9111bbe93cb7a1db8cd16b76fcbd52be","url":"./2020/04/30/排序算法之二分法排序/index.html"},{"revision":"c7b76bd28fb8c4f3f806e7958bd88449","url":"./2020/05/01/GitHub进行git操作反复要求输入密码解决方法/index.html"},{"revision":"22fea41f7183b9b49d0002a683188a92","url":"./2020/05/01/排序算法之堆排序/index.html"},{"revision":"5cfb88afaba1d8c6be8ff360513b570b","url":"./2020/05/04/豆瓣图书爬虫/index.html"},{"revision":"f141c7c436c2477208480d374c881d52","url":"./2020/05/05/Python爬虫xpath解析/index.html"},{"revision":"71fb9903929464d076409b8d253b70c3","url":"./2020/05/06/微信小程序-Django后端真机调试/index.html"},{"revision":"bb29c7eb9f929cece27a37db2ab7f91e","url":"./2020/05/08/RIP跳转导致路由回路的原因分析/index.html"},{"revision":"410b89d38c9f6512a074870f373754cf","url":"./2020/05/10/CPP中的istringstream用法解析/index.html"},{"revision":"d49e68f50ab3b64da7b9b22886a6d870","url":"./2020/05/10/数据科学基础大作业项目设计/index.html"},{"revision":"835fe7ed95967d28fe828ec0e6b29a4b","url":"./2020/05/11/使用GitHub仓库作为高速OSS的方法/index.html"},{"revision":"4f1dcea1dc80b2181cd932afc60675d3","url":"./2020/05/15/Packet Tracer进行模拟RIP路由回路/index.html"},{"revision":"13e18e8dfaea6dfe84ef1e59d6fd8d65","url":"./2020/05/16/Django-uWSGI-Nginx部署服务器/index.html"},{"revision":"cbc7ac290bc642fad4759f8c15cdc5d2","url":"./2020/05/16/http请求的StatusCode的含义/index.html"},{"revision":"07cdb36be3eb0f0a7aba112112de50de","url":"./2020/05/21/服务器Nginx配置实现域名访问/index.html"},{"revision":"5df176f6a067a2c3194981d074970966","url":"./2020/05/22/packet-tracer验证RIP及OSPF优先级差异/index.html"},{"revision":"bec7f00e14b2f0e494cb6c0b7a663d4e","url":"./2020/05/29/ant-design-vue更改主题颜色/index.html"},{"revision":"28d7cf850ca1da01d45a762c2c6a2e8e","url":"./2020/06/04/关于WebStorm-使用Ant-Design-of-Vue-通知提醒框notification时，出现的语法无法检测问题/index.html"},{"revision":"ea36e609232611fadf066a32087e8459","url":"./2020/06/07/electron应用打包教程/index.html"},{"revision":"8c45cbed2ca5fdde919daaa636eb0fd6","url":"./2020/06/08/Packet-Tracer结课拓扑实验报告/index.html"},{"revision":"dabff7273c45c54c241e1945887bc462","url":"./2020/06/09/hexo博客文章加密/index.html"},{"revision":"5902c9dec75fb08c3a77e815cea79b22","url":"./2020/06/11/LeetCode刷题小记【一】-1-4/index.html"},{"revision":"8fc9cedca9fb08c251f75d318b6a2b29","url":"./2020/06/12/CentOS安装Java8/index.html"},{"revision":"7bd1f2f88cd4a4046fd654536b2bf4ea","url":"./2020/06/12/CentOS安装MySQL5-7/index.html"},{"revision":"e26c1ce1b6b2bff11d63a79a1f053eb6","url":"./2020/06/12/CentOS配置nginx/index.html"},{"revision":"b52d97b7223e5b107b80749c84b36047","url":"./2020/06/15/Java启动系统默认浏览器并打开指定网址/index.html"},{"revision":"f412f97a5d0abfe489df00de8fcce9c1","url":"./2020/06/15/JS代码实现指定时间后跳转指定URL/index.html"},{"revision":"e53cd8c2863f527443cb15484e760ced","url":"./2020/06/25/centOS关闭指定端口的进程/index.html"},{"revision":"962bef81b16d5268c1e706cb2e83d697","url":"./2020/06/30/在electron-vue应用中使用elementUI/index.html"},{"revision":"16e62867639546e3f79e0f06705c2ec0","url":"./2020/07/02/Catel酒店管理系统使用说明/index.html"},{"revision":"8b91f53fdeed320e2070702d334bd908","url":"./2020/07/04/创建一个electron项目/index.html"},{"revision":"e01dc1872379bba746a148c66b6d92ea","url":"./2020/07/04/在html文件中引用Vue以及ElementUI/index.html"},{"revision":"59ff92afc3047490769e905b03b110cc","url":"./2020/07/25/软件工程与计算II重点整理-第1-5章/index.html"},{"revision":"e04fe6e3690111af3bac45e293f12aa8","url":"./2020/07/25/软件工程与计算II重点整理-第12-15章/index.html"},{"revision":"e74ce1fb3469cf938a0a97c241893fed","url":"./2020/07/25/软件工程与计算II重点整理-第16-19章/index.html"},{"revision":"506efd392642d495a03229e85db151e2","url":"./2020/07/25/软件工程与计算II重点整理-第20-23章/index.html"},{"revision":"4b6200299ff16faadb2390f8e5af5682","url":"./2020/07/25/软件工程与计算II重点整理-第6-7章/index.html"},{"revision":"1340c778f88f6404474e147efaaea5d2","url":"./2020/07/25/软件工程与计算II重点整理-第8-11章/index.html"},{"revision":"87729170886bbcdfc2f19ab8fb10389e","url":"./2020/07/31/近现代史纲要考点复习/index.html"},{"revision":"591df9a559429fcac9d6ce0bd9a73664","url":"./2020/08/10/计算机网络名词解释汇总/index.html"},{"revision":"b53afb74e9fbd7ac8d8d5dfbd97982cb","url":"./2020/10/20/云计算复习提纲/index.html"},{"revision":"7ae14fa98faaf0cc01acfb5df5d1313a","url":"./2020/10/25/嵌入式复习提纲/index.html"},{"revision":"684686ef202a492bd54c1f699e6000c6","url":"./2020/11/03/自动化测试复习提纲之AI测试（三）/index.html"},{"revision":"907a5e1b32fd45563a71ed22a4583106","url":"./2020/11/03/自动化测试复习提纲之源码测试（一）/index.html"},{"revision":"a83e86f8606b35cbef0c4f5b88ce875d","url":"./2020/11/03/自动化测试复习提纲之移动测试（二）/index.html"},{"revision":"446061dad709b154a43d76bcff6123d1","url":"./2020/11/06/hexo博客添加RSS订阅/index.html"},{"revision":"6bcfb34abd8ae08751ed0070d3a38828","url":"./2020/11/06/对Hexo博客版本进行升级/index.html"},{"revision":"334357c458c1c3a1fc38002f026ae5ed","url":"./2020/11/09/操作系统问答二/index.html"},{"revision":"5622285e66da92465ab7bc4610c834d8","url":"./2020/11/13/商务智能复习提纲（一）/index.html"},{"revision":"5572a4ffeae2acb5403fc99ab3e7add2","url":"./2020/11/30/操作系统问答三/index.html"},{"revision":"0d44ac0f2e20f14be9296e5810d55264","url":"./2020/12/08/商务智能复习提纲（二）/index.html"},{"revision":"5ba6b4e119b24c1676153016a46c8e9c","url":"./2020/12/09/MacOS安装HomeBrew缓慢或出现443的解决办法/index.html"},{"revision":"0da01a13db87440008ae428e5840e598","url":"./2020/12/28/操作系统问答四/index.html"},{"revision":"8ba6c789a90b234613b2cc7f4dfe63c8","url":"./2021/01/05/商务智能复习提纲（三）/index.html"},{"revision":"55e747fe16de2682d97c39ecf3bf03f9","url":"./2021/03/08/在Ubuntu中使用docker安装Jenkins/index.html"},{"revision":"aa0dbd779f80c656e3b26d9547cec99b","url":"./2021/04/19/Linux程设复习提纲（一）/index.html"},{"revision":"628cc4949b1ac175e0d79cf449a61feb","url":"./2021/04/20/Linux程设复习提纲（二）/index.html"},{"revision":"7228a9894496a0fa4eb239c893e222cd","url":"./2021/04/21/Linux程设复习提纲（三）/index.html"},{"revision":"13afc3f28ce4d6fa5f3923257bb7add2","url":"./2021/04/22/数据库复习提纲/index.html"},{"revision":"c7f5cb8367edc1c07845cc273ef617d2","url":"./2021/04/26/面向服务复习提纲/index.html"},{"revision":"f6a0f9da310a136b2f2489ee05571c7e","url":"./2022/01/14/关于leetCode第34题引发的二分查找的思考/index.html"},{"revision":"479aefbd7394f518e3312fd8115efbd0","url":"./2022/01/16/LeetCode第32题动归思路/index.html"},{"revision":"d3dd9cd6949fb437f7cfb451c6bcf6d8","url":"./2022/01/16/动态规划学习笔记/index.html"},{"revision":"aacbf7fa7b7e7603d648b76a094d2a7a","url":"./404.html"},{"revision":"300a72d9ea034fdefc889c50dde6b8f6","url":"./about/index.html"},{"revision":"616fb69c51bd11c1e15d4be989477c19","url":"./archives/2020/03/index.html"},{"revision":"a08322a7e8b902df3952bee077a85302","url":"./archives/2020/04/index.html"},{"revision":"3c4408ca7d9c280538abf153a67b3722","url":"./archives/2020/04/page/2/index.html"},{"revision":"78913c5b4df1da6abd880a285c48cbd1","url":"./archives/2020/05/index.html"},{"revision":"e74c718082dcc40f242e67bc091554ba","url":"./archives/2020/05/page/2/index.html"},{"revision":"e93265d657117c9e922af08a61792e0c","url":"./archives/2020/06/index.html"},{"revision":"c7b397c733bb6ad8501d30d77fe59bfc","url":"./archives/2020/06/page/2/index.html"},{"revision":"db75bb41d0b4dc72d05f033da93ad94b","url":"./archives/2020/07/index.html"},{"revision":"04dcee13142b8cfded6cb3d3a78a0a65","url":"./archives/2020/08/index.html"},{"revision":"2f86cd0de4f1677c44906f50032dfe92","url":"./archives/2020/10/index.html"},{"revision":"8504748f4a53673411b1c0936a71b4f2","url":"./archives/2020/11/index.html"},{"revision":"03a8a12f75f9bb0bc3a7333984abac05","url":"./archives/2020/12/index.html"},{"revision":"f26318b35908bcc82743a49c642a964f","url":"./archives/2020/index.html"},{"revision":"bac33c4d02253afb90922426ebbe9e87","url":"./archives/2020/page/2/index.html"},{"revision":"18999084e6d9ad0c86b704879902bff7","url":"./archives/2020/page/3/index.html"},{"revision":"b1502d806b65f33c19ab62213d0f4b06","url":"./archives/2020/page/4/index.html"},{"revision":"3c6b651e4040613657c24b2f263213d6","url":"./archives/2020/page/5/index.html"},{"revision":"8b637101f8a336ab0375bfbadc00bdf6","url":"./archives/2020/page/6/index.html"},{"revision":"71a2633635c0e598d8f27646fcca34b2","url":"./archives/2020/page/7/index.html"},{"revision":"6bf9129b29d5fca13cd9b8216a8e846b","url":"./archives/2020/page/8/index.html"},{"revision":"446ff1ce457d79069616c7702c9f5a79","url":"./archives/2021/01/index.html"},{"revision":"4f59de29b61410bb85ae84f7d3e97213","url":"./archives/2021/03/index.html"},{"revision":"3f23c09f39c53f287999731d93554646","url":"./archives/2021/04/index.html"},{"revision":"b3d9da91ed5b4ed933535e5606a60920","url":"./archives/2021/index.html"},{"revision":"001fb924d50ca55be7a466533b19dc29","url":"./archives/2022/01/index.html"},{"revision":"06382d75c35f375a4ad7d784b495e7ca","url":"./archives/2022/index.html"},{"revision":"f2680404e27783c073e9e5712b356a7f","url":"./archives/index.html"},{"revision":"4d98d279cf7118c052820c1c88c341c5","url":"./archives/page/2/index.html"},{"revision":"ec8176757a6406ee6d71bdbea884fb6f","url":"./archives/page/3/index.html"},{"revision":"c9ebcfaf7fbc75661fff0065244f9e91","url":"./archives/page/4/index.html"},{"revision":"8d4762370411c55f1ec57f5faa0702af","url":"./archives/page/5/index.html"},{"revision":"d351aa2dd714f6a26b9cc1e80ac873cd","url":"./archives/page/6/index.html"},{"revision":"7090d38634d0c1731f146457f8c65eda","url":"./archives/page/7/index.html"},{"revision":"33ca13207e3bb338968035a4b4394be1","url":"./archives/page/8/index.html"},{"revision":"6417bc49a5f07b4671810714145c97e9","url":"./archives/page/9/index.html"},{"revision":"49eb4dc1cb9d70c56ac04c253cab02ac","url":"./categories/index.html"},{"revision":"4b0d25815ad4f5c5ac83a33adf6230f4","url":"./categories/学习笔记/index.html"},{"revision":"17320532a0c8aba83ad72fec7e409c10","url":"./categories/学习笔记/page/2/index.html"},{"revision":"d0e296b8d922cc3eb41d895fc5a66c36","url":"./categories/学习笔记/page/3/index.html"},{"revision":"bcf3eb3200ad7ab11a94b4fbb9ea6196","url":"./categories/学习笔记/page/4/index.html"},{"revision":"ce012c6e011e3b74bab12d3d90e61b6b","url":"./categories/学习笔记/page/5/index.html"},{"revision":"484b5f8780d33fa6a9b521c4ff142272","url":"./categories/小程序开发/index.html"},{"revision":"429f170ae4ac048ac74ba8f7c6b68bcc","url":"./categories/技术笔记/index.html"},{"revision":"f351fef6b5b2769716b2bf959084af75","url":"./categories/技术笔记/page/2/index.html"},{"revision":"9954da14ae742985ff7731cdeef24d05","url":"./categories/技术笔记/page/3/index.html"},{"revision":"d3851b1ca446bc72570f00589081e76e","url":"./categories/视频分享/index.html"},{"revision":"4353d8f3a5635df5250d958f7bc020a8","url":"./categories/算法笔记/index.html"},{"revision":"fbac955115a52d6e5e5a75ef61852a46","url":"./categories/问题解决/index.html"},{"revision":"898c203f2c0b36d5d1f10516c43467c8","url":"./comment/index.html"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"fd9fce7608215e16bed342eb18861e0f","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fa3b365055c23d0df1f31b9264c99b4a","url":"./img/pwa/manifest.json"},{"revision":"3a836b3c8275a90dfec0006e86e594d0","url":"./index.html"},{"revision":"c6c7244917621228ebccbc3a5c60b0fc","url":"./js/main.js"},{"revision":"d36a279469bce7854189f9481d3d0860","url":"./js/search/algolia.js"},{"revision":"1685cd43da0de7abd4a649dd5b2d81db","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"9f465e7dd29ec62dbc6af321882c2b59","url":"./js/utils.js"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"8fa3d44457693c57e6df246e8f0e36c2","url":"./link/index.html"},{"revision":"8a864793b74e6474028f9e63b504435e","url":"./newPost.json"},{"revision":"ea53cfd05f56b9bd24a6209537bdb821","url":"./page/2/index.html"},{"revision":"398aacbe5d945692d7c23169f76734fa","url":"./page/3/index.html"},{"revision":"8b2218842f8872cd0a6a33765e230004","url":"./page/4/index.html"},{"revision":"1cbc233d172479ee7f442809cdd51ccb","url":"./page/5/index.html"},{"revision":"8154ed8797bf49c9dc9356e415bd4460","url":"./page/6/index.html"},{"revision":"71b1cf92805c7f93f57eb0b3c172ee34","url":"./page/7/index.html"},{"revision":"e402ca57693762e7c3ecc033c0d884db","url":"./page/8/index.html"},{"revision":"c25e346eded815b6c164132d38bf5e0d","url":"./page/9/index.html"},{"revision":"5ef939ddfbf9aeb6024bca9b7a110ae1","url":"./tags/CentOS/index.html"},{"revision":"00ef15ec0f766e6e08985464321b0f2f","url":"./tags/CloudComputing/index.html"},{"revision":"a8c3690cd7cba328a24598e340d2ad26","url":"./tags/CPP/index.html"},{"revision":"03d726e5ae90a1d272d5611106f812ac","url":"./tags/DataSciense/index.html"},{"revision":"fd3b6ff6a3a223419d4a64c204688275","url":"./tags/Docker/index.html"},{"revision":"453902abee11e7bd7e5d52c2c00fe2ce","url":"./tags/Dynamic-Programming/index.html"},{"revision":"46a6ec814c72beb723e315089b51ac2a","url":"./tags/Electron/index.html"},{"revision":"87ab025be084000b92857ea4d9201e38","url":"./tags/GitHub/index.html"},{"revision":"c4a139b4c123c47b7dc3795a1c4794b9","url":"./tags/Hexo/index.html"},{"revision":"6afe618fe53426da169d2df8ceef5eb6","url":"./tags/Homebrew/index.html"},{"revision":"de633872a5ee18c68b7704bd7156f26c","url":"./tags/index.html"},{"revision":"33f5fa836b892ed4be9f5ffbc0ae398a","url":"./tags/Java/index.html"},{"revision":"bf272a961daf3071a88c09a416d79533","url":"./tags/JavaScript/index.html"},{"revision":"e90a372a62c6beb3a75a5dbe6be272a5","url":"./tags/Jenkins/index.html"},{"revision":"80339784e4dcc13cb6172b5315fe23e0","url":"./tags/JsDelivr/index.html"},{"revision":"e564a313189ecf0a1da375a903cdef93","url":"./tags/Latex/index.html"},{"revision":"65fcebc3c5c44d01f5f44e3f1b016dbd","url":"./tags/LeetCode/index.html"},{"revision":"fd2265ab2fcac9bc888eda750f4c8d50","url":"./tags/Linux/index.html"},{"revision":"3c33900ba36d281b61601c7413dc3906","url":"./tags/macOS/index.html"},{"revision":"e55fb7f192b848dba6e7d09872deef1c","url":"./tags/Math/index.html"},{"revision":"faa4470b658f6f692e53a5355e8c8909","url":"./tags/MySQL/index.html"},{"revision":"6ae403866268537296ee51f700ec692a","url":"./tags/Nginx/index.html"},{"revision":"4d774a4bea133a1fafa58f200b5fed19","url":"./tags/OS/index.html"},{"revision":"e969aa491e49dff8c777add297bc1728","url":"./tags/packet-tracer/index.html"},{"revision":"d4c277e861917aebe086ca8fe5914688","url":"./tags/python/index.html"},{"revision":"73fe10fa14c81ca4ef1ef2ff28dfa710","url":"./tags/SpringBoot/index.html"},{"revision":"ef7014ab3a0a3833c7b418a9438f0eef","url":"./tags/SSH-KEY/index.html"},{"revision":"bb3300a4d21352ea69f85cd5b5d207d4","url":"./tags/Video/index.html"},{"revision":"e2bfc1225a2207daf6ef00600ab083c9","url":"./tags/Vim/index.html"},{"revision":"7b7be3b30649019d1dbeeca7fd13c793","url":"./tags/VScode/index.html"},{"revision":"39f5be9568d21a2d3081381ab91f9192","url":"./tags/Vue/index.html"},{"revision":"25f4570f4097de636ac5c0f6b7892f36","url":"./tags/wechat/index.html"},{"revision":"f5a1809b6813a4cfa322c230f9ad58fc","url":"./tags/商务智能/index.html"},{"revision":"bfffd7fc087f760ca49d77fbb874e7ab","url":"./tags/嵌入式系统/index.html"},{"revision":"bb2d9ee2abd159b3ebedf1624ad7834d","url":"./tags/换源/index.html"},{"revision":"9a2985e294a34e44bb8fe5fd68151101","url":"./tags/算法/index.html"},{"revision":"b454cebf92ae1317087532d863836da1","url":"./tags/自动化测试/index.html"},{"revision":"adb4a17a31a278dff619ecbf6bb1df4e","url":"./tags/计网/index.html"},{"revision":"2d79e1eafc5d99b4f323b3cc341b6957","url":"./tags/软件工程与计算Ⅱ/index.html"},{"revision":"718b4d15ac555814a5ee7f9639e4cae9","url":"./tags/软工/index.html"},{"revision":"7009a2d09bf04a00cbce9f5d246d597b","url":"./tags/近现代史纲要/index.html"},{"revision":"e306ae9902405f7266d9cea9a5c5dcdb","url":"./tags/面向服务/index.html"},{"revision":"f6f7ff6d6b7b7b652cb92a25eb2cef5b","url":"./webpushr-sw.js"}],{
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