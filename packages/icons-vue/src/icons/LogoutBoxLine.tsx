// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutBoxLineSvg from '@airclass/icons-svg/lib/asn/LogoutBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBoxLineSvg}></AntdIcon>;
};

LogoutBoxLine.displayName = 'LogoutBoxLine';
LogoutBoxLine.inheritAttrs = false;
export default LogoutBoxLine;