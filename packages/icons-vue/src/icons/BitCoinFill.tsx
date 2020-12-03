// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BitCoinFillSvg from '@airclass/icons-svg/lib/asn/BitCoinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BitCoinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitCoinFillSvg}></AntdIcon>;
};

BitCoinFill.displayName = 'BitCoinFill';
BitCoinFill.inheritAttrs = false;
export default BitCoinFill;