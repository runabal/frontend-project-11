if (!self.define) {
  let e;
  const i = {};
  const t = (t, s) => (
    (t = new URL(`${t}.js`, s).href),
    i[t] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = t), (e.onload = i), document.head.appendChild(e);
        } else (e = t), importScripts(t), i();
      }).then(() => {
        const e = i[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[r]) return;
    const o = {};
    const d = (e) => t(e, r);
    const c = { module: { uri: r }, exports: o, require: d };
    i[r] = Promise.all(s.map((e) => c[e] || d(e))).then((e) => (n(...e), o));
  };
}
define(["./workbox-d249b2c8"], (e) => {
  self.addEventListener("message", (e) => {
    e.data && e.data.type === "SKIP_WAITING" && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "index.html", revision: "ce9be32dde281d0019396fba9b046201" },
        { url: "main.js", revision: "5fb5f2ce0ea8ca177285db185dd69598" },
        {
          url: "main.js.LICENSE.txt",
          revision: "b0b404e85d468bf5da2a884e45fb1807",
        },
      ],
      {}
    );
});
