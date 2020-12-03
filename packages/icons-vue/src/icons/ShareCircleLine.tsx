// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ShareCircleLineSvg from '@airclass/icons-svg/lib/asn/ShareCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShareCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareCircleLineSvg}></AntdIcon>;
};

ShareCircleLine.displayName = 'ShareCircleLine';
ShareCircleLine.inheritAttrs = false;
export default ShareCircleLine;