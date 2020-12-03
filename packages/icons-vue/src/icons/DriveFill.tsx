// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DriveFillSvg from '@airclass/icons-svg/lib/asn/DriveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DriveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriveFillSvg}></AntdIcon>;
};

DriveFill.displayName = 'DriveFill';
DriveFill.inheritAttrs = false;
export default DriveFill;