import React from 'react';
import { Image } from 'react-native';

// TODO: might be able to make a re-usable function which generates these rather than having them static
export const UserTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('../assets/user.png')}
  />
);

export const WorkoutTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('../assets/plus.png')}
  />
);

export const ExercisesTabIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => (
  <Image
    style={{ height: size, width: size, tintColor: color }}
    source={require('../assets/dumbbell.png')}
  />
);
