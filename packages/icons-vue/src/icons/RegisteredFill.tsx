// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RegisteredFillSvg from '@airclass/icons-svg/lib/asn/RegisteredFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegisteredFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RegisteredFillSvg}></AntdIcon>;
};

RegisteredFill.displayName = 'RegisteredFill';
RegisteredFill.inheritAttrs = false;
export default RegisteredFill;