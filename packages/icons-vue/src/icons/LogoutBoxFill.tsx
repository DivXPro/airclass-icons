// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutBoxFillSvg from '@airclass/icons-svg/lib/asn/LogoutBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBoxFillSvg}></AntdIcon>;
};

LogoutBoxFill.displayName = 'LogoutBoxFill';
LogoutBoxFill.inheritAttrs = false;
export default LogoutBoxFill;