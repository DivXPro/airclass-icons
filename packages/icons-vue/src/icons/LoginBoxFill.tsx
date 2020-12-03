// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoginBoxFillSvg from '@airclass/icons-svg/lib/asn/LoginBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginBoxFillSvg}></AntdIcon>;
};

LoginBoxFill.displayName = 'LoginBoxFill';
LoginBoxFill.inheritAttrs = false;
export default LoginBoxFill;