// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TimeLineSvg from '@airclass/icons-svg/lib/asn/TimeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimeLineSvg}></AntdIcon>;
};

TimeLine.displayName = 'TimeLine';
TimeLine.inheritAttrs = false;
export default TimeLine;