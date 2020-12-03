// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscLineSvg from '@airclass/icons-svg/lib/asn/DiscLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscLineSvg}></AntdIcon>;
};

DiscLine.displayName = 'DiscLine';
DiscLine.inheritAttrs = false;
export default DiscLine;