/**
 * ページに応じてbodyタグのheightの値を切り替える処理
 * @param {*} removeClass
 * @param {*} addClass
 */
const switchBodyHeight = (removeClass, addClass) => {
  if (typeof window !== "undefined") {
    const bodyTag = document.getElementsByTagName("body");
    if (bodyTag[0].classList.contains(removeClass)) {
      bodyTag[0].classList.remove(removeClass);
    }
    bodyTag[0].classList.add(addClass);
  }
};

export default switchBodyHeight;
