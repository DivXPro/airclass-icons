// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RegisteredLineSvg from '@airclass/icons-svg/lib/asn/RegisteredLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegisteredLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RegisteredLineSvg}></AntdIcon>;
};

RegisteredLine.displayName = 'RegisteredLine';
RegisteredLine.inheritAttrs = false;
export default RegisteredLine;