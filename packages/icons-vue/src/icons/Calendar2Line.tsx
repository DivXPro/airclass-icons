// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Calendar2LineSvg from '@airclass/icons-svg/lib/asn/Calendar2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Calendar2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2LineSvg}></AntdIcon>;
};

Calendar2Line.displayName = 'Calendar2Line';
Calendar2Line.inheritAttrs = false;
export default Calendar2Line;