// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToolsLineSvg from '@airclass/icons-svg/lib/asn/ToolsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolsLineSvg}></AntdIcon>;
};

ToolsLine.displayName = 'ToolsLine';
ToolsLine.inheritAttrs = false;
export default ToolsLine;