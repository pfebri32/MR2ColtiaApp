export const LIKED_FOOD = 0;
export const NEUTRAL_FOOD = 1;
export const DISLIKED_FOOD = 2;

export default FOODS = [
  {
    id: 1,
    name: 'Potato',
    effects: [
      {fatigue: 0, stress: 0},
      {fatigue: 0, stress: 4},
      {fatigue: 0, stress: 16},
    ],
  },
  {
    id: 2,
    name: 'Milk',
    effects: [
      {fatigue: 0, stress: -3},
      {fatigue: 0, stress: -2},
      {fatigue: 0, stress: 4},
    ],
  },
  {
    id: 3,
    name: 'Fish',
    effects: [
      {fatigue: 0, stress: -6},
      {fatigue: 0, stress: -3},
      {fatigue: 0, stress: 2},
    ],
  },
  {
    id: 4,
    name: 'Cup Jelly',
    effects: [
      {fatigue: 0, stress: -7},
      {fatigue: 0, stress: -5},
      {fatigue: 0, stress: 2},
    ],
  },
  {
    id: 5,
    name: 'Meat',
    effects: [
      {fatigue: 0, stress: -8},
      {fatigue: 0, stress: -6},
      {fatigue: 0, stress: 0},
    ],
  },
  {
    id: 6,
    name: 'Tablets',
    effects: [
      {fatigue: 0, stress: -15},
      {fatigue: 0, stress: -13},
      {fatigue: 0, stress: -10},
    ],
  },
];
