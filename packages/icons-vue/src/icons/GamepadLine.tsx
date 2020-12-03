// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GamepadLineSvg from '@airclass/icons-svg/lib/asn/GamepadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GamepadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GamepadLineSvg}></AntdIcon>;
};

GamepadLine.displayName = 'GamepadLine';
GamepadLine.inheritAttrs = false;
export default GamepadLine;