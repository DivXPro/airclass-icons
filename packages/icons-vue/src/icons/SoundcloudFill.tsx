// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SoundcloudFillSvg from '@airclass/icons-svg/lib/asn/SoundcloudFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundcloudFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SoundcloudFillSvg}></AntdIcon>;
};

SoundcloudFill.displayName = 'SoundcloudFill';
SoundcloudFill.inheritAttrs = false;
export default SoundcloudFill;