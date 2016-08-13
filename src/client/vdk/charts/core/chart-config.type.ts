export interface Brush {
  type: string;
  target: Array<string>;
}

export interface Axis {
  type: string;
  domain: Array<number> | string;
  step?: number;
  line: boolean;
}

export const enum Orient {
  Left, Right, Top, Bottom
}

export interface Widget {
  type: string;
  text?: string;
  orient?: Orient;
}

export interface ChartConfiguration {
  brush?: Brush;
  axisX?: Axis;
  axisY?: Axis;
  data?: Array<Object>;
  widget?: Array<Widget>;
}