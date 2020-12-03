// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MouseLineSvg from '@airclass/icons-svg/lib/asn/MouseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MouseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseLineSvg}></AntdIcon>;
};

MouseLine.displayName = 'MouseLine';
MouseLine.inheritAttrs = false;
export default MouseLine;