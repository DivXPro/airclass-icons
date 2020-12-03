// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandCoinFillSvg from '@airclass/icons-svg/lib/asn/HandCoinFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandCoinFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandCoinFillSvg}></AntdIcon>;
};

HandCoinFill.displayName = 'HandCoinFill';
HandCoinFill.inheritAttrs = false;
export default HandCoinFill;