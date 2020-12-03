// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopLineSvg from '@airclass/icons-svg/lib/asn/StopLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopLineSvg}></AntdIcon>;
};

StopLine.displayName = 'StopLine';
StopLine.inheritAttrs = false;
export default StopLine;