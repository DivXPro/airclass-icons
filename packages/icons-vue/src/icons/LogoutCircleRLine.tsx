// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutCircleRLineSvg from '@airclass/icons-svg/lib/asn/LogoutCircleRLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutCircleRLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutCircleRLineSvg}></AntdIcon>;
};

LogoutCircleRLine.displayName = 'LogoutCircleRLine';
LogoutCircleRLine.inheritAttrs = false;
export default LogoutCircleRLine;