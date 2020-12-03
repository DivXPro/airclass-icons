// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ServerFillSvg from '@airclass/icons-svg/lib/asn/ServerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ServerFillSvg}></AntdIcon>;
};

ServerFill.displayName = 'ServerFill';
ServerFill.inheritAttrs = false;
export default ServerFill;