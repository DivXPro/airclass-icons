// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareLineSvg from '@airclass/icons-svg/lib/asn/ShareLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareLineSvg}></AntdIcon>;
};

ShareLine.displayName = 'ShareLine';
ShareLine.inheritAttrs = false;
export default ShareLine;