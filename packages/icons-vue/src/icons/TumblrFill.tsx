// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TumblrFillSvg from '@airclass/icons-svg/lib/asn/TumblrFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TumblrFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TumblrFillSvg}></AntdIcon>;
};

TumblrFill.displayName = 'TumblrFill';
TumblrFill.inheritAttrs = false;
export default TumblrFill;