import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const itens = [{ price: 10 }, { price: 15 }];
    return itens;
  }

 /* setupController(controller, model){
    super.setupController(controller, model);
    const subtotal = model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    controller.set('subtotal', subtotal);
  }*/
}
