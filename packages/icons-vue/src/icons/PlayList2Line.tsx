// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayList2LineSvg from '@airclass/icons-svg/lib/asn/PlayList2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayList2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayList2LineSvg}></AntdIcon>;
};

PlayList2Line.displayName = 'PlayList2Line';
PlayList2Line.inheritAttrs = false;
export default PlayList2Line;