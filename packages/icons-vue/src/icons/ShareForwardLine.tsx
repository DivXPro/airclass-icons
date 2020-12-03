// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareForwardLineSvg from '@airclass/icons-svg/lib/asn/ShareForwardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareForwardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareForwardLineSvg}></AntdIcon>;
};

ShareForwardLine.displayName = 'ShareForwardLine';
ShareForwardLine.inheritAttrs = false;
export default ShareForwardLine;