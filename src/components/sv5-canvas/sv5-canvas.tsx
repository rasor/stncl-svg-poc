import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';
import { Shape } from '../../models/shape';
import { Rect } from '../../models/rect';

@Component({
  tag: 'sv5-canvas',
  styleUrl: 'sv5-canvas.css',
  shadow: true
})
export class Sv5Canvas {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() content: any;
  private shapes: Shape[];

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  // private toRect(s: Shape): Rect{
  //   return s as Rect;
  // }
  private drawRect(s: Rect) {
    return <rect x={s.x} y={s.y} width={s.width} height={s.heigth} stroke={s.stroke} fill={s.fill} ></rect>;
  }
  private loopShapes(shapes: Shape[]) {
    return shapes.map((s) => 
      {
        return this.drawRect(s as Rect);
      }
    );
  }

  render() {
    // https://stenciljs.com/docs/templating-jsx
    // https://www.typescriptlang.org/docs/handbook/jsx.html
    console.log(this.getText());
    console.log(this.content);
    this.shapes = JSON.parse(this.content).shapes;
    console.log(this.shapes);
    return <svg x="0px" y="0px" width="300px" height="100px" viewBox="0 0 300 100">
      <rect x="10px" y="5px" width="85px" height="90px" stroke="black" fill="white" ></rect>
      {this.loopShapes(this.shapes)}
    </svg>;
  }
}
