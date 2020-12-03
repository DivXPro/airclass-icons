// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayCircleFillSvg from '@airclass/icons-svg/lib/asn/PlayCircleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayCircleFillSvg}></AntdIcon>;
};

PlayCircleFill.displayName = 'PlayCircleFill';
PlayCircleFill.inheritAttrs = false;
export default PlayCircleFill;