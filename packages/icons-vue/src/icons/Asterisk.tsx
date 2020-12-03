// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AsteriskSvg from '@airclass/icons-svg/lib/asn/Asterisk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Asterisk = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AsteriskSvg}></AntdIcon>;
};

Asterisk.displayName = 'Asterisk';
Asterisk.inheritAttrs = false;
export default Asterisk;