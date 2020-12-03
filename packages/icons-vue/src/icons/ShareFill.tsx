// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareFillSvg from '@airclass/icons-svg/lib/asn/ShareFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareFillSvg}></AntdIcon>;
};

ShareFill.displayName = 'ShareFill';
ShareFill.inheritAttrs = false;
export default ShareFill;