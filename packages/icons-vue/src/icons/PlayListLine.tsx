// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayListLineSvg from '@airclass/icons-svg/lib/asn/PlayListLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayListLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayListLineSvg}></AntdIcon>;
};

PlayListLine.displayName = 'PlayListLine';
PlayListLine.inheritAttrs = false;
export default PlayListLine;