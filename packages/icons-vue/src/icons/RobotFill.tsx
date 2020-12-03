// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RobotFillSvg from '@airclass/icons-svg/lib/asn/RobotFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RobotFillSvg}></AntdIcon>;
};

RobotFill.displayName = 'RobotFill';
RobotFill.inheritAttrs = false;
export default RobotFill;