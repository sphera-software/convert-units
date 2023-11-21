import { Measure, Unit } from './../index.js';
export type ForceUnits = ForceMetricUnits | ForceImperialUnits;
export type ForceSystems = 'metric' | 'imperial';

export type ForceMetricUnits = 'N' | 'kN' | 'kgf';
export type ForceImperialUnits = 'lbf' | 'kip';

const metric: Record<ForceMetricUnits, Unit> = {
  N: {
    name: {
      singular: 'Newton',
      plural: 'Newtons',
    },
    to_anchor: 1,
  },
  kN: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons',
    },
    to_anchor: 1000,
  },
  kgf: {
    name: {
      singular: 'Kilogram-force',
      plural: 'Kilograms-force',
    },
    to_anchor: 9.806650,
  },
};

const imperial: Record<ForceImperialUnits, Unit> = {
  lbf: {
    name: {
      singular: 'Pound-force',
      plural: 'Pounds-force',
    },
    to_anchor: 1,
  },
  kip: {
    name: {
      singular: 'Kilopound',
      plural: 'Kilopounds'
    },
    to_anchor: 1000,
  },
};

const measure: Measure<ForceSystems, ForceUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 4.44822,
      },
    },
    imperial: {
      metric: {
        ratio: 4.44822,
      },
    },
  },
};

export default measure;
