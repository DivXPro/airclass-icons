// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareCircleFillSvg from '@airclass/icons-svg/lib/asn/ShareCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareCircleFillSvg}></AntdIcon>;
};

ShareCircleFill.displayName = 'ShareCircleFill';
ShareCircleFill.inheritAttrs = false;
export default ShareCircleFill;