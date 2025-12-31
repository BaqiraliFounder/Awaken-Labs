
export enum CursorState {
  DEFAULT = 'default',
  HOVER = 'hover',
  CLICK = 'click',
  TEXT = 'text',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface WorkflowStep {
  week: number;
  title: string;
  description: string;
  tasks: string[];
}

export interface PortfolioItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  stack: string[];
  outcome: string;
}
