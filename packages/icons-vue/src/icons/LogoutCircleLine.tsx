// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutCircleLineSvg from '@airclass/icons-svg/lib/asn/LogoutCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutCircleLineSvg}></AntdIcon>;
};

LogoutCircleLine.displayName = 'LogoutCircleLine';
LogoutCircleLine.inheritAttrs = false;
export default LogoutCircleLine;