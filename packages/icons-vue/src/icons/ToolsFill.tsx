// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ToolsFillSvg from '@airclass/icons-svg/lib/asn/ToolsFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolsFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ToolsFillSvg}></AntdIcon>;
};

ToolsFill.displayName = 'ToolsFill';
ToolsFill.inheritAttrs = false;
export default ToolsFill;