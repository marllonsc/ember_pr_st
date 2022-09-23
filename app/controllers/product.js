import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductController extends Controller {
  @tracked color = 'red';

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
