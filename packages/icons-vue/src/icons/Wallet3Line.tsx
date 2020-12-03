// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Wallet3LineSvg from '@airclass/icons-svg/lib/asn/Wallet3Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Wallet3Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet3LineSvg}></AntdIcon>;
};

Wallet3Line.displayName = 'Wallet3Line';
Wallet3Line.inheritAttrs = false;
export default Wallet3Line;