// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VolumeDownFillSvg from '@airclass/icons-svg/lib/asn/VolumeDownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VolumeDownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeDownFillSvg}></AntdIcon>;
};

VolumeDownFill.displayName = 'VolumeDownFill';
VolumeDownFill.inheritAttrs = false;
export default VolumeDownFill;