<template>
  <div style="height: 100%" v-title data-title="我是谁？">
    <div style="height: 5%">
      <div style="background: rgba(0,0,0,0.5); height: 100%; ">
      </div>
    </div>
    <div class="pic">
      <el-container>
        <el-aside width="20%">
          <div style="display:flex; width:70%; height: 100%; padding:0px 20px; align-items: center">
            <div style="color: #f9f9f9; width: 100%">
              <div class="nav" @click="aa">
                <span class="fontstlye2">个人信息</span>
              </div>
              <div style="height: 20px"></div>
              <div class="nav" @click="bb">
                <span class="fontstlye2">履历</span>
              </div>
              <div style="height: 20px"></div>
              <div class="nav" @click="cc">
                <span class="fontstlye2">做过哪些项目？</span>
              </div>
              <div style="height: 20px"></div>
              <div class="nav" @click="dd">
                <span class="fontstlye2">对编程工具/语言的了解</span>
              </div>
              <div style="height: 20px"></div>
              <div class="nav" @click="ee">
                <span class="fontstlye2">联系方式</span>
              </div>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div style="display: flex; margin-right: 20px; height: 100%;">
            <div style="width: 90%; height: 100%; padding: 0px 100px">
              <div id="aa" class="content">
                <span class="fontstlye3">你好，我是董子奇，是一名“秦国人”</span>
                <span class="fontstlye3">出生于95年12月30日，是一名95后</span>
                <span class="fontstlye3">本科是一名上海大学的学子</span>
                <span class="fontstlye3">187的个子，却不到140斤，很多人说我是“竹竿”</span>
                <span class="fontstlye3">誓要在编程行业混出个样子来，永远不会放弃对编程的学习</span>
                <span class="fontstlye3">想学钢琴，摄影，板绘，还想学。。。想干的事儿太多了，时间总是不够啊</span>
              </div>
              <div  style="height: 100px"></div>
              <div id="bb" class="content">
                <el-timeline style="padding: 20px 20px">
                  <el-timeline-item placement="top" color="#1d78cb">
                    <span style="color: #f9f9f9; font-size: 20px">2013.9</span>
                    <el-card class="characColor">
                      <p style="color: #f9f9f9; font-size: 20px">于上海大学中欧工程技术学院信息工程专业就读本科</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item placement="top" color="#e40807">
                    <span style="color: #f9f9f9; font-size: 20px">2016.9</span>
                    <el-card class="characColor">
                      <p style="font-size: 20px">于法国Polytech Nice-Sophia(尼斯索菲亚综合理工)学院CS专业学习</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item placement="top" color="#008d97">
                    <span style="color: #f9f9f9; font-size: 20px">2018.6</span>
                    <el-card class="characColor">
                      <p style="color: #f9f9f9; font-size: 20px">于华米科技有限公司北京分部从事java实习工作</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item placement="top" color="#1d78cb">
                    <span style="color: #f9f9f9; font-size: 20px">2018.9</span>
                    <el-card class="characColor">
                      <p style="color: #f9f9f9; font-size: 20px">于上海大学中欧工程技术学院信息工程专业就读大四</p>
                    </el-card>
                  </el-timeline-item>
                  <el-timeline-item placement="top">
                    <span style="color: #f9f9f9; font-size: 20px">2019.5</span>
                    <el-card class="characColor">
                      <p style="color: #f9f9f9; font-size: 20px">依然在为继续深造而奋斗</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
              <div style="height: 100px"></div>
              <div id="cc" class="content">
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">捕食者模型项目</el-tag>
                      <span class="javatag">JAVA</span>
                  </div>
                  <span class="fs3l">使用java（swing）+Eclipse来模拟一个包含多个物种的微型生态系统，系统包含多个捕食者与被捕食者。该项目用一个方阵来表示一片区域，其中的每个小格通过不同的颜色代表不同的动物或植物，通过计时器，每隔一段时间触发一次方阵的刷新，通过生物的随机行为来模拟生态系统中种群数量随时间变化的关系，绘制统计图。该项目提供了一个整体的框架，我在框架的基础上对已有的功能进行扩充，对新的需求进行编写。我负责了部分GUI构建，物种的添加，捕食规则编写等，使用接口，继承等来避免代码重定义，提高代码复用性。</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">安卓数独游戏</el-tag>
                    <span class="javatag">JAVA</span>
                  </div>
                  <span class="fs3l">用AndroidStudio模拟一个简单的单机数独游戏，在这个项目中从零接触androidstudio的使用，如何构建android界面，最终成果包含两个界面，主界面和游戏界面，用户可在主界面选择游戏难度并跳转到游戏界面进行游戏。</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">共享自行车站点查询</el-tag>
                    <span class="cjtag">C#</span>
                  </div>
                  <span class="fs3l">使用C#.Net的wcf服务模拟一个提供自行车站点信息查询的webservice服务，该wcf服务通过调用某自行车网站提供的API获取信息，作为Host提供对外转发服务。另外编写一个使用windows窗体程序作为模拟的client，client调用Host对外提供的wcf服务，并在Host端添加了缓存功能以及允许客户端异步调用服务端方法。</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">c++记忆游戏</el-tag>
                    <span class="cpptag">C++</span>
                  </div>
                  <span class="fs3l">用gtkmm库（一个c++图形界面库）制作简单的记忆游戏，在linux环境下运行，制作思路上借鉴了github上相关的gtkmm项目。游戏规则是桌面上有若干张颜色不同的卡片，每种颜色的卡片各有两张，每一次翻转两张卡片并查看其颜色，若颜色相同，则再次挑选两张卡片查看颜色，若颜色不同，则将它们翻回去，直到找到两张颜色相同的卡片。该游戏使用到了指针，引用，多线程，静态变量，图形界面接口等相关功能。</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">并行计算小项目</el-tag>
                    <span class="ctag">C</span>
                  </div>
                  <span class="fs3l">使用openmp和openmpi两个库进行简单的并行计算，使用openmp进行了最大子序列求和的计算，设计出针对数组的并行算法使得操作数组的效率提高，使用openmpi进行矩阵的并行乘法计算，在多个进程之间创建一个环形拓扑进行通信，将矩阵拆分成行向量通过环形分发给不同的进程，每个进程执行一小部分运算，最后将结果收集。openmp一般是使不同进程间进行并行处理，openmpi则能够在多个主机间进行并行处理协作，openmp与openmpi结合使用才能更好地发挥并行计算的效能</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">华米科技Java实习</el-tag>
                    <span class="vuetag">Vue.js</span>
                    <span class="javatag">SpringBoot</span>
                  </div>
                  <span class="fs3l">参与公司管理系统部分功能的构建，使用spring boot制作部分后端业务逻辑，了解网站分层设计思想。使用vuejs框架制作了内部管理系统前端部分页面，了解spring boot + vuejs前后端分离的网站设计思想和单页面网站的设计。前端vue框架负责页面，数据，路由，后端利用纯restful接口进行对接。具体负责了使用vue制作不同的信息查询界面，并在后端添加相应的接口。在这个过程中简单了解了spring security的使用。</span>
                  <el-divider></el-divider>
                </div>
                <div style="padding: 20px">
                  <div style="display:flex; height: 40px; align-items: center">
                    <el-tag class="plusSize">我的个人网站</el-tag>
                    <span class="vuetag">Vue.js</span>
                    <span class="javatag">SpringBoot</span>
                  </div>
                  <span class="fs3l">接触到vue之后对vue + springboot这一套天作之合产生兴趣，这个网站便是一个粗浅的尝试。打算分三步走，第一步制作静态展示页面，第二步拓展功能，实现前后端数据交互功能，第三步对网站结构，界面，动画进行优化，增加新功能等。所有代码均为自己设计，下拉加载动画和本页面下面的这棵树借鉴了其他程序猿的代码。目前基本完成第一阶段施工。。。后续功能敬请期待</span>
                </div>
              </div>
              <div style="height: 100px"></div>
              <div id="dd" class="content">
                <div style="display: flex; height: auto; align-items: center">
                  <div style="height: 160px; width: 160px">
                    <div class="javasp">
                      <span class="skilltag">JAVA</span>
                    </div>
                  </div>
                  <span class="fs3l">Java是我接触的第一门编程语言，也是和我打交道时间最长的语言。Java虽老，至今仍是企业级网站构建的王牌语言，尤其是springboot，他的许多特性让我重新认识了Java，说springboot的出现给Java带来了第二春，或许不过分把！我对Java中的设计模式，数据类型，并发等特性都有所实践，备战考研，使得曾经熟练的许多编程知识变得生疏了，是时候重新掌握他们了！</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="display: flex; height: auto; align-items: center">
                  <div style="height: 160px; width: 160px">
                  <div class="vuesp">
                    <span class="skilltag">Vue.js</span>
                  </div>
                  </div>
                  <span class="fs3l">如你所见，这个网站的页面就是使用Vue.js构建的，在接触Vue之前，我并没有使用过任何前端框架，只是写过一些简单的Html和Xml页面。但第一次使用Vue，路由，状态管理，数据绑定等特性就让我对前端开发产生了不少的兴趣，尤其是前后端分离的思想，使得前后端开发人员只需要在一开始定义好RestFul风格的相互通信的http接口和其中的参数，就能互不打扰，完全分离的进行开发，大大降低了项目的复杂度，提升可维护性。这一点给我留下深刻印象，尤其是它和springboot的完美配合，直接促使我萌生了利用他们构建个人网站的想法，我会不断的学习vue和springboot，期待用他们做出更好地网站。</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="display: flex; height: auto; align-items: center">
                  <div style="height: 160px; width: 160px">
                  <div class="mvnsp">
                    <span class="skilltag">Maven</span>
                  </div>
                  </div>
                  <span class="fs3l">现在的Java项目，没有哪个不是使用Maven来管理依赖。在开发中，几乎所有人都碰到过“can not resolve denpendencies...”之类让人头疼的小问题，一会依赖包路径错误，一会依赖包版本错误...这些小问题使我们不能专注于代码，但依靠Maven，我们只需在xml中告诉maven我们要使用哪些依赖组件，Maven会帮我们搞定一切！Maven的中央仓库包含了绝大多数Java常用的依赖组件。在大型企业中，我们甚至可以将公司内部常用的组件单独收集起来，构建属于企业内部的Maven私服，使得企业内部的各个开发人员能够共享彼此开发的公共组件，对企业的开发效率无疑起到了极大帮助。</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="display: flex; height: auto; align-items: center">
                  <div style="height: 160px; width: 160px">
                  <div class="junitsp">
                    <span class="skilltag">Junit</span>
                  </div>
                  </div>
                  <span class="fs3l">说实话，我最不喜欢的一项工作就是编写Junit单元测试...但毫无疑问，这同样是一项帮助提高开发效率的工具，如果没有它，当我们面对大型软件中的Bug，甚至是一个小小的空指针异常，我们都要花不少时间定位问题出在哪里，对方法和类编写Junit测试，让我们能快速发现和处理Bug。另外，Junit搭配jenkins也是很棒的组合，jenkins帮助我们运行测试，然后自动，快速的部署到生产线上，对开发效率同样有很大提升。持续集成，持续发布是现在大型项目普遍采用的思想。</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="display: flex; height: auto; align-items: center">
                  <div style="height: 160px; width: 160px">
                  <div class="gitsp">
                    <span class="skilltag">Git</span>
                  </div>
                  </div>
                  <span class="fs3l">不管使用什么语言，git都是所有程序员必须学习的工具。今天靠一个人很难全部搞定一个大型软件，分工协作尤为重要，git的核心就在于它的版本控制和分支。git记录了每次我们commit的版本，如果有需要，我们可以回退到我们需要的历史版本中。分支使得我们可以将项目拆分成子模块，每个人负责其中若干个，从master中checkout自己的分支，工作在自己的分支上，互不影响，另外可以创建product和dev分支，分别用于生产线版本和开发版本，每个人完成自己的模块后merge到dev分支上进行联调和测试，如果一切顺利，就可以合并到product分支进行发布。</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="display: flex; height: 100px; margin-left: 50px">
                  <div class="pythonsp">
                    <span class="sstag">Pyhon</span>
                  </div>
                  <div class="lssp">
                    <span class="sstag">Shell</span>
                  </div>
                  <div class="csp">
                    <span class="sstag">C</span>
                  </div>
                  <div class="cjsp">
                    <span class="sstag">C#</span>
                  </div>
                  <div class="assp">
                    <span class="sstag">Android</span>
                  </div>
                </div>
                <div style="display: flex; height: 160px; margin-left: 50px">
                  <span class="fs3l">我在编程学习中还涉及过python，linux shell，c，c#，Android等技术，用他们完成过一些练习和小项目，但对他们更深入的特性还有待进一步学习。优秀的程序员从不固守一种或几种语言，当对编程达到一定认识之后，就会发现语言间的共性，这能帮助我们更快的学习新的语言，当然，这不是说我们要“面面俱到”，熟练掌握一两种语言作为我们的“杀手锏”是非常必要的。我想做一名优秀的IT从业者！期待能在与更多热爱编程的小伙伴们的交流中共同进步。</span>
                </div>
                <div style="padding: 0 50px">
                  <el-divider></el-divider>
                </div>
                <div style="height: 160px; margin-left: 50px">
                  <div class="c4sp">
                    <span class="sstag">CET4</span>
                  </div>
                  <span style="display: block; font-size: 20px; text-align: left; color:rgb(255,255,255); margin-left: 10px">CET4: 520</span>
                </div>
              </div>
              <div style="height: 100px"></div>
              <div id="ee">
                <div style="height: 900px; width: 900px; border-radius: 450px; background-color: rgba(0,0,0,0.3); margin: 0px auto">
                  <div style="height: 140px; display: flex">
                    <span class="fs3vc">Tel : 18291792712</span>
                  </div>
                  <div style="width: 50%; margin: 0px auto">
                    <el-divider></el-divider>
                  </div>
                  <div style="height: 140px; display: flex">
                    <span class="fs3vc">Mail : dongziqi1230@163.com</span>
                  </div>
                  <div style="width: 80%; margin: 0px auto">
                    <el-divider></el-divider>
                  </div>
                  <div style="height: 140px; display: flex">
                    <span class="fs3vc">GitHub : https://github.com/ziqidong</span>
                  </div>
                  <div style="width: 80%; margin: 0px auto">
                    <el-divider></el-divider>
                  </div>
                  <div style="height: 140px; display: flex">
                    <span class="fs3vc">微信 : dengziqihoho</span>
                  </div>
                  <div style="width: 50%; margin: 0px auto">
                    <el-divider></el-divider>
                  </div>
                  <div style="height: 140px; display: flex">
                    <span style="padding: 10px ; display:block; font-size: 20px; color: #f9f9f9;width: 100%; margin: 40px 20px 60px 20px;">QQ : 2576210700</span>
                  </div>
                </div>
              </div>
              <div style="height: 100px"></div>
              <!--                <div style="height: 900px; width: 900px; border-radius: 450px; background-color: rgba(255,255,255,0.3); margin: 0px auto; position: relative">-->
              <div>
                <div style="height: 900px; width: 900px; border-radius: 450px; background-image: radial-gradient(rgba(255,255,255,0.8), transparent, transparent); margin: 0px auto; position: relative">
                <div class="trunk"><div><div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div></div><div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div></div></div><div><div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div></div><div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div><div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div><div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div><div><div><div><div></div><div></div></div><div><div></div><div></div></div></div><div><div><div></div><div></div></div><div><div></div><div></div></div></div></div></div></div></div></div></div>
              </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    aa () {
      document.getElementById('aa').scrollIntoView()
    },
    bb () {
      document.getElementById('bb').scrollIntoView()
    },
    cc () {
      document.getElementById('cc').scrollIntoView()
    },
    dd () {
      document.getElementById('dd').scrollIntoView()
    },
    ee () {
      document.getElementById('ee').scrollIntoView()
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../../css/lanren.css";
  .pic{
    background-image: linear-gradient(to top, transparent,transparent,transparent,transparent,transparent, rgb(255,255,255)), url('../../assets/main.jpg');
    height: 95%;
  }
  .el-container{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .el-header, .el-footer {}
  .el-main {}
  .nav, .n1{
    position: relative;
    height: 56px;
    background: rgba(255,255,255,0.3);
    border-radius: 5px;
    /*padding: 40px 20px;*/
    box-sizing: border-box;
    transition:all 0.2s
    /*opacity: 0.4;*/
  }
  .nav:hover { /*鼠标悬停放大效果*/
    transform: scale(1.1);
    background: rgba(255,255,255,0.5);
  }
  .fontstlye2{
    /*font-family: 微软雅黑;*/
    display: block;
    color: #f8f8f8;
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*top:30px;*/
  }
  .fontstlye3, .fs3l, .fs3vc{
    padding: 10px ;
    display:block;
    font-size: 20px;
    color: #f9f9f9;
  }
  .fs3vc {
    width: 100%;
    margin: 80px 20px 20px 20px;
  }
  .fs3l {
    text-align: left;
    padding: 10px 40px 10px 10px;
  }
  .content {
    height: auto;
    background: rgba(255,255,255,0.2);
    border-radius: 10px;
    /*padding: 40px 20px;*/
    box-sizing: border-box;
  }
  .characColor, .plusSize {
    background-color: rgba(255,255,255,0.1)!important;
    color: #f9f9f9!important;
  }
  .plusSize {
    font-size: 18px!important;
    background-color: rgba(29,120,203,0.3) !important;
  }
  .langtag, .javatag, .cpptag, .ctag, .cjtag, .vuetag{
    display: block;
    color: #f9f9f9;
    font-size: 14px;
    padding: 5px;
    margin-left: 10px;
  }
  .javatag {background-color: rgba(29,120,203,0.5);}
  .cpptag {background-color: rgba(228,8,7,0.5);}
  .ctag {background-color: rgba(255,165,0,0.5);}
  .cjtag {background-color: rgba(109,171,60,0.5);}
  .vuetag {background-color: rgba(128,0,128,0.5);}
  .skillshape, .javasp, .vuesp, .mvnsp, .junitsp, .gitsp {
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin: 40px
  }
  .javasp {background-color: rgba(29,120,203,0.7)}
  .vuesp {background-color: rgba(128,0,128,0.7)}
  .mvnsp {background-color: rgba(0,0,0,0.7)}
  .junitsp {background-color: rgba(65,58,74,0.7)}
  .gitsp {background-color: rgba(30,74,34,0.7)}
  .ssshape, .pythonsp, .lssp, .csp, .cjsp, .assp, .c4sp {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 40px 10px
  }
  .pythonsp{background-color: rgba(19,70,74,0.7)}
  .lssp{background-color: rgba(29,32,74,0.7)}
  .csp{background-color: rgba(74,71,54,0.7)}
  .cjsp{background-color: rgba(21,74,25,0.7)}
  .assp{background-color: rgba(74,30,28,0.7)}
  .c4sp{background-color: rgba(74,53,21,0.7)}
  .skilltag, .sstag{
    color: #f9f9f9;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sstag {
    font-size: 10px;
  }
</style>
