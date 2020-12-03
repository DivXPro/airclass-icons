// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeUpFillSvg from '@airclass/icons-svg/lib/asn/VolumeUpFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeUpFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeUpFillSvg}></AntdIcon>;
};

VolumeUpFill.displayName = 'VolumeUpFill';
VolumeUpFill.inheritAttrs = false;
export default VolumeUpFill;