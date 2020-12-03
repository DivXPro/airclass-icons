// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThumbDownLineSvg from '@airclass/icons-svg/lib/asn/ThumbDownLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThumbDownLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThumbDownLineSvg}></AntdIcon>;
};

ThumbDownLine.displayName = 'ThumbDownLine';
ThumbDownLine.inheritAttrs = false;
export default ThumbDownLine;