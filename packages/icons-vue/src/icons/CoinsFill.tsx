// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoinsFillSvg from '@airclass/icons-svg/lib/asn/CoinsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinsFillSvg}></AntdIcon>;
};

CoinsFill.displayName = 'CoinsFill';
CoinsFill.inheritAttrs = false;
export default CoinsFill;