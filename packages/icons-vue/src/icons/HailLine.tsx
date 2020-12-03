// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HailLineSvg from '@airclass/icons-svg/lib/asn/HailLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HailLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HailLineSvg}></AntdIcon>;
};

HailLine.displayName = 'HailLine';
HailLine.inheritAttrs = false;
export default HailLine;