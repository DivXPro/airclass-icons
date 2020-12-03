// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraOffFillSvg from '@airclass/icons-svg/lib/asn/CameraOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraOffFillSvg}></AntdIcon>;
};

CameraOffFill.displayName = 'CameraOffFill';
CameraOffFill.inheritAttrs = false;
export default CameraOffFill;