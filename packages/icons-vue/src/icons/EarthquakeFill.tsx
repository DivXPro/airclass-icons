// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EarthquakeFillSvg from '@airclass/icons-svg/lib/asn/EarthquakeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EarthquakeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EarthquakeFillSvg}></AntdIcon>;
};

EarthquakeFill.displayName = 'EarthquakeFill';
EarthquakeFill.inheritAttrs = false;
export default EarthquakeFill;