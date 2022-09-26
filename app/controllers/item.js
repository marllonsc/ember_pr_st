import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;
  name = 'images';

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  /*
    if (this.color == 'red') {
      // eslint-disable-next-line ember/no-side-effects
      this.name = 'images';
    } else {
      // eslint-disable-next-line ember/no-side-effects
      this.name = 'black';
    }
    //console.log(this.name);
    return '/assets/images/' + this.name + '.jpeg';
  }*/

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
