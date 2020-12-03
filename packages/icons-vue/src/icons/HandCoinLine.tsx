// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HandCoinLineSvg from '@airclass/icons-svg/lib/asn/HandCoinLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HandCoinLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HandCoinLineSvg}></AntdIcon>;
};

HandCoinLine.displayName = 'HandCoinLine';
HandCoinLine.inheritAttrs = false;
export default HandCoinLine;