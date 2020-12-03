// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RepeatLineSvg from '@airclass/icons-svg/lib/asn/RepeatLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RepeatLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatLineSvg}></AntdIcon>;
};

RepeatLine.displayName = 'RepeatLine';
RepeatLine.inheritAttrs = false;
export default RepeatLine;