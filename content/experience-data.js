import React from "react";

const experienceData = [
  {
    title: "レコメンドシステム",
    content: "エンドユーザーにいくつかの質問を出題し、選択肢の選択パターンに応じた結果を表示する。管理画面では、エンドユーザーがどの選択肢を選んだのか、どの結果に辿り着いたのかなどを収集・分析することができるシステムを開発しました。",
    svg: (
      <svg width="48pt" height="48pt" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="diamondIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" color="#3f51b5">
        <title id="diamondIconTitle">Diamond</title> <path d="M12 20L3 11M12 20L21 11M12 20L8 11M12 20L16 11M3 11L7 5M3 11H8M7 5L8 11M7 5H12M17 5L21 11M17 5L16 11M17 5H12M21 11H16M8 11H16M8 11L12 5M16 11L12 5" />
      </svg>
    ),
  },
  {
    title: "カレンダーシステム",
    content: "WordPressの投稿をJSで描画したカレンダーに表示するGoogleカレンダーのようなシステム。ライブラリ等を用いずに、フルスクラッチで開発しました。基本的な機能はもちろんのこと、日付検索機能、APIを用いた祝日表示機能の開発などにも挑戦しました.",
    svg: (
      <svg width="40pt" height="40pt" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarEventIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="calendarEventIconTitle">Calendar event</title> <path d="M3 5H21V21H3V5Z" /> <path d="M21 9H3" /> <path d="M7 5V3" /> <path d="M17 5V3" /> <rect x="15" y="15" width="2" height="2" />
      </svg>
    ),
  },
  {
    title: "予約システム",
    content: "カレンダーシステムを応用して、自動車学校の予約システムを開発しました。空き状況表示機能、DBのレコード更新処理、予約条件に応じた料金や卒業予定日などの値の切り替える処理などをフルスクラッチで実装しました。",
    svg: (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="cancelIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="cancelIconTitle">Cancel</title> <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339" />
        <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z" />
      </svg>
    ),
  },
  {
    title: (
      <>
        WordPress
        <br />
        テーマカスタマイズ
      </>
    ),
    content: "PHPとSQLを用いて、タグやタクソノミーなどが複雑に絡んだ投稿を取得する処理や、Ajax通信を用いてUXの改善を図るための処理などを実装しました。",
    svg: (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40pt" height="40pt" viewBox="0 0 24 24" aria-labelledby="toolIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="toolIconTitle">Tool</title>
        <path d="M9.74292939,13.7429294 C9.19135019,13.9101088 8.60617271,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,7.07370693 2.20990431,6.19643964 2.58474197,5.4131691 L6.94974747,9.77817459 L9.77817459,6.94974747 L5.4131691,2.58474197 C6.19643964,2.20990431 7.07370693,2 8,2 C11.3137085,2 14,4.6862915 14,8 C14,8.88040772 13.8103765,9.71652648 13.4697429,10.4697429 L20.5858636,17.5858636 C21.3669122,18.3669122 21.3669122,19.6332422 20.5858636,20.4142907 L19.9142907,21.0858636 C19.1332422,21.8669122 17.8669122,21.8669122 17.0858636,21.0858636 L9.74292939,13.7429294 Z" />
      </svg>
    ),
  },
  {
    title: "SNSアプリ",
    content: "LaravelとVue.jsを用いてSNSアプリを開発しました。会員登録機能、ログイン・ログアウト機能、フォロー機能、投稿機能、投稿編集機能、投稿削除機能、いいね機能、タグ検索機能を実装しました。",
    svg: (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40pt" height="40pt" viewBox="0 0 24 24" aria-labelledby="peopleIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="peopleIconTitle">People</title>
        <path d="M1 18C1 15.75 4 15.75 5.5 14.25 6.25 13.5 4 13.5 4 9.75 4 7.25025 4.99975 6 7 6 9.00025 6 10 7.25025 10 9.75 10 13.5 7.75 13.5 8.5 14.25 10 15.75 13 15.75 13 18M12.7918114 15.7266684C13.2840551 15.548266 13.6874862 15.3832994 14.0021045 15.2317685 14.552776 14.9665463 15.0840574 14.6659426 15.5 14.25 16.25 13.5 14 13.5 14 9.75 14 7.25025 14.99975 6 17 6 19.00025 6 20 7.25025 20 9.75 20 13.5 17.75 13.5 18.5 14.25 20 15.75 23 15.75 23 18" />
        <path strokeLinecap="round" d="M12,16 C12.3662741,15.8763472 12.6302112,15.7852366 12.7918114,15.7266684" />
      </svg>
    ),
  },
  {
    title: "ブログシステム",
    content: "Nuxt.js(SSGモード)とContentfulを用いてJAMスタックのブログシステムを開発しました。カテゴリ別表示機能や投稿検索機能も実装しました。",
    svg: (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="newIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="newIconTitle">New</title> <path d="M19 14V22H2.99997V4H13" />
        <path d="M17.4608 4.03921C18.2418 3.25817 19.5082 3.25816 20.2892 4.03921L20.9608 4.71079C21.7418 5.49184 21.7418 6.75817 20.9608 7.53921L11.5858 16.9142C11.2107 17.2893 10.702 17.5 10.1716 17.5L7.5 17.5L7.5 14.8284C7.5 14.298 7.71071 13.7893 8.08579 13.4142L17.4608 4.03921Z" />
        <path d="M16.25 5.25L19.75 8.75" />
      </svg>
    ),
  },
];

export default experienceData;
