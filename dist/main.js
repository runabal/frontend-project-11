/*! For license information please see main.js.LICENSE.txt */
(() => {
  const t = {
    285: (t, e, r) => {
      r.d(e, { Z: () => F });
      const o = r(81);
      const i = r.n(o);
      const a = r(645);
      const n = r.n(a);
      const s = r(667);
      const l = r.n(s);
      const d = new URL(r(770), r.b);
      const m = new URL(r(199), r.b);
      const p = new URL(r(204), r.b);
      const c = new URL(r(931), r.b);
      const b = new URL(r(486), r.b);
      const g = new URL(r(609), r.b);
      const f = new URL(r(469), r.b);
      const h = new URL(r(122), r.b);
      const u = new URL(r(144), r.b);
      const v = new URL(r(217), r.b);
      const x = new URL(r(956), r.b);
      const w = new URL(r(460), r.b);
      const y = new URL(r(740), r.b);
      const _ = new URL(r(254), r.b);
      const k = new URL(r(647), r.b);
      const z = new URL(r(692), r.b);
      const A = n()(i());
      const E = l()(d);
      const C = l()(m);
      const T = l()(p);
      const j = l()(c);
      const O = l()(b);
      const L = l()(g);
      const S = l()(f);
      const D = l()(h);
      const I = l()(u);
      const $ = l()(v);
      const M = l()(x);
      const N = l()(w);
      const P = l()(y);
      const B = l()(_);
      const R = l()(k);
      const H = l()(z);
      A.push([
        t.id,
        `/*!\n * Bootstrap  v5.2.3 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff;--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, 0.175);--bs-border-radius: 0.375rem;--bs-border-radius-sm: 0.25rem;--bs-border-radius-lg: 0.5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-2xl: 2rem;--bs-border-radius-pill: 50rem;--bs-link-color: #0d6efd;--bs-link-hover-color: #0a58ca;--bs-code-color: #d63384;--bs-highlight-bg: #fff3cd}*,*::before,*::after{box-sizing:border-box}@media(prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + 0.9vw)}@media(min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + 0.6vw)}@media(min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + 0.3vw)}@media(min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:0.875em}mark,.mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:0.75em;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:0.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:0.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:0.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + 0.3vw);line-height:inherit}@media(min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:0.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:0.875em;color:#6c757d}.blockquote-footer::before{content:"— "}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:0.875em;color:#6c757d}.container,.container-fluid,.container-xxl,.container-xl,.container-lg,.container-md,.container-sm{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}@media(min-width: 1400px){.container-xxl,.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--bs-gutter-y));margin-right:calc(-0.5*var(--bs-gutter-x));margin-left:calc(-0.5*var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: 0.25rem}.g-1,.gy-1{--bs-gutter-y: 0.25rem}.g-2,.gx-2{--bs-gutter-x: 0.5rem}.g-2,.gy-2{--bs-gutter-y: 0.5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media(min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: 0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: 0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: 0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: 0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media(min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: 0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y: 0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x: 0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y: 0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media(min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: 0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: 0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: 0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: 0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media(min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: 0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: 0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: 0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: 0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media(min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: 0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: 0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: 0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: 0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-color: var(--bs-body-color);--bs-table-bg: transparent;--bs-table-border-color: var(--bs-border-color);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--bs-body-color);--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: var(--bs-body-color);--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(even){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color: #000;--bs-table-bg: #cfe2ff;--bs-table-border-color: #bacbe6;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color: #000;--bs-table-bg: #e2e3e5;--bs-table-border-color: #cbccce;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color: #000;--bs-table-bg: #d1e7dd;--bs-table-border-color: #bcd0c7;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color: #000;--bs-table-bg: #cff4fc;--bs-table-border-color: #badce3;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color: #000;--bs-table-bg: #fff3cd;--bs-table-border-color: #e6dbb9;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color: #000;--bs-table-bg: #f8d7da;--bs-table-border-color: #dfc2c4;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color: #000;--bs-table-bg: #f8f9fa;--bs-table-border-color: #dfe0e1;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color: #fff;--bs-table-bg: #212529;--bs-table-border-color: #373b3e;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem}.form-text{margin-top:.25rem;font-size:0.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-0.375rem -0.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-0.25rem -0.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-0.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + 0.75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + 0.75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0 !important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + 0.5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(${E});background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(${C})}.form-check-input:checked[type=radio]{background-image:url(${T})}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(${j})}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(${O});background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(${L})}.form-switch .form-check-input:checked{background-position:right center;background-image:url(${S})}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid rgba(0,0,0,0);transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control::placeholder,.form-floating>.form-control-plaintext::placeholder{color:rgba(0,0,0,0)}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill,.form-floating>.form-control-plaintext:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-control-plaintext~label,.form-floating>.form-select~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select,.input-group>.form-floating{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-floating:focus-within{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + 0.75rem);background-image:url(${D});background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(${E}),url(${D});background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-control-color:valid,.form-control-color.is-valid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group>.form-control:not(:focus):valid,.input-group>.form-control:not(:focus).is-valid,.was-validated .input-group>.form-select:not(:focus):valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.input-group>.form-floating:not(:focus-within).is-valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(${I});background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(${E}),url(${I});background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-control-color:invalid,.form-control-color.is-invalid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group>.form-control:not(:focus):invalid,.input-group>.form-control:not(:focus).is-invalid,.was-validated .input-group>.form-select:not(:focus):invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.input-group>.form-floating:not(:focus-within).is-invalid{z-index:4}.btn{--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: #212529;--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-hover-border-color: transparent;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,:not(.btn-check)+.btn:active,.btn:first-child:active,.btn.active,.btn.show{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,:not(.btn-check)+.btn:active:focus-visible,.btn:first-child:active:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0b5ed7;--bs-btn-hover-border-color: #0a58ca;--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0a58ca;--bs-btn-active-border-color: #0a53be;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.btn-secondary{--bs-btn-color: #fff;--bs-btn-bg: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #5c636a;--bs-btn-hover-border-color: #565e64;--bs-btn-focus-shadow-rgb: 130, 138, 145;--bs-btn-active-color: #fff;--bs-btn-active-bg: #565e64;--bs-btn-active-border-color: #51585e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #6c757d;--bs-btn-disabled-border-color: #6c757d}.btn-success{--bs-btn-color: #fff;--bs-btn-bg: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}.btn-info{--bs-btn-color: #000;--bs-btn-bg: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #31d2f2;--bs-btn-hover-border-color: #25cff2;--bs-btn-focus-shadow-rgb: 11, 172, 204;--bs-btn-active-color: #000;--bs-btn-active-bg: #3dd5f3;--bs-btn-active-border-color: #25cff2;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #0dcaf0;--bs-btn-disabled-border-color: #0dcaf0}.btn-warning{--bs-btn-color: #000;--bs-btn-bg: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffca2c;--bs-btn-hover-border-color: #ffc720;--bs-btn-focus-shadow-rgb: 217, 164, 6;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffcd39;--bs-btn-active-border-color: #ffc720;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #ffc107;--bs-btn-disabled-border-color: #ffc107}.btn-danger{--bs-btn-color: #fff;--bs-btn-bg: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #bb2d3b;--bs-btn-hover-border-color: #b02a37;--bs-btn-focus-shadow-rgb: 225, 83, 97;--bs-btn-active-color: #fff;--bs-btn-active-bg: #b02a37;--bs-btn-active-border-color: #a52834;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #dc3545;--bs-btn-disabled-border-color: #dc3545}.btn-light{--bs-btn-color: #000;--bs-btn-bg: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d3d4d5;--bs-btn-hover-border-color: #c6c7c8;--bs-btn-focus-shadow-rgb: 211, 212, 213;--bs-btn-active-color: #000;--bs-btn-active-bg: #c6c7c8;--bs-btn-active-border-color: #babbbc;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f8f9fa;--bs-btn-disabled-border-color: #f8f9fa}.btn-dark{--bs-btn-color: #fff;--bs-btn-bg: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #424649;--bs-btn-hover-border-color: #373b3e;--bs-btn-focus-shadow-rgb: 66, 70, 73;--bs-btn-active-color: #fff;--bs-btn-active-bg: #4d5154;--bs-btn-active-border-color: #373b3e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #212529;--bs-btn-disabled-border-color: #212529}.btn-outline-primary{--bs-btn-color: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0d6efd;--bs-btn-hover-border-color: #0d6efd;--bs-btn-focus-shadow-rgb: 13, 110, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0d6efd;--bs-btn-active-border-color: #0d6efd;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0d6efd;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0d6efd;--bs-gradient: none}.btn-outline-secondary{--bs-btn-color: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #6c757d;--bs-btn-hover-border-color: #6c757d;--bs-btn-focus-shadow-rgb: 108, 117, 125;--bs-btn-active-color: #fff;--bs-btn-active-bg: #6c757d;--bs-btn-active-border-color: #6c757d;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #6c757d;--bs-gradient: none}.btn-outline-success{--bs-btn-color: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #198754;--bs-btn-hover-border-color: #198754;--bs-btn-focus-shadow-rgb: 25, 135, 84;--bs-btn-active-color: #fff;--bs-btn-active-bg: #198754;--bs-btn-active-border-color: #198754;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #198754;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #198754;--bs-gradient: none}.btn-outline-info{--bs-btn-color: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #0dcaf0;--bs-btn-hover-border-color: #0dcaf0;--bs-btn-focus-shadow-rgb: 13, 202, 240;--bs-btn-active-color: #000;--bs-btn-active-bg: #0dcaf0;--bs-btn-active-border-color: #0dcaf0;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0dcaf0;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0dcaf0;--bs-gradient: none}.btn-outline-warning{--bs-btn-color: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffc107;--bs-btn-hover-border-color: #ffc107;--bs-btn-focus-shadow-rgb: 255, 193, 7;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffc107;--bs-btn-active-border-color: #ffc107;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #ffc107;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #ffc107;--bs-gradient: none}.btn-outline-danger{--bs-btn-color: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #dc3545;--bs-btn-hover-border-color: #dc3545;--bs-btn-focus-shadow-rgb: 220, 53, 69;--bs-btn-active-color: #fff;--bs-btn-active-bg: #dc3545;--bs-btn-active-border-color: #dc3545;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #dc3545;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #dc3545;--bs-gradient: none}.btn-outline-light{--bs-btn-color: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #f8f9fa;--bs-btn-hover-border-color: #f8f9fa;--bs-btn-focus-shadow-rgb: 248, 249, 250;--bs-btn-active-color: #000;--bs-btn-active-bg: #f8f9fa;--bs-btn-active-border-color: #f8f9fa;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #f8f9fa;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #f8f9fa;--bs-gradient: none}.btn-outline-dark{--bs-btn-color: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #212529;--bs-btn-hover-border-color: #212529;--bs-btn-focus-shadow-rgb: 33, 37, 41;--bs-btn-active-color: #fff;--bs-btn-active-bg: #212529;--bs-btn-active-border-color: #212529;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #212529;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #212529;--bs-gradient: none}.btn-link{--bs-btn-font-weight: 400;--bs-btn-color: var(--bs-link-color);--bs-btn-bg: transparent;--bs-btn-border-color: transparent;--bs-btn-hover-color: var(--bs-link-hover-color);--bs-btn-hover-border-color: transparent;--bs-btn-active-color: var(--bs-link-hover-color);--bs-btn-active-border-color: transparent;--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-focus-shadow-rgb: 49, 132, 253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-lg,.btn-group-lg>.btn{--bs-btn-padding-y: 0.5rem;--bs-btn-padding-x: 1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius: 0.5rem}.btn-sm,.btn-group-sm>.btn{--bs-btn-padding-y: 0.25rem;--bs-btn-padding-x: 0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius: 0.25rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.collapse-horizontal{transition:none}}.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex: 1000;--bs-dropdown-min-width: 10rem;--bs-dropdown-padding-x: 0;--bs-dropdown-padding-y: 0.5rem;--bs-dropdown-spacer: 0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color: #212529;--bs-dropdown-bg: #fff;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-border-radius: 0.375rem;--bs-dropdown-border-width: 1px;--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y: 0.5rem;--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color: #212529;--bs-dropdown-link-hover-color: #1e2125;--bs-dropdown-link-hover-bg: #e9ecef;--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-item-padding-x: 1rem;--bs-dropdown-item-padding-y: 0.25rem;--bs-dropdown-header-color: #6c757d;--bs-dropdown-header-padding-x: 1rem;--bs-dropdown-header-padding-y: 0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color: #dee2e6;--bs-dropdown-bg: #343a40;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color: #dee2e6;--bs-dropdown-link-hover-color: #fff;--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-header-color: #adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>:not(.btn-check:first-child)+.btn,.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn~.btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x: 1rem;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-link-color);--bs-nav-link-hover-color: var(--bs-link-hover-color);--bs-nav-link-disabled-color: #6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-color: #dee2e6;--bs-nav-tabs-border-radius: 0.375rem;--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color: #495057;--bs-nav-tabs-link-active-bg: #fff;--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1*var(--bs-nav-tabs-border-width));background:none;border:var(--bs-nav-tabs-border-width) solid rgba(0,0,0,0);border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1*var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius: 0.375rem;--bs-nav-pills-link-active-color: #fff;--bs-nav-pills-link-active-bg: #0d6efd}.nav-pills .nav-link{background:none;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x: 0;--bs-navbar-padding-y: 0.5rem;--bs-navbar-color: rgba(0, 0, 0, 0.55);--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);--bs-navbar-active-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y: 0.3125rem;--bs-navbar-brand-margin-end: 1rem;--bs-navbar-brand-font-size: 1.25rem;--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x: 0.5rem;--bs-navbar-toggler-padding-y: 0.25rem;--bs-navbar-toggler-padding-x: 0.75rem;--bs-navbar-toggler-font-size: 1.25rem;--bs-navbar-toggler-icon-bg: url(${$});--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius: 0.375rem;--bs-navbar-toggler-focus-width: 0.25rem;--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x: 0;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-navbar-color);--bs-nav-link-hover-color: var(--bs-navbar-hover-color);--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .show>.nav-link,.navbar-nav .nav-link.active{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:hover,.navbar-text a:focus{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:rgba(0,0,0,0);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media(prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media(min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color: rgba(255, 255, 255, 0.55);--bs-navbar-hover-color: rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);--bs-navbar-active-color: #fff;--bs-navbar-brand-color: #fff;--bs-navbar-brand-hover-color: #fff;--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg: url(${M})}.card{--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-border-width: 1px;--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: 0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(0.375rem - 1px);--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: #fff;--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-0.5*var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-bottom:calc(-1*var(--bs-card-cap-padding-y));margin-left:calc(-0.5*var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-left:calc(-0.5*var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion{--bs-accordion-color: #212529;--bs-accordion-bg: #fff;--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;--bs-accordion-border-color: var(--bs-border-color);--bs-accordion-border-width: 1px;--bs-accordion-border-radius: 0.375rem;--bs-accordion-inner-border-radius: calc(0.375rem - 1px);--bs-accordion-btn-padding-x: 1.25rem;--bs-accordion-btn-padding-y: 1rem;--bs-accordion-btn-color: #212529;--bs-accordion-btn-bg: var(--bs-accordion-bg);--bs-accordion-btn-icon: url(${N});--bs-accordion-btn-icon-width: 1.25rem;--bs-accordion-btn-icon-transform: rotate(-180deg);--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;--bs-accordion-btn-active-icon: url(${P});--bs-accordion-btn-focus-border-color: #86b7fe;--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x: 1.25rem;--bs-accordion-body-padding-y: 1rem;--bs-accordion-active-color: #0c63e4;--bs-accordion-active-bg: #e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media(prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1*var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:"";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media(prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x: 0;--bs-breadcrumb-padding-y: 0;--bs-breadcrumb-margin-bottom: 1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color: #6c757d;--bs-breadcrumb-item-padding-x: 0.5rem;--bs-breadcrumb-item-active-color: #6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x: 0.75rem;--bs-pagination-padding-y: 0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color: var(--bs-link-color);--bs-pagination-bg: #fff;--bs-pagination-border-width: 1px;--bs-pagination-border-color: #dee2e6;--bs-pagination-border-radius: 0.375rem;--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-hover-bg: #e9ecef;--bs-pagination-hover-border-color: #dee2e6;--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-focus-bg: #e9ecef;--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color: #fff;--bs-pagination-active-bg: #0d6efd;--bs-pagination-active-border-color: #0d6efd;--bs-pagination-disabled-color: #6c757d;--bs-pagination-disabled-bg: #fff;--bs-pagination-disabled-border-color: #dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.page-link.active,.active>.page-link{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.page-link.disabled,.disabled>.page-link{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x: 1.5rem;--bs-pagination-padding-y: 0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius: 0.5rem}.pagination-sm{--bs-pagination-padding-x: 0.5rem;--bs-pagination-padding-y: 0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius: 0.25rem}.badge{--bs-badge-padding-x: 0.65em;--bs-badge-padding-y: 0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight: 700;--bs-badge-color: #fff;--bs-badge-border-radius: 0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg: transparent;--bs-alert-padding-x: 1rem;--bs-alert-padding-y: 1rem;--bs-alert-margin-bottom: 1rem;--bs-alert-color: inherit;--bs-alert-border-color: transparent;--bs-alert-border: 1px solid var(--bs-alert-border-color);--bs-alert-border-radius: 0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color: #084298;--bs-alert-bg: #cfe2ff;--bs-alert-border-color: #b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color: #41464b;--bs-alert-bg: #e2e3e5;--bs-alert-border-color: #d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color: #0f5132;--bs-alert-bg: #d1e7dd;--bs-alert-border-color: #badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color: #055160;--bs-alert-bg: #cff4fc;--bs-alert-border-color: #b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color: #664d03;--bs-alert-bg: #fff3cd;--bs-alert-border-color: #ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color: #842029;--bs-alert-bg: #f8d7da;--bs-alert-border-color: #f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color: #636464;--bs-alert-bg: #fefefe;--bs-alert-border-color: #fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color: #141619;--bs-alert-bg: #d3d3d4;--bs-alert-border-color: #bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height: 1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg: #e9ecef;--bs-progress-border-radius: 0.375rem;--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color: #fff;--bs-progress-bar-bg: #0d6efd;--bs-progress-bar-transition: width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color: #212529;--bs-list-group-bg: #fff;--bs-list-group-border-color: rgba(0, 0, 0, 0.125);--bs-list-group-border-width: 1px;--bs-list-group-border-radius: 0.375rem;--bs-list-group-item-padding-x: 1rem;--bs-list-group-item-padding-y: 0.5rem;--bs-list-group-action-color: #495057;--bs-list-group-action-hover-color: #495057;--bs-list-group-action-hover-bg: #f8f9fa;--bs-list-group-action-active-color: #212529;--bs-list-group-action-active-bg: #e9ecef;--bs-list-group-disabled-color: #6c757d;--bs-list-group-disabled-bg: #fff;--bs-list-group-active-color: #fff;--bs-list-group-active-bg: #0d6efd;--bs-list-group-active-border-color: #0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1*var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1*var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:rgba(0,0,0,0) url(${B}) center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-zindex: 1090;--bs-toast-padding-x: 0.75rem;--bs-toast-padding-y: 0.5rem;--bs-toast-spacing: 1.5rem;--bs-toast-max-width: 350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg: rgba(255, 255, 255, 0.85);--bs-toast-border-width: 1px;--bs-toast-border-color: var(--bs-border-color-translucent);--bs-toast-border-radius: 0.375rem;--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color: #6c757d;--bs-toast-header-bg: rgba(255, 255, 255, 0.85);--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex: 1090;position:absolute;z-index:var(--bs-toast-zindex);width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-0.5*var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex: 1055;--bs-modal-width: 500px;--bs-modal-padding: 1rem;--bs-modal-margin: 0.5rem;--bs-modal-color: ;--bs-modal-bg: #fff;--bs-modal-border-color: var(--bs-border-color-translucent);--bs-modal-border-width: 1px;--bs-modal-border-radius: 0.5rem;--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius: calc(0.5rem - 1px);--bs-modal-header-padding-x: 1rem;--bs-modal-header-padding-y: 1rem;--bs-modal-header-padding: 1rem 1rem;--bs-modal-header-border-color: var(--bs-border-color);--bs-modal-header-border-width: 1px;--bs-modal-title-line-height: 1.5;--bs-modal-footer-gap: 0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color: var(--bs-border-color);--bs-modal-footer-border-width: 1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex: 1050;--bs-backdrop-bg: #000;--bs-backdrop-opacity: 0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5);margin:calc(-0.5*var(--bs-modal-header-padding-y)) calc(-0.5*var(--bs-modal-header-padding-x)) calc(-0.5*var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media(min-width: 576px){.modal{--bs-modal-margin: 1.75rem;--bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width: 300px}}@media(min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width: 800px}}@media(min-width: 1200px){.modal-xl{--bs-modal-width: 1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media(max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media(max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media(max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media(max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media(max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex: 1080;--bs-tooltip-max-width: 200px;--bs-tooltip-padding-x: 0.5rem;--bs-tooltip-padding-y: 0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color: #fff;--bs-tooltip-bg: #000;--bs-tooltip-border-radius: 0.375rem;--bs-tooltip-opacity: 0.9;--bs-tooltip-arrow-width: 0.8rem;--bs-tooltip-arrow-height: 0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:"";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex: 1070;--bs-popover-max-width: 276px;--bs-popover-font-size:0.875rem;--bs-popover-bg: #fff;--bs-popover-border-width: 1px;--bs-popover-border-color: var(--bs-border-color-translucent);--bs-popover-border-radius: 0.5rem;--bs-popover-inner-border-radius: calc(0.5rem - 1px);--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x: 1rem;--bs-popover-header-padding-y: 0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg: #f0f0f0;--bs-popover-body-padding-x: 1rem;--bs-popover-body-padding-y: 1rem;--bs-popover-body-color: #212529;--bs-popover-arrow-width: 1rem;--bs-popover-arrow-height: 0.5rem;--bs-popover-arrow-border: var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:"";border-color:rgba(0,0,0,0);border-style:solid;border-width:0}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow{bottom:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow{left:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow{top:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-0.5*var(--bs-popover-arrow-width));content:"";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow{right:calc(-1*(var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(${R})}.carousel-control-next-icon{background-image:url(${H})}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-grow,.spinner-border{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-border-width: 0.25em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:rgba(0,0,0,0)}.spinner-border-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem;--bs-spinner-border-width: 0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed: 1.5s}}.offcanvas,.offcanvas-xxl,.offcanvas-xl,.offcanvas-lg,.offcanvas-md,.offcanvas-sm{--bs-offcanvas-zindex: 1045;--bs-offcanvas-width: 400px;--bs-offcanvas-height: 30vh;--bs-offcanvas-padding-x: 1rem;--bs-offcanvas-padding-y: 1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg: #fff;--bs-offcanvas-border-width: 1px;--bs-offcanvas-border-color: var(--bs-border-color-translucent);--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(max-width: 575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 575.98px)and (prefers-reduced-motion: reduce){.offcanvas-sm{transition:none}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.showing,.offcanvas-sm.show:not(.hiding){transform:none}.offcanvas-sm.showing,.offcanvas-sm.hiding,.offcanvas-sm.show{visibility:visible}}@media(min-width: 576px){.offcanvas-sm{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 767.98px)and (prefers-reduced-motion: reduce){.offcanvas-md{transition:none}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.showing,.offcanvas-md.show:not(.hiding){transform:none}.offcanvas-md.showing,.offcanvas-md.hiding,.offcanvas-md.show{visibility:visible}}@media(min-width: 768px){.offcanvas-md{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 991.98px)and (prefers-reduced-motion: reduce){.offcanvas-lg{transition:none}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.showing,.offcanvas-lg.show:not(.hiding){transform:none}.offcanvas-lg.showing,.offcanvas-lg.hiding,.offcanvas-lg.show{visibility:visible}}@media(min-width: 992px){.offcanvas-lg{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1199.98px)and (prefers-reduced-motion: reduce){.offcanvas-xl{transition:none}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.showing,.offcanvas-xl.show:not(.hiding){transform:none}.offcanvas-xl.showing,.offcanvas-xl.hiding,.offcanvas-xl.show{visibility:visible}}@media(min-width: 1200px){.offcanvas-xl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1399.98px)and (prefers-reduced-motion: reduce){.offcanvas-xxl{transition:none}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.showing,.offcanvas-xxl.show:not(.hiding){transform:none}.offcanvas-xxl.showing,.offcanvas-xxl.hiding,.offcanvas-xxl.show{visibility:visible}}@media(min-width: 1400px){.offcanvas-xxl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.showing,.offcanvas.show:not(.hiding){transform:none}.offcanvas.showing,.offcanvas.hiding,.offcanvas.show{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5);margin-top:calc(-0.5*var(--bs-offcanvas-padding-y));margin-right:calc(-0.5*var(--bs-offcanvas-padding-x));margin-bottom:calc(-0.5*var(--bs-offcanvas-padding-y))}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:""}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{mask-image:linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:""}.text-bg-primary{color:#fff !important;background-color:RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important}.text-bg-secondary{color:#fff !important;background-color:RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important}.text-bg-success{color:#fff !important;background-color:RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important}.text-bg-info{color:#000 !important;background-color:RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important}.text-bg-warning{color:#000 !important;background-color:RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important}.text-bg-danger{color:#fff !important;background-color:RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important}.text-bg-light{color:#000 !important;background-color:RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important}.text-bg-dark{color:#fff !important;background-color:RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important}.link-primary{color:#0d6efd !important}.link-primary:hover,.link-primary:focus{color:#0a58ca !important}.link-secondary{color:#6c757d !important}.link-secondary:hover,.link-secondary:focus{color:#565e64 !important}.link-success{color:#198754 !important}.link-success:hover,.link-success:focus{color:#146c43 !important}.link-info{color:#0dcaf0 !important}.link-info:hover,.link-info:focus{color:#3dd5f3 !important}.link-warning{color:#ffc107 !important}.link-warning:hover,.link-warning:focus{color:#ffcd39 !important}.link-danger{color:#dc3545 !important}.link-danger:hover,.link-danger:focus{color:#b02a37 !important}.link-light{color:#f8f9fa !important}.link-light:hover,.link-light:focus{color:#f9fafb !important}.link-dark{color:#212529 !important}.link-dark:hover,.link-dark:focus{color:#1a1e21 !important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: 75%}.ratio-16x9{--bs-aspect-ratio: 56.25%}.ratio-21x9{--bs-aspect-ratio: 42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}.sticky-bottom{position:sticky;bottom:0;z-index:1020}@media(min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.opacity-0{opacity:0 !important}.opacity-25{opacity:.25 !important}.opacity-50{opacity:.5 !important}.opacity-75{opacity:.75 !important}.opacity-100{opacity:1 !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-0{border:0 !important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-top-0{border-top:0 !important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-start-0{border-left:0 !important}.border-primary{--bs-border-opacity: 1;border-color:rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important}.border-secondary{--bs-border-opacity: 1;border-color:rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important}.border-success{--bs-border-opacity: 1;border-color:rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important}.border-info{--bs-border-opacity: 1;border-color:rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important}.border-warning{--bs-border-opacity: 1;border-color:rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important}.border-danger{--bs-border-opacity: 1;border-color:rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important}.border-light{--bs-border-opacity: 1;border-color:rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important}.border-dark{--bs-border-opacity: 1;border-color:rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important}.border-white{--bs-border-opacity: 1;border-color:rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important}.border-1{--bs-border-width: 1px}.border-2{--bs-border-width: 2px}.border-3{--bs-border-width: 3px}.border-4{--bs-border-width: 4px}.border-5{--bs-border-width: 5px}.border-opacity-10{--bs-border-opacity: 0.1}.border-opacity-25{--bs-border-opacity: 0.25}.border-opacity-50{--bs-border-opacity: 0.5}.border-opacity-75{--bs-border-opacity: 0.75}.border-opacity-100{--bs-border-opacity: 1}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + 0.9vw) !important}.fs-3{font-size:calc(1.3rem + 0.6vw) !important}.fs-4{font-size:calc(1.275rem + 0.3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-semibold{font-weight:600 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important}.text-secondary{--bs-text-opacity: 1;color:rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important}.text-success{--bs-text-opacity: 1;color:rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important}.text-info{--bs-text-opacity: 1;color:rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important}.text-warning{--bs-text-opacity: 1;color:rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important}.text-danger{--bs-text-opacity: 1;color:rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important}.text-light{--bs-text-opacity: 1;color:rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important}.text-dark{--bs-text-opacity: 1;color:rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important}.text-black{--bs-text-opacity: 1;color:rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important}.text-white{--bs-text-opacity: 1;color:rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important}.text-body{--bs-text-opacity: 1;color:rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important}.text-muted{--bs-text-opacity: 1;color:#6c757d !important}.text-black-50{--bs-text-opacity: 1;color:rgba(0,0,0,.5) !important}.text-white-50{--bs-text-opacity: 1;color:rgba(255,255,255,.5) !important}.text-reset{--bs-text-opacity: 1;color:inherit !important}.text-opacity-25{--bs-text-opacity: 0.25}.text-opacity-50{--bs-text-opacity: 0.5}.text-opacity-75{--bs-text-opacity: 0.75}.text-opacity-100{--bs-text-opacity: 1}.bg-primary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important}.bg-secondary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important}.bg-success{--bs-bg-opacity: 1;background-color:rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important}.bg-info{--bs-bg-opacity: 1;background-color:rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important}.bg-warning{--bs-bg-opacity: 1;background-color:rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important}.bg-danger{--bs-bg-opacity: 1;background-color:rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important}.bg-light{--bs-bg-opacity: 1;background-color:rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important}.bg-dark{--bs-bg-opacity: 1;background-color:rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important}.bg-black{--bs-bg-opacity: 1;background-color:rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important}.bg-white{--bs-bg-opacity: 1;background-color:rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important}.bg-body{--bs-bg-opacity: 1;background-color:rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important}.bg-transparent{--bs-bg-opacity: 1;background-color:rgba(0,0,0,0) !important}.bg-opacity-10{--bs-bg-opacity: 0.1}.bg-opacity-25{--bs-bg-opacity: 0.25}.bg-opacity-50{--bs-bg-opacity: 0.5}.bg-opacity-75{--bs-bg-opacity: 0.75}.bg-opacity-100{--bs-bg-opacity: 1}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:var(--bs-border-radius) !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:var(--bs-border-radius-sm) !important}.rounded-2{border-radius:var(--bs-border-radius) !important}.rounded-3{border-radius:var(--bs-border-radius-lg) !important}.rounded-4{border-radius:var(--bs-border-radius-xl) !important}.rounded-5{border-radius:var(--bs-border-radius-2xl) !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:var(--bs-border-radius-pill) !important}.rounded-top{border-top-left-radius:var(--bs-border-radius) !important;border-top-right-radius:var(--bs-border-radius) !important}.rounded-end{border-top-right-radius:var(--bs-border-radius) !important;border-bottom-right-radius:var(--bs-border-radius) !important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius) !important;border-bottom-left-radius:var(--bs-border-radius) !important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius) !important;border-top-left-radius:var(--bs-border-radius) !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media(min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media(min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media(min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}`,
        '',
      ]);
      const F = A;
    },
    645: (t) => {
      t.exports = function (t) {
        const e = [];
        return (
          (e.toString = function () {
            return this.map((e) => {
              let r = '';
              const o = void 0 !== e[5];
              return (
                e[4] && (r += '@supports ('.concat(e[4], ') {')),
                e[2] && (r += '@media '.concat(e[2], ' {')),
                o &&
                  (r += '@layer'.concat(
                    e[5].length > 0 ? ' '.concat(e[5]) : '',
                    ' {'
                  )),
                (r += t(e)),
                o && (r += '}'),
                e[2] && (r += '}'),
                e[4] && (r += '}'),
                r
              );
            }).join('');
          }),
          (e.i = function (t, r, o, i, a) {
            typeof t === 'string' && (t = [[null, t, void 0]]);
            const n = {};
            if (o) {
              for (let s = 0; s < this.length; s++) {
                const l = this[s][0];
                l != null && (n[l] = !0);
              }
            }
            for (let d = 0; d < t.length; d++) {
              const m = [].concat(t[d]);
              (o && n[m[0]]) ||
                (void 0 !== a &&
                  (void 0 === m[5] ||
                    (m[1] = '@layer'
                      .concat(m[5].length > 0 ? ' '.concat(m[5]) : '', ' {')
                      .concat(m[1], '}')),
                  (m[5] = a)),
                r &&
                  (m[2]
                    ? ((m[1] = '@media '.concat(m[2], ' {').concat(m[1], '}')),
                      (m[2] = r))
                    : (m[2] = r)),
                i &&
                  (m[4]
                    ? ((m[1] = '@supports ('
                        .concat(m[4], ') {')
                        .concat(m[1], '}')),
                      (m[4] = i))
                    : (m[4] = ''.concat(i))),
                e.push(m));
            }
          }),
          e
        );
      };
    },
    667: (t) => {
      t.exports = function (t, e) {
        return (
          e || (e = {}),
          t
            ? ((t = String(t.__esModule ? t.default : t)),
              /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
              e.hash && (t += e.hash),
              /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                : t)
            : t
        );
      };
    },
    81: (t) => {
      t.exports = function (t) {
        return t[1];
      };
    },
    379: (t) => {
      const e = [];
      function r(t) {
        for (var r = -1, o = 0; o < e.length; o++) {
          if (e[o].identifier === t) {
            r = o;
            break;
          }
        }
        return r;
      }
      function o(t, o) {
        for (var a = {}, n = [], s = 0; s < t.length; s++) {
          const l = t[s];
          const d = o.base ? l[0] + o.base : l[0];
          const m = a[d] || 0;
          const p = ''.concat(d, ' ').concat(m);
          a[d] = m + 1;
          const c = r(p);
          const b = {
            css: l[1],
            media: l[2],
            sourceMap: l[3],
            supports: l[4],
            layer: l[5],
          };
          if (c !== -1) e[c].references++, e[c].updater(b);
          else {
            const g = i(b, o);
            (o.byIndex = s),
              e.splice(s, 0, { identifier: p, updater: g, references: 1 });
          }
          n.push(p);
        }
        return n;
      }
      function i(t, e) {
        const r = e.domAPI(e);
        return (
          r.update(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap &&
                e.supports === t.supports &&
                e.layer === t.layer
              )
                return;
              r.update((t = e));
            } else r.remove();
          }
        );
      }
      t.exports = function (t, i) {
        let a = o((t = t || []), (i = i || {}));
        return function (t) {
          t = t || [];
          for (let n = 0; n < a.length; n++) {
            const s = r(a[n]);
            e[s].references--;
          }
          for (var l = o(t, i), d = 0; d < a.length; d++) {
            const m = r(a[d]);
            e[m].references === 0 && (e[m].updater(), e.splice(m, 1));
          }
          a = l;
        };
      };
    },
    569: (t) => {
      const e = {};
      t.exports = function (t, r) {
        const o = (function (t) {
          if (void 0 === e[t]) {
            let r = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            ) {
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            }
            e[t] = r;
          }
          return e[t];
        })(t);
        if (!o) {
          throw new Error(
            'Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.'
          );
        }
        o.appendChild(r);
      };
    },
    216: (t) => {
      t.exports = function (t) {
        const e = document.createElement('style');
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    565: (t, e, r) => {
      t.exports = function (t) {
        const e = r.nc;
        e && t.setAttribute('nonce', e);
      };
    },
    795: (t) => {
      t.exports = function (t) {
        if (typeof document === 'undefined')
          return { update() {}, remove() {} };
        const e = t.insertStyleElement(t);
        return {
          update(r) {
            !(function (t, e, r) {
              let o = '';
              r.supports && (o += '@supports ('.concat(r.supports, ') {')),
                r.media && (o += '@media '.concat(r.media, ' {'));
              const i = void 0 !== r.layer;
              i &&
                (o += '@layer'.concat(
                  r.layer.length > 0 ? ' '.concat(r.layer) : '',
                  ' {'
                )),
                (o += r.css),
                i && (o += '}'),
                r.media && (o += '}'),
                r.supports && (o += '}');
              const a = r.sourceMap;
              a &&
                typeof btoa !== 'undefined' &&
                (o +=
                  '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    ' */'
                  )),
                e.styleTagTransform(o, t, e.options);
            })(e, t, r);
          },
          remove() {
            !(function (t) {
              if (t.parentNode === null) return !1;
              t.parentNode.removeChild(t);
            })(e);
          },
        };
      };
    },
    589: (t) => {
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    204: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e';
    },
    609: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e';
    },
    469: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e';
    },
    486: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e';
    },
    144: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e';
    },
    254: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e';
    },
    740: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e';
    },
    460: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e';
    },
    647: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e';
    },
    692: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e';
    },
    770: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e';
    },
    931: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e';
    },
    199: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e';
    },
    217: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e';
    },
    956: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e';
    },
    122: (t) => {
      t.exports =
        'data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e';
    },
  };
  const e = {};
  function r(o) {
    const i = e[o];
    if (void 0 !== i) return i.exports;
    const a = (e[o] = { id: o, exports: {} });
    return t[o](a, a.exports, r), a.exports;
  }
  (r.m = t),
    (r.n = (t) => {
      const e = t && t.__esModule ? () => t.default : () => t;
      return r.d(e, { a: e }), e;
    }),
    (r.d = (t, e) => {
      for (const o in e) {
        r.o(e, o) &&
          !r.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      }
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.b = document.baseURI || self.location.href),
    (r.nc = void 0),
    (() => {
      const t = {};
      r.r(t),
        r.d(t, {
          afterMain: () => $,
          afterRead: () => S,
          afterWrite: () => P,
          applyStyles: () => U,
          arrow: () => pt,
          auto: () => w,
          basePlacements: () => y,
          beforeMain: () => D,
          beforeRead: () => O,
          beforeWrite: () => M,
          bottom: () => u,
          clippingParents: () => z,
          computeStyles: () => ft,
          createPopper: () => qt,
          createPopperBase: () => Wt,
          createPopperLite: () => Ut,
          detectOverflow: () => Ot,
          end: () => k,
          eventListeners: () => ut,
          flip: () => Lt,
          hide: () => It,
          left: () => x,
          main: () => I,
          modifierPhases: () => B,
          offset: () => $t,
          placements: () => j,
          popper: () => E,
          popperGenerator: () => Ft,
          popperOffsets: () => Mt,
          preventOverflow: () => Nt,
          read: () => L,
          reference: () => C,
          right: () => v,
          start: () => _,
          top: () => h,
          variationPlacements: () => T,
          viewport: () => A,
          write: () => N,
        });
      const e = r(379);
      const o = r.n(e);
      const i = r(795);
      const a = r.n(i);
      const n = r(569);
      const s = r.n(n);
      const l = r(565);
      const d = r.n(l);
      const m = r(216);
      const p = r.n(m);
      const c = r(589);
      const b = r.n(c);
      const g = r(285);
      const f = {};
      (f.styleTagTransform = b()),
        (f.setAttributes = d()),
        (f.insert = s().bind(null, 'head')),
        (f.domAPI = a()),
        (f.insertStyleElement = p()),
        o()(g.Z, f),
        g.Z && g.Z.locals && g.Z.locals;
      var h = 'top';
      var u = 'bottom';
      var v = 'right';
      var x = 'left';
      var w = 'auto';
      var y = [h, u, v, x];
      var _ = 'start';
      var k = 'end';
      var z = 'clippingParents';
      var A = 'viewport';
      var E = 'popper';
      var C = 'reference';
      var T = y.reduce((t, e) => t.concat([`${e}-${_}`, `${e}-${k}`]), []);
      var j = []
        .concat(y, [w])
        .reduce((t, e) => t.concat([e, `${e}-${_}`, `${e}-${k}`]), []);
      var O = 'beforeRead';
      var L = 'read';
      var S = 'afterRead';
      var D = 'beforeMain';
      var I = 'main';
      var $ = 'afterMain';
      var M = 'beforeWrite';
      var N = 'write';
      var P = 'afterWrite';
      var B = [O, L, S, D, I, $, M, N, P];
      function R(t) {
        return t ? (t.nodeName || '').toLowerCase() : null;
      }
      function H(t) {
        if (t == null) return window;
        if (t.toString() !== '[object Window]') {
          const e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function F(t) {
        return t instanceof H(t).Element || t instanceof Element;
      }
      function W(t) {
        return t instanceof H(t).HTMLElement || t instanceof HTMLElement;
      }
      function q(t) {
        return (
          typeof ShadowRoot !== 'undefined' &&
          (t instanceof H(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      const U = {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn(t) {
          const e = t.state;
          Object.keys(e.elements).forEach((t) => {
            const r = e.styles[t] || {};
            const o = e.attributes[t] || {};
            const i = e.elements[t];
            W(i) &&
              R(i) &&
              (Object.assign(i.style, r),
              Object.keys(o).forEach((t) => {
                const e = o[t];
                !1 === e
                  ? i.removeAttribute(t)
                  : i.setAttribute(t, !0 === e ? '' : e);
              }));
          });
        },
        effect(t) {
          const e = t.state;
          const r = {
            popper: {
              position: e.options.strategy,
              left: '0',
              top: '0',
              margin: '0',
            },
            arrow: { position: 'absolute' },
            reference: {},
          };
          return (
            Object.assign(e.elements.popper.style, r.popper),
            (e.styles = r),
            e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
            function () {
              Object.keys(e.elements).forEach((t) => {
                const o = e.elements[t];
                const i = e.attributes[t] || {};
                const a = Object.keys(
                  e.styles.hasOwnProperty(t) ? e.styles[t] : r[t]
                ).reduce((t, e) => ((t[e] = ''), t), {});
                W(o) &&
                  R(o) &&
                  (Object.assign(o.style, a),
                  Object.keys(i).forEach((t) => {
                    o.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ['computeStyles'],
      };
      function X(t) {
        return t.split('-')[0];
      }
      const Y = Math.max;
      const V = Math.min;
      const K = Math.round;
      function Q() {
        const t = navigator.userAgentData;
        return t != null && t.brands && Array.isArray(t.brands)
          ? t.brands.map((t) => `${t.brand}/${t.version}`).join(' ')
          : navigator.userAgent;
      }
      function G() {
        return !/^((?!chrome|android).)*safari/i.test(Q());
      }
      function Z(t, e, r) {
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        const o = t.getBoundingClientRect();
        let i = 1;
        let a = 1;
        e &&
          W(t) &&
          ((i = (t.offsetWidth > 0 && K(o.width) / t.offsetWidth) || 1),
          (a = (t.offsetHeight > 0 && K(o.height) / t.offsetHeight) || 1));
        const n = (F(t) ? H(t) : window).visualViewport;
        const s = !G() && r;
        const l = (o.left + (s && n ? n.offsetLeft : 0)) / i;
        const d = (o.top + (s && n ? n.offsetTop : 0)) / a;
        const m = o.width / i;
        const p = o.height / a;
        return {
          width: m,
          height: p,
          top: d,
          right: l + m,
          bottom: d + p,
          left: l,
          x: l,
          y: d,
        };
      }
      function J(t) {
        const e = Z(t);
        let r = t.offsetWidth;
        let o = t.offsetHeight;
        return (
          Math.abs(e.width - r) <= 1 && (r = e.width),
          Math.abs(e.height - o) <= 1 && (o = e.height),
          {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: r,
            height: o,
          }
        );
      }
      function tt(t, e) {
        const r = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (r && q(r)) {
          let o = e;
          do {
            if (o && t.isSameNode(o)) return !0;
            o = o.parentNode || o.host;
          } while (o);
        }
        return !1;
      }
      function et(t) {
        return H(t).getComputedStyle(t);
      }
      function rt(t) {
        return ['table', 'td', 'th'].indexOf(R(t)) >= 0;
      }
      function ot(t) {
        return ((F(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function it(t) {
        return R(t) === 'html'
          ? t
          : t.assignedSlot || t.parentNode || (q(t) ? t.host : null) || ot(t);
      }
      function at(t) {
        return W(t) && et(t).position !== 'fixed' ? t.offsetParent : null;
      }
      function nt(t) {
        for (
          var e = H(t), r = at(t);
          r && rt(r) && et(r).position === 'static';

        )
          r = at(r);
        return r &&
          (R(r) === 'html' || (R(r) === 'body' && et(r).position === 'static'))
          ? e
          : r ||
              (function (t) {
                const e = /firefox/i.test(Q());
                if (/Trident/i.test(Q()) && W(t) && et(t).position === 'fixed')
                  return null;
                let r = it(t);
                for (
                  q(r) && (r = r.host);
                  W(r) && ['html', 'body'].indexOf(R(r)) < 0;

                ) {
                  const o = et(r);
                  if (
                    o.transform !== 'none' ||
                    o.perspective !== 'none' ||
                    o.contain === 'paint' ||
                    ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
                    (e && o.willChange === 'filter') ||
                    (e && o.filter && o.filter !== 'none')
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      function st(t) {
        return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
      }
      function lt(t, e, r) {
        return Y(t, V(e, r));
      }
      function dt(t) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...t,
        };
      }
      function mt(t, e) {
        return e.reduce((e, r) => ((e[r] = t), e), {});
      }
      const pt = {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn(t) {
          let e;
          const r = t.state;
          const o = t.name;
          const i = t.options;
          const a = r.elements.arrow;
          const n = r.modifiersData.popperOffsets;
          const s = X(r.placement);
          const l = st(s);
          const d = [x, v].indexOf(s) >= 0 ? 'height' : 'width';
          if (a && n) {
            const m = (function (t, e) {
              return dt(
                typeof (t =
                  typeof t === 'function'
                    ? t({ ...e.rects, placement: e.placement })
                    : t) !== 'number'
                  ? t
                  : mt(t, y)
              );
            })(i.padding, r);
            const p = J(a);
            const c = l === 'y' ? h : x;
            const b = l === 'y' ? u : v;
            const g =
              r.rects.reference[d] +
              r.rects.reference[l] -
              n[l] -
              r.rects.popper[d];
            const f = n[l] - r.rects.reference[l];
            const w = nt(a);
            const _ = w
              ? l === 'y'
                ? w.clientHeight || 0
                : w.clientWidth || 0
              : 0;
            const k = g / 2 - f / 2;
            const z = m[c];
            const A = _ - p[d] - m[b];
            const E = _ / 2 - p[d] / 2 + k;
            const C = lt(z, E, A);
            const T = l;
            r.modifiersData[o] =
              (((e = {})[T] = C), (e.centerOffset = C - E), e);
          }
        },
        effect(t) {
          const e = t.state;
          const r = t.options.element;
          let o = void 0 === r ? '[data-popper-arrow]' : r;
          o != null &&
            (typeof o !== 'string' ||
              (o = e.elements.popper.querySelector(o))) &&
            tt(e.elements.popper, o) &&
            (e.elements.arrow = o);
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      };
      function ct(t) {
        return t.split('-')[1];
      }
      const bt = {
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      };
      function gt(t) {
        let e;
        const r = t.popper;
        const o = t.popperRect;
        const i = t.placement;
        const a = t.variation;
        const n = t.offsets;
        const s = t.position;
        const l = t.gpuAcceleration;
        const d = t.adaptive;
        const m = t.roundOffsets;
        const p = t.isFixed;
        const c = n.x;
        let b = void 0 === c ? 0 : c;
        const g = n.y;
        let f = void 0 === g ? 0 : g;
        const w = typeof m === 'function' ? m({ x: b, y: f }) : { x: b, y: f };
        (b = w.x), (f = w.y);
        const y = n.hasOwnProperty('x');
        const _ = n.hasOwnProperty('y');
        let z = x;
        let A = h;
        const E = window;
        if (d) {
          let C = nt(r);
          let T = 'clientHeight';
          let j = 'clientWidth';
          C === H(r) &&
            et((C = ot(r))).position !== 'static' &&
            s === 'absolute' &&
            ((T = 'scrollHeight'), (j = 'scrollWidth')),
            (i === h || ((i === x || i === v) && a === k)) &&
              ((A = u),
              (f -=
                (p && C === E && E.visualViewport
                  ? E.visualViewport.height
                  : C[T]) - o.height),
              (f *= l ? 1 : -1)),
            (i !== x && ((i !== h && i !== u) || a !== k)) ||
              ((z = v),
              (b -=
                (p && C === E && E.visualViewport
                  ? E.visualViewport.width
                  : C[j]) - o.width),
              (b *= l ? 1 : -1));
        }
        let O;
        const L = { position: s, ...(d && bt) };
        const S =
          !0 === m
            ? (function (t, e) {
                const r = t.x;
                const o = t.y;
                const i = e.devicePixelRatio || 1;
                return { x: K(r * i) / i || 0, y: K(o * i) / i || 0 };
              })({ x: b, y: f }, H(r))
            : { x: b, y: f };
        return (
          (b = S.x),
          (f = S.y),
          l
            ? {
                ...L,
                ...(((O = {})[A] = _ ? '0' : ''),
                (O[z] = y ? '0' : ''),
                (O.transform =
                  (E.devicePixelRatio || 1) <= 1
                    ? `translate(${b}px, ${f}px)`
                    : `translate3d(${b}px, ${f}px, 0)`),
                O),
              }
            : {
                ...L,
                ...(((e = {})[A] = _ ? `${f}px` : ''),
                (e[z] = y ? `${b}px` : ''),
                (e.transform = ''),
                e),
              }
        );
      }
      const ft = {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn(t) {
          const e = t.state;
          const r = t.options;
          const o = r.gpuAcceleration;
          const i = void 0 === o || o;
          const a = r.adaptive;
          const n = void 0 === a || a;
          const s = r.roundOffsets;
          const l = void 0 === s || s;
          const d = {
            placement: X(e.placement),
            variation: ct(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: i,
            isFixed: e.options.strategy === 'fixed',
          };
          e.modifiersData.popperOffsets != null &&
            (e.styles.popper = {
              ...e.styles.popper,
              ...gt({
                ...d,
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: n,
                roundOffsets: l,
              }),
            }),
            e.modifiersData.arrow != null &&
              (e.styles.arrow = {
                ...e.styles.arrow,
                ...gt({
                  ...d,
                  offsets: e.modifiersData.arrow,
                  position: 'absolute',
                  adaptive: !1,
                  roundOffsets: l,
                }),
              }),
            (e.attributes.popper = {
              ...e.attributes.popper,
              'data-popper-placement': e.placement,
            });
        },
        data: {},
      };
      const ht = { passive: !0 };
      const ut = {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn() {},
        effect(t) {
          const e = t.state;
          const r = t.instance;
          const o = t.options;
          const i = o.scroll;
          const a = void 0 === i || i;
          const n = o.resize;
          const s = void 0 === n || n;
          const l = H(e.elements.popper);
          const d = [].concat(
            e.scrollParents.reference,
            e.scrollParents.popper
          );
          return (
            a &&
              d.forEach((t) => {
                t.addEventListener('scroll', r.update, ht);
              }),
            s && l.addEventListener('resize', r.update, ht),
            function () {
              a &&
                d.forEach((t) => {
                  t.removeEventListener('scroll', r.update, ht);
                }),
                s && l.removeEventListener('resize', r.update, ht);
            }
          );
        },
        data: {},
      };
      const vt = {
        left: 'right',
        right: 'left',
        bottom: 'top',
        top: 'bottom',
      };
      function xt(t) {
        return t.replace(/left|right|bottom|top/g, (t) => vt[t]);
      }
      const wt = { start: 'end', end: 'start' };
      function yt(t) {
        return t.replace(/start|end/g, (t) => wt[t]);
      }
      function _t(t) {
        const e = H(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function kt(t) {
        return Z(ot(t)).left + _t(t).scrollLeft;
      }
      function zt(t) {
        const e = et(t);
        const r = e.overflow;
        const o = e.overflowX;
        const i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + o);
      }
      function At(t) {
        return ['html', 'body', '#document'].indexOf(R(t)) >= 0
          ? t.ownerDocument.body
          : W(t) && zt(t)
          ? t
          : At(it(t));
      }
      function Et(t, e) {
        let r;
        void 0 === e && (e = []);
        const o = At(t);
        const i = o === ((r = t.ownerDocument) == null ? void 0 : r.body);
        const a = H(o);
        const n = i ? [a].concat(a.visualViewport || [], zt(o) ? o : []) : o;
        const s = e.concat(n);
        return i ? s : s.concat(Et(it(n)));
      }
      function Ct(t) {
        return {
          ...t,
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        };
      }
      function Tt(t, e, r) {
        return e === A
          ? Ct(
              (function (t, e) {
                const r = H(t);
                const o = ot(t);
                const i = r.visualViewport;
                let a = o.clientWidth;
                let n = o.clientHeight;
                let s = 0;
                let l = 0;
                if (i) {
                  (a = i.width), (n = i.height);
                  const d = G();
                  (d || (!d && e === 'fixed')) &&
                    ((s = i.offsetLeft), (l = i.offsetTop));
                }
                return {
                  width: a,
                  height: n,
                  x: s + kt(t),
                  y: l,
                };
              })(t, r)
            )
          : F(e)
          ? (function (t, e) {
              const r = Z(t, !1, e === 'fixed');
              return (
                (r.top += t.clientTop),
                (r.left += t.clientLeft),
                (r.bottom = r.top + t.clientHeight),
                (r.right = r.left + t.clientWidth),
                (r.width = t.clientWidth),
                (r.height = t.clientHeight),
                (r.x = r.left),
                (r.y = r.top),
                r
              );
            })(e, r)
          : Ct(
              (function (t) {
                let e;
                const r = ot(t);
                const o = _t(t);
                const i = (e = t.ownerDocument) == null ? void 0 : e.body;
                const a = Y(
                  r.scrollWidth,
                  r.clientWidth,
                  i ? i.scrollWidth : 0,
                  i ? i.clientWidth : 0
                );
                const n = Y(
                  r.scrollHeight,
                  r.clientHeight,
                  i ? i.scrollHeight : 0,
                  i ? i.clientHeight : 0
                );
                let s = -o.scrollLeft + kt(t);
                const l = -o.scrollTop;
                return (
                  et(i || r).direction === 'rtl' &&
                    (s += Y(r.clientWidth, i ? i.clientWidth : 0) - a),
                  {
                    width: a,
                    height: n,
                    x: s,
                    y: l,
                  }
                );
              })(ot(t))
            );
      }
      function jt(t) {
        let e;
        const r = t.reference;
        const o = t.element;
        const i = t.placement;
        const a = i ? X(i) : null;
        const n = i ? ct(i) : null;
        const s = r.x + r.width / 2 - o.width / 2;
        const l = r.y + r.height / 2 - o.height / 2;
        switch (a) {
          case h:
            e = { x: s, y: r.y - o.height };
            break;
          case u:
            e = { x: s, y: r.y + r.height };
            break;
          case v:
            e = { x: r.x + r.width, y: l };
            break;
          case x:
            e = { x: r.x - o.width, y: l };
            break;
          default:
            e = { x: r.x, y: r.y };
        }
        const d = a ? st(a) : null;
        if (d != null) {
          const m = d === 'y' ? 'height' : 'width';
          switch (n) {
            case _:
              e[d] = e[d] - (r[m] / 2 - o[m] / 2);
              break;
            case k:
              e[d] = e[d] + (r[m] / 2 - o[m] / 2);
          }
        }
        return e;
      }
      function Ot(t, e) {
        void 0 === e && (e = {});
        const r = e;
        const o = r.placement;
        const i = void 0 === o ? t.placement : o;
        const a = r.strategy;
        const n = void 0 === a ? t.strategy : a;
        const s = r.boundary;
        const l = void 0 === s ? z : s;
        const d = r.rootBoundary;
        const m = void 0 === d ? A : d;
        const p = r.elementContext;
        const c = void 0 === p ? E : p;
        const b = r.altBoundary;
        const g = void 0 !== b && b;
        const f = r.padding;
        const x = void 0 === f ? 0 : f;
        const w = dt(typeof x !== 'number' ? x : mt(x, y));
        const _ = c === E ? C : E;
        const k = t.rects.popper;
        const T = t.elements[g ? _ : c];
        const j = (function (t, e, r, o) {
          const i =
            e === 'clippingParents'
              ? (function (t) {
                  const e = Et(it(t));
                  const r =
                    ['absolute', 'fixed'].indexOf(et(t).position) >= 0 && W(t)
                      ? nt(t)
                      : t;
                  return F(r)
                    ? e.filter((t) => F(t) && tt(t, r) && R(t) !== 'body')
                    : [];
                })(t)
              : [].concat(e);
          const a = [].concat(i, [r]);
          const n = a[0];
          const s = a.reduce((e, r) => {
            const i = Tt(t, r, o);
            return (
              (e.top = Y(i.top, e.top)),
              (e.right = V(i.right, e.right)),
              (e.bottom = V(i.bottom, e.bottom)),
              (e.left = Y(i.left, e.left)),
              e
            );
          }, Tt(t, n, o));
          return (
            (s.width = s.right - s.left),
            (s.height = s.bottom - s.top),
            (s.x = s.left),
            (s.y = s.top),
            s
          );
        })(F(T) ? T : T.contextElement || ot(t.elements.popper), l, m, n);
        const O = Z(t.elements.reference);
        const L = jt({
          reference: O,
          element: k,
          strategy: 'absolute',
          placement: i,
        });
        const S = Ct({ ...k, ...L });
        const D = c === E ? S : O;
        const I = {
          top: j.top - D.top + w.top,
          bottom: D.bottom - j.bottom + w.bottom,
          left: j.left - D.left + w.left,
          right: D.right - j.right + w.right,
        };
        const $ = t.modifiersData.offset;
        if (c === E && $) {
          const M = $[i];
          Object.keys(I).forEach((t) => {
            const e = [v, u].indexOf(t) >= 0 ? 1 : -1;
            const r = [h, u].indexOf(t) >= 0 ? 'y' : 'x';
            I[t] += M[r] * e;
          });
        }
        return I;
      }
      const Lt = {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn(t) {
          const e = t.state;
          const r = t.options;
          const o = t.name;
          if (!e.modifiersData[o]._skip) {
            for (
              var i = r.mainAxis,
                a = void 0 === i || i,
                n = r.altAxis,
                s = void 0 === n || n,
                l = r.fallbackPlacements,
                d = r.padding,
                m = r.boundary,
                p = r.rootBoundary,
                c = r.altBoundary,
                b = r.flipVariations,
                g = void 0 === b || b,
                f = r.allowedAutoPlacements,
                k = e.options.placement,
                z = X(k),
                A =
                  l ||
                  (z !== k && g
                    ? (function (t) {
                        if (X(t) === w) return [];
                        const e = xt(t);
                        return [yt(t), e, yt(e)];
                      })(k)
                    : [xt(k)]),
                E = [k].concat(A).reduce(
                  (t, r) =>
                    t.concat(
                      X(r) === w
                        ? (function (t, e) {
                            void 0 === e && (e = {});
                            const r = e;
                            const o = r.placement;
                            const i = r.boundary;
                            const a = r.rootBoundary;
                            const n = r.padding;
                            const s = r.flipVariations;
                            const l = r.allowedAutoPlacements;
                            const d = void 0 === l ? j : l;
                            const m = ct(o);
                            const p = m
                              ? s
                                ? T
                                : T.filter((t) => ct(t) === m)
                              : y;
                            let c = p.filter((t) => d.indexOf(t) >= 0);
                            c.length === 0 && (c = p);
                            const b = c.reduce(
                              (e, r) => (
                                (e[r] = Ot(t, {
                                  placement: r,
                                  boundary: i,
                                  rootBoundary: a,
                                  padding: n,
                                })[X(r)]),
                                e
                              ),
                              {}
                            );
                            return Object.keys(b).sort((t, e) => b[t] - b[e]);
                          })(e, {
                            placement: r,
                            boundary: m,
                            rootBoundary: p,
                            padding: d,
                            flipVariations: g,
                            allowedAutoPlacements: f,
                          })
                        : r
                    ),
                  []
                ),
                C = e.rects.reference,
                O = e.rects.popper,
                L = new Map(),
                S = !0,
                D = E[0],
                I = 0;
              I < E.length;
              I++
            ) {
              const $ = E[I];
              const M = X($);
              const N = ct($) === _;
              const P = [h, u].indexOf(M) >= 0;
              const B = P ? 'width' : 'height';
              const R = Ot(e, {
                placement: $,
                boundary: m,
                rootBoundary: p,
                altBoundary: c,
                padding: d,
              });
              let H = P ? (N ? v : x) : N ? u : h;
              C[B] > O[B] && (H = xt(H));
              const F = xt(H);
              const W = [];
              if (
                (a && W.push(R[M] <= 0),
                s && W.push(R[H] <= 0, R[F] <= 0),
                W.every((t) => t))
              ) {
                (D = $), (S = !1);
                break;
              }
              L.set($, W);
            }
            if (S) {
              for (
                let q = function (t) {
                    const e = E.find((e) => {
                      const r = L.get(e);
                      if (r) {
                        return r.slice(0, t).every((t) => t);
                      }
                    });
                    if (e) return (D = e), 'break';
                  },
                  U = g ? 3 : 1;
                U > 0 && q(U) !== 'break';
                U--
              );
            }
            e.placement !== D &&
              ((e.modifiersData[o]._skip = !0),
              (e.placement = D),
              (e.reset = !0));
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 },
      };
      function St(t, e, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: t.top - e.height - r.y,
            right: t.right - e.width + r.x,
            bottom: t.bottom - e.height + r.y,
            left: t.left - e.width - r.x,
          }
        );
      }
      function Dt(t) {
        return [h, v, u, x].some((e) => t[e] >= 0);
      }
      const It = {
        name: 'hide',
        enabled: !0,
        phase: 'main',
        requiresIfExists: ['preventOverflow'],
        fn(t) {
          const e = t.state;
          const r = t.name;
          const o = e.rects.reference;
          const i = e.rects.popper;
          const a = e.modifiersData.preventOverflow;
          const n = Ot(e, { elementContext: 'reference' });
          const s = Ot(e, { altBoundary: !0 });
          const l = St(n, o);
          const d = St(s, i, a);
          const m = Dt(l);
          const p = Dt(d);
          (e.modifiersData[r] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: d,
            isReferenceHidden: m,
            hasPopperEscaped: p,
          }),
            (e.attributes.popper = {
              ...e.attributes.popper,
              'data-popper-reference-hidden': m,
              'data-popper-escaped': p,
            });
        },
      };
      const $t = {
        name: 'offset',
        enabled: !0,
        phase: 'main',
        requires: ['popperOffsets'],
        fn(t) {
          const e = t.state;
          const r = t.options;
          const o = t.name;
          const i = r.offset;
          const a = void 0 === i ? [0, 0] : i;
          const n = j.reduce(
            (t, r) => (
              (t[r] = (function (t, e, r) {
                const o = X(t);
                const i = [x, h].indexOf(o) >= 0 ? -1 : 1;
                const a =
                  typeof r === 'function' ? r({ ...e, placement: t }) : r;
                let n = a[0];
                let s = a[1];
                return (
                  (n = n || 0),
                  (s = (s || 0) * i),
                  [x, v].indexOf(o) >= 0 ? { x: s, y: n } : { x: n, y: s }
                );
              })(r, e.rects, a)),
              t
            ),
            {}
          );
          const s = n[e.placement];
          const l = s.x;
          const d = s.y;
          e.modifiersData.popperOffsets != null &&
            ((e.modifiersData.popperOffsets.x += l),
            (e.modifiersData.popperOffsets.y += d)),
            (e.modifiersData[o] = n);
        },
      };
      const Mt = {
        name: 'popperOffsets',
        enabled: !0,
        phase: 'read',
        fn(t) {
          const e = t.state;
          const r = t.name;
          e.modifiersData[r] = jt({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: 'absolute',
            placement: e.placement,
          });
        },
        data: {},
      };
      const Nt = {
        name: 'preventOverflow',
        enabled: !0,
        phase: 'main',
        fn(t) {
          const e = t.state;
          const r = t.options;
          const o = t.name;
          const i = r.mainAxis;
          const a = void 0 === i || i;
          const n = r.altAxis;
          const s = void 0 !== n && n;
          const l = r.boundary;
          const d = r.rootBoundary;
          const m = r.altBoundary;
          const p = r.padding;
          const c = r.tether;
          const b = void 0 === c || c;
          const g = r.tetherOffset;
          const f = void 0 === g ? 0 : g;
          const w = Ot(e, {
            boundary: l,
            rootBoundary: d,
            padding: p,
            altBoundary: m,
          });
          const y = X(e.placement);
          const k = ct(e.placement);
          const z = !k;
          const A = st(y);
          const E = A === 'x' ? 'y' : 'x';
          const C = e.modifiersData.popperOffsets;
          const T = e.rects.reference;
          const j = e.rects.popper;
          const O =
            typeof f === 'function'
              ? f({ ...e.rects, placement: e.placement })
              : f;
          const L =
            typeof O === 'number'
              ? { mainAxis: O, altAxis: O }
              : { mainAxis: 0, altAxis: 0, ...O };
          const S = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null;
          const D = { x: 0, y: 0 };
          if (C) {
            if (a) {
              let I;
              const $ = A === 'y' ? h : x;
              const M = A === 'y' ? u : v;
              const N = A === 'y' ? 'height' : 'width';
              const P = C[A];
              const B = P + w[$];
              const R = P - w[M];
              const H = b ? -j[N] / 2 : 0;
              const F = k === _ ? T[N] : j[N];
              const W = k === _ ? -j[N] : -T[N];
              const q = e.elements.arrow;
              const U = b && q ? J(q) : { width: 0, height: 0 };
              const K = e.modifiersData['arrow#persistent']
                ? e.modifiersData['arrow#persistent'].padding
                : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  };
              const Q = K[$];
              const G = K[M];
              const Z = lt(0, T[N], U[N]);
              const tt = z
                ? T[N] / 2 - H - Z - Q - L.mainAxis
                : F - Z - Q - L.mainAxis;
              const et = z
                ? -T[N] / 2 + H + Z + G + L.mainAxis
                : W + Z + G + L.mainAxis;
              const rt = e.elements.arrow && nt(e.elements.arrow);
              const ot = rt
                ? A === 'y'
                  ? rt.clientTop || 0
                  : rt.clientLeft || 0
                : 0;
              const it = (I = S == null ? void 0 : S[A]) != null ? I : 0;
              const at = P + et - it;
              const dt = lt(
                b ? V(B, P + tt - it - ot) : B,
                P,
                b ? Y(R, at) : R
              );
              (C[A] = dt), (D[A] = dt - P);
            }
            if (s) {
              let mt;
              const pt = A === 'x' ? h : x;
              const bt = A === 'x' ? u : v;
              const gt = C[E];
              const ft = E === 'y' ? 'height' : 'width';
              const ht = gt + w[pt];
              const ut = gt - w[bt];
              const vt = [h, x].indexOf(y) !== -1;
              const xt = (mt = S == null ? void 0 : S[E]) != null ? mt : 0;
              const wt = vt ? ht : gt - T[ft] - j[ft] - xt + L.altAxis;
              const yt = vt ? gt + T[ft] + j[ft] - xt - L.altAxis : ut;
              const _t =
                b && vt
                  ? (function (t, e, r) {
                      const o = lt(t, e, r);
                      return o > r ? r : o;
                    })(wt, gt, yt)
                  : lt(b ? wt : ht, gt, b ? yt : ut);
              (C[E] = _t), (D[E] = _t - gt);
            }
            e.modifiersData[o] = D;
          }
        },
        requiresIfExists: ['offset'],
      };
      function Pt(t, e, r) {
        void 0 === r && (r = !1);
        let o;
        let i;
        const a = W(e);
        const n =
          W(e) &&
          (function (t) {
            const e = t.getBoundingClientRect();
            const r = K(e.width) / t.offsetWidth || 1;
            const o = K(e.height) / t.offsetHeight || 1;
            return r !== 1 || o !== 1;
          })(e);
        const s = ot(e);
        const l = Z(t, n, r);
        let d = { scrollLeft: 0, scrollTop: 0 };
        let m = { x: 0, y: 0 };
        return (
          (a || (!a && !r)) &&
            ((R(e) !== 'body' || zt(s)) &&
              (d =
                (o = e) !== H(o) && W(o)
                  ? { scrollLeft: (i = o).scrollLeft, scrollTop: i.scrollTop }
                  : _t(o)),
            W(e)
              ? (((m = Z(e, !0)).x += e.clientLeft), (m.y += e.clientTop))
              : s && (m.x = kt(s))),
          {
            x: l.left + d.scrollLeft - m.x,
            y: l.top + d.scrollTop - m.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Bt(t) {
        const e = new Map();
        const r = new Set();
        const o = [];
        function i(t) {
          r.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach((t) => {
                if (!r.has(t)) {
                  const o = e.get(t);
                  o && i(o);
                }
              }),
            o.push(t);
        }
        return (
          t.forEach((t) => {
            e.set(t.name, t);
          }),
          t.forEach((t) => {
            r.has(t.name) || i(t);
          }),
          o
        );
      }
      const Rt = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function Ht() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return !e.some(
          (t) => !(t && typeof t.getBoundingClientRect === 'function')
        );
      }
      function Ft(t) {
        void 0 === t && (t = {});
        const e = t;
        const r = e.defaultModifiers;
        const o = void 0 === r ? [] : r;
        const i = e.defaultOptions;
        const a = void 0 === i ? Rt : i;
        return function (t, e, r) {
          void 0 === r && (r = a);
          let i;
          let n;
          let s = {
            placement: 'bottom',
            orderedModifiers: [],
            options: { ...Rt, ...a },
            modifiersData: {},
            elements: { reference: t, popper: e },
            attributes: {},
            styles: {},
          };
          let l = [];
          let d = !1;
          var m = {
            state: s,
            setOptions(r) {
              const i = typeof r === 'function' ? r(s.options) : r;
              p(),
                (s.options = { ...a, ...s.options, ...i }),
                (s.scrollParents = {
                  reference: F(t)
                    ? Et(t)
                    : t.contextElement
                    ? Et(t.contextElement)
                    : [],
                  popper: Et(e),
                });
              let n;
              let d;
              const c = (function (t) {
                const e = Bt(t);
                return B.reduce(
                  (t, r) => t.concat(e.filter((t) => t.phase === r)),
                  []
                );
              })(
                ((n = [].concat(o, s.options.modifiers)),
                (d = n.reduce((t, e) => {
                  const r = t[e.name];
                  return (
                    (t[e.name] = r
                      ? {
                          ...r,
                          ...e,
                          options: { ...r.options, ...e.options },
                          data: { ...r.data, ...e.data },
                        }
                      : e),
                    t
                  );
                }, {})),
                Object.keys(d).map((t) => d[t]))
              );
              return (
                (s.orderedModifiers = c.filter((t) => t.enabled)),
                s.orderedModifiers.forEach((t) => {
                  const e = t.name;
                  const r = t.options;
                  const o = void 0 === r ? {} : r;
                  const i = t.effect;
                  if (typeof i === 'function') {
                    const a = i({
                      state: s,
                      name: e,
                      instance: m,
                      options: o,
                    });
                    l.push(a || (() => {}));
                  }
                }),
                m.update()
              );
            },
            forceUpdate() {
              if (!d) {
                const t = s.elements;
                const e = t.reference;
                const r = t.popper;
                if (Ht(e, r)) {
                  (s.rects = {
                    reference: Pt(e, nt(r), s.options.strategy === 'fixed'),
                    popper: J(r),
                  }),
                    (s.reset = !1),
                    (s.placement = s.options.placement),
                    s.orderedModifiers.forEach(
                      (t) =>
                        (s.modifiersData[t.name] = {
                          ...t.data,
                        })
                    );
                  for (let o = 0; o < s.orderedModifiers.length; o++) {
                    if (!0 !== s.reset) {
                      const i = s.orderedModifiers[o];
                      const a = i.fn;
                      const n = i.options;
                      const l = void 0 === n ? {} : n;
                      const p = i.name;
                      typeof a === 'function' &&
                        (s =
                          a({
                            state: s,
                            options: l,
                            name: p,
                            instance: m,
                          }) || s);
                    } else (s.reset = !1), (o = -1);
                  }
                }
              }
            },
            update:
              ((i = function () {
                return new Promise((t) => {
                  m.forceUpdate(), t(s);
                });
              }),
              function () {
                return (
                  n ||
                    (n = new Promise((t) => {
                      Promise.resolve().then(() => {
                        (n = void 0), t(i());
                      });
                    })),
                  n
                );
              }),
            destroy() {
              p(), (d = !0);
            },
          };
          if (!Ht(t, e)) return m;
          function p() {
            l.forEach((t) => t()), (l = []);
          }
          return (
            m.setOptions(r).then((t) => {
              !d && r.onFirstUpdate && r.onFirstUpdate(t);
            }),
            m
          );
        };
      }
      var Wt = Ft();
      var qt = Ft({ defaultModifiers: [ut, Mt, ft, U, $t, Lt, Nt, pt, It] });
      var Ut = Ft({ defaultModifiers: [ut, Mt, ft, U] });
      const Xt = 'transitionend';
      const Yt = (t) => {
        let e = t.getAttribute('data-bs-target');
        if (!e || e === '#') {
          let r = t.getAttribute('href');
          if (!r || (!r.includes('#') && !r.startsWith('.'))) return null;
          r.includes('#') && !r.startsWith('#') && (r = `#${r.split('#')[1]}`),
            (e = r && r !== '#' ? r.trim() : null);
        }
        return e;
      };
      const Vt = (t) => {
        const e = Yt(t);
        return e && document.querySelector(e) ? e : null;
      };
      const Kt = (t) => {
        const e = Yt(t);
        return e ? document.querySelector(e) : null;
      };
      const Qt = (t) => {
        t.dispatchEvent(new Event(Xt));
      };
      const Gt = (t) =>
        !(!t || typeof t !== 'object') &&
        (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
      const Zt = (t) =>
        Gt(t)
          ? t.jquery
            ? t[0]
            : t
          : typeof t === 'string' && t.length > 0
          ? document.querySelector(t)
          : null;
      const Jt = (t) => {
        if (!Gt(t) || t.getClientRects().length === 0) return !1;
        const e =
          getComputedStyle(t).getPropertyValue('visibility') === 'visible';
        const r = t.closest('details:not([open])');
        if (!r) return e;
        if (r !== t) {
          const e = t.closest('summary');
          if (e && e.parentNode !== r) return !1;
          if (e === null) return !1;
        }
        return e;
      };
      const te = (t) =>
        !t ||
        t.nodeType !== Node.ELEMENT_NODE ||
        !!t.classList.contains('disabled') ||
        (void 0 !== t.disabled
          ? t.disabled
          : t.hasAttribute('disabled') &&
            t.getAttribute('disabled') !== 'false');
      const ee = (t) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof t.getRootNode === 'function') {
          const e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? ee(t.parentNode)
          : null;
      };
      const re = () => {};
      const oe = (t) => {
        t.offsetHeight;
      };
      const ie = () =>
        window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
          ? window.jQuery
          : null;
      const ae = [];
      const ne = () => document.documentElement.dir === 'rtl';
      const se = (t) => {
        let e;
        (e = () => {
          const e = ie();
          if (e) {
            const r = t.NAME;
            const o = e.fn[r];
            (e.fn[r] = t.jQueryInterface),
              (e.fn[r].Constructor = t),
              (e.fn[r].noConflict = () => ((e.fn[r] = o), t.jQueryInterface));
          }
        }),
          document.readyState === 'loading'
            ? (ae.length ||
                document.addEventListener('DOMContentLoaded', () => {
                  for (const t of ae) t();
                }),
              ae.push(e))
            : e();
      };
      const le = (t) => {
        typeof t === 'function' && t();
      };
      const de = (t, e, r = !0) => {
        if (!r) return void le(t);
        const o =
          ((t) => {
            if (!t) return 0;
            let { transitionDuration: e, transitionDelay: r } =
              window.getComputedStyle(t);
            const o = Number.parseFloat(e);
            const i = Number.parseFloat(r);
            return o || i
              ? ((e = e.split(',')[0]),
                (r = r.split(',')[0]),
                1e3 * (Number.parseFloat(e) + Number.parseFloat(r)))
              : 0;
          })(e) + 5;
        let i = !1;
        const a = ({ target: r }) => {
          r === e && ((i = !0), e.removeEventListener(Xt, a), le(t));
        };
        e.addEventListener(Xt, a),
          setTimeout(() => {
            i || Qt(e);
          }, o);
      };
      const me = (t, e, r, o) => {
        const i = t.length;
        let a = t.indexOf(e);
        return a === -1
          ? !r && o
            ? t[i - 1]
            : t[0]
          : ((a += r ? 1 : -1),
            o && (a = (a + i) % i),
            t[Math.max(0, Math.min(a, i - 1))]);
      };
      const pe = /[^.]*(?=\..*)\.|.*/;
      const ce = /\..*/;
      const be = /::\d+$/;
      const ge = {};
      let fe = 1;
      const he = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
      const ue = new Set([
        'click',
        'dblclick',
        'mouseup',
        'mousedown',
        'contextmenu',
        'mousewheel',
        'DOMMouseScroll',
        'mouseover',
        'mouseout',
        'mousemove',
        'selectstart',
        'selectend',
        'keydown',
        'keypress',
        'keyup',
        'orientationchange',
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel',
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointerleave',
        'pointercancel',
        'gesturestart',
        'gesturechange',
        'gestureend',
        'focus',
        'blur',
        'change',
        'reset',
        'select',
        'submit',
        'focusin',
        'focusout',
        'load',
        'unload',
        'beforeunload',
        'resize',
        'move',
        'DOMContentLoaded',
        'readystatechange',
        'error',
        'abort',
        'scroll',
      ]);
      function ve(t, e) {
        return (e && `${e}::${fe++}`) || t.uidEvent || fe++;
      }
      function xe(t) {
        const e = ve(t);
        return (t.uidEvent = e), (ge[e] = ge[e] || {}), ge[e];
      }
      function we(t, e, r = null) {
        return Object.values(t).find(
          (t) => t.callable === e && t.delegationSelector === r
        );
      }
      function ye(t, e, r) {
        const o = typeof e === 'string';
        const i = o ? r : e || r;
        let a = Ae(t);
        return ue.has(a) || (a = t), [o, i, a];
      }
      function _e(t, e, r, o, i) {
        if (typeof e !== 'string' || !t) return;
        let [a, n, s] = ye(e, r, o);
        if (e in he) {
          const t = (t) =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e);
            };
          n = t(n);
        }
        const l = xe(t);
        const d = l[s] || (l[s] = {});
        const m = we(d, n, a ? r : null);
        if (m) return void (m.oneOff = m.oneOff && i);
        const p = ve(n, e.replace(pe, ''));
        const c = a
          ? (function (t, e, r) {
              return function o(i) {
                const a = t.querySelectorAll(e);
                for (let { target: n } = i; n && n !== this; n = n.parentNode) {
                  for (const s of a) {
                    if (s === n) {
                      return (
                        Ce(i, { delegateTarget: n }),
                        o.oneOff && Ee.off(t, i.type, e, r),
                        r.apply(n, [i])
                      );
                    }
                  }
                }
              };
            })(t, r, n)
          : (function (t, e) {
              return function r(o) {
                return (
                  Ce(o, { delegateTarget: t }),
                  r.oneOff && Ee.off(t, o.type, e),
                  e.apply(t, [o])
                );
              };
            })(t, n);
        (c.delegationSelector = a ? r : null),
          (c.callable = n),
          (c.oneOff = i),
          (c.uidEvent = p),
          (d[p] = c),
          t.addEventListener(s, c, a);
      }
      function ke(t, e, r, o, i) {
        const a = we(e[r], o, i);
        a && (t.removeEventListener(r, a, Boolean(i)), delete e[r][a.uidEvent]);
      }
      function ze(t, e, r, o) {
        const i = e[r] || {};
        for (const a of Object.keys(i)) {
          if (a.includes(o)) {
            const o = i[a];
            ke(t, e, r, o.callable, o.delegationSelector);
          }
        }
      }
      function Ae(t) {
        return (t = t.replace(ce, '')), he[t] || t;
      }
      const Ee = {
        on(t, e, r, o) {
          _e(t, e, r, o, !1);
        },
        one(t, e, r, o) {
          _e(t, e, r, o, !0);
        },
        off(t, e, r, o) {
          if (typeof e !== 'string' || !t) return;
          const [i, a, n] = ye(e, r, o);
          const s = n !== e;
          const l = xe(t);
          const d = l[n] || {};
          const m = e.startsWith('.');
          if (void 0 === a) {
            if (m) for (const r of Object.keys(l)) ze(t, l, r, e.slice(1));
            for (const r of Object.keys(d)) {
              const o = r.replace(be, '');
              if (!s || e.includes(o)) {
                const e = d[r];
                ke(t, l, n, e.callable, e.delegationSelector);
              }
            }
          } else {
            if (!Object.keys(d).length) return;
            ke(t, l, n, a, i ? r : null);
          }
        },
        trigger(t, e, r) {
          if (typeof e !== 'string' || !t) return null;
          const o = ie();
          let i = null;
          let a = !0;
          let n = !0;
          let s = !1;
          e !== Ae(e) &&
            o &&
            ((i = o.Event(e, r)),
            o(t).trigger(i),
            (a = !i.isPropagationStopped()),
            (n = !i.isImmediatePropagationStopped()),
            (s = i.isDefaultPrevented()));
          let l = new Event(e, { bubbles: a, cancelable: !0 });
          return (
            (l = Ce(l, r)),
            s && l.preventDefault(),
            n && t.dispatchEvent(l),
            l.defaultPrevented && i && i.preventDefault(),
            l
          );
        },
      };
      function Ce(t, e) {
        for (const [r, o] of Object.entries(e || {})) {
          try {
            t[r] = o;
          } catch (e) {
            Object.defineProperty(t, r, { configurable: !0, get: () => o });
          }
        }
        return t;
      }
      const Te = new Map();
      const je = {
        set(t, e, r) {
          Te.has(t) || Te.set(t, new Map());
          const o = Te.get(t);
          o.has(e) || o.size === 0
            ? o.set(e, r)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(o.keys())[0]
                }.`
              );
        },
        get: (t, e) => (Te.has(t) && Te.get(t).get(e)) || null,
        remove(t, e) {
          if (!Te.has(t)) return;
          const r = Te.get(t);
          r.delete(e), r.size === 0 && Te.delete(t);
        },
      };
      function Oe(t) {
        if (t === 'true') return !0;
        if (t === 'false') return !1;
        if (t === Number(t).toString()) return Number(t);
        if (t === '' || t === 'null') return null;
        if (typeof t !== 'string') return t;
        try {
          return JSON.parse(decodeURIComponent(t));
        } catch (e) {
          return t;
        }
      }
      function Le(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
      }
      const Se = {
        setDataAttribute(t, e, r) {
          t.setAttribute(`data-bs-${Le(e)}`, r);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${Le(e)}`);
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {};
          const r = Object.keys(t.dataset).filter(
            (t) => t.startsWith('bs') && !t.startsWith('bsConfig')
          );
          for (const o of r) {
            let r = o.replace(/^bs/, '');
            (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
              (e[r] = Oe(t.dataset[o]));
          }
          return e;
        },
        getDataAttribute: (t, e) => Oe(t.getAttribute(`data-bs-${Le(e)}`)),
      };
      class De {
        static get Default() {
          return {};
        }

        static get DefaultType() {
          return {};
        }

        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!'
          );
        }

        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }

        _configAfterMerge(t) {
          return t;
        }

        _mergeConfigObj(t, e) {
          const r = Gt(e) ? Se.getDataAttribute(e, 'config') : {};
          return {
            ...this.constructor.Default,
            ...(typeof r === 'object' ? r : {}),
            ...(Gt(e) ? Se.getDataAttributes(e) : {}),
            ...(typeof t === 'object' ? t : {}),
          };
        }

        _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const o of Object.keys(e)) {
            const i = e[o];
            const a = t[o];
            const n = Gt(a)
              ? 'element'
              : (r = a) == null
              ? `${r}`
              : Object.prototype.toString
                  .call(r)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
            if (!new RegExp(i).test(n)) {
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${n}" but expected type "${i}".`
              );
            }
          }
          let r;
        }
      }
      class Ie extends De {
        constructor(t, e) {
          super(),
            (t = Zt(t)) &&
              ((this._element = t),
              (this._config = this._getConfig(e)),
              je.set(this._element, this.constructor.DATA_KEY, this));
        }

        dispose() {
          je.remove(this._element, this.constructor.DATA_KEY),
            Ee.off(this._element, this.constructor.EVENT_KEY);
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }

        _queueCallback(t, e, r = !0) {
          de(t, e, r);
        }

        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t, this._element)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }

        static getInstance(t) {
          return je.get(Zt(t), this.DATA_KEY);
        }

        static getOrCreateInstance(t, e = {}) {
          return (
            this.getInstance(t) || new this(t, typeof e === 'object' ? e : null)
          );
        }

        static get VERSION() {
          return '5.2.3';
        }

        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }

        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }

        static eventName(t) {
          return `${t}${this.EVENT_KEY}`;
        }
      }
      const $e = (t, e = 'hide') => {
        const r = `click.dismiss${t.EVENT_KEY}`;
        const o = t.NAME;
        Ee.on(document, r, `[data-bs-dismiss="${o}"]`, function (r) {
          if (
            (['A', 'AREA'].includes(this.tagName) && r.preventDefault(),
            te(this))
          )
            return;
          const i = Kt(this) || this.closest(`.${o}`);
          t.getOrCreateInstance(i)[e]();
        });
      };
      const Me = '.bs.alert';
      const Ne = `close${Me}`;
      const Pe = `closed${Me}`;
      class Be extends Ie {
        static get NAME() {
          return 'alert';
        }

        close() {
          if (Ee.trigger(this._element, Ne).defaultPrevented) return;
          this._element.classList.remove('show');
          const t = this._element.classList.contains('fade');
          this._queueCallback(() => this._destroyElement(), this._element, t);
        }

        _destroyElement() {
          this._element.remove(), Ee.trigger(this._element, Pe), this.dispose();
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = Be.getOrCreateInstance(this);
            if (typeof t === 'string') {
              if (void 0 === e[t] || t.startsWith('_') || t === 'constructor')
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      $e(Be, 'close'), se(Be);
      const Re = '[data-bs-toggle="button"]';
      class He extends Ie {
        static get NAME() {
          return 'button';
        }

        toggle() {
          this._element.setAttribute(
            'aria-pressed',
            this._element.classList.toggle('active')
          );
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = He.getOrCreateInstance(this);
            t === 'toggle' && e[t]();
          });
        }
      }
      Ee.on(document, 'click.bs.button.data-api', Re, (t) => {
        t.preventDefault();
        const e = t.target.closest(Re);
        He.getOrCreateInstance(e).toggle();
      }),
        se(He);
      const Fe = {
        find: (t, e = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) =>
          Element.prototype.querySelector.call(e, t),
        children: (t, e) =>
          [].concat(...t.children).filter((t) => t.matches(e)),
        parents(t, e) {
          const r = [];
          let o = t.parentNode.closest(e);
          for (; o; ) r.push(o), (o = o.parentNode.closest(e));
          return r;
        },
        prev(t, e) {
          let r = t.previousElementSibling;
          for (; r; ) {
            if (r.matches(e)) return [r];
            r = r.previousElementSibling;
          }
          return [];
        },
        next(t, e) {
          let r = t.nextElementSibling;
          for (; r; ) {
            if (r.matches(e)) return [r];
            r = r.nextElementSibling;
          }
          return [];
        },
        focusableChildren(t) {
          const e = [
            'a',
            'button',
            'input',
            'textarea',
            'select',
            'details',
            '[tabindex]',
            '[contenteditable="true"]',
          ]
            .map((t) => `${t}:not([tabindex^="-"])`)
            .join(',');
          return this.find(e, t).filter((t) => !te(t) && Jt(t));
        },
      };
      const We = '.bs.swipe';
      const qe = `touchstart${We}`;
      const Ue = `touchmove${We}`;
      const Xe = `touchend${We}`;
      const Ye = `pointerdown${We}`;
      const Ve = `pointerup${We}`;
      const Ke = { endCallback: null, leftCallback: null, rightCallback: null };
      const Qe = {
        endCallback: '(function|null)',
        leftCallback: '(function|null)',
        rightCallback: '(function|null)',
      };
      class Ge extends De {
        constructor(t, e) {
          super(),
            (this._element = t),
            t &&
              Ge.isSupported() &&
              ((this._config = this._getConfig(e)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents());
        }

        static get Default() {
          return Ke;
        }

        static get DefaultType() {
          return Qe;
        }

        static get NAME() {
          return 'swipe';
        }

        dispose() {
          Ee.off(this._element, We);
        }

        _start(t) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
            : (this._deltaX = t.touches[0].clientX);
        }

        _end(t) {
          this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            le(this._config.endCallback);
        }

        _move(t) {
          this._deltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this._deltaX;
        }

        _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40) return;
          const e = t / this._deltaX;
          (this._deltaX = 0),
            e &&
              le(
                e > 0 ? this._config.rightCallback : this._config.leftCallback
              );
        }

        _initEvents() {
          this._supportPointerEvents
            ? (Ee.on(this._element, Ye, (t) => this._start(t)),
              Ee.on(this._element, Ve, (t) => this._end(t)),
              this._element.classList.add('pointer-event'))
            : (Ee.on(this._element, qe, (t) => this._start(t)),
              Ee.on(this._element, Ue, (t) => this._move(t)),
              Ee.on(this._element, Xe, (t) => this._end(t)));
        }

        _eventIsPointerPenTouch(t) {
          return (
            this._supportPointerEvents &&
            (t.pointerType === 'pen' || t.pointerType === 'touch')
          );
        }

        static isSupported() {
          return (
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const Ze = '.bs.carousel';
      const Je = '.data-api';
      const tr = 'next';
      const er = 'prev';
      const rr = 'left';
      const or = 'right';
      const ir = `slide${Ze}`;
      const ar = `slid${Ze}`;
      const nr = `keydown${Ze}`;
      const sr = `mouseenter${Ze}`;
      const lr = `mouseleave${Ze}`;
      const dr = `dragstart${Ze}`;
      const mr = `load${Ze}${Je}`;
      const pr = `click${Ze}${Je}`;
      const cr = 'carousel';
      const br = 'active';
      const gr = '.active';
      const fr = '.carousel-item';
      const hr = gr + fr;
      const ur = { ArrowLeft: or, ArrowRight: rr };
      const vr = {
        interval: 5e3,
        keyboard: !0,
        pause: 'hover',
        ride: !1,
        touch: !0,
        wrap: !0,
      };
      const xr = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        pause: '(string|boolean)',
        ride: '(boolean|string)',
        touch: 'boolean',
        wrap: 'boolean',
      };
      class wr extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Fe.findOne(
              '.carousel-indicators',
              this._element
            )),
            this._addEventListeners(),
            this._config.ride === cr && this.cycle();
        }

        static get Default() {
          return vr;
        }

        static get DefaultType() {
          return xr;
        }

        static get NAME() {
          return 'carousel';
        }

        next() {
          this._slide(tr);
        }

        nextWhenVisible() {
          !document.hidden && Jt(this._element) && this.next();
        }

        prev() {
          this._slide(er);
        }

        pause() {
          this._isSliding && Qt(this._element), this._clearInterval();
        }

        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval
            ));
        }

        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? Ee.one(this._element, ar, () => this.cycle())
              : this.cycle());
        }

        to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0) return;
          if (this._isSliding)
            return void Ee.one(this._element, ar, () => this.to(t));
          const r = this._getItemIndex(this._getActive());
          if (r === t) return;
          const o = t > r ? tr : er;
          this._slide(o, e[t]);
        }

        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }

        _configAfterMerge(t) {
          return (t.defaultInterval = t.interval), t;
        }

        _addEventListeners() {
          this._config.keyboard &&
            Ee.on(this._element, nr, (t) => this._keydown(t)),
            this._config.pause === 'hover' &&
              (Ee.on(this._element, sr, () => this.pause()),
              Ee.on(this._element, lr, () => this._maybeEnableCycle())),
            this._config.touch &&
              Ge.isSupported() &&
              this._addTouchEventListeners();
        }

        _addTouchEventListeners() {
          for (const t of Fe.find('.carousel-item img', this._element))
            Ee.on(t, dr, (t) => t.preventDefault());
          const t = {
            leftCallback: () => this._slide(this._directionToOrder(rr)),
            rightCallback: () => this._slide(this._directionToOrder(or)),
            endCallback: () => {
              this._config.pause === 'hover' &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval
                )));
            },
          };
          this._swipeHelper = new Ge(this._element, t);
        }

        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = ur[t.key];
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }

        _getItemIndex(t) {
          return this._getItems().indexOf(t);
        }

        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return;
          const e = Fe.findOne(gr, this._indicatorsElement);
          e.classList.remove(br), e.removeAttribute('aria-current');
          const r = Fe.findOne(
            `[data-bs-slide-to="${t}"]`,
            this._indicatorsElement
          );
          r && (r.classList.add(br), r.setAttribute('aria-current', 'true'));
        }

        _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t) return;
          const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
          this._config.interval = e || this._config.defaultInterval;
        }

        _slide(t, e = null) {
          if (this._isSliding) return;
          const r = this._getActive();
          const o = t === tr;
          const i = e || me(this._getItems(), r, o, this._config.wrap);
          if (i === r) return;
          const a = this._getItemIndex(i);
          const n = (e) =>
            Ee.trigger(this._element, e, {
              relatedTarget: i,
              direction: this._orderToDirection(t),
              from: this._getItemIndex(r),
              to: a,
            });
          if (n(ir).defaultPrevented) return;
          if (!r || !i) return;
          const s = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(a),
            (this._activeElement = i);
          const l = o ? 'carousel-item-start' : 'carousel-item-end';
          const d = o ? 'carousel-item-next' : 'carousel-item-prev';
          i.classList.add(d),
            oe(i),
            r.classList.add(l),
            i.classList.add(l),
            this._queueCallback(
              () => {
                i.classList.remove(l, d),
                  i.classList.add(br),
                  r.classList.remove(br, d, l),
                  (this._isSliding = !1),
                  n(ar);
              },
              r,
              this._isAnimated()
            ),
            s && this.cycle();
        }

        _isAnimated() {
          return this._element.classList.contains('slide');
        }

        _getActive() {
          return Fe.findOne(hr, this._element);
        }

        _getItems() {
          return Fe.find(fr, this._element);
        }

        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }

        _directionToOrder(t) {
          return ne() ? (t === rr ? er : tr) : t === rr ? tr : er;
        }

        _orderToDirection(t) {
          return ne() ? (t === er ? rr : or) : t === er ? or : rr;
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = wr.getOrCreateInstance(this, t);
            if (typeof t !== 'number') {
              if (typeof t === 'string') {
                if (void 0 === e[t] || t.startsWith('_') || t === 'constructor')
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            } else e.to(t);
          });
        }
      }
      Ee.on(document, pr, '[data-bs-slide], [data-bs-slide-to]', function (t) {
        const e = Kt(this);
        if (!e || !e.classList.contains(cr)) return;
        t.preventDefault();
        const r = wr.getOrCreateInstance(e);
        const o = this.getAttribute('data-bs-slide-to');
        return o
          ? (r.to(o), void r._maybeEnableCycle())
          : Se.getDataAttribute(this, 'slide') === 'next'
          ? (r.next(), void r._maybeEnableCycle())
          : (r.prev(), void r._maybeEnableCycle());
      }),
        Ee.on(window, mr, () => {
          const t = Fe.find('[data-bs-ride="carousel"]');
          for (const e of t) wr.getOrCreateInstance(e);
        }),
        se(wr);
      const yr = '.bs.collapse';
      const _r = `show${yr}`;
      const kr = `shown${yr}`;
      const zr = `hide${yr}`;
      const Ar = `hidden${yr}`;
      const Er = `click${yr}.data-api`;
      const Cr = 'show';
      const Tr = 'collapse';
      const jr = 'collapsing';
      const Or = `:scope .${Tr} .${Tr}`;
      const Lr = '[data-bs-toggle="collapse"]';
      const Sr = { parent: null, toggle: !0 };
      const Dr = { parent: '(null|element)', toggle: 'boolean' };
      class Ir extends Ie {
        constructor(t, e) {
          super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
          const r = Fe.find(Lr);
          for (const t of r) {
            const e = Vt(t);
            const r = Fe.find(e).filter((t) => t === this._element);
            e !== null && r.length && this._triggerArray.push(t);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown()
              ),
            this._config.toggle && this.toggle();
        }

        static get Default() {
          return Sr;
        }

        static get DefaultType() {
          return Dr;
        }

        static get NAME() {
          return 'collapse';
        }

        toggle() {
          this._isShown() ? this.hide() : this.show();
        }

        show() {
          if (this._isTransitioning || this._isShown()) return;
          let t = [];
          if (
            (this._config.parent &&
              (t = this._getFirstLevelChildren(
                '.collapse.show, .collapse.collapsing'
              )
                .filter((t) => t !== this._element)
                .map((t) => Ir.getOrCreateInstance(t, { toggle: !1 }))),
            t.length && t[0]._isTransitioning)
          )
            return;
          if (Ee.trigger(this._element, _r).defaultPrevented) return;
          for (const e of t) e.hide();
          const e = this._getDimension();
          this._element.classList.remove(Tr),
            this._element.classList.add(jr),
            (this._element.style[e] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          const r = `scroll${e[0].toUpperCase() + e.slice(1)}`;
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(jr),
                this._element.classList.add(Tr, Cr),
                (this._element.style[e] = ''),
                Ee.trigger(this._element, kr);
            },
            this._element,
            !0
          ),
            (this._element.style[e] = `${this._element[r]}px`);
        }

        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (Ee.trigger(this._element, zr).defaultPrevented) return;
          const t = this._getDimension();
          (this._element.style[t] = `${
            this._element.getBoundingClientRect()[t]
          }px`),
            oe(this._element),
            this._element.classList.add(jr),
            this._element.classList.remove(Tr, Cr);
          for (const t of this._triggerArray) {
            const e = Kt(t);
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
          }
          (this._isTransitioning = !0),
            (this._element.style[t] = ''),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(jr),
                  this._element.classList.add(Tr),
                  Ee.trigger(this._element, Ar);
              },
              this._element,
              !0
            );
        }

        _isShown(t = this._element) {
          return t.classList.contains(Cr);
        }

        _configAfterMerge(t) {
          return (t.toggle = Boolean(t.toggle)), (t.parent = Zt(t.parent)), t;
        }

        _getDimension() {
          return this._element.classList.contains('collapse-horizontal')
            ? 'width'
            : 'height';
        }

        _initializeChildren() {
          if (!this._config.parent) return;
          const t = this._getFirstLevelChildren(Lr);
          for (const e of t) {
            const t = Kt(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          }
        }

        _getFirstLevelChildren(t) {
          const e = Fe.find(Or, this._config.parent);
          return Fe.find(t, this._config.parent).filter((t) => !e.includes(t));
        }

        _addAriaAndCollapsedClass(t, e) {
          if (t.length) {
            for (const r of t) {
              r.classList.toggle('collapsed', !e),
                r.setAttribute('aria-expanded', e);
            }
          }
        }

        static jQueryInterface(t) {
          const e = {};
          return (
            typeof t === 'string' && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function () {
              const r = Ir.getOrCreateInstance(this, e);
              if (typeof t === 'string') {
                if (void 0 === r[t])
                  throw new TypeError(`No method named "${t}"`);
                r[t]();
              }
            })
          );
        }
      }
      Ee.on(document, Er, Lr, function (t) {
        (t.target.tagName === 'A' ||
          (t.delegateTarget && t.delegateTarget.tagName === 'A')) &&
          t.preventDefault();
        const e = Vt(this);
        const r = Fe.find(e);
        for (const t of r) Ir.getOrCreateInstance(t, { toggle: !1 }).toggle();
      }),
        se(Ir);
      const $r = 'dropdown';
      const Mr = '.bs.dropdown';
      const Nr = '.data-api';
      const Pr = 'ArrowUp';
      const Br = 'ArrowDown';
      const Rr = `hide${Mr}`;
      const Hr = `hidden${Mr}`;
      const Fr = `show${Mr}`;
      const Wr = `shown${Mr}`;
      const qr = `click${Mr}${Nr}`;
      const Ur = `keydown${Mr}${Nr}`;
      const Xr = `keyup${Mr}${Nr}`;
      const Yr = 'show';
      const Vr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
      const Kr = `${Vr}.${Yr}`;
      const Qr = '.dropdown-menu';
      const Gr = ne() ? 'top-end' : 'top-start';
      const Zr = ne() ? 'top-start' : 'top-end';
      const Jr = ne() ? 'bottom-end' : 'bottom-start';
      const to = ne() ? 'bottom-start' : 'bottom-end';
      const eo = ne() ? 'left-start' : 'right-start';
      const ro = ne() ? 'right-start' : 'left-start';
      const oo = {
        autoClose: !0,
        boundary: 'clippingParents',
        display: 'dynamic',
        offset: [0, 2],
        popperConfig: null,
        reference: 'toggle',
      };
      const io = {
        autoClose: '(boolean|string)',
        boundary: '(string|element)',
        display: 'string',
        offset: '(array|string|function)',
        popperConfig: '(null|object|function)',
        reference: '(string|element|object)',
      };
      class ao extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Fe.next(this._element, Qr)[0] ||
              Fe.prev(this._element, Qr)[0] ||
              Fe.findOne(Qr, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }

        static get Default() {
          return oo;
        }

        static get DefaultType() {
          return io;
        }

        static get NAME() {
          return $r;
        }

        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }

        show() {
          if (te(this._element) || this._isShown()) return;
          const t = { relatedTarget: this._element };
          if (!Ee.trigger(this._element, Fr, t).defaultPrevented) {
            if (
              (this._createPopper(),
              'ontouchstart' in document.documentElement &&
                !this._parent.closest('.navbar-nav'))
            )
              for (const t of [].concat(...document.body.children))
                Ee.on(t, 'mouseover', re);
            this._element.focus(),
              this._element.setAttribute('aria-expanded', !0),
              this._menu.classList.add(Yr),
              this._element.classList.add(Yr),
              Ee.trigger(this._element, Wr, t);
          }
        }

        hide() {
          if (te(this._element) || !this._isShown()) return;
          const t = { relatedTarget: this._element };
          this._completeHide(t);
        }

        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }

        update() {
          (this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update();
        }

        _completeHide(t) {
          if (!Ee.trigger(this._element, Rr, t).defaultPrevented) {
            if ('ontouchstart' in document.documentElement)
              for (const t of [].concat(...document.body.children))
                Ee.off(t, 'mouseover', re);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(Yr),
              this._element.classList.remove(Yr),
              this._element.setAttribute('aria-expanded', 'false'),
              Se.removeDataAttribute(this._menu, 'popper'),
              Ee.trigger(this._element, Hr, t);
          }
        }

        _getConfig(t) {
          if (
            typeof (t = super._getConfig(t)).reference === 'object' &&
            !Gt(t.reference) &&
            typeof t.reference.getBoundingClientRect !== 'function'
          ) {
            throw new TypeError(
              `${$r.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
            );
          }
          return t;
        }

        _createPopper() {
          if (void 0 === t) {
            throw new TypeError(
              'Bootstrap\'s dropdowns require Popper (https://popper.js.org)'
            );
          }
          let e = this._element;
          this._config.reference === 'parent'
            ? (e = this._parent)
            : Gt(this._config.reference)
            ? (e = Zt(this._config.reference))
            : typeof this._config.reference === 'object' &&
              (e = this._config.reference);
          const r = this._getPopperConfig();
          this._popper = qt(e, this._menu, r);
        }

        _isShown() {
          return this._menu.classList.contains(Yr);
        }

        _getPlacement() {
          const t = this._parent;
          if (t.classList.contains('dropend')) return eo;
          if (t.classList.contains('dropstart')) return ro;
          if (t.classList.contains('dropup-center')) return 'top';
          if (t.classList.contains('dropdown-center')) return 'bottom';
          const e =
            getComputedStyle(this._menu)
              .getPropertyValue('--bs-position')
              .trim() === 'end';
          return t.classList.contains('dropup') ? (e ? Zr : Gr) : e ? to : Jr;
        }

        _detectNavbar() {
          return this._element.closest('.navbar') !== null;
        }

        _getOffset() {
          const { offset: t } = this._config;
          return typeof t === 'string'
            ? t.split(',').map((t) => Number.parseInt(t, 10))
            : typeof t === 'function'
            ? (e) => t(e, this._element)
            : t;
        }

        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: 'preventOverflow',
                options: { boundary: this._config.boundary },
              },
              { name: 'offset', options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || this._config.display === 'static') &&
              (Se.setDataAttribute(this._menu, 'popper', 'static'),
              (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
            {
              ...t,
              ...(typeof this._config.popperConfig === 'function'
                ? this._config.popperConfig(t)
                : this._config.popperConfig),
            }
          );
        }

        _selectMenuItem({ key: t, target: e }) {
          const r = Fe.find(
            '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
            this._menu
          ).filter((t) => Jt(t));
          r.length && me(r, e, t === Br, !r.includes(e)).focus();
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = ao.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }

        static clearMenus(t) {
          if (t.button === 2 || (t.type === 'keyup' && t.key !== 'Tab')) return;
          const e = Fe.find(Kr);
          for (const r of e) {
            const e = ao.getInstance(r);
            if (!e || !1 === e._config.autoClose) continue;
            const o = t.composedPath();
            const i = o.includes(e._menu);
            if (
              o.includes(e._element) ||
              (e._config.autoClose === 'inside' && !i) ||
              (e._config.autoClose === 'outside' && i)
            )
              continue;
            if (
              e._menu.contains(t.target) &&
              ((t.type === 'keyup' && t.key === 'Tab') ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue;
            const a = { relatedTarget: e._element };
            t.type === 'click' && (a.clickEvent = t), e._completeHide(a);
          }
        }

        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName);
          const r = t.key === 'Escape';
          const o = [Pr, Br].includes(t.key);
          if (!o && !r) return;
          if (e && !r) return;
          t.preventDefault();
          const i = this.matches(Vr)
            ? this
            : Fe.prev(this, Vr)[0] ||
              Fe.next(this, Vr)[0] ||
              Fe.findOne(Vr, t.delegateTarget.parentNode);
          const a = ao.getOrCreateInstance(i);
          if (o)
            return t.stopPropagation(), a.show(), void a._selectMenuItem(t);
          a._isShown() && (t.stopPropagation(), a.hide(), i.focus());
        }
      }
      Ee.on(document, Ur, Vr, ao.dataApiKeydownHandler),
        Ee.on(document, Ur, Qr, ao.dataApiKeydownHandler),
        Ee.on(document, qr, ao.clearMenus),
        Ee.on(document, Xr, ao.clearMenus),
        Ee.on(document, qr, Vr, function (t) {
          t.preventDefault(), ao.getOrCreateInstance(this).toggle();
        }),
        se(ao);
      const no = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
      const so = '.sticky-top';
      const lo = 'padding-right';
      const mo = 'margin-right';
      class po {
        constructor() {
          this._element = document.body;
        }

        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t);
        }

        hide() {
          const t = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, lo, (e) => e + t),
            this._setElementAttributes(no, lo, (e) => e + t),
            this._setElementAttributes(so, mo, (e) => e - t);
        }

        reset() {
          this._resetElementAttributes(this._element, 'overflow'),
            this._resetElementAttributes(this._element, lo),
            this._resetElementAttributes(no, lo),
            this._resetElementAttributes(so, mo);
        }

        isOverflowing() {
          return this.getWidth() > 0;
        }

        _disableOverFlow() {
          this._saveInitialAttribute(this._element, 'overflow'),
            (this._element.style.overflow = 'hidden');
        }

        _setElementAttributes(t, e, r) {
          const o = this.getWidth();
          this._applyManipulationCallback(t, (t) => {
            if (t !== this._element && window.innerWidth > t.clientWidth + o)
              return;
            this._saveInitialAttribute(t, e);
            const i = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${r(Number.parseFloat(i))}px`);
          });
        }

        _saveInitialAttribute(t, e) {
          const r = t.style.getPropertyValue(e);
          r && Se.setDataAttribute(t, e, r);
        }

        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t) => {
            const r = Se.getDataAttribute(t, e);
            r !== null
              ? (Se.removeDataAttribute(t, e), t.style.setProperty(e, r))
              : t.style.removeProperty(e);
          });
        }

        _applyManipulationCallback(t, e) {
          if (Gt(t)) e(t);
          else for (const r of Fe.find(t, this._element)) e(r);
        }
      }
      const co = 'backdrop';
      const bo = 'show';
      const go = `mousedown.bs.${co}`;
      const fo = {
        className: 'modal-backdrop',
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: 'body',
      };
      const ho = {
        className: 'string',
        clickCallback: '(function|null)',
        isAnimated: 'boolean',
        isVisible: 'boolean',
        rootElement: '(element|string)',
      };
      class uo extends De {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isAppended = !1),
            (this._element = null);
        }

        static get Default() {
          return fo;
        }

        static get DefaultType() {
          return ho;
        }

        static get NAME() {
          return co;
        }

        show(t) {
          if (!this._config.isVisible) return void le(t);
          this._append();
          const e = this._getElement();
          this._config.isAnimated && oe(e),
            e.classList.add(bo),
            this._emulateAnimation(() => {
              le(t);
            });
        }

        hide(t) {
          this._config.isVisible
            ? (this._getElement().classList.remove(bo),
              this._emulateAnimation(() => {
                this.dispose(), le(t);
              }))
            : le(t);
        }

        dispose() {
          this._isAppended &&
            (Ee.off(this._element, go),
            this._element.remove(),
            (this._isAppended = !1));
        }

        _getElement() {
          if (!this._element) {
            const t = document.createElement('div');
            (t.className = this._config.className),
              this._config.isAnimated && t.classList.add('fade'),
              (this._element = t);
          }
          return this._element;
        }

        _configAfterMerge(t) {
          return (t.rootElement = Zt(t.rootElement)), t;
        }

        _append() {
          if (this._isAppended) return;
          const t = this._getElement();
          this._config.rootElement.append(t),
            Ee.on(t, go, () => {
              le(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }

        _emulateAnimation(t) {
          de(t, this._getElement(), this._config.isAnimated);
        }
      }
      const vo = '.bs.focustrap';
      const xo = `focusin${vo}`;
      const wo = `keydown.tab${vo}`;
      const yo = 'backward';
      const _o = { autofocus: !0, trapElement: null };
      const ko = { autofocus: 'boolean', trapElement: 'element' };
      class zo extends De {
        constructor(t) {
          super(),
            (this._config = this._getConfig(t)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }

        static get Default() {
          return _o;
        }

        static get DefaultType() {
          return ko;
        }

        static get NAME() {
          return 'focustrap';
        }

        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            Ee.off(document, vo),
            Ee.on(document, xo, (t) => this._handleFocusin(t)),
            Ee.on(document, wo, (t) => this._handleKeydown(t)),
            (this._isActive = !0));
        }

        deactivate() {
          this._isActive && ((this._isActive = !1), Ee.off(document, vo));
        }

        _handleFocusin(t) {
          const { trapElement: e } = this._config;
          if (t.target === document || t.target === e || e.contains(t.target))
            return;
          const r = Fe.focusableChildren(e);
          r.length === 0
            ? e.focus()
            : this._lastTabNavDirection === yo
            ? r[r.length - 1].focus()
            : r[0].focus();
        }

        _handleKeydown(t) {
          t.key === 'Tab' &&
            (this._lastTabNavDirection = t.shiftKey ? yo : 'forward');
        }
      }
      const Ao = '.bs.modal';
      const Eo = `hide${Ao}`;
      const Co = `hidePrevented${Ao}`;
      const To = `hidden${Ao}`;
      const jo = `show${Ao}`;
      const Oo = `shown${Ao}`;
      const Lo = `resize${Ao}`;
      const So = `click.dismiss${Ao}`;
      const Do = `mousedown.dismiss${Ao}`;
      const Io = `keydown.dismiss${Ao}`;
      const $o = `click${Ao}.data-api`;
      const Mo = 'modal-open';
      const No = 'show';
      const Po = 'modal-static';
      const Bo = { backdrop: !0, focus: !0, keyboard: !0 };
      const Ro = {
        backdrop: '(boolean|string)',
        focus: 'boolean',
        keyboard: 'boolean',
      };
      class Ho extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._dialog = Fe.findOne('.modal-dialog', this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new po()),
            this._addEventListeners();
        }

        static get Default() {
          return Bo;
        }

        static get DefaultType() {
          return Ro;
        }

        static get NAME() {
          return 'modal';
        }

        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }

        show(t) {
          this._isShown ||
            this._isTransitioning ||
            Ee.trigger(this._element, jo, { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(Mo),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(t)));
        }

        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (Ee.trigger(this._element, Eo).defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(No),
              this._queueCallback(
                () => this._hideModal(),
                this._element,
                this._isAnimated()
              )));
        }

        dispose() {
          for (const t of [window, this._dialog]) Ee.off(t, Ao);
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }

        handleUpdate() {
          this._adjustDialog();
        }

        _initializeBackDrop() {
          return new uo({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }

        _initializeFocusTrap() {
          return new zo({ trapElement: this._element });
        }

        _showElement(t) {
          document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            (this._element.scrollTop = 0);
          const e = Fe.findOne('.modal-body', this._dialog);
          e && (e.scrollTop = 0),
            oe(this._element),
            this._element.classList.add(No),
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  Ee.trigger(this._element, Oo, { relatedTarget: t });
              },
              this._dialog,
              this._isAnimated()
            );
        }

        _addEventListeners() {
          Ee.on(this._element, Io, (t) => {
            if (t.key === 'Escape') {
              return this._config.keyboard
                ? (t.preventDefault(), void this.hide())
                : void this._triggerBackdropTransition();
            }
          }),
            Ee.on(window, Lo, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            Ee.on(this._element, Do, (t) => {
              Ee.one(this._element, So, (e) => {
                this._element === t.target &&
                  this._element === e.target &&
                  (this._config.backdrop !== 'static'
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            });
        }

        _hideModal() {
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(Mo),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                Ee.trigger(this._element, To);
            });
        }

        _isAnimated() {
          return this._element.classList.contains('fade');
        }

        _triggerBackdropTransition() {
          if (Ee.trigger(this._element, Co).defaultPrevented) return;
          const t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          const e = this._element.style.overflowY;
          e === 'hidden' ||
            this._element.classList.contains(Po) ||
            (t || (this._element.style.overflowY = 'hidden'),
            this._element.classList.add(Po),
            this._queueCallback(() => {
              this._element.classList.remove(Po),
                this._queueCallback(() => {
                  this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }

        _adjustDialog() {
          const t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          const e = this._scrollBar.getWidth();
          const r = e > 0;
          if (r && !t) {
            const t = ne() ? 'paddingLeft' : 'paddingRight';
            this._element.style[t] = `${e}px`;
          }
          if (!r && t) {
            const t = ne() ? 'paddingRight' : 'paddingLeft';
            this._element.style[t] = `${e}px`;
          }
        }

        _resetAdjustments() {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }

        static jQueryInterface(t, e) {
          return this.each(function () {
            const r = Ho.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === r[t])
                throw new TypeError(`No method named "${t}"`);
              r[t](e);
            }
          });
        }
      }
      Ee.on(document, $o, '[data-bs-toggle="modal"]', function (t) {
        const e = Kt(this);
        ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
          Ee.one(e, jo, (t) => {
            t.defaultPrevented ||
              Ee.one(e, To, () => {
                Jt(this) && this.focus();
              });
          });
        const r = Fe.findOne('.modal.show');
        r && Ho.getInstance(r).hide(), Ho.getOrCreateInstance(e).toggle(this);
      }),
        $e(Ho),
        se(Ho);
      const Fo = '.bs.offcanvas';
      const Wo = '.data-api';
      const qo = `load${Fo}${Wo}`;
      const Uo = 'show';
      const Xo = 'showing';
      const Yo = 'hiding';
      const Vo = '.offcanvas.show';
      const Ko = `show${Fo}`;
      const Qo = `shown${Fo}`;
      const Go = `hide${Fo}`;
      const Zo = `hidePrevented${Fo}`;
      const Jo = `hidden${Fo}`;
      const ti = `resize${Fo}`;
      const ei = `click${Fo}${Wo}`;
      const ri = `keydown.dismiss${Fo}`;
      const oi = { backdrop: !0, keyboard: !0, scroll: !1 };
      const ii = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        scroll: 'boolean',
      };
      class ai extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }

        static get Default() {
          return oi;
        }

        static get DefaultType() {
          return ii;
        }

        static get NAME() {
          return 'offcanvas';
        }

        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }

        show(t) {
          this._isShown ||
            Ee.trigger(this._element, Ko, { relatedTarget: t })
              .defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new po().hide(),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            this._element.classList.add(Xo),
            this._queueCallback(
              () => {
                (this._config.scroll && !this._config.backdrop) ||
                  this._focustrap.activate(),
                  this._element.classList.add(Uo),
                  this._element.classList.remove(Xo),
                  Ee.trigger(this._element, Qo, { relatedTarget: t });
              },
              this._element,
              !0
            ));
        }

        hide() {
          this._isShown &&
            (Ee.trigger(this._element, Go).defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(Yo),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(Uo, Yo),
                    this._element.removeAttribute('aria-modal'),
                    this._element.removeAttribute('role'),
                    this._config.scroll || new po().reset(),
                    Ee.trigger(this._element, Jo);
                },
                this._element,
                !0
              )));
        }

        dispose() {
          this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }

        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new uo({
            className: 'offcanvas-backdrop',
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t
              ? () => {
                  this._config.backdrop !== 'static'
                    ? this.hide()
                    : Ee.trigger(this._element, Zo);
                }
              : null,
          });
        }

        _initializeFocusTrap() {
          return new zo({ trapElement: this._element });
        }

        _addEventListeners() {
          Ee.on(this._element, ri, (t) => {
            t.key === 'Escape' &&
              (this._config.keyboard
                ? this.hide()
                : Ee.trigger(this._element, Zo));
          });
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = ai.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t] || t.startsWith('_') || t === 'constructor')
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      Ee.on(document, ei, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Kt(this);
        if (
          (['A', 'AREA'].includes(this.tagName) && t.preventDefault(), te(this))
        )
          return;
        Ee.one(e, Jo, () => {
          Jt(this) && this.focus();
        });
        const r = Fe.findOne(Vo);
        r && r !== e && ai.getInstance(r).hide(),
          ai.getOrCreateInstance(e).toggle(this);
      }),
        Ee.on(window, qo, () => {
          for (const t of Fe.find(Vo)) ai.getOrCreateInstance(t).show();
        }),
        Ee.on(window, ti, () => {
          for (const t of Fe.find(
            '[aria-modal][class*=show][class*=offcanvas-]'
          )) {
            getComputedStyle(t).position !== 'fixed' &&
              ai.getOrCreateInstance(t).hide();
          }
        }),
        $e(ai),
        se(ai);
      const ni = new Set([
        'background',
        'cite',
        'href',
        'itemtype',
        'longdesc',
        'poster',
        'src',
        'xlink:href',
      ]);
      const si =
        /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
      const li =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
      const di = (t, e) => {
        const r = t.nodeName.toLowerCase();
        return e.includes(r)
          ? !ni.has(r) || Boolean(si.test(t.nodeValue) || li.test(t.nodeValue))
          : e.filter((t) => t instanceof RegExp).some((t) => t.test(r));
      };
      const mi = {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      };
      const pi = {
        allowList: mi,
        content: {},
        extraClass: '',
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: '<div></div>',
      };
      const ci = {
        allowList: 'object',
        content: 'object',
        extraClass: '(string|function)',
        html: 'boolean',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        template: 'string',
      };
      const bi = {
        entry: '(string|element|function|null)',
        selector: '(string|element)',
      };
      class gi extends De {
        constructor(t) {
          super(), (this._config = this._getConfig(t));
        }

        static get Default() {
          return pi;
        }

        static get DefaultType() {
          return ci;
        }

        static get NAME() {
          return 'TemplateFactory';
        }

        getContent() {
          return Object.values(this._config.content)
            .map((t) => this._resolvePossibleFunction(t))
            .filter(Boolean);
        }

        hasContent() {
          return this.getContent().length > 0;
        }

        changeContent(t) {
          return (
            this._checkContent(t),
            (this._config.content = { ...this._config.content, ...t }),
            this
          );
        }

        toHtml() {
          const t = document.createElement('div');
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e, r] of Object.entries(this._config.content))
            this._setContent(t, r, e);
          const e = t.children[0];
          const r = this._resolvePossibleFunction(this._config.extraClass);
          return r && e.classList.add(...r.split(' ')), e;
        }

        _typeCheckConfig(t) {
          super._typeCheckConfig(t), this._checkContent(t.content);
        }

        _checkContent(t) {
          for (const [e, r] of Object.entries(t))
            super._typeCheckConfig({ selector: e, entry: r }, bi);
        }

        _setContent(t, e, r) {
          const o = Fe.findOne(r, t);
          o &&
            ((e = this._resolvePossibleFunction(e))
              ? Gt(e)
                ? this._putElementInTemplate(Zt(e), o)
                : this._config.html
                ? (o.innerHTML = this._maybeSanitize(e))
                : (o.textContent = e)
              : o.remove());
        }

        _maybeSanitize(t) {
          return this._config.sanitize
            ? (function (t, e, r) {
                if (!t.length) return t;
                if (r && typeof r === 'function') return r(t);
                const o = new window.DOMParser().parseFromString(
                  t,
                  'text/html'
                );
                const i = [].concat(...o.body.querySelectorAll('*'));
                for (const t of i) {
                  const r = t.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(r)) {
                    t.remove();
                    continue;
                  }
                  const o = [].concat(...t.attributes);
                  const i = [].concat(e['*'] || [], e[r] || []);
                  for (const e of o) di(e, i) || t.removeAttribute(e.nodeName);
                }
                return o.body.innerHTML;
              })(t, this._config.allowList, this._config.sanitizeFn)
            : t;
        }

        _resolvePossibleFunction(t) {
          return typeof t === 'function' ? t(this) : t;
        }

        _putElementInTemplate(t, e) {
          if (this._config.html) return (e.innerHTML = ''), void e.append(t);
          e.textContent = t.textContent;
        }
      }
      const fi = new Set(['sanitize', 'allowList', 'sanitizeFn']);
      const hi = 'fade';
      const ui = 'show';
      const vi = '.modal';
      const xi = 'hide.bs.modal';
      const wi = 'hover';
      const yi = 'focus';
      const _i = {
        AUTO: 'auto',
        TOP: 'top',
        RIGHT: ne() ? 'left' : 'right',
        BOTTOM: 'bottom',
        LEFT: ne() ? 'right' : 'left',
      };
      const ki = {
        allowList: mi,
        animation: !0,
        boundary: 'clippingParents',
        container: !1,
        customClass: '',
        delay: 0,
        fallbackPlacements: ['top', 'right', 'bottom', 'left'],
        html: !1,
        offset: [0, 0],
        placement: 'top',
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: '',
        trigger: 'hover focus',
      };
      const zi = {
        allowList: 'object',
        animation: 'boolean',
        boundary: '(string|element)',
        container: '(string|element|boolean)',
        customClass: '(string|function)',
        delay: '(number|object)',
        fallbackPlacements: 'array',
        html: 'boolean',
        offset: '(array|string|function)',
        placement: '(string|function)',
        popperConfig: '(null|object|function)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        selector: '(string|boolean)',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
      };
      class Ai extends Ie {
        constructor(e, r) {
          if (void 0 === t) {
            throw new TypeError(
              'Bootstrap\'s tooltips require Popper (https://popper.js.org)'
            );
          }
          super(e, r),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }

        static get Default() {
          return ki;
        }

        static get DefaultType() {
          return zi;
        }

        static get NAME() {
          return 'tooltip';
        }

        enable() {
          this._isEnabled = !0;
        }

        disable() {
          this._isEnabled = !1;
        }

        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }

        toggle() {
          this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
        }

        dispose() {
          clearTimeout(this._timeout),
            Ee.off(this._element.closest(vi), xi, this._hideModalHandler),
            this._element.getAttribute('data-bs-original-title') &&
              this._element.setAttribute(
                'title',
                this._element.getAttribute('data-bs-original-title')
              ),
            this._disposePopper(),
            super.dispose();
        }

        show() {
          if (this._element.style.display === 'none')
            throw new Error('Please use show on visible elements');
          if (!this._isWithContent() || !this._isEnabled) return;
          const t = Ee.trigger(
            this._element,
            this.constructor.eventName('show')
          );
          const e = (
            ee(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
          if (t.defaultPrevented || !e) return;
          this._disposePopper();
          const r = this._getTipElement();
          this._element.setAttribute('aria-describedby', r.getAttribute('id'));
          const { container: o } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (o.append(r),
              Ee.trigger(
                this._element,
                this.constructor.eventName('inserted')
              )),
            (this._popper = this._createPopper(r)),
            r.classList.add(ui),
            'ontouchstart' in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              Ee.on(t, 'mouseover', re);
          this._queueCallback(
            () => {
              Ee.trigger(this._element, this.constructor.eventName('shown')),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated()
          );
        }

        hide() {
          if (
            this._isShown() &&
            !Ee.trigger(this._element, this.constructor.eventName('hide'))
              .defaultPrevented
          ) {
            if (
              (this._getTipElement().classList.remove(ui),
              'ontouchstart' in document.documentElement)
            )
              for (const t of [].concat(...document.body.children))
                Ee.off(t, 'mouseover', re);
            (this._activeTrigger.click = !1),
              (this._activeTrigger[yi] = !1),
              (this._activeTrigger[wi] = !1),
              (this._isHovered = null),
              this._queueCallback(
                () => {
                  this._isWithActiveTrigger() ||
                    (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute('aria-describedby'),
                    Ee.trigger(
                      this._element,
                      this.constructor.eventName('hidden')
                    ));
                },
                this.tip,
                this._isAnimated()
              );
          }
        }

        update() {
          this._popper && this._popper.update();
        }

        _isWithContent() {
          return Boolean(this._getTitle());
        }

        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate()
              )),
            this.tip
          );
        }

        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e) return null;
          e.classList.remove(hi, ui),
            e.classList.add(`bs-${this.constructor.NAME}-auto`);
          const r = ((t) => {
            do {
              t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          })(this.constructor.NAME).toString();
          return (
            e.setAttribute('id', r),
            this._isAnimated() && e.classList.add(hi),
            e
          );
        }

        setContent(t) {
          (this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show());
        }

        _getTemplateFactory(t) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(t)
              : (this._templateFactory = new gi({
                  ...this._config,
                  content: t,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass
                  ),
                })),
            this._templateFactory
          );
        }

        _getContentForTemplate() {
          return { '.tooltip-inner': this._getTitle() };
        }

        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute('data-bs-original-title')
          );
        }

        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(
            t.delegateTarget,
            this._getDelegateConfig()
          );
        }

        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(hi))
          );
        }

        _isShown() {
          return this.tip && this.tip.classList.contains(ui);
        }

        _createPopper(t) {
          const e =
            typeof this._config.placement === 'function'
              ? this._config.placement.call(this, t, this._element)
              : this._config.placement;
          const r = _i[e.toUpperCase()];
          return qt(this._element, t, this._getPopperConfig(r));
        }

        _getOffset() {
          const { offset: t } = this._config;
          return typeof t === 'string'
            ? t.split(',').map((t) => Number.parseInt(t, 10))
            : typeof t === 'function'
            ? (e) => t(e, this._element)
            : t;
        }

        _resolvePossibleFunction(t) {
          return typeof t === 'function' ? t.call(this._element) : t;
        }

        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: 'offset', options: { offset: this._getOffset() } },
              {
                name: 'preventOverflow',
                options: { boundary: this._config.boundary },
              },
              {
                name: 'arrow',
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: 'preSetPlacement',
                enabled: !0,
                phase: 'beforeMain',
                fn: (t) => {
                  this._getTipElement().setAttribute(
                    'data-popper-placement',
                    t.state.placement
                  );
                },
              },
            ],
          };
          return {
            ...e,
            ...(typeof this._config.popperConfig === 'function'
              ? this._config.popperConfig(e)
              : this._config.popperConfig),
          };
        }

        _setListeners() {
          const t = this._config.trigger.split(' ');
          for (const e of t) {
            if (e === 'click') {
              Ee.on(
                this._element,
                this.constructor.eventName('click'),
                this._config.selector,
                (t) => {
                  this._initializeOnDelegatedTarget(t).toggle();
                }
              );
            } else if (e !== 'manual') {
              const t =
                e === wi
                  ? this.constructor.eventName('mouseenter')
                  : this.constructor.eventName('focusin');
              const r =
                e === wi
                  ? this.constructor.eventName('mouseleave')
                  : this.constructor.eventName('focusout');
              Ee.on(this._element, t, this._config.selector, (t) => {
                const e = this._initializeOnDelegatedTarget(t);
                (e._activeTrigger[t.type === 'focusin' ? yi : wi] = !0),
                  e._enter();
              }),
                Ee.on(this._element, r, this._config.selector, (t) => {
                  const e = this._initializeOnDelegatedTarget(t);
                  (e._activeTrigger[t.type === 'focusout' ? yi : wi] =
                    e._element.contains(t.relatedTarget)),
                    e._leave();
                });
            }
          }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            Ee.on(this._element.closest(vi), xi, this._hideModalHandler);
        }

        _fixTitle() {
          const t = this._element.getAttribute('title');
          t &&
            (this._element.getAttribute('aria-label') ||
              this._element.textContent.trim() ||
              this._element.setAttribute('aria-label', t),
            this._element.setAttribute('data-bs-original-title', t),
            this._element.removeAttribute('title'));
        }

        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }

        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }

        _setTimeout(t, e) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }

        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }

        _getConfig(t) {
          const e = Se.getDataAttributes(this._element);
          for (const t of Object.keys(e)) fi.has(t) && delete e[t];
          return (
            (t = { ...e, ...(typeof t === 'object' && t ? t : {}) }),
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }

        _configAfterMerge(t) {
          return (
            (t.container =
              !1 === t.container ? document.body : Zt(t.container)),
            typeof t.delay === 'number' &&
              (t.delay = { show: t.delay, hide: t.delay }),
            typeof t.title === 'number' && (t.title = t.title.toString()),
            typeof t.content === 'number' && (t.content = t.content.toString()),
            t
          );
        }

        _getDelegateConfig() {
          const t = {};
          for (const e in this._config) {
            this.constructor.Default[e] !== this._config[e] &&
              (t[e] = this._config[e]);
          }
          return (t.selector = !1), (t.trigger = 'manual'), t;
        }

        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = Ai.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      se(Ai);
      const Ei = {
        ...Ai.Default,
        content: '',
        offset: [0, 8],
        placement: 'right',
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click',
      };
      const Ci = {
        ...Ai.DefaultType,
        content: '(null|string|element|function)',
      };
      class Ti extends Ai {
        static get Default() {
          return Ei;
        }

        static get DefaultType() {
          return Ci;
        }

        static get NAME() {
          return 'popover';
        }

        _isWithContent() {
          return this._getTitle() || this._getContent();
        }

        _getContentForTemplate() {
          return {
            '.popover-header': this._getTitle(),
            '.popover-body': this._getContent(),
          };
        }

        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = Ti.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      se(Ti);
      const ji = '.bs.scrollspy';
      const Oi = `activate${ji}`;
      const Li = `click${ji}`;
      const Si = `load${ji}.data-api`;
      const Di = 'active';
      const Ii = '[href]';
      const $i = '.nav-link';
      const Mi = `${$i}, .nav-item > ${$i}, .list-group-item`;
      const Ni = {
        offset: null,
        rootMargin: '0px 0px -25%',
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      };
      const Pi = {
        offset: '(number|null)',
        rootMargin: 'string',
        smoothScroll: 'boolean',
        target: 'element',
        threshold: 'array',
      };
      class Bi extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              getComputedStyle(this._element).overflowY === 'visible'
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh();
        }

        static get Default() {
          return Ni;
        }

        static get DefaultType() {
          return Pi;
        }

        static get NAME() {
          return 'scrollspy';
        }

        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver());
          for (const t of this._observableSections.values())
            this._observer.observe(t);
        }

        dispose() {
          this._observer.disconnect(), super.dispose();
        }

        _configAfterMerge(t) {
          return (
            (t.target = Zt(t.target) || document.body),
            (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
            typeof t.threshold === 'string' &&
              (t.threshold = t.threshold
                .split(',')
                .map((t) => Number.parseFloat(t))),
            t
          );
        }

        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (Ee.off(this._config.target, Li),
            Ee.on(this._config.target, Li, Ii, (t) => {
              const e = this._observableSections.get(t.target.hash);
              if (e) {
                t.preventDefault();
                const r = this._rootElement || window;
                const o = e.offsetTop - this._element.offsetTop;
                if (r.scrollTo)
                  return void r.scrollTo({ top: o, behavior: 'smooth' });
                r.scrollTop = o;
              }
            }));
        }

        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((t) => this._observerCallback(t), t);
        }

        _observerCallback(t) {
          const e = (t) => this._targetLinks.get(`#${t.target.id}`);
          const r = (t) => {
            (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
              this._process(e(t));
          };
          const o = (this._rootElement || document.documentElement).scrollTop;
          const i = o >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = o;
          for (const a of t) {
            if (!a.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(e(a));
              continue;
            }
            const t =
              a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (i && t) {
              if ((r(a), !o)) return;
            } else i || t || r(a);
          }
        }

        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()),
            (this._observableSections = new Map());
          const t = Fe.find(Ii, this._config.target);
          for (const e of t) {
            if (!e.hash || te(e)) continue;
            const t = Fe.findOne(e.hash, this._element);
            Jt(t) &&
              (this._targetLinks.set(e.hash, e),
              this._observableSections.set(e.hash, t));
          }
        }

        _process(t) {
          this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = t),
            t.classList.add(Di),
            this._activateParents(t),
            Ee.trigger(this._element, Oi, { relatedTarget: t }));
        }

        _activateParents(t) {
          if (t.classList.contains('dropdown-item')) {
            Fe.findOne(
              '.dropdown-toggle',
              t.closest('.dropdown')
            ).classList.add(Di);
          } else
            for (const e of Fe.parents(t, '.nav, .list-group'))
              for (const t of Fe.prev(e, Mi)) t.classList.add(Di);
        }

        _clearActiveClass(t) {
          t.classList.remove(Di);
          const e = Fe.find(`${Ii}.${Di}`, t);
          for (const t of e) t.classList.remove(Di);
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = Bi.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t] || t.startsWith('_') || t === 'constructor')
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ee.on(window, Si, () => {
        for (const t of Fe.find('[data-bs-spy="scroll"]'))
          Bi.getOrCreateInstance(t);
      }),
        se(Bi);
      const Ri = '.bs.tab';
      const Hi = `hide${Ri}`;
      const Fi = `hidden${Ri}`;
      const Wi = `show${Ri}`;
      const qi = `shown${Ri}`;
      const Ui = `click${Ri}`;
      const Xi = `keydown${Ri}`;
      const Yi = `load${Ri}`;
      const Vi = 'ArrowLeft';
      const Ki = 'ArrowRight';
      const Qi = 'ArrowUp';
      const Gi = 'ArrowDown';
      const Zi = 'active';
      const Ji = 'fade';
      const ta = 'show';
      const ea = ':not(.dropdown-toggle)';
      const ra =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
      const oa = `.nav-link${ea}, .list-group-item${ea}, [role="tab"]${ea}, ${ra}`;
      const ia = `.${Zi}[data-bs-toggle="tab"], .${Zi}[data-bs-toggle="pill"], .${Zi}[data-bs-toggle="list"]`;
      class aa extends Ie {
        constructor(t) {
          super(t),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]'
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              Ee.on(this._element, Xi, (t) => this._keydown(t)));
        }

        static get NAME() {
          return 'tab';
        }

        show() {
          const t = this._element;
          if (this._elemIsActive(t)) return;
          const e = this._getActiveElem();
          const r = e ? Ee.trigger(e, Hi, { relatedTarget: t }) : null;
          Ee.trigger(t, Wi, { relatedTarget: e }).defaultPrevented ||
            (r && r.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }

        _activate(t, e) {
          t &&
            (t.classList.add(Zi),
            this._activate(Kt(t)),
            this._queueCallback(
              () => {
                t.getAttribute('role') === 'tab'
                  ? (t.removeAttribute('tabindex'),
                    t.setAttribute('aria-selected', !0),
                    this._toggleDropDown(t, !0),
                    Ee.trigger(t, qi, { relatedTarget: e }))
                  : t.classList.add(ta);
              },
              t,
              t.classList.contains(Ji)
            ));
        }

        _deactivate(t, e) {
          t &&
            (t.classList.remove(Zi),
            t.blur(),
            this._deactivate(Kt(t)),
            this._queueCallback(
              () => {
                t.getAttribute('role') === 'tab'
                  ? (t.setAttribute('aria-selected', !1),
                    t.setAttribute('tabindex', '-1'),
                    this._toggleDropDown(t, !1),
                    Ee.trigger(t, Fi, { relatedTarget: e }))
                  : t.classList.remove(ta);
              },
              t,
              t.classList.contains(Ji)
            ));
        }

        _keydown(t) {
          if (![Vi, Ki, Qi, Gi].includes(t.key)) return;
          t.stopPropagation(), t.preventDefault();
          const e = [Ki, Gi].includes(t.key);
          const r = me(
            this._getChildren().filter((t) => !te(t)),
            t.target,
            e,
            !0
          );
          r &&
            (r.focus({ preventScroll: !0 }), aa.getOrCreateInstance(r).show());
        }

        _getChildren() {
          return Fe.find(oa, this._parent);
        }

        _getActiveElem() {
          return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }

        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, 'role', 'tablist');
          for (const t of e) this._setInitialAttributesOnChild(t);
        }

        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t);
          const r = this._getOuterElement(t);
          t.setAttribute('aria-selected', e),
            r !== t && this._setAttributeIfNotExists(r, 'role', 'presentation'),
            e || t.setAttribute('tabindex', '-1'),
            this._setAttributeIfNotExists(t, 'role', 'tab'),
            this._setInitialAttributesOnTargetPanel(t);
        }

        _setInitialAttributesOnTargetPanel(t) {
          const e = Kt(t);
          e &&
            (this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
            t.id &&
              this._setAttributeIfNotExists(e, 'aria-labelledby', `#${t.id}`));
        }

        _toggleDropDown(t, e) {
          const r = this._getOuterElement(t);
          if (!r.classList.contains('dropdown')) return;
          const o = (t, o) => {
            const i = Fe.findOne(t, r);
            i && i.classList.toggle(o, e);
          };
          o('.dropdown-toggle', Zi),
            o('.dropdown-menu', ta),
            r.setAttribute('aria-expanded', e);
        }

        _setAttributeIfNotExists(t, e, r) {
          t.hasAttribute(e) || t.setAttribute(e, r);
        }

        _elemIsActive(t) {
          return t.classList.contains(Zi);
        }

        _getInnerElement(t) {
          return t.matches(oa) ? t : Fe.findOne(oa, t);
        }

        _getOuterElement(t) {
          return t.closest('.nav-item, .list-group-item') || t;
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = aa.getOrCreateInstance(this);
            if (typeof t === 'string') {
              if (void 0 === e[t] || t.startsWith('_') || t === 'constructor')
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ee.on(document, Ui, ra, function (t) {
        ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
          te(this) || aa.getOrCreateInstance(this).show();
      }),
        Ee.on(window, Yi, () => {
          for (const t of Fe.find(ia)) aa.getOrCreateInstance(t);
        }),
        se(aa);
      const na = '.bs.toast';
      const sa = `mouseover${na}`;
      const la = `mouseout${na}`;
      const da = `focusin${na}`;
      const ma = `focusout${na}`;
      const pa = `hide${na}`;
      const ca = `hidden${na}`;
      const ba = `show${na}`;
      const ga = `shown${na}`;
      const fa = 'hide';
      const ha = 'show';
      const ua = 'showing';
      const va = { animation: 'boolean', autohide: 'boolean', delay: 'number' };
      const xa = { animation: !0, autohide: !0, delay: 5e3 };
      class wa extends Ie {
        constructor(t, e) {
          super(t, e),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }

        static get Default() {
          return xa;
        }

        static get DefaultType() {
          return va;
        }

        static get NAME() {
          return 'toast';
        }

        show() {
          Ee.trigger(this._element, ba).defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add('fade'),
            this._element.classList.remove(fa),
            oe(this._element),
            this._element.classList.add(ha, ua),
            this._queueCallback(
              () => {
                this._element.classList.remove(ua),
                  Ee.trigger(this._element, ga),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation
            ));
        }

        hide() {
          this.isShown() &&
            (Ee.trigger(this._element, pa).defaultPrevented ||
              (this._element.classList.add(ua),
              this._queueCallback(
                () => {
                  this._element.classList.add(fa),
                    this._element.classList.remove(ua, ha),
                    Ee.trigger(this._element, ca);
                },
                this._element,
                this._config.animation
              )));
        }

        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ha),
            super.dispose();
        }

        isShown() {
          return this._element.classList.contains(ha);
        }

        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }

        _onInteraction(t, e) {
          switch (t.type) {
            case 'mouseover':
            case 'mouseout':
              this._hasMouseInteraction = e;
              break;
            case 'focusin':
            case 'focusout':
              this._hasKeyboardInteraction = e;
          }
          if (e) return void this._clearTimeout();
          const r = t.relatedTarget;
          this._element === r ||
            this._element.contains(r) ||
            this._maybeScheduleHide();
        }

        _setListeners() {
          Ee.on(this._element, sa, (t) => this._onInteraction(t, !0)),
            Ee.on(this._element, la, (t) => this._onInteraction(t, !1)),
            Ee.on(this._element, da, (t) => this._onInteraction(t, !0)),
            Ee.on(this._element, ma, (t) => this._onInteraction(t, !1));
        }

        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }

        static jQueryInterface(t) {
          return this.each(function () {
            const e = wa.getOrCreateInstance(this, t);
            if (typeof t === 'string') {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      $e(wa), se(wa), console.log('Hello, World!');
    })();
})();
