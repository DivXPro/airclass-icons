// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HardDriveFillSvg from '@airclass/icons-svg/lib/asn/HardDriveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HardDriveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HardDriveFillSvg}></AntdIcon>;
};

HardDriveFill.displayName = 'HardDriveFill';
HardDriveFill.inheritAttrs = false;
export default HardDriveFill;