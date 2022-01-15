const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Icimence's Tech Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2726cc47f6cf802d379ebde2c3fa9e4b","url":"./2020/03/20/在Windows环境下Vim编辑器中文乱码问题/index.html"},{"revision":"f553ce54c7bfb9fafabc9f4eb18ffd2c","url":"./2020/03/20/怎么在hexo博客中使用latex格式的数学公式/index.html"},{"revision":"afa6a41bf9c7656dd0b19c0d08b2e1bb","url":"./2020/03/21/最近公共祖先问题/index.html"},{"revision":"f846e77a0b05ac409e8cb784e817b4e4","url":"./2020/03/21/后缀数组/index.html"},{"revision":"f43c5d911a83112236c4c921be1ac4f2","url":"./2020/03/22/关于CPP处理输入的一些说明和模板/index.html"},{"revision":"d1d3048cc83face7f1b33275f4b3e448","url":"./2020/03/26/换源大集合/index.html"},{"revision":"39120ccd5d99952fe25757431e6c6bd0","url":"./2020/03/28/Homebrew的一些诡异的问题解决/index.html"},{"revision":"5b13fbd89c51a72a254b2142c8ee6ac6","url":"./2020/03/28/MacOS环境变量的编辑/index.html"},{"revision":"7b640c9c6503279fc15f09dc6972b131","url":"./2020/03/29/关于并查集的一道题目（Python）/index.html"},{"revision":"1528bd3c10572b7516c3eae3c660e277","url":"./2020/03/30/Spring Boot项目中的MySQL的相关问题/index.html"},{"revision":"ce1dc4b7fa417222b851997f9698a3de","url":"./2020/04/01/Electron-Vue技术笔记一/index.html"},{"revision":"4dc2c99bd1936652d5a0caf7b2d1b4ff","url":"./2020/04/01/SpringBoot项目sql配置指南/index.html"},{"revision":"d88891161ca7c891c6434f03df5a2ddd","url":"./2020/04/02/槎湖望族-戴家/index.html"},{"revision":"7a3ba0dd0930a8f970781ae75e11a016","url":"./2020/04/08/将VSC作为latex编辑工具/index.html"},{"revision":"c2532f91f7cb41c90cf5afe0d4a44a05","url":"./2020/04/10/在自己的服务器上部署hexo博客/index.html"},{"revision":"0b1422f49482f6c1557db138d489e4ae","url":"./2020/04/11/iDo微信小程序功能开发文档/index.html"},{"revision":"490430c87d27ef5eb0dbc4c60dd7f8b4","url":"./2020/04/14/如何在Hexo静态博客中使用pdf文章/index.html"},{"revision":"46ed37e2dae67e72289a47cc1ac3b4ad","url":"./2020/04/18/Packet-Tracer两PC单向ping通实验/index.html"},{"revision":"8dff0d606be83f91de0720f2dab69f4c","url":"./2020/04/18/WechatApp开发笔记之login界面（一）/index.html"},{"revision":"e26c49c9b6201e7c22bab596f6d9d889","url":"./2020/04/19/概率论常用公式（持续更新）/index.html"},{"revision":"267b74e8cbed3c965e58c459aca4727f","url":"./2020/04/22/Ant Design of Vue学习笔记/index.html"},{"revision":"534de0a464677ce0b4669b345c89f6ef","url":"./2020/04/23/WechatApp开发笔记之UI（二）/index.html"},{"revision":"ad65bc5edcbc0167f6a10be725af76d5","url":"./2020/04/25/WechatApp技术笔记之Tab页（三）/index.html"},{"revision":"118ca8ebb552a923ac0ec0e9e2a0c9c0","url":"./2020/04/25/WechatApp技术笔记之列表下拉（四）/index.html"},{"revision":"98a7224ba57edb1d2b266cfce1d3e384","url":"./2020/04/30/排序算法之二分法排序/index.html"},{"revision":"f2d9e085eae4988ce775500a7a494ced","url":"./2020/05/01/GitHub进行git操作反复要求输入密码解决方法/index.html"},{"revision":"4b379392014d8772f5f24cacb1fb3ab0","url":"./2020/05/01/排序算法之堆排序/index.html"},{"revision":"a754f0b0d643217667d08b2716f8a764","url":"./2020/05/04/豆瓣图书爬虫/index.html"},{"revision":"81c555bc5cc5cce3486cc3b7079a3138","url":"./2020/05/05/Python爬虫xpath解析/index.html"},{"revision":"b5bb75bce3ec7abca79221c3ca9e8a2a","url":"./2020/05/06/微信小程序-Django后端真机调试/index.html"},{"revision":"93af166515036eb67b4fa4d382850f77","url":"./2020/05/08/RIP跳转导致路由回路的原因分析/index.html"},{"revision":"3b501f471e80a5468a44813c44b36f86","url":"./2020/05/10/CPP中的istringstream用法解析/index.html"},{"revision":"0071f37766aa4e1f7835c2e65d465c50","url":"./2020/05/10/数据科学基础大作业项目设计/index.html"},{"revision":"28069c3aa1b71b0214176feb72cc46b5","url":"./2020/05/11/使用GitHub仓库作为高速OSS的方法/index.html"},{"revision":"772f34806589542fd9bfddff10300e60","url":"./2020/05/15/Packet Tracer进行模拟RIP路由回路/index.html"},{"revision":"46b0327b64d87988eda5f2b8f250586b","url":"./2020/05/16/Django-uWSGI-Nginx部署服务器/index.html"},{"revision":"58dc96f3e795a0cf500a896947a51b7b","url":"./2020/05/16/http请求的StatusCode的含义/index.html"},{"revision":"c627dcfdbf5b704f95e2d76688b019dd","url":"./2020/05/21/服务器Nginx配置实现域名访问/index.html"},{"revision":"4fde96f767dbe0f4326136aeda4b954b","url":"./2020/05/22/packet-tracer验证RIP及OSPF优先级差异/index.html"},{"revision":"9a6979efa7bc582b70118f2b1522691b","url":"./2020/05/29/ant-design-vue更改主题颜色/index.html"},{"revision":"02f5f4f2fa35e8d3c9eea75b1748da5a","url":"./2020/06/04/关于WebStorm-使用Ant-Design-of-Vue-通知提醒框notification时，出现的语法无法检测问题/index.html"},{"revision":"a006900d23d68b30be605b7dc3fcb9f1","url":"./2020/06/07/electron应用打包教程/index.html"},{"revision":"b5709933ce251b55b7aeeae194e38ed7","url":"./2020/06/08/Packet-Tracer结课拓扑实验报告/index.html"},{"revision":"62d143e0afb73f318f773fa7ad1d6995","url":"./2020/06/09/hexo博客文章加密/index.html"},{"revision":"20cfdb18df01dd1e7695848319ee880b","url":"./2020/06/11/LeetCode刷题小记【一】-1-4/index.html"},{"revision":"5f671437f365155ad32c36fd8c13c142","url":"./2020/06/12/CentOS安装Java8/index.html"},{"revision":"216b7d36e9cb75daf500e7d5e2d7d576","url":"./2020/06/12/CentOS安装MySQL5-7/index.html"},{"revision":"de52731db316af8297bbb79e2ca35404","url":"./2020/06/12/CentOS配置nginx/index.html"},{"revision":"8d737f01ad0d76645bee59f8a1e5d9cc","url":"./2020/06/15/Java启动系统默认浏览器并打开指定网址/index.html"},{"revision":"a9f644a3389cc97934467e6efd8f313e","url":"./2020/06/15/JS代码实现指定时间后跳转指定URL/index.html"},{"revision":"aa603b68e945ce04b0f75aafbb736646","url":"./2020/06/25/centOS关闭指定端口的进程/index.html"},{"revision":"6d93bbf8eba3eb28f9604ec8ae7dba1d","url":"./2020/06/30/在electron-vue应用中使用elementUI/index.html"},{"revision":"1d3220418c2705fd0e38d26fc02028e2","url":"./2020/07/02/Catel酒店管理系统使用说明/index.html"},{"revision":"e4146a9b26b11d0b6873d0e50819652d","url":"./2020/07/04/创建一个electron项目/index.html"},{"revision":"6140356bf3e5106a4a1e6b4e67a9655b","url":"./2020/07/04/在html文件中引用Vue以及ElementUI/index.html"},{"revision":"a58d993cdb6fe77af346e88075cd304b","url":"./2020/07/25/软件工程与计算II重点整理-第1-5章/index.html"},{"revision":"4844056e6204be7ad6a5f8727e07b491","url":"./2020/07/25/软件工程与计算II重点整理-第12-15章/index.html"},{"revision":"be82a57b43cf8a01e9bd50eb6b520061","url":"./2020/07/25/软件工程与计算II重点整理-第16-19章/index.html"},{"revision":"949c6c6c7a42e3706d5d30baf51ef7e0","url":"./2020/07/25/软件工程与计算II重点整理-第20-23章/index.html"},{"revision":"71feead7f09a8d82575c528e270a3ac2","url":"./2020/07/25/软件工程与计算II重点整理-第6-7章/index.html"},{"revision":"5a2e6dd5e681bb2ead9509eaa091f8e2","url":"./2020/07/25/软件工程与计算II重点整理-第8-11章/index.html"},{"revision":"379376692a85db27f6b296785565d7b4","url":"./2020/07/31/近现代史纲要考点复习/index.html"},{"revision":"a486811a02718ac2d73057af21c22c2d","url":"./2020/08/10/计算机网络名词解释汇总/index.html"},{"revision":"b5d608aa6f8f4e0d19635ca11bac74d5","url":"./2020/10/20/云计算复习提纲/index.html"},{"revision":"475121ef40a7840bf3cc038b0606498d","url":"./2020/10/25/嵌入式复习提纲/index.html"},{"revision":"2b9add57103a31e44be5a032fb55b7a8","url":"./2020/11/03/自动化测试复习提纲之AI测试（三）/index.html"},{"revision":"3c43c517f8f050aa5fe1125da24ca671","url":"./2020/11/03/自动化测试复习提纲之源码测试（一）/index.html"},{"revision":"0b69413f85dea56f3a3bba560e97d439","url":"./2020/11/03/自动化测试复习提纲之移动测试（二）/index.html"},{"revision":"bf4278a325e8f0ae6c7506c29c417857","url":"./2020/11/06/hexo博客添加RSS订阅/index.html"},{"revision":"625314955d14bbf86ded74f34400d5b0","url":"./2020/11/06/对Hexo博客版本进行升级/index.html"},{"revision":"a7134608cddd1710f9c32540f2f18b0f","url":"./2020/11/09/操作系统问答二/index.html"},{"revision":"26ca126a5423017cef961a876b342d40","url":"./2020/11/13/商务智能复习提纲（一）/index.html"},{"revision":"88d71d6fd259517c4f4e3e7214dc057e","url":"./2020/11/30/操作系统问答三/index.html"},{"revision":"b72bb9f7d5eaa532ea2089948bec4c5c","url":"./2020/12/08/商务智能复习提纲（二）/index.html"},{"revision":"ca709b79583707fbded821d42d8ac9ae","url":"./2020/12/09/MacOS安装HomeBrew缓慢或出现443的解决办法/index.html"},{"revision":"5697abd4177643040a806e19447b7b39","url":"./2020/12/28/操作系统问答四/index.html"},{"revision":"f906d93a06960aecb8a119f21f2da799","url":"./2021/01/05/商务智能复习提纲（三）/index.html"},{"revision":"7e0a35ce56ca209470ac55eb75da86e0","url":"./2021/03/08/在Ubuntu中使用docker安装Jenkins/index.html"},{"revision":"71f077a019b7aeee085c42780ebd8aee","url":"./2021/04/19/Linux程设复习提纲（一）/index.html"},{"revision":"c4c0c3c97035f9ba97d44d7e911c9c50","url":"./2021/04/20/Linux程设复习提纲（二）/index.html"},{"revision":"fbee7fb86f9e0f422beec9811fa2a7c2","url":"./2021/04/21/Linux程设复习提纲（三）/index.html"},{"revision":"4d16c9db5bcd217c3307da57eba18136","url":"./2021/04/22/数据库复习提纲/index.html"},{"revision":"67ff5846583e010493325ddafe722aa6","url":"./2021/04/26/面向服务复习提纲/index.html"},{"revision":"f5b9ec4b7334f940088b67c744093897","url":"./2022/01/14/关于leetCode第34题引发的二分查找的思考/index.html"},{"revision":"be756aca6bdb4c0e8b9725cf281960b9","url":"./404.html"},{"revision":"7f71669069c39696c33486a4a1545407","url":"./about/index.html"},{"revision":"bef313a2f95a93283ebd5d6606407320","url":"./archives/2020/03/index.html"},{"revision":"ed6c1144330ed48eacc868725e5f7551","url":"./archives/2020/04/index.html"},{"revision":"44e7f3344f92ad1dd0098f2fc546c5f6","url":"./archives/2020/04/page/2/index.html"},{"revision":"b2aa2166d31be2a259e3326ca7fe51e4","url":"./archives/2020/05/index.html"},{"revision":"2dadd95bcc879eb73041997eb12fdb36","url":"./archives/2020/05/page/2/index.html"},{"revision":"c0e706733f17d44186018028d59b2163","url":"./archives/2020/06/index.html"},{"revision":"e5c5834e2c093f80a0c517c3a440a12d","url":"./archives/2020/06/page/2/index.html"},{"revision":"84e357de4aac47ffbdcf7d9ce72c84f4","url":"./archives/2020/07/index.html"},{"revision":"5145cb0ce224a15ab0babb60fc1257e4","url":"./archives/2020/08/index.html"},{"revision":"fe34390babef55d0f5d40ba00405ab3e","url":"./archives/2020/10/index.html"},{"revision":"1c37f4a766a4891275fe1200b3d3c305","url":"./archives/2020/11/index.html"},{"revision":"2843f85e844f421b5cb11ef2f2c1bd67","url":"./archives/2020/12/index.html"},{"revision":"c14b29c4ac71acf8ed6755b62b768e27","url":"./archives/2020/index.html"},{"revision":"ad88b98180aad9bac330dc8bcb7ea25b","url":"./archives/2020/page/2/index.html"},{"revision":"b792ccaeca09a5968eddd18c280d62fe","url":"./archives/2020/page/3/index.html"},{"revision":"a836aa62ff339140d715960495ab6803","url":"./archives/2020/page/4/index.html"},{"revision":"0b257aae5055bbb795b9da7b050460e3","url":"./archives/2020/page/5/index.html"},{"revision":"cc2e55cdfc7e3d8f1f4ba67f91835506","url":"./archives/2020/page/6/index.html"},{"revision":"117d04dee20ae21b0c65baef65c16f63","url":"./archives/2020/page/7/index.html"},{"revision":"1ee0c8d6a1b4e1ad54d00f4b22c3aa70","url":"./archives/2020/page/8/index.html"},{"revision":"3479a4d00b7c8f947d4afb30be202b9c","url":"./archives/2021/01/index.html"},{"revision":"4f467f06f0622f5d97957beea8b6155e","url":"./archives/2021/03/index.html"},{"revision":"c9ab0c3759d1bacc39de8432cb233db7","url":"./archives/2021/04/index.html"},{"revision":"e3d1062f3e7445b67adc7d6e79a279c0","url":"./archives/2021/index.html"},{"revision":"3631d621ce75a141f4aa2fb5d9545e55","url":"./archives/2022/01/index.html"},{"revision":"51dfca51bb1b205eedc62bc288254562","url":"./archives/2022/index.html"},{"revision":"424f7f09046acb1e73a6303c048a07ca","url":"./archives/index.html"},{"revision":"5ec7fc82065d1702ac8193c232e03d08","url":"./archives/page/2/index.html"},{"revision":"7c9cc1bee0ddc375b4805332f72e65ff","url":"./archives/page/3/index.html"},{"revision":"7115c2bc63a8baf2f211401b68d36531","url":"./archives/page/4/index.html"},{"revision":"d4aab5a3b0515c71eff2a70d6ecb2152","url":"./archives/page/5/index.html"},{"revision":"6b0b8439b58bfe932bb30f50944681f7","url":"./archives/page/6/index.html"},{"revision":"3b35fe57a88587f7308209437ed5568b","url":"./archives/page/7/index.html"},{"revision":"1e61e8f64e3ed9fee6416ee966ea73e1","url":"./archives/page/8/index.html"},{"revision":"d698a0386f095a6e1662dff0d0deef92","url":"./archives/page/9/index.html"},{"revision":"84c7dc2697321e4cc5aed80115ecaaa4","url":"./categories/index.html"},{"revision":"29dcc353a37d6a92fbf622135a447a92","url":"./categories/学习笔记/index.html"},{"revision":"eb4c0802cfb035e5f76a5db8dd3f5819","url":"./categories/学习笔记/page/2/index.html"},{"revision":"6716c680204986f375df677656b81c24","url":"./categories/学习笔记/page/3/index.html"},{"revision":"812f2177efeb65af77c8d4b69b99f343","url":"./categories/学习笔记/page/4/index.html"},{"revision":"03b8ebec688b5f1d03c1fb1739d5aed9","url":"./categories/学习笔记/page/5/index.html"},{"revision":"e87a3520c6294d751d6b9309cc91296a","url":"./categories/小程序开发/index.html"},{"revision":"018a4d8f49e95d890584f858c93a8a39","url":"./categories/技术笔记/index.html"},{"revision":"c1713ffec966c227d44bf3d435150242","url":"./categories/技术笔记/page/2/index.html"},{"revision":"c4e003ba790e496ba6a13772ff99b396","url":"./categories/技术笔记/page/3/index.html"},{"revision":"6c7392b47b639ce3b147bd9f43e00993","url":"./categories/视频分享/index.html"},{"revision":"615c5b78c60a3cfdf4d9df31ab7bcebc","url":"./categories/算法笔记/index.html"},{"revision":"dcd26b264f5fe74e45849f23038d1955","url":"./categories/问题解决/index.html"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"88061ac0231e2f2cf143272824c4d21d","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fa3b365055c23d0df1f31b9264c99b4a","url":"./img/pwa/manifest.json"},{"revision":"ac67c36d6cab9ceba84a2c0957df79cb","url":"./index.html"},{"revision":"19bccbc6843ab916383ee7503363ffb4","url":"./js/busuanzi.pure.mini.js"},{"revision":"240e062def7897dd4c03a12bf07fdc65","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"33b3c0e197c029d5b198059220bbd5ab","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"b3969d39a0bc86cb97c7bbf93bf5e70d","url":"./link/index.html"},{"revision":"5b3011ffe8066356937e453acaeeaf10","url":"./page/2/index.html"},{"revision":"33d448892cd4e17178cb32aa8229ada5","url":"./page/3/index.html"},{"revision":"b0e2ccda961865d903cd0bd4e4319a68","url":"./page/4/index.html"},{"revision":"d445483d9821ea697b6b0e5bd0b4eef5","url":"./page/5/index.html"},{"revision":"a04a2dd31fa19189ac95dd3ed8a6ceb7","url":"./page/6/index.html"},{"revision":"bd64fb8d326e6307795d767fb7912c86","url":"./page/7/index.html"},{"revision":"34fe7fc2afeadf75991a01681f2c632f","url":"./page/8/index.html"},{"revision":"9bbc9c63a673ab0fc9efbdc5b5309ef5","url":"./page/9/index.html"},{"revision":"ccbef2dfd1fd5f8c807cc223acbf7a11","url":"./tags/CentOS/index.html"},{"revision":"10367e43dfa077f9c36a282f1e63f552","url":"./tags/CloudComputing/index.html"},{"revision":"d29361e63a40f1cb82cce963e3f6ed10","url":"./tags/CPP/index.html"},{"revision":"447d650635c3422c820163b75ecb5bd3","url":"./tags/DataSciense/index.html"},{"revision":"2e1a4c907466dab5cac665118ec3b7a3","url":"./tags/Docker/index.html"},{"revision":"ef4847110e8d3448bb7115bc4fe2e118","url":"./tags/Electron/index.html"},{"revision":"5c0af6ba50d4766e3da055454bd20a7d","url":"./tags/GitHub/index.html"},{"revision":"027efa1279295d7e2e23f4dc52e0a811","url":"./tags/Hexo/index.html"},{"revision":"b06c3be689fa5c645093edf157eeac3f","url":"./tags/Homebrew/index.html"},{"revision":"1a8364af9586c9ebfb4dfd23f34e7983","url":"./tags/index.html"},{"revision":"eb087c94024a49aa834247e48d597e6c","url":"./tags/Java/index.html"},{"revision":"29792dc070b41c16ab817b3507a671bb","url":"./tags/JavaScript/index.html"},{"revision":"2b9e7729afd9d2205e9306390dc0b67f","url":"./tags/Jenkins/index.html"},{"revision":"68a89fc127c8dc2d007a80ee860df1ae","url":"./tags/JsDelivr/index.html"},{"revision":"ad723b90cc2b4ffa40f4a04e09e02f1e","url":"./tags/Latex/index.html"},{"revision":"a29f49557fffe3adc35e4d9d58ba5cde","url":"./tags/LeetCode/index.html"},{"revision":"c30e5fca2dc3adbe6a137847d5bc7e9f","url":"./tags/Linux/index.html"},{"revision":"2855b5c0af534623b9ee856c9c1c6030","url":"./tags/macOS/index.html"},{"revision":"de8ebe2a5b35651d09f2c6c55287bcac","url":"./tags/Math/index.html"},{"revision":"b75789633afa80ad5274460fbca64d09","url":"./tags/MySQL/index.html"},{"revision":"fccbc6accd5931c226c6e7460dc25b26","url":"./tags/Nginx/index.html"},{"revision":"d79f2abece683957fbafb9d04f650587","url":"./tags/OS/index.html"},{"revision":"22dee373e139348c4b77fbfa76781b3b","url":"./tags/packet-tracer/index.html"},{"revision":"13bfe78406f319650cee7ee87dde10c5","url":"./tags/python/index.html"},{"revision":"11078bdade9c085141eac769d02ad14d","url":"./tags/SpringBoot/index.html"},{"revision":"56c898e0a18a11b300dfd396fc01c89e","url":"./tags/SSH-KEY/index.html"},{"revision":"ca0fed084a5fce3e0348cda87eb943a9","url":"./tags/Video/index.html"},{"revision":"9c7471700560af7964eb8ba71ac30e65","url":"./tags/Vim/index.html"},{"revision":"92957766b241b16e41a9078c678dd02c","url":"./tags/VScode/index.html"},{"revision":"32adabda14bb0cc233c5b048faf0dd1e","url":"./tags/Vue/index.html"},{"revision":"da35a38f08eca9ea6c12bbb6b9960e75","url":"./tags/wechat/index.html"},{"revision":"ed625255a2518a6ca2a29df792927ae4","url":"./tags/商务智能/index.html"},{"revision":"dc0010b1eac2f314207a36613bfe3df2","url":"./tags/嵌入式系统/index.html"},{"revision":"3cbda629a966563b00467798bc9a5e4f","url":"./tags/换源/index.html"},{"revision":"522036754def3e2cabb83ff245731381","url":"./tags/算法/index.html"},{"revision":"c7363d85d06424b9b0a770e10fc2e246","url":"./tags/自动化测试/index.html"},{"revision":"7b16dd90ea326d04bae02bb3074d72ec","url":"./tags/计网/index.html"},{"revision":"a756755874e89fa9dc2cc5e640813c67","url":"./tags/软件工程与计算Ⅱ/index.html"},{"revision":"51bbe2236531c0c7106fe68b9f93f6fb","url":"./tags/软工/index.html"},{"revision":"dcfe505c0f7ae71c245430929c881194","url":"./tags/近现代史纲要/index.html"},{"revision":"ad8d0185053b417a0381ebe459042aeb","url":"./tags/面向服务/index.html"}],{
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