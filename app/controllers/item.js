import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = 'red';
  name = 'images';

  get productImage() {
    if (this.color == 'red') {
      // eslint-disable-next-line ember/no-side-effects
      this.name = 'images';
    } else {
      // eslint-disable-next-line ember/no-side-effects
      this.name = 'black';
    }
    //console.log(this.name);
    return '/assets/images/' + this.name + '.jpeg';
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
