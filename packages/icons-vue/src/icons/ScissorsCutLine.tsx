// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScissorsCutLineSvg from '@airclass/icons-svg/lib/asn/ScissorsCutLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScissorsCutLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorsCutLineSvg}></AntdIcon>;
};

ScissorsCutLine.displayName = 'ScissorsCutLine';
ScissorsCutLine.inheritAttrs = false;
export default ScissorsCutLine;