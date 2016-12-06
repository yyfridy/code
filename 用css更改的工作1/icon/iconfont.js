;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-baogao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M223.906265 799.999212l511.593551 0 0-64.34816-511.593551 0L223.906265 799.999212zM735.499815 576.34816l-511.591975 0 0 63.316283 511.591975 0L735.499815 576.34816zM863.602215 959.993698l-735.468308 0 0-864.003938 515.716332 0 63.971643-63.988972-643.662769 0L64.159114 1024l863.381662 0 0-784.413932-63.941711 70.110917L863.599065 959.993698 863.602215 959.993698zM512.252062 448.026782l117.044775-0.094523 211.159828-210.504468-114.076751-118.416935L512.345009 332.387249 512.252062 448.026782zM959.840886 118.401182 845.857083 0l-67.157071 66.378831L893.244652 185.140775 959.840886 118.401182z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xingqingcelve" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 787.2c-147.2 0-294.4 0-441.6 0-25.6 0-44.8-6.4-57.6-25.6C6.4 748.8 0 736 0 723.2c0 0 0 0 0-6.4C0 512 0 300.8 0 96c0-32 19.2-57.6 44.8-64 6.4 0 19.2-6.4 25.6-6.4 204.8 0 409.6 0 620.8 0 89.6 0 179.2 0 262.4 0 32 0 57.6 19.2 64 44.8C1024 83.2 1024 89.6 1024 96c0 204.8 0 416 0 620.8 0 38.4-25.6 64-64 70.4 0 0-6.4 0-6.4 0C806.4 787.2 659.2 787.2 512 787.2zM512 716.8c140.8 0 281.6 0 416 0 6.4 0 6.4 0 12.8 0 12.8 0 19.2-12.8 19.2-25.6 0-192 0-384 0-576 0 0 0 0 0 0 0-12.8-6.4-19.2-19.2-19.2 0 0-6.4 0-6.4 0-281.6 0-556.8 0-838.4 0 0 0-6.4 0-6.4 0C76.8 96 70.4 102.4 64 115.2c0 0 0 6.4 0 6.4 0 192 0 377.6 0 569.6 0 0 0 6.4 0 6.4 0 6.4 6.4 12.8 12.8 19.2 6.4 0 6.4 0 12.8 0C230.4 716.8 371.2 716.8 512 716.8z"  ></path>'+
      ''+
      '<path d="M870.4 998.4c-236.8 0-473.6 0-710.4 0 0-19.2 0-44.8 0-64 64 0 134.4 0 198.4 0 0 0 0-6.4 0-6.4 0-25.6 0-51.2 0-76.8 0-6.4 0-12.8 6.4-12.8 0-6.4 6.4-12.8 19.2-12.8 6.4 0 12.8 0 19.2 0 83.2 0 172.8 0 256 0 19.2 0 25.6 6.4 25.6 25.6 0 25.6 0 57.6 0 89.6 64 0 134.4 0 198.4 0C870.4 953.6 870.4 972.8 870.4 998.4z"  ></path>'+
      ''+
      '<path d="M460.8 281.6c19.2 19.2 38.4 38.4 57.6 57.6 38.4-44.8 83.2-83.2 121.6-128C627.2 192 614.4 179.2 601.6 166.4c44.8-12.8 96-19.2 140.8-32-6.4 44.8-19.2 96-25.6 140.8-12.8-12.8-32-32-44.8-44.8C620.8 281.6 569.6 332.8 524.8 384 499.2 364.8 480 345.6 460.8 326.4 409.6 377.6 358.4 428.8 313.6 480 300.8 473.6 294.4 467.2 288 454.4 345.6 396.8 403.2 339.2 460.8 281.6z"  ></path>'+
      ''+
      '<path d="M659.2 652.8c0-108.8 0-211.2 0-320 19.2 0 38.4 0 64 0 0 108.8 0 211.2 0 320C704 652.8 678.4 652.8 659.2 652.8z"  ></path>'+
      ''+
      '<path d="M550.4 403.2c19.2 0 38.4 0 64 0 0 83.2 0 166.4 0 249.6-19.2 0-38.4 0-64 0C550.4 569.6 550.4 486.4 550.4 403.2z"  ></path>'+
      ''+
      '<path d="M428.8 454.4c19.2 0 38.4 0 64 0 0 64 0 128 0 198.4-19.2 0-38.4 0-64 0C428.8 588.8 428.8 518.4 428.8 454.4z"  ></path>'+
      ''+
      '<path d="M390.4 518.4c0 44.8 0 89.6 0 134.4-19.2 0-38.4 0-64 0 0-44.8 0-89.6 0-134.4C345.6 518.4 364.8 518.4 390.4 518.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zixun" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M369.437585 678.288281l64.901149 86.490863 22.083971 0L607.479073 605.751221l119.321596 159.027923 71.447239 0L607.479073 513.579985 445.380208 688.829358 369.437585 585.346495 233.094314 764.780167l71.446215 0L369.437585 678.288281zM274.238386 272.66096l63.698764 0 0 63.698764-63.698764 0L274.238386 272.66096 274.238386 272.66096zM385.055285 272.66096l365.597629 0 0 63.698764L385.055285 336.359724 385.055285 272.66096 385.055285 272.66096zM274.238386 400.058488l63.698764 0 0 62.822814-63.698764 0L274.238386 400.058488 274.238386 400.058488zM385.055285 400.058488l365.597629 0 0 62.822814L385.055285 462.881302 385.055285 400.058488 385.055285 400.058488zM892.880195 257.394255c0-70.117964-56.839543-126.957507-126.959553-126.957507L258.096754 130.436748c-70.117964 0-126.95853 56.839543-126.95853 126.957507l0 507.817748c0 70.120011 56.840566 126.960577 126.95853 126.960577l507.823887 0c70.120011 0 126.959553-56.840566 126.959553-126.960577L892.880195 257.394255 892.880195 257.394255zM849.773422 756.258073c0 50.774407-41.159422 91.934852-91.933829 91.934852l-490.787886 0c-50.773384 0-91.933829-41.160445-91.933829-91.934852L175.117878 265.479397c0-50.77236 41.160445-91.938945 91.933829-91.938945l490.787886 0c50.774407 0 91.933829 41.166585 91.933829 91.938945L849.773422 756.258073 849.773422 756.258073zM830.055334 741.916437"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M644.334469 546.552957 292.109406 546.552957c-21.780049 0-39.926338-16.700357-41.738613-38.406728l-5.381567-64.564481c-1.026376-12.21009 8.618285-22.680559 20.869307-22.680559l404.736021 0c12.252045 0 21.88545 10.470469 20.87033 22.680559l-5.382591 64.564481C684.268994 529.8526 666.123728 546.552957 644.334469 546.552957zM640.992351 567.495942 295.449477 567.495942l41.884946 314.130444 261.775029 0L640.992351 567.495942zM470.011188 263.721357c39.005362 0 70.617337-31.622208 70.617337-70.616314 0-39.004339-31.623231-70.616314-70.617337-70.616314-38.993083 0-70.616314 31.622208-70.616314 70.616314C399.384641 232.099149 431.006849 263.721357 470.011188 263.721357zM630.521882 399.960251l-15.465227-69.056795c-3.925403-17.559934-18.281365-30.878265-36.083823-33.496905l-62.793138-9.235338-31.100322 71.350025-4.009314-35.160801c-0.105401-1.110287-1.046842-1.958608-2.157129-1.958608l-17.769712 0c-1.130753 0-2.062985 0.857531-2.167363 1.979074l-3.643993 36.040844-31.486108-72.239278-62.795185 9.235338c-17.801435 2.617617-32.156374 15.935947-36.0828 33.496905l-15.465227 69.046562L630.521882 399.961274zM448.284351 290.882973c0.021489 6.523577 5.403057 15.214517 8.659217 18.470677 3.257184 3.25616 8.721639 3.25616 13.06762 3.25616 4.345981 0 9.81146 0 13.068643-3.25616 3.25616-3.257184 8.638751-11.948123 8.659217-18.470677 0.031722-7.602142-13.267165-8.69094-21.727861-8.69094C461.541283 282.193057 448.252629 283.270599 448.284351 290.882973z"  ></path>'+
      ''+
      '<path d="M809.971927 176.697351c0-41.927925-42.976814-76.517721-96.43433-76.517721s-96.43433 34.590819-96.43433 76.517721c0 24.109094 14.674211 46.12041 37.736463 60.795645 0 16.770965-12.579503 35.638685-12.579503 35.638685 30.397311 0 50.311873-16.771989 54.507428-20.964474 5.240351 1.047866 11.530614 1.047866 16.770965 1.047866C766.995113 253.216095 809.971927 218.625276 809.971927 176.697351M676.850024 143.155421l74.42199 0c6.28924 0 11.530614 5.241374 11.530614 11.530614 0 6.288217-5.240351 11.529591-11.530614 11.529591l-74.42199 0c-6.28924 0-11.530614-5.241374-11.530614-11.529591C665.320433 148.396795 670.560784 143.155421 676.850024 143.155421M676.850024 180.889837l74.42199 0c6.28924 0 11.530614 5.241374 11.530614 11.530614 0 6.28924-5.240351 11.530614-11.530614 11.530614l-74.42199 0c-6.28924 0-11.530614-5.240351-11.530614-11.530614C665.320433 186.131211 670.560784 180.889837 676.850024 180.889837L676.850024 180.889837z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhishi-copy" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M720.384001 599.449c-3.395 0-6.748 0.589-9.974 1.754l-191.785 69.693-0.393 0.16c-0.943 0.428-3.335 0.888-6.36 0.888-3.095 0-5.229-0.479-5.847-0.781l-0.262-0.128-191.701-69.665c-3.214-1.164-6.565-1.754-9.961-1.754-14.489 0-26.765 10.308-29.189 24.512-15.038 88.162-17.358 186.472-17.449 190.613-0.177 7.942 2.818 15.478 8.433 21.22 5.622 5.749 13.1 8.915 21.057 8.915l450.611 0c7.957 0 15.435-3.165 21.057-8.913 5.615-5.742 8.611-13.279 8.434-21.221-0.092-4.149-2.416-102.608-17.488-190.785C747.140001 609.756 734.866001 599.449 720.384001 599.449zM317.642001 785.891c1.532-30.564 4.5-73.466 10.177-116.756l157.569 57.262c7.926 2.865 17.102 4.379 26.539 4.379 9.473 0 18.717-1.522 26.754-4.408l157.989-57.414c5.698 43.407 8.67 86.357 10.203 116.937L317.642001 785.891z"  ></path>'+
      ''+
      '<path d="M997.954001 350.392 538.593001 183.504c-7.972-2.865-17.179-4.379-26.628-4.379-9.477 0-18.686 1.525-26.629 4.411L26.008001 350.379C9.962001 356.208-0.003999 369.144 1.0e-06 384.14c0.004 14.985 9.971 27.908 26.008 33.723L485.342001 584.72c7.944 2.875 17.141 4.394 26.596 4.394 9.474 0 18.71-1.523 26.724-4.409l395.882-143.799 0 150.581c0 13.297 10.235 24.114 22.816 24.114l10.931 0c12.581 0 22.817-10.817 22.817-24.114L991.108001 420.361l6.799-2.471c16.098-5.819 26.097-18.769 26.093-33.796C1023.997001 369.104 1014.013001 356.188 997.954001 350.392zM918.071001 384.12 518.579001 529.245l-2.77 1.006c-0.866 0.172-1.855 0.263-2.924 0.263-2.947 0-5.837-0.67-7.416-1.244L105.900001 384.122l399.569-145.138 0.325-0.13c0.615-0.25 3.091-0.717 6.292-0.717 2.593 0 4.959 0.31 6.444 0.834L918.071001 384.12z"  ></path>'+
      ''+
      '<path d="M962.838001 646.517c-21.034 0-38.147 17.111-38.147 38.142 0 21.047 17.113 38.169 38.147 38.169 21.043 0 38.163-17.122 38.163-38.169C1001.001001 663.627 983.881001 646.517 962.838001 646.517z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-new2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M82 79.8l686.7 0c15.5 0 28.1 12.6 28.1 28.1L796.8 798c0 0.9 0 1.9-0.1 2.8-0.2 28.5 6.2 49 18.6 62.4 12.2 13.2 31.3 20.9 56.5 23.8 11.2-2.2 21-8.1 28-20.1 10.1-17.2 16-45.3 15.6-89.3-0.1-0.9-0.1-1.8-0.1-2.7L915.3 151.2c0-15.5 12.6-28.1 28.1-28.1 15.5 0 28.1 12.6 28.1 28.1l0 623.7c0 0.7 0 1.5-0.1 2.2 0.4 55-8.4 92.7-23.3 118.1-17.7 30.3-42.9 43.8-71.6 47.8-1.3 0.2-2.6 0.3-3.8 0.3l0 0.1L185.9 943.4c-1.2 0-2.3-0.1-3.5-0.2-36.8-1.7-68.1-11.7-91.2-33.9C67.6 886.7 54.1 853 54 804.9l-0.1 0 0-697C53.9 92.4 66.5 79.8 82 79.8L82 79.8zM181.6 757.1l0 36.4 145.7 0 0-36.4L181.6 757.1 181.6 757.1zM181.6 672.9l0 36.4 479.9 0 0-36.4L181.6 672.9 181.6 672.9zM181.6 580.8l0 36.4 479.9 0 0-36.4L181.6 580.8 181.6 580.8zM181.6 493l0 36.4 479.9 0L661.5 493 181.6 493 181.6 493zM294.4 422.7l0-198-36.3 0L258.1 315l-24.9-90.3-49.4 0 0 198 36.3 0L220.1 317.2l29.5 105.5L294.4 422.7 294.4 422.7zM389 422.7l0-25.4-41.6 0 0-69.6 37.1 0 0-24-37.1 0 0-53.4 41 0 0-25.5L304 224.8l0 198L389 422.8 389 422.7zM568.6 224.7 533 224.7l-14.6 91.4-11.9-91.4-49 0-14.9 91.4-11-91.4-39.1 0 24.6 198 44.4 0 14.7-109.2 15.6 109.2 51.5 0L568.6 224.7 568.6 224.7zM573.9 343.4l0 45.1c0 23.9 16.1 35.9 48.6 35.9 33.6 0 50.4-13.1 50.4-39.5l0-25.3c0-8.7-2.5-16.6-7.4-23.5-4.9-6.9-16.4-19-34.5-36.4-9.8-9.8-14.7-18.3-14.7-25.7l-0.8-12.9c0-7.6 2.6-11.5 7.6-11.5 4.3 0 6.5 2 6.5 5.9l0 36.4 39.6 0L669.2 258c0-23.4-15-35.1-45-35.1-33.5 0-50.2 12.8-50.2 38.5l0 22.2c0 7.4 2.2 14.1 6.7 20.3 4.5 6.2 16 18.2 34.6 36.2 9.6 9.6 14.3 18.1 14.3 25.3l0 23.5c0 4.5-2.6 6.8-7.9 6.8-5.4 0-8.2-2.3-8.2-6.8l0-45.4L573.9 343.5 573.9 343.4zM831.8 124.4l0 683.8c0 15.5 12.6 28.1 28.1 28.1 15.5 0 28.1-12.6 28.1-28.1L888 124.4c0-15.5-12.6-28.1-28.1-28.1C844.4 96.3 831.8 108.9 831.8 124.4L831.8 124.4zM740.6 135.9 110 135.9l0 669-0.1 0c0.1 31.4 7.4 51.9 20.1 64 12.3 11.8 31.2 17.2 54.8 18.3l1.1 0 577.3 0c-15.1-22.5-22.9-51.4-22.5-87.2-0.1-0.7-0.1-1.3-0.1-2L740.6 135.9z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhaozhuanjia-weixuanzhong" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M448 682.7008L512 917.2992l64-234.7008-64-63.8976-64 64zM768 469.2992h-28.5696c31.3344-48.4352 49.8688-107.1104 49.8688-170.7008C789.2992 133.7344 665.1904 0 512 0S234.7008 133.7344 234.7008 298.7008c0 63.488 18.5344 122.2656 49.8688 170.7008H256c-117.8624 0-213.2992 95.5392-213.2992 213.2992v128C42.7008 928.5632 138.24 1024 256 1024h490.7008v-42.7008H256c-94.208 0-170.7008-76.3904-170.7008-170.7008v-128C85.2992 588.3904 161.792 512 256 512h62.0544c49.9712 52.736 118.3744 85.2992 193.9456 85.2992s143.872-32.5632 193.9456-85.2992H768c94.208 0 170.7008 76.3904 170.7008 170.7008v106.7008h42.7008V682.7008c-0.1024-117.8624-95.5392-213.4016-213.4016-213.4016z m-256 85.4016c-129.6384 0-234.7008-114.5856-234.7008-256s105.0624-256 234.7008-256 234.7008 114.5856 234.7008 256-105.0624 256-234.7008 256z m359.0144 329.216c-1.8432-1.6384-4.5056-2.048-7.4752-1.8432 20.2752-25.4976 32.3584-57.6512 32.3584-92.672 0-82.432-66.8672-149.2992-149.2992-149.2992-82.432 0-149.2992 66.8672-149.2992 149.2992 0 82.432 66.8672 149.2992 149.2992 149.2992 35.0208 0 67.072-12.0832 92.5696-32.256 0.2048 2.1504 0.8192 4.096 2.4576 5.4272l71.5776 74.6496c5.12 4.5056 15.872 1.8432 24.064-5.8368 8.0896-7.68 10.5472-17.6128 5.4272-22.1184l-71.68-74.6496zM746.7008 896c-58.88 0-106.5984-47.7184-106.5984-106.5984 0-58.88 47.7184-106.5984 106.5984-106.5984 58.88 0 106.5984 47.7184 106.5984 106.5984 0 58.88-47.7184 106.5984-106.5984 106.5984z" fill="#231815" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
