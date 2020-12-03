// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CameraFillSvg from '@airclass/icons-svg/lib/asn/CameraFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraFillSvg}></AntdIcon>;
};

CameraFill.displayName = 'CameraFill';
CameraFill.inheritAttrs = false;
export default CameraFill;