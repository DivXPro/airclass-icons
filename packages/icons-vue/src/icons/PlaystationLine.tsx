// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlaystationLineSvg from '@airclass/icons-svg/lib/asn/PlaystationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaystationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlaystationLineSvg}></AntdIcon>;
};

PlaystationLine.displayName = 'PlaystationLine';
PlaystationLine.inheritAttrs = false;
export default PlaystationLine;