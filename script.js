const dishes = [
  { name: "江西炒粉", emoji: "🍜", tag: ["粉类", "热辣"] },
  { name: "江西炒粉", emoji: "🍜", tag: ["粉类", "热辣"] },
  { name: "江西炒粉", emoji: "🍜", tag: ["粉类", "热辣"] },
  { name: "江西炒粉", emoji: "🍜", tag: ["粉类", "热辣"] },

  { name: "南昌拌粉", emoji: "🍲", tag: ["拌饭", "重口"] },
  { name: "南昌拌粉", emoji: "🍲", tag: ["拌饭", "重口"] },
  { name: "南昌拌粉", emoji: "🍲", tag: ["拌饭", "重口"] },
  { name: "南昌拌粉", emoji: "🍲", tag: ["拌饭", "重口"] },

  { name: "小炒黄牛肉", emoji: "🥩", tag: ["热菜", "香辣"] },
  { name: "小炒黄牛肉", emoji: "🥩", tag: ["热菜", "香辣"] },
  { name: "小炒黄牛肉", emoji: "🥩", tag: ["热菜", "香辣"] },

  { name: "鲜辣烧牛蛙", emoji: "🐸", tag: ["辣菜", "下饭"] },
  { name: "黄豆烧鸡脚", emoji: "🐔", tag: ["热菜", "香辣"] },
  { name: "照烧风味土豆披萨", emoji: "🍕", tag: ["创意", "主食"] },
  { name: "烧卖", emoji: "🥟", tag: ["点心", "蒸"] },
  { name: "牛肉寿喜锅", emoji: "🍲", tag: ["锅物", "不算辣"] },
  { name: "水果鲜切", emoji: "🍉", tag: ["清爽", "冷"] },
  { name: "鸡蛋土豆泥", emoji: "🥔", tag: ["软糯", "清淡"] },
  { name: "照烧鸡肉便当", emoji: "🍱", tag: ["便当", "甜咸"] },
  { name: "牛肉塔可", emoji: "🌮", tag: ["创意", "主食"] },
  { name: "名古屋风味炸鸡串", emoji: "🍢", tag: ["炸物", "甜辣"] },

  { name: "瓦罐汤", emoji: "🥘", tag: ["汤品", "清香"] },
  { name: "藜蒿炒腊肉", emoji: "🥩", tag: ["江西味", "香辣"] },
  { name: "粉蒸肉", emoji: "🍖", tag: ["蒸", "粉香"] },
  { name: "三杯鸡", emoji: "🍗", tag: ["热菜", "香浓"] },
  { name: "尖椒炒肉", emoji: "🌶️", tag: ["家常", "香辣"] },
  { name: "红烧牛腩饭", emoji: "🍛", tag: ["主食", "下饭"] },
  { name: "干锅花菜", emoji: "🥦", tag: ["干锅", "香辣"] },
  { name: "干捞螺蛳粉", emoji: "🍜", tag: ["粉类", "重口"] },
  { name: "麻辣烫", emoji: "🍢", tag: ["辣", "汤"] },
  { name: "重庆小面", emoji: "🍜", tag: ["面食", "麻辣"] },
  { name: "鸡公煲", emoji: "🍲", tag: ["煲", "香辣"] },
  { name: "铁板牛肉", emoji: "🥩", tag: ["铁板", "香辣"] },

  { name: "酸辣土豆丝", emoji: "🥔", tag: ["家常", "酸辣"] },
  { name: "炒乌冬面", emoji: "🍜", tag: ["面", "日式"] },
  { name: "椒盐排条", emoji: "🍖", tag: ["炸物", "香"] },
  { name: "葱油鸡", emoji: "🍗", tag: ["清香", "微咸"] },
  { name: "香煎三文鱼饭", emoji: "🍣", tag: ["主食", "健康"] },
  { name: "红烧排骨", emoji: "🍖", tag: ["热菜", "甜咸"] },
  { name: "蛋炒饭", emoji: "🍳", tag: ["主食", "香"] },
  { name: "蒜香青菜", emoji: "🥬", tag: ["清淡", "快手"] },
  { name: "剁椒鱼头", emoji: "🐟", tag: ["强辣", "湖南风"] },
  { name: "爆炒鱿鱼", emoji: "🦑", tag: ["香辣", "海鲜"] },
  { name: "番茄牛腩面", emoji: "🍜", tag: ["面食", "酸甜"] },

  { name: "砂锅米线", emoji: "🍲", tag: ["粉类", "热"] },
  { name: "炒河粉", emoji: "🍜", tag: ["面粉类", "香辣"] },
  { name: "煎饺", emoji: "🥟", tag: ["煎", "主食"] },
  { name: "新疆大盘鸡", emoji: "🍗", tag: ["香辣", "拌面"] },
  { name: "兰州牛肉面", emoji: "🍜", tag: ["清汤", "面食"] },
  { name: "干煸四季豆", emoji: "🥬", tag: ["香辣", "家常"] },
  { name: "手撕鸡拌粉皮", emoji: "🍜", tag: ["凉拌", "微辣"] },
  { name: "香菇滑鸡饭", emoji: "🍚", tag: ["主食", "咸香"] },
  { name: "黑椒牛柳意面", emoji: "🍝", tag: ["主食", "中西融合"] },
  { name: "咖喱鸡肉饭", emoji: "🍛", tag: ["主食", "香浓"] },
  { name: "糯米鸡", emoji: "🍗", tag: ["点心", "糯"] },
  { name: "木须肉", emoji: "🥚", tag: ["家常", "不辣"] }
];

  
  const emojiEl = document.getElementById("dish-emoji");
  const nameEl = document.getElementById("dish-name");
  const commentEl = document.getElementById("dish-comment");
  const btn = document.getElementById("random-btn");
  const plate = document.querySelector(".plate");
  const bgm = document.getElementById("bgm");
  let bgmStarted = false;  

  function renderDish(dish) {
    emojiEl.textContent = dish.emoji;
    nameEl.textContent = dish.name;
    commentEl.textContent = dish.comment || "";
  }
  
  btn.addEventListener("click", () => {
    const dish = dishes[Math.floor(Math.random() * dishes.length)];
    renderDish(dish);
  });

  btn.addEventListener("click", () => {
    const dish = dishes[Math.floor(Math.random() * dishes.length)];
    renderDish(dish);
  
    // 抖一抖动画
    plate.classList.remove("shake"); 
    void plate.offsetWidth;          
    plate.classList.add("shake");
  });

  btn.addEventListener("click", () => {
    // 抽菜
    const dish = dishes[Math.floor(Math.random() * dishes.length)];
    emojiEl.textContent = dish.emoji;
    nameEl.textContent = dish.name;
  
    // 第一次点击按钮时，启动背景音乐
    if (!bgmStarted) {
      bgm.play().catch(err => {
        console.log("播放音乐被浏览器拦截：", err);
      });
      bgmStarted = true;
    }
  });
  
  