// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstagramLineSvg from '@airclass/icons-svg/lib/asn/InstagramLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramLineSvg}></AntdIcon>;
};

InstagramLine.displayName = 'InstagramLine';
InstagramLine.inheritAttrs = false;
export default InstagramLine;