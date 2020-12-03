// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RobotLineSvg from '@airclass/icons-svg/lib/asn/RobotLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RobotLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RobotLineSvg}></AntdIcon>;
};

RobotLine.displayName = 'RobotLine';
RobotLine.inheritAttrs = false;
export default RobotLine;