// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseCircleFillSvg from '@airclass/icons-svg/lib/asn/CloseCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleFillSvg}></AntdIcon>;
};

CloseCircleFill.displayName = 'CloseCircleFill';
CloseCircleFill.inheritAttrs = false;
export default CloseCircleFill;