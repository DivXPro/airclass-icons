// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Wallet2FillSvg from '@airclass/icons-svg/lib/asn/Wallet2Fill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Wallet2Fill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wallet2FillSvg}></AntdIcon>;
};

Wallet2Fill.displayName = 'Wallet2Fill';
Wallet2Fill.inheritAttrs = false;
export default Wallet2Fill;