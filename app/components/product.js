import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {

  @tracked color = 'red';

  productImage = this.args.product.colors[0].image;

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
