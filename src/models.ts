export type Brightness = 'light' | 'dark';

export interface Theme {
  category: string;
  name: string;
  cssName: string;
  brightness: Brightness;
}
