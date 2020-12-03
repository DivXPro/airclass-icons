// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThumbUpLineSvg from '@airclass/icons-svg/lib/asn/ThumbUpLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbUpLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThumbUpLineSvg}></AntdIcon>;
};

ThumbUpLine.displayName = 'ThumbUpLine';
ThumbUpLine.inheritAttrs = false;
export default ThumbUpLine;