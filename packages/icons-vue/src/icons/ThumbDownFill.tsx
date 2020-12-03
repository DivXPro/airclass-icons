// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThumbDownFillSvg from '@airclass/icons-svg/lib/asn/ThumbDownFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbDownFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThumbDownFillSvg}></AntdIcon>;
};

ThumbDownFill.displayName = 'ThumbDownFill';
ThumbDownFill.inheritAttrs = false;
export default ThumbDownFill;