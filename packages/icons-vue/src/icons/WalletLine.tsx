// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WalletLineSvg from '@airclass/icons-svg/lib/asn/WalletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WalletLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WalletLineSvg}></AntdIcon>;
};

WalletLine.displayName = 'WalletLine';
WalletLine.inheritAttrs = false;
export default WalletLine;