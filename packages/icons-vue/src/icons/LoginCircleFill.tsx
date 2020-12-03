// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoginCircleFillSvg from '@airclass/icons-svg/lib/asn/LoginCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginCircleFillSvg}></AntdIcon>;
};

LoginCircleFill.displayName = 'LoginCircleFill';
LoginCircleFill.inheritAttrs = false;
export default LoginCircleFill;