// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThumbUpFillSvg from '@airclass/icons-svg/lib/asn/ThumbUpFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbUpFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThumbUpFillSvg}></AntdIcon>;
};

ThumbUpFill.displayName = 'ThumbUpFill';
ThumbUpFill.inheritAttrs = false;
export default ThumbUpFill;