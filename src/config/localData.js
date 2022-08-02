import {labels} from './labels';

export const tabArray = [
  {name: labels.jobs, flex: 0.3, zIndex: 3, marginRight: -20},
  {name: labels.inventory, flex: 0.35, zIndex: 2, marginRight: -20},
  {name: labels.rentalHistory, flex: 0.35, zIndex: 1, marginRight: 0},
];

export const superTabArray = [
  {name: labels.jobs, flex: 0.4, zIndex: 3, marginRight: -20},
  {name: labels.inventory, flex: 0.4, zIndex: 2, marginRight: -20},
];

export const userTabArray = [
  {name: labels.inventory, flex: 0.4, zIndex: 2, marginRight: -20},
  {name: labels.jobs, flex: 0.4, zIndex: 3, marginRight: -20},
];
export const maintenanceTabArray = [
  {name: labels.current, flex: 0.4, zIndex: 3, marginRight: -20},
  {name: labels.past, flex: 0.4, zIndex: 2, marginRight: -20},
];
