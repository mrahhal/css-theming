export type Brightness = 'light' | 'dark';

export interface Theme {
  category: string | null;
  name: string;
  cssName: string;
  brightness: Brightness;
}
