import { createTripInfoTemplate } from '../template/trip-info-template.js';
//import { createElement } from '../render.js';
import AbstractView from '../framework/view/abstract-view.js';
export default class TripInfoView extends AbstractView {
  get template() {
    return createTripInfoTemplate();
  }
}

