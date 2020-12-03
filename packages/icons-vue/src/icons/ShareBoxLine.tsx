// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareBoxLineSvg from '@airclass/icons-svg/lib/asn/ShareBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareBoxLineSvg}></AntdIcon>;
};

ShareBoxLine.displayName = 'ShareBoxLine';
ShareBoxLine.inheritAttrs = false;
export default ShareBoxLine;