export class Flare {
  discs: { x: number; y: number; dia: number; hue: number }[] = [];
  discNum = 9;
  t = 0;
  ctx: CanvasRenderingContext2D | null;
  cvs: HTMLCanvasElement | null;

  constructor(
    ctx: CanvasRenderingContext2D | null,
    cvs: HTMLCanvasElement | null,
  ) {
    this.ctx = ctx;
    this.cvs = cvs;
  }

  draw(obj: { x: number; y: number }) {
    if (!this.ctx || !this.cvs) return;

    this.ctx.globalCompositeOperation = "screen";
    const dist =
      1 -
      Math.sqrt(
        Math.pow(obj.x - this.cvs.width / 2, 2) +
          Math.pow(obj.y - this.cvs.height / 2, 2),
      ) /
        Math.sqrt(
          Math.pow(this.cvs.width / 2, 2) + Math.pow(this.cvs.height / 2, 2),
        );

    for (let i = 0; i < this.discs.length; i++) {
      this.ctx.beginPath();
      const hue = this.discs[i].hue;
      const grad = this.ctx.createRadialGradient(
        this.discs[i].x,
        this.discs[i].y,
        0,
        this.discs[i].x,
        this.discs[i].y,
        this.discs[i].dia,
      );
      grad.addColorStop(0, `hsla(${hue},100%,90%,${0 * dist})`);
      grad.addColorStop(0.9, `hsla(${hue},100%,90%,${0.15 * dist})`);
      grad.addColorStop(1, `hsla(${hue},100%,90%,0)`);
      this.ctx.fillStyle = grad;
      this.ctx.arc(
        this.discs[i].x,
        this.discs[i].y,
        this.discs[i].dia,
        0,
        Math.PI * 2,
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  update(obj: { x: number; y: number }) {
    if (!this.ctx || !this.cvs) return;

    this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    for (let i = 0; i <= this.discNum; i++) {
      const temp: { x: number; y: number; dia?: number; hue?: number } = {
        x: 0,
        y: 0,
      };
      const j = i - this.discNum / 2;
      temp.x =
        (this.cvs.width / 2 - obj.x) * ((j / this.discNum) * 2) +
        this.cvs.width / 2;
      temp.y =
        (this.cvs.height / 2 - obj.y) * ((j / this.discNum) * 2) +
        this.cvs.height / 2;

      if (this.t === 0) {
        temp.dia =
          Math.pow(Math.abs(10 * (j / this.discNum)), 2) * 3 +
          110 +
          (Math.random() * 100 - 100);
        temp.hue = Math.round(Math.random() * 360);
        this.discs[i] = temp as any;
      } else {
        this.discs[i].x = temp.x;
        this.discs[i].y = temp.y;
      }
    }
    this.t += 1;
    this.draw(obj);
  }
}
