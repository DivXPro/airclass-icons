// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CurrencyLineSvg from '@airclass/icons-svg/lib/asn/CurrencyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CurrencyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CurrencyLineSvg}></AntdIcon>;
};

CurrencyLine.displayName = 'CurrencyLine';
CurrencyLine.inheritAttrs = false;
export default CurrencyLine;