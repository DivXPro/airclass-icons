// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StopMiniLineSvg from '@airclass/icons-svg/lib/asn/StopMiniLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopMiniLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StopMiniLineSvg}></AntdIcon>;
};

StopMiniLine.displayName = 'StopMiniLine';
StopMiniLine.inheritAttrs = false;
export default StopMiniLine;