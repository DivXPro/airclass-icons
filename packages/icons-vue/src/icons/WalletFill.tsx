// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalletFillSvg from '@airclass/icons-svg/lib/asn/WalletFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletFillSvg}></AntdIcon>;
};

WalletFill.displayName = 'WalletFill';
WalletFill.inheritAttrs = false;
export default WalletFill;