// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutCircleFillSvg from '@airclass/icons-svg/lib/asn/LogoutCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutCircleFillSvg}></AntdIcon>;
};

LogoutCircleFill.displayName = 'LogoutCircleFill';
LogoutCircleFill.inheritAttrs = false;
export default LogoutCircleFill;