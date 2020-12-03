// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GameLineSvg from '@airclass/icons-svg/lib/asn/GameLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GameLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GameLineSvg}></AntdIcon>;
};

GameLine.displayName = 'GameLine';
GameLine.inheritAttrs = false;
export default GameLine;