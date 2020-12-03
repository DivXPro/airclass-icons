// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstagramFillSvg from '@airclass/icons-svg/lib/asn/InstagramFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramFillSvg}></AntdIcon>;
};

InstagramFill.displayName = 'InstagramFill';
InstagramFill.inheritAttrs = false;
export default InstagramFill;