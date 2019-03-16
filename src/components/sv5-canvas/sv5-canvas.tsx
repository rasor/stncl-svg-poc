import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

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

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
