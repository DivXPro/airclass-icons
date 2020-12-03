// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlugLineSvg from '@airclass/icons-svg/lib/asn/PlugLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlugLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlugLineSvg}></AntdIcon>;
};

PlugLine.displayName = 'PlugLine';
PlugLine.inheritAttrs = false;
export default PlugLine;