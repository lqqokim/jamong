// export const enum Orient {
//   Left, Right, Top, Bottom
// }
// export const enum BrushType {
//   Line, Scatter, Pie
// }

export class OrientType {
  public static Left = 'left';
  public static Right = 'right';
  public static Top = 'top';
  public static Bottom = 'bottom';
}
export class BrushType {
  public static Line = 'line';
  public static Scatter = "scatter";
  public static Pie = "pie";
}
export class AxisType {
  public static Block = 'block';
  public static Range = "range";
  public static FullBlock = 'fullblock';
}

export interface Brush {
  type: BrushType;
  target: Array<string>;
  animate?: boolean;
  hide? :boolean,
  showText? : string,
  format? : Function,
  symbol? : Function,
  size?: number
}

export interface Axis {
  type: AxisType;
  domain: Array<number> | string | Function;
  line: boolean;

  step?: number;
}

export interface AxisData {
  data: Array<Object>;
}

export interface Widget {
  type: string;

  text?: string;
  orient?: OrientType;
  format?: Function
}

export interface ChartConfiguration {
  brush?: Array<Brush>;
  axisX?: Axis;
  axisY?: Axis;
  data?: Array<Object>;
  widget?: Array<Widget>;
}