// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseCircleFillSvg from '@airclass/icons-svg/lib/asn/PauseCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleFillSvg}></AntdIcon>;
};

PauseCircleFill.displayName = 'PauseCircleFill';
PauseCircleFill.inheritAttrs = false;
export default PauseCircleFill;