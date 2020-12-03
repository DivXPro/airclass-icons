// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TumblrLineSvg from '@airclass/icons-svg/lib/asn/TumblrLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TumblrLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TumblrLineSvg}></AntdIcon>;
};

TumblrLine.displayName = 'TumblrLine';
TumblrLine.inheritAttrs = false;
export default TumblrLine;