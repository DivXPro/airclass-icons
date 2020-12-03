// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HardDriveLineSvg from '@airclass/icons-svg/lib/asn/HardDriveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HardDriveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HardDriveLineSvg}></AntdIcon>;
};

HardDriveLine.displayName = 'HardDriveLine';
HardDriveLine.inheritAttrs = false;
export default HardDriveLine;