import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductController extends Controller {
  @tracked color = 'red';

  productImage = this.args.product.colors[0].image;

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
