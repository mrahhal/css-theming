export type Brightness = 'light' | 'dark';

export interface Theme {
  name: string;
  cssName: string;
  brightness: Brightness;
}
