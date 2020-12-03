// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RepeatOneLineSvg from '@airclass/icons-svg/lib/asn/RepeatOneLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RepeatOneLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeatOneLineSvg}></AntdIcon>;
};

RepeatOneLine.displayName = 'RepeatOneLine';
RepeatOneLine.inheritAttrs = false;
export default RepeatOneLine;