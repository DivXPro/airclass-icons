// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShieldCheckLineSvg from '@airclass/icons-svg/lib/asn/ShieldCheckLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShieldCheckLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldCheckLineSvg}></AntdIcon>;
};

ShieldCheckLine.displayName = 'ShieldCheckLine';
ShieldCheckLine.inheritAttrs = false;
export default ShieldCheckLine;