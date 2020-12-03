// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HdLineSvg from '@airclass/icons-svg/lib/asn/HdLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HdLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HdLineSvg}></AntdIcon>;
};

HdLine.displayName = 'HdLine';
HdLine.inheritAttrs = false;
export default HdLine;