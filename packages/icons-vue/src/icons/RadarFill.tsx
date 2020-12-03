// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RadarFillSvg from '@airclass/icons-svg/lib/asn/RadarFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadarFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarFillSvg}></AntdIcon>;
};

RadarFill.displayName = 'RadarFill';
RadarFill.inheritAttrs = false;
export default RadarFill;