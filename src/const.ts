import { Exercise } from './interfaces';

export enum TEST_EXERCISE_NAMES {
  LAT_PULLDOWN = 'lat pulldown',
  BENCH_PRESS = 'bench press',
  LEG_PRESS = 'leg press',
}

// TODO: now these are in storage they can be deleted, keep for reference for a few commits

export const testLatPulldown: Exercise = {
  name: TEST_EXERCISE_NAMES.LAT_PULLDOWN,
  setInfo: [
    {
      name: 'set1',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set2',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set3',
      weight: 73,
      reps: 8,
    },
  ],
};

export const testBenchPress = {
  name: TEST_EXERCISE_NAMES.BENCH_PRESS,
  setInfo: [
    {
      name: 'set1',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set2',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set3',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set4',
      weight: 73,
      reps: 8,
    },
  ],
};

export const testLegPress = {
  name: TEST_EXERCISE_NAMES.LEG_PRESS,
  setInfo: [
    {
      name: 'set1',
      weight: 73,
      reps: 8,
    },
    {
      name: 'set2',
      weight: 73,
      reps: 8,
    },
  ],
};
