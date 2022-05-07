/* eslint-disable */
if (CSS && CSS.paintWorklet) {
  CSS.paintWorklet.addModule(
    URL.createObjectURL(
      new Blob(
        [
          `
registerPaint(
  "smooth-corners",
  class {
    static get inputProperties() {
      return ["--smooth-corners"];
    }
    superellipse(t, e, s = 4, r) {
      Number.isNaN(s) && (s = 4),
        (void 0 === r || Number.isNaN(r)) && (r = s),
        s > 100 && (s = 100),
        r > 100 && (r = 100),
        s < 1e-11 && (s = 1e-11),
        r < 1e-11 && (r = 1e-11);
      const o = 2 / s,
        a = r ? 2 / r : o,
        i = (2 * Math.PI) / 360;
      return Array.from({ length: 360 }, (s, r) =>
        ((s) => {
          const r = Math.cos(s),
            i = Math.sin(s);
          return {
            x: Math.abs(r) ** o * t * Math.sign(r),
            y: Math.abs(i) ** a * e * Math.sign(i),
          };
        })(r * i)
      );
    }
    paint(t, e, s) {
      const [r, o] = s
          .get("--smooth-corners")
          .toString()
          .replace(/ /g, "")
          .split(","),
        a = e.width / 2,
        i = e.height / 2,
        n = this.superellipse(a, i, parseFloat(r, 10), parseFloat(o, 10));
      (t.fillStyle = "#000"), t.setTransform(1, 0, 0, 1, a, i), t.beginPath();
      for (let e = 0; e < n.length; e++) {
        const { x: s, y: r } = n[e];
        0 === e ? t.moveTo(s, r) : t.lineTo(s, r);
      }
      t.closePath(), t.fill();
    }
  }
);
`,
        ],
        { type: "application/javascript" }
      )
    )
  );
}
