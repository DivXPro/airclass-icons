// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutBoxRFillSvg from '@airclass/icons-svg/lib/asn/LogoutBoxRFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutBoxRFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBoxRFillSvg}></AntdIcon>;
};

LogoutBoxRFill.displayName = 'LogoutBoxRFill';
LogoutBoxRFill.inheritAttrs = false;
export default LogoutBoxRFill;