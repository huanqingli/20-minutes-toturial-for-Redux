###20分钟入门Redux
Redux就是个数据中心，不依附于任何框架在哪使用都行。但是和它最搭配的应该就是React了，而且大家学习它的动力大多也是解决React状态管理的问题。都说Redux文档详尽清晰，但我感觉并不友好，它没有用最简单直观的方式告诉你如何搭配React使用。研究了两天的文档和示例，终于在项目中用上了我认为原本10分钟就能上手的Redux。当然，这两天去了解Redux的方方面面和相关的东西是值得的，只不过我喜欢先上手一个知识再去详细了解它，而不是反过来。如果你和我一样，那看完我写的这个小程序绝对是值得的。
关于我的这段程序解释几点：1. 功能超简单根本用不上Redux，但我强行用一下单纯为了介绍Redux怎么用。2. 和官方示例counter功能相似且更简单，但官方示例并没有详细的解释，而且没有和React绑定使用，如果你不了解Redux看完了你还是迷糊，我的这段程序就是为了让你不迷糊。3. 解释部分在注释，部分名词和官方有出入但不影响，只是我的理解。4. 欢迎指正。  
请看代(注)码(释):https://github.com/huanqingli/20-minutes-toturial-for-Redux/blob/master/jsx/index.js  
  Demo:http://huanqingli.github.io/20-minutes-toturial-for-Redux
总结一下，数据处理器的集合生成一个数据中心，connect把旧组件替换成已经连接到数据中心的新组件（传入需要监听的数据），需要更新数据调用this.props.dispatch方法传入action，可以写一些动作生成器管理action。完事。