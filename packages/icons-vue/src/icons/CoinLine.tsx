// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoinLineSvg from '@airclass/icons-svg/lib/asn/CoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinLineSvg}></AntdIcon>;
};

CoinLine.displayName = 'CoinLine';
CoinLine.inheritAttrs = false;
export default CoinLine;