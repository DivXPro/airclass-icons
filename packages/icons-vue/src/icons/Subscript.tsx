// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubscriptSvg from '@airclass/icons-svg/lib/asn/Subscript';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Subscript = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubscriptSvg}></AntdIcon>;
};

Subscript.displayName = 'Subscript';
Subscript.inheritAttrs = false;
export default Subscript;