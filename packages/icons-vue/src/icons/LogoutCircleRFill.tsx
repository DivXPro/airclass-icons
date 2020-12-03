// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutCircleRFillSvg from '@airclass/icons-svg/lib/asn/LogoutCircleRFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutCircleRFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutCircleRFillSvg}></AntdIcon>;
};

LogoutCircleRFill.displayName = 'LogoutCircleRFill';
LogoutCircleRFill.inheritAttrs = false;
export default LogoutCircleRFill;