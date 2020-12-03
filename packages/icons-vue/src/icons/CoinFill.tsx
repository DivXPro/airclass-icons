// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoinFillSvg from '@airclass/icons-svg/lib/asn/CoinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinFillSvg}></AntdIcon>;
};

CoinFill.displayName = 'CoinFill';
CoinFill.inheritAttrs = false;
export default CoinFill;