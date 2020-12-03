// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayListAddLineSvg from '@airclass/icons-svg/lib/asn/PlayListAddLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayListAddLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayListAddLineSvg}></AntdIcon>;
};

PlayListAddLine.displayName = 'PlayListAddLine';
PlayListAddLine.inheritAttrs = false;
export default PlayListAddLine;