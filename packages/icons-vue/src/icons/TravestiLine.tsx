// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TravestiLineSvg from '@airclass/icons-svg/lib/asn/TravestiLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TravestiLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TravestiLineSvg}></AntdIcon>;
};

TravestiLine.displayName = 'TravestiLine';
TravestiLine.inheritAttrs = false;
export default TravestiLine;