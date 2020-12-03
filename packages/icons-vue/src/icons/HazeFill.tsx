// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HazeFillSvg from '@airclass/icons-svg/lib/asn/HazeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HazeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HazeFillSvg}></AntdIcon>;
};

HazeFill.displayName = 'HazeFill';
HazeFill.inheritAttrs = false;
export default HazeFill;