import React from "react";

const interestData = [
  {
    title: "ボードゲーム",
    content: (
      <>
        ビデオゲームも好きですが、友達や家族と一緒にボードゲームをするのも好きです。ボードゲームがあれば大抵の人とは仲良くなれると思っています。一番好きなボードゲームは
        <a href="https://jelly2games.com/deception" className="link" target="_blank" rel="noreferrer">
          ディセプション
        </a>
        です。
      </>
    ),
    svg: (
      <svg width="70pt" height="70pt" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="extensionIconTitle" stroke="#3f51b5" strokeWidth="1.2857142857142858" strokeLinecap="square" strokeLinejoin="miter" color="#3f51b5">
        <title id="extensionIconTitle">Extension</title>
        <path d="M9 4C9 2.89543 9.89543 2 11 2C12.1046 2 13 2.89543 13 4V6H18V11H20C21.1046 11 22 11.8954 22 13C22 14.1046 21.1046 15 20 15H18V20H13V18C13 16.8954 12.1046 16 11 16C9.89543 16 9 16.8954 9 18V20H4V15H6C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11H4V6H9V4Z" />
      </svg>
    ),
  },
  {
    title: "動物",
    content: (
      <>
        昔から動物が好きで、実家では犬、祖母の家に住んでいた時は猫とウサギとチャボを飼っていました。
        <a href="http://www.enakyo-tenkaien.jp/touch/" className="link" target="_blank" rel="noreferrer">
          遊園地
        </a>
        でアルバイトをしていた時は様々な動物の飼育に携わらせていただきました。
      </>
    ),
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="70pt" height="70pt" viewBox="0 0 1280.000000 1210.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
        <g transform="translate(0.000000,1210.000000) scale(0.100000,-0.100000)" fill="#3f51b5" stroke="none">
          <path d="M5302 12090 c-346 -44 -625 -222 -795 -508 -97 -164 -145 -329 -154 -528 -13 -295 62 -525 256 -791 l89 -122 -89 -168 c-128 -238 -168 -333 -261 -603 -88 -257 -130 -461 -143 -690 -4 -66 0 -288 10 -520 19 -454 17 -694 -8 -752 -8 -20 -35 -60 -59 -90 -62 -76 -142 -218 -337 -597 -198 -383 -381 -721 -489 -901 -41 -69 -76 -128 -79 -133 -7 -12 25 -20 52 -13 13 3 40 20 59 36 40 36 134 72 270 106 408 99 991 12 1837 -275 713 -242 1055 -434 1420 -800 148 -149 229 -242 454 -521 251 -312 483 -564 580 -629 120 -81 123 -98 23 -130 -208 -66 -427 -166 -574 -264 -426 -281 -727 -855 -809 -1543 -26 -217 -29 -467 -10 -837 10 -186 15 -340 13 -343 -7 -6 -526 -32 -803 -40 -808 -23 -1572 129 -2315 463 -855 384 -1321 844 -1381 1363 -15 137 -6 536 16 680 53 340 162 627 505 1325 241 491 387 820 426 963 26 93 10 96 -54 9 -133 -181 -422 -713 -572 -1053 -197 -444 -385 -977 -454 -1285 -65 -290 -75 -661 -25 -949 19 -109 58 -257 89 -336 84 -211 289 -502 524 -743 130 -133 207 -193 301 -235 57 -26 105 -61 105 -77 0 -23 -252 -44 -965 -79 -1046 -52 -1832 -125 -1936 -181 -89 -47 163 -107 661 -158 1180 -121 1819 -136 5880 -136 3114 0 4042 14 4845 75 564 43 1143 106 1305 141 49 11 90 34 90 50 0 70 -773 157 -1825 204 -665 30 -1005 60 -1005 89 0 17 81 108 194 221 146 145 248 294 331 482 105 240 150 464 149 743 -1 493 -162 846 -504 1107 -171 130 -342 209 -552 258 -65 14 -120 30 -123 35 -3 4 25 68 61 141 122 247 153 385 119 535 -57 258 -210 581 -391 825 -112 151 -147 206 -141 222 3 8 38 24 79 36 160 48 267 122 482 331 151 147 241 253 274 321 25 51 22 86 -24 277 -28 122 -31 217 -7 309 24 96 149 342 318 623 185 308 250 427 318 582 127 287 182 535 207 923 24 388 10 528 -79 794 -94 278 -114 401 -131 831 -16 415 -53 543 -195 685 -61 61 -195 157 -295 213 -113 62 -129 65 -450 72 -343 8 -347 9 -480 109 -346 261 -889 454 -1409 501 -165 16 -552 8 -731 -15 -120 -14 -557 -80 -611 -91 -23 -4 -36 7 -115 98 -239 279 -394 355 -739 363 -82 2 -183 0 -223 -5z m2784 -634 c311 -36 579 -118 887 -272 314 -156 550 -328 813 -589 256 -254 418 -475 568 -775 129 -259 206 -498 243 -765 24 -166 23 -695 -1 -910 -37 -342 -87 -525 -142 -525 -7 0 -28 16 -47 36 -44 47 -55 41 -140 -69 -207 -268 -381 -678 -477 -1122 -53 -247 -64 -294 -81 -350 -25 -83 -51 -109 -100 -101 -119 19 -130 -74 -23 -195 55 -61 74 -94 74 -129 0 -72 -243 -211 -539 -309 -195 -65 -228 -59 -431 76 -305 203 -641 484 -1245 1043 -688 637 -1121 960 -1599 1191 -291 140 -392 162 -696 148 -85 -3 -216 -8 -290 -10 l-135 -4 -49 130 c-105 281 -121 401 -113 810 9 424 32 575 120 799 54 138 174 372 211 411 41 43 38 43 216 6 114 -24 357 -51 460 -51 100 0 195 25 310 81 331 160 520 376 599 684 34 131 41 208 41 456 l0 236 153 31 c134 28 240 43 397 56 119 10 892 -3 1016 -18z" />
          <path d="M9024 8126 c-29 -13 -155 -86 -280 -161 -355 -213 -525 -298 -784 -390 -220 -78 -386 -170 -474 -265 -132 -141 -121 -306 30 -469 229 -249 854 -464 1336 -460 144 1 183 12 224 66 99 130 160 427 171 838 12 484 -55 865 -154 865 -10 0 -41 -11 -69 -24z" />
        </g>
      </svg>
    ),
  },
  {
    title: "中国文化",
    content: <>中国人留学生達と仲良くなったことがきっかけで、中国文化に興味を持つようになりました。YoutubeやNetflix等で中国の映画やドラマ、文化に関しての動画をよく見ます。最近は歌も聴くようになりました。在学中に一度は中国本土に行ってみたかったです...。</>,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="70pt" height="70pt" viewBox="0 0 1280.000000 931.000000" preserveAspectRatio="xMidYMid meet">
        <metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata>
        <g transform="translate(0.000000,931.000000) scale(0.100000,-0.100000)" fill="#3f51b5" stroke="none">
          <path d="M12465 9018 c-60 -22 -624 -224 -1252 -449 l-1141 -409 -1154 -190 c-634 -104 -1189 -196 -1233 -203 -89 -14 -101 -13 -1785 140 l-745 68 -1420 5 -1420 5 -985 163 c-542 89 -994 163 -1004 165 -15 1 -22 -7 -28 -32 -5 -18 -7 -35 -5 -37 3 -3 484 -84 1222 -204 105 -17 313 -51 464 -76 150 -24 278 -47 283 -50 5 -3 1 -13 -9 -21 -10 -8 -11 -11 -3 -7 12 6 13 5 4 -7 -6 -8 -87 -111 -179 -229 -93 -118 -173 -221 -178 -228 -7 -8 -7 -16 0 -23 6 -6 76 74 200 230 158 197 197 240 223 246 18 4 36 2 44 -4 7 -6 15 -9 18 -6 3 3 76 -96 163 -220 87 -124 164 -225 172 -225 7 0 13 3 13 6 0 3 -66 102 -147 220 -82 119 -147 221 -145 229 1 7 -5 16 -15 18 -10 3 554 5 1252 5 699 0 1261 -3 1250 -7 -11 -4 -20 -15 -20 -25 0 -9 -92 -140 -204 -292 -141 -190 -200 -279 -193 -286 7 -7 75 76 219 268 l208 279 44 1 44 1 240 -289 c214 -257 254 -300 260 -276 1 3 -88 116 -198 250 -299 363 -275 331 -275 357 0 5 -8 12 -18 14 -40 11 49 6 318 -18 355 -32 1080 -96 1995 -176 72 -6 137 -15 145 -20 13 -7 12 -8 -2 -9 -10 0 -19 -3 -19 -7 -1 -5 -3 -18 -4 -30 -1 -12 -16 -44 -33 -70 -226 -359 -372 -607 -363 -616 11 -11 21 4 259 388 145 235 149 240 182 240 38 0 19 31 220 -373 68 -139 130 -252 137 -252 7 0 13 2 13 5 0 3 -72 154 -160 336 -89 181 -158 334 -155 339 3 5 -3 18 -15 30 l-20 20 54 0 c30 0 234 29 453 65 219 36 562 93 763 126 482 79 1085 177 1135 185 38 6 39 5 20 -11 -11 -9 -14 -13 -7 -10 13 7 -58 -112 -236 -395 -62 -98 -88 -146 -80 -151 14 -9 9 -17 203 289 100 159 156 236 172 243 58 22 59 20 260 -282 l192 -287 -352 6 c-417 6 -615 -6 -967 -59 -192 -29 -523 -99 -537 -113 -3 -2 46 -58 108 -123 133 -138 112 -131 364 -134 l170 -2 -332 -25 c-183 -15 -333 -29 -333 -32 0 -3 23 -32 51 -63 28 -31 45 -57 37 -57 -7 0 -53 7 -103 14 -550 88 -1160 101 -1680 36 -97 -12 -405 -64 -470 -79 -22 -6 -40 -9 -42 -8 -1 1 43 64 97 140 92 126 98 137 77 142 -56 13 -430 76 -587 99 -740 108 -1377 96 -2035 -36 -82 -17 -163 -33 -179 -36 l-29 -5 22 32 c13 18 22 33 20 35 -5 3 -303 64 -372 76 -29 5 -117 20 -197 34 -327 57 -487 70 -875 70 -384 1 -477 -6 -794 -60 -170 -28 -523 -114 -519 -125 2 -5 52 -67 111 -139 l108 -130 57 -1 c118 -3 295 -16 242 -17 -30 -1 -116 -9 -190 -16 -74 -8 -175 -18 -225 -21 -143 -12 -142 -3 -21 -149 58 -71 104 -132 101 -136 -2 -4 -43 -10 -91 -13 -48 -3 -89 -8 -91 -11 -3 -2 43 -62 101 -132 71 -85 102 -130 94 -135 -6 -4 -58 -10 -115 -14 -57 -4 -103 -10 -103 -14 0 -3 45 -60 99 -126 l99 -120 -37 -7 c-20 -4 -55 -7 -78 -7 -24 -1 -43 -3 -43 -6 0 -3 50 -65 110 -139 l111 -133 122 -8 c81 -6 112 -11 92 -15 l-30 -7 25 -10 c24 -10 24 -10 -10 -16 -19 -3 -112 -13 -207 -23 l-172 -17 66 -81 c167 -202 160 -196 211 -197 26 -1 -33 -10 -132 -20 -98 -10 -180 -19 -181 -21 -2 -2 46 -64 107 -138 91 -111 116 -136 142 -140 17 -3 -39 -11 -124 -18 -85 -7 -165 -16 -177 -19 -19 -4 -11 -18 83 -131 58 -70 114 -132 125 -138 18 -10 10 -13 -49 -19 l-71 -7 109 -131 c59 -73 106 -134 104 -136 -2 -2 -56 -9 -119 -15 l-116 -11 113 -138 112 -137 66 -1 c36 -1 94 -4 130 -8 63 -6 59 -7 -95 -23 -88 -10 -196 -21 -240 -24 -44 -4 -85 -9 -91 -13 -8 -4 26 -52 87 -126 110 -134 110 -133 7 -134 -32 -1 -58 -5 -58 -10 0 -5 48 -66 106 -137 115 -140 115 -140 274 -193 403 -134 819 -162 1345 -92 412 55 688 90 756 96 l76 6 99 157 c54 86 98 159 97 162 -1 3 -41 12 -88 21 -47 9 -88 18 -89 20 -2 2 11 28 30 56 l34 53 111 -118 c93 -99 119 -120 162 -135 159 -55 379 -108 552 -132 127 -17 415 -35 461 -28 l32 5 6 -59 c3 -32 13 -175 21 -318 8 -143 17 -279 20 -302 4 -36 2 -43 -13 -43 -32 0 -119 -47 -155 -85 -41 -43 -77 -127 -77 -184 0 -106 67 -209 167 -256 l56 -27 -7 -121 c-4 -67 -33 -481 -64 -919 l-57 -796 27 -4 c34 -5 30 -41 68 517 38 557 36 541 38 405 1 -63 -7 -299 -18 -525 -25 -520 -26 -465 10 -465 28 0 30 2 31 43 1 23 3 34 6 24 2 -9 9 -17 14 -17 5 0 9 -11 9 -25 0 -21 5 -25 29 -25 28 0 30 2 34 48 l3 47 2 -52 c2 -40 6 -53 17 -53 9 0 15 -9 15 -25 0 -21 5 -25 28 -25 l27 0 -3 90 c-3 77 -2 90 12 90 20 0 21 -17 -14 319 -49 482 -43 513 15 71 29 -228 54 -423 54 -432 1 -12 9 -18 26 -18 19 0 25 5 25 22 0 18 -74 615 -165 1323 -13 105 -27 237 -30 295 -3 58 -8 130 -11 161 l-5 56 43 16 c52 20 112 76 140 131 26 51 35 150 18 202 -32 99 -121 178 -213 190 l-49 7 6 51 c3 28 13 175 21 326 9 151 18 289 21 306 l4 32 98 6 c53 4 287 29 519 57 232 27 438 49 457 49 31 0 46 -12 151 -124 l117 -124 97 -30 c277 -88 520 -130 797 -139 l182 -6 6 -71 c3 -39 10 -150 16 -246 6 -96 12 -196 15 -222 3 -40 1 -48 -13 -48 -32 0 -119 -48 -155 -85 -41 -43 -77 -127 -77 -184 0 -106 70 -214 167 -257 l53 -24 -1 -52 c0 -29 -28 -442 -62 -918 l-62 -865 25 -6 c14 -3 27 -4 29 -3 2 2 49 620 74 984 2 30 4 3 5 -60 1 -63 -7 -299 -18 -525 -25 -520 -26 -465 10 -465 28 0 30 2 31 43 1 23 3 34 6 25 2 -10 9 -18 14 -18 5 0 9 -11 9 -25 0 -21 5 -25 29 -25 28 0 30 3 34 43 l4 42 1 -47 c2 -35 6 -48 17 -48 10 0 15 -10 15 -28 0 -25 3 -28 28 -25 l27 5 -3 89 c-3 76 -2 89 12 89 20 0 21 -17 -13 319 -63 608 -48 540 54 -246 17 -129 18 -133 41 -133 30 0 30 -2 -1 236 -91 707 -165 1314 -170 1399 -3 55 -8 127 -10 161 l-5 61 43 17 c51 19 111 75 139 130 26 51 35 150 18 202 -32 98 -122 178 -212 190 l-49 7 5 51 c4 28 11 132 16 231 6 99 13 207 16 241 l6 61 151 12 c84 7 247 23 362 37 347 42 365 44 509 59 76 8 162 15 191 15 36 0 59 6 73 18 22 19 215 282 210 287 -2 2 -46 9 -98 16 -52 7 -96 14 -98 15 -3 2 87 130 115 163 2 3 27 -1 56 -8 281 -67 406 -82 733 -88 l290 -5 18 -292 c9 -160 19 -307 22 -327 5 -36 4 -37 -33 -44 -127 -23 -228 -170 -208 -303 14 -98 68 -170 164 -217 l54 -27 -7 -122 c-4 -66 -33 -479 -64 -917 l-57 -795 45 -15 c34 -10 46 -20 48 -37 2 -14 10 -22 22 -22 10 0 57 -13 103 -30 117 -41 126 -40 120 9 l-5 38 61 24 c47 18 61 29 61 44 0 11 -38 321 -85 690 -98 769 -113 901 -117 1042 l-4 103 35 11 c49 17 120 86 147 144 74 157 -27 353 -197 383 -42 8 -44 9 -42 42 1 19 10 169 19 332 l18 298 30 4 c17 3 137 17 266 32 129 14 267 30 305 35 121 14 368 39 420 41 l49 3 108 147 c59 81 104 149 100 151 -4 3 -47 10 -97 17 -49 7 -91 14 -93 16 -2 1 30 49 72 106 85 117 87 110 -31 128 l-72 12 100 137 c54 76 99 140 99 143 0 3 -31 10 -70 17 -38 7 -70 16 -70 19 1 4 38 59 84 122 46 63 83 116 82 117 -1 2 -62 12 -136 23 -73 10 -134 21 -136 22 -1 2 33 53 77 113 l80 110 -43 8 c-85 17 -86 10 17 152 58 81 89 132 82 137 -6 3 -37 10 -69 13 -32 4 -58 9 -58 12 0 3 40 60 88 127 48 66 91 126 95 132 4 8 -34 17 -121 29 -70 10 -128 19 -130 20 -2 2 44 68 102 148 59 79 106 147 106 149 0 3 -43 11 -95 18 -52 7 -95 17 -95 21 0 5 31 52 70 105 38 53 68 100 65 104 -3 4 -34 11 -70 15 -36 3 -65 10 -65 15 0 4 38 60 84 123 68 93 82 117 68 121 -9 3 -52 10 -94 17 -43 6 -78 14 -78 16 0 3 34 52 76 110 41 58 77 110 80 117 3 8 -22 16 -77 24 -45 6 -84 14 -87 16 -2 3 41 67 96 143 55 76 99 139 97 141 -13 15 -656 114 -952 147 l-62 7 -189 286 c-200 303 -217 332 -205 333 4 0 -1 4 -11 8 -23 9 -65 -7 934 351 432 155 846 303 920 330 74 27 241 87 370 133 129 47 247 90 262 96 25 9 26 12 16 45 -6 20 -14 35 -17 35 -3 -1 -55 -19 -116 -41z m-8693 -2093 l100 -105 111 -1 112 -2 -150 -12 c-82 -7 -170 -14 -194 -14 l-43 -1 16 25 c18 28 25 24 -91 48 l-63 12 48 77 c26 43 49 78 51 78 2 0 49 -47 103 -105z m-22 -317 l82 -88 -41 0 c-31 0 -39 3 -35 14 4 11 -10 17 -53 26 -32 7 -72 15 -90 18 l-32 7 36 58 c19 32 39 57 43 55 4 -2 44 -42 90 -90z m2656 -76 c-22 -5 -30 3 -21 18 5 8 11 7 22 -2 15 -12 14 -13 -1 -16z m318 -23 l131 -2 -145 -11 c-111 -8 -146 -8 -148 1 -2 6 -9 14 -15 16 -7 2 1 3 17 1 16 -2 88 -5 160 -5z m-2957 -165 c37 -41 70 -80 72 -86 5 -13 -108 -5 -186 14 l-53 13 41 68 c23 37 45 67 50 67 4 0 38 -34 76 -76z m-1 -342 c-41 -3 -154 12 -163 22 -2 2 12 30 32 61 l37 57 69 -68 70 -69 -45 -3z m5824 -85 c14 -1 -63 -8 -170 -15 -107 -7 -228 -15 -269 -19 -67 -6 -74 -5 -68 11 5 11 0 19 -13 24 -16 6 450 5 520 -1z m-5420 -204 c151 -4 257 -9 235 -10 -22 -2 -195 -15 -385 -29 -305 -23 -430 -25 -430 -7 0 3 30 54 68 114 l67 108 85 -84 85 -83 275 -9z m-267 -334 c-21 -4 -83 -10 -137 -13 l-99 -7 15 23 c8 13 34 54 58 91 l43 69 79 -79 79 -78 -38 -6z m3157 19 c85 -1 128 -3 95 -5 -33 -2 -172 -12 -308 -22 -234 -17 -280 -16 -375 5 -21 4 -22 7 -10 21 11 14 37 15 228 10 118 -4 285 -8 370 -9z m-3193 -309 c-12 -3 -68 -9 -124 -13 l-103 -7 53 85 52 85 72 -72 c64 -65 69 -73 50 -78z m2696 -22 c34 -2 24 -3 -23 -1 -47 2 -98 7 -113 11 l-28 8 22 28 22 28 29 -35 c26 -32 34 -35 91 -39z m-2808 -204 l57 -63 -38 0 c-22 0 -49 -3 -62 -6 -23 -7 -22 -8 20 -51 30 -32 37 -44 23 -40 -11 3 -56 11 -100 18 -44 7 -82 14 -83 15 -6 4 113 194 119 191 3 -1 32 -30 64 -64z m2645 -18 c11 -13 8 -15 -13 -15 -19 0 -25 4 -21 15 4 8 10 15 14 15 4 0 13 -7 20 -15z m-2531 -248 l52 -54 -68 -6 c-37 -4 -80 -7 -95 -7 l-27 0 37 60 c20 33 39 60 42 60 3 0 29 -24 59 -53z m-128 -163 c26 -28 29 -35 14 -31 -11 3 -35 8 -52 12 -37 7 -37 8 -23 36 15 26 21 24 61 -17z m5554 21 c-25 -8 -115 -11 -115 -4 0 5 28 9 63 8 34 0 58 -2 52 -4z m-5434 -145 l52 -60 121 -1 121 -1 -225 -19 c-123 -10 -226 -16 -228 -14 -6 6 89 155 98 155 5 0 32 -27 61 -60z m2635 -87 c-2 -2 -22 -1 -44 3 -41 6 -41 7 -25 31 l16 24 28 -27 c16 -15 27 -29 25 -31z m-2733 -150 l96 -98 -42 -7 c-23 -3 -52 -7 -65 -7 l-23 -1 26 44 c14 24 22 46 18 49 -4 3 -41 10 -80 17 -40 7 -73 15 -73 17 0 4 44 83 46 83 1 0 44 -44 97 -97z m3112 -140 c-76 -9 -255 -18 -255 -12 0 16 24 19 149 17 75 0 123 -3 106 -5z" />
          <path d="M2234 3243 c3 -38 13 -180 21 -318 8 -137 17 -277 21 -311 l5 -61 -36 -6 c-53 -9 -130 -62 -164 -114 -99 -148 -30 -359 135 -413 33 -11 34 -13 34 -67 0 -30 -27 -432 -60 -894 -33 -461 -60 -853 -60 -869 0 -26 4 -30 28 -30 l27 0 34 498 c18 273 37 506 41 517 8 18 9 18 9 -5 1 -26 -34 -776 -45 -968 l-6 -112 31 0 c30 0 31 2 32 43 1 23 3 34 6 24 2 -9 9 -17 14 -17 5 0 9 -11 9 -25 0 -21 5 -25 29 -25 28 0 30 2 34 48 l3 47 2 -52 c2 -40 6 -53 17 -53 9 0 15 -9 15 -25 0 -21 5 -25 30 -25 l30 0 -7 90 c-5 80 -4 90 11 90 21 0 21 -6 -13 335 -31 301 -44 467 -36 450 4 -11 105 -804 105 -831 0 -11 8 -14 28 -12 20 2 26 8 25 23 -3 24 -109 863 -158 1255 -19 151 -38 344 -43 428 l-7 152 34 11 c19 7 55 30 79 53 170 156 93 436 -131 474 l-42 8 3 54 c1 30 11 195 22 365 11 171 20 316 20 323 0 8 -20 12 -66 12 l-66 0 6 -67z" />
        </g>
      </svg>
    ),
  },
  {
    title: "漫画・アニメ",
    content: <>漫画やアニメを見始めたら止まらなくなってしまうので、一日のご褒美として毎日少しずつ見るようにしています。最近は東京リベンジャーズにハマっています。英語に触れる機会を増やすために英語版のワンピースを読んだりもしています。</>,
    svg: (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="70pt" height="70pt" viewBox="0 0 24 24" aria-labelledby="bookOpenedIconTitle" stroke="#3f51b5" strokeWidth="1.2857142857142858" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#3f51b5">
        <title id="bookOpenedIconTitle">Book</title> <path d="M12 6s-2-2-4-2-5 2-5 2v14s3-2 5-2 4 2 4 2c1.333-1.333 2.667-2 4-2 1.333 0 3 .667 5 2V6c-2-1.333-3.667-2-5-2-1.333 0-2.667.667-4 2z" /> <path strokeLinecap="round" d="M12 6v14" />
      </svg>
    ),
  },
  {
    title: "スポーツ観戦",
    content: (
      <>
        主に野球ですが、昔からスポーツの試合を見るのが好きです。
        <a href="https://teco.copin.co.jp/" className="link" target="_blank" rel="noreferrer">
          母校のサッカー部
        </a>
        が選手権に出る時は応援に行きます。
      </>
    ),
    svg: (
      <svg width="70pt" height="70pt" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="basketballIconTitle" stroke="#3f51b5" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" color="#3f51b5">
        <title id="basketballIconTitle">Basketball</title>
        <g strokeLinecap="butt">
          <path d="M3.00476 7.71673C6.03818 6.81589 9.99791 7.74841 13.2448 10.4315C16.5425 13.1566 18.2053 16.9442 17.8244 20.1241" /> <path d="M10.102 21.7996C9.33937 19.3589 10.0106 15.6137 12.0776 12.0335C14.1385 8.46402 17.0351 6.01413 19.5251 5.44463" />{" "}
          <path d="M11.4419 2C11.2615 3.94419 10.5157 6.2298 9.22541 8.46468C7.29158 11.8142 4.64753 14.1615 2.40135 14.7854" />{" "}
        </g>
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export default interestData;
