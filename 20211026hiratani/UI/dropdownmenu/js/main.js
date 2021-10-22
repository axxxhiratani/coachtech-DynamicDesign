const target = document.getElementsByClassName("tab-menu__item");

//反復処理で全てのtab-menu__item要素にクリックイベントをつける
for (let i = 0; i < target.length;i++){
  target[i].addEventListener('click', () => {

    //タブの操作
    //1.activeクラスがついている要素を見えなくする
    //2.クリックされた要素に新しくアクティブ要素をつける
    document.getElementsByClassName('active')[0].classList.remove('active');
    target[i].classList.add('active');

    //コンテンツの操作
    //1.showクラスがついた要素を見えなくする
    //2.targetを配列に変換する。
    //3.変換した配列から押された要素を検索する(indexOf(target[i]))
    //4.検索された要素にshowクラスをつける。
    document.getElementsByClassName('show')[0].classList.remove('show');
    const arrayTabs = Array.prototype.slice.call(target);
    const index = arrayTabs.indexOf(target[i]);
    document.getElementsByClassName('tab-content__item')[index].classList.add('show');
  });

}
