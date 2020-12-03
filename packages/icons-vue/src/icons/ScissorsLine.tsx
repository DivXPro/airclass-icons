// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScissorsLineSvg from '@airclass/icons-svg/lib/asn/ScissorsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScissorsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorsLineSvg}></AntdIcon>;
};

ScissorsLine.displayName = 'ScissorsLine';
ScissorsLine.inheritAttrs = false;
export default ScissorsLine;