// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HistoryLineSvg from '@airclass/icons-svg/lib/asn/HistoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HistoryLineSvg}></AntdIcon>;
};

HistoryLine.displayName = 'HistoryLine';
HistoryLine.inheritAttrs = false;
export default HistoryLine;