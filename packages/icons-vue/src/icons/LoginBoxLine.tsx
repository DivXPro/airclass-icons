// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoginBoxLineSvg from '@airclass/icons-svg/lib/asn/LoginBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoginBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoginBoxLineSvg}></AntdIcon>;
};

LoginBoxLine.displayName = 'LoginBoxLine';
LoginBoxLine.inheritAttrs = false;
export default LoginBoxLine;