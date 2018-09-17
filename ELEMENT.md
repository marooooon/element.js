# 公式サイト
- https://jp.vuejs.org/index.html

#Elementサイト
- http://element.eleme.io/#/en-US

# 初期設定でドキュメントを設定する
```
script src="https://cdn.jsdelivr.net/npm/vue"></script
↑なぜか消えてしまうから中途半端に記述している
```

# 特徴
- 双方向データバインディングができるというのが大きな特徴
- 双方向データバインディング : 入力するとそのまま更新などをせずに数値が変化していく、など。

# データバインディングについてのメモ
- v-modelは関数に紐づくようになる
- 例えばjsでnameに文字列を代入しているとする
- html側でinputタグで入力させる
- このときにinputタグにv-modelを参照させる
- inputで入力したと同時にそのまま表示される
- これがデータバインディング

# ディレクティブ
- v-modelやv-forのようなvから始まる特殊な属性をディレクティブと呼ぶ

# element.js導入手順
```
brew install npm
npm install -g vue-cil
vue init webpack プロジェクト名
cd my-project
npm install
npm install element-ui -S
```

# 続き（既存のファイルにCSSファイルを読み込む）
```my-project/src/main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

Vue.use(ElementUI, {locale})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
```

# 例：日時洗濯フォーム
```
<template>
  <div id="app">
    <el-date-picker v-model="datetime" type="datetime" placeholder="日時を選択してください"></el-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {datetime: ''}
    }
  }
</script>
```

# 上記のようにコード記入が終わるとビルドを行う
```angular2html
npm run build
```

