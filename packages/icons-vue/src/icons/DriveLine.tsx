// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DriveLineSvg from '@airclass/icons-svg/lib/asn/DriveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DriveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriveLineSvg}></AntdIcon>;
};

DriveLine.displayName = 'DriveLine';
DriveLine.inheritAttrs = false;
export default DriveLine;