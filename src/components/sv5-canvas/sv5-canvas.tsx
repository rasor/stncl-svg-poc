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
    console.log(this.getText());
    return <svg x="0px" y="0px" width="200px" height="100px" viewBox="0 0 200 100">
      <rect x="10px" y="5px" width="90px" height="90px" stroke="black" fill="white" ></rect>
    </svg>;
  }
}
