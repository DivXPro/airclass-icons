// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RunLineSvg from '@airclass/icons-svg/lib/asn/RunLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RunLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RunLineSvg}></AntdIcon>;
};

RunLine.displayName = 'RunLine';
RunLine.inheritAttrs = false;
export default RunLine;