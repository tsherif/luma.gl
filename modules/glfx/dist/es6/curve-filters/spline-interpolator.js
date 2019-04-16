export default class SplineInterpolator {
  constructor(points) {
    const n = points.length;
    this.xa = [];
    this.ya = [];
    this.u = [];
    this.y2 = [];
    points.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
      this.xa.push(points[i][0]);
      this.ya.push(points[i][1]);
    }

    this.u[0] = 0;
    this.y2[0] = 0;

    for (let i = 1; i < n - 1; ++i) {
      const wx = this.xa[i + 1] - this.xa[i - 1];
      const sig = (this.xa[i] - this.xa[i - 1]) / wx;
      const p = sig * this.y2[i - 1] + 2.0;
      this.y2[i] = (sig - 1.0) / p;
      const ddydx = (this.ya[i + 1] - this.ya[i]) / (this.xa[i + 1] - this.xa[i]) - (this.ya[i] - this.ya[i - 1]) / (this.xa[i] - this.xa[i - 1]);
      this.u[i] = (6.0 * ddydx / wx - sig * this.u[i - 1]) / p;
    }

    this.y2[n - 1] = 0;

    for (let i = n - 2; i >= 0; --i) {
      this.y2[i] = this.y2[i] * this.y2[i + 1] + this.u[i];
    }
  }

  interpolate(x) {
    const n = this.ya.length;
    let klo = 0;
    let khi = n - 1;

    while (khi - klo > 1) {
      const k = khi + klo >> 1;

      if (this.xa[k] > x) {
        khi = k;
      } else {
        klo = k;
      }
    }

    const h = this.xa[khi] - this.xa[klo];
    const a = (this.xa[khi] - x) / h;
    const b = (x - this.xa[klo]) / h;
    return a * this.ya[klo] + b * this.ya[khi] + ((a * a * a - a) * this.y2[klo] + (b * b * b - b) * this.y2[khi]) * (h * h) / 6.0;
  }

}
//# sourceMappingURL=spline-interpolator.js.map