// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoginCircleLineSvg from '@airclass/icons-svg/lib/asn/LoginCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginCircleLineSvg}></AntdIcon>;
};

LoginCircleLine.displayName = 'LoginCircleLine';
LoginCircleLine.inheritAttrs = false;
export default LoginCircleLine;