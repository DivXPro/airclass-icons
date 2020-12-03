// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareBoxFillSvg from '@airclass/icons-svg/lib/asn/ShareBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareBoxFillSvg}></AntdIcon>;
};

ShareBoxFill.displayName = 'ShareBoxFill';
ShareBoxFill.inheritAttrs = false;
export default ShareBoxFill;