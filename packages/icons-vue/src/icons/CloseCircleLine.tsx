// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseCircleLineSvg from '@airclass/icons-svg/lib/asn/CloseCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleLineSvg}></AntdIcon>;
};

CloseCircleLine.displayName = 'CloseCircleLine';
CloseCircleLine.inheritAttrs = false;
export default CloseCircleLine;