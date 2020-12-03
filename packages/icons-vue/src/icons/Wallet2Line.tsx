// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Wallet2LineSvg from '@airclass/icons-svg/lib/asn/Wallet2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Wallet2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2LineSvg}></AntdIcon>;
};

Wallet2Line.displayName = 'Wallet2Line';
Wallet2Line.inheritAttrs = false;
export default Wallet2Line;