registerPaint('smooth-corners', class {
  static get inputProperties() {
      return ['--smooth-corners'];
  }
  paint(ctx, size, styleMap) {
    ctx.fillStyle = 'black';

    // Get value from --smooth-corners property
    const n = styleMap.get('--smooth-corners').toString() || 4;

    let m = n;
    if (n > 100) m = 100;
    if (n < 0.00000000001) m = 0.00000000001;
    const r = size.width / 2;
    const w = size.width / 2;
    const h = size.height / 2;

    ctx.beginPath();

    for (let i = 0; i < (2 * r + 1); i++) {
      const x = (i - r) + w;
      const y = (Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(i - r), m)), 1 / m)) + h;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }

    for (let i = (2 * r); i < (4 * r + 1); i++) {
      const x = (3 * r - i) + w;
      const y = (-Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(3 * r - i), m)), 1 / m)) + h;
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
  }
});
