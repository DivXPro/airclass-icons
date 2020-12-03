// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseCircleLineSvg from '@airclass/icons-svg/lib/asn/PauseCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleLineSvg}></AntdIcon>;
};

PauseCircleLine.displayName = 'PauseCircleLine';
PauseCircleLine.inheritAttrs = false;
export default PauseCircleLine;