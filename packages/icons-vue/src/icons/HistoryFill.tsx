// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HistoryFillSvg from '@airclass/icons-svg/lib/asn/HistoryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HistoryFillSvg}></AntdIcon>;
};

HistoryFill.displayName = 'HistoryFill';
HistoryFill.inheritAttrs = false;
export default HistoryFill;