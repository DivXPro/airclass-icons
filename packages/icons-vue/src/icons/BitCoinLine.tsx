// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BitCoinLineSvg from '@airclass/icons-svg/lib/asn/BitCoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BitCoinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitCoinLineSvg}></AntdIcon>;
};

BitCoinLine.displayName = 'BitCoinLine';
BitCoinLine.inheritAttrs = false;
export default BitCoinLine;