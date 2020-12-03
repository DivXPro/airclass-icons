// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseLineSvg from '@airclass/icons-svg/lib/asn/PauseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseLineSvg}></AntdIcon>;
};

PauseLine.displayName = 'PauseLine';
PauseLine.inheritAttrs = false;
export default PauseLine;