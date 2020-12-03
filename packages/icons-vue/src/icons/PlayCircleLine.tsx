// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayCircleLineSvg from '@airclass/icons-svg/lib/asn/PlayCircleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleLineSvg}></AntdIcon>;
};

PlayCircleLine.displayName = 'PlayCircleLine';
PlayCircleLine.inheritAttrs = false;
export default PlayCircleLine;