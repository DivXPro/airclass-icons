// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EarthquakeLineSvg from '@airclass/icons-svg/lib/asn/EarthquakeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthquakeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EarthquakeLineSvg}></AntdIcon>;
};

EarthquakeLine.displayName = 'EarthquakeLine';
EarthquakeLine.inheritAttrs = false;
export default EarthquakeLine;